import type {ReactNode} from 'react';
import {useMemo} from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {SearchEntries, type SearchEntry} from '@site/src/data/searchIndex';

import styles from './search.module.css';

const EmptySearchSuggestions = SearchEntries.filter((entry) =>
  [
    '/get-started',
    '/data-sources',
    '/client-applications',
    '/data-products/general/current-data-products',
    '/administration',
    '/reference/sql-functions/current-reference-sql-sql-functions-all-functions',
    '/security',
    '/reference/api/current-reference-api-catalog',
  ].includes(entry.href),
);

function getSearchScore(entry: SearchEntry, query: string): number {
  const normalizedQuery = query.toLowerCase();
  const terms = normalizedQuery.split(/\s+/).filter(Boolean);
  const title = entry.title.toLowerCase();
  const section = entry.section.toLowerCase();
  const haystack = [entry.title, entry.section, ...entry.keywords]
    .join(' ')
    .toLowerCase();

  if (!terms.every((term) => haystack.includes(term))) {
    return 0;
  }

  let score = 1;

  if (title === normalizedQuery) {
    score += 100;
  }

  if (title.includes(normalizedQuery)) {
    score += 40;
  }

  if (section.includes(normalizedQuery)) {
    score += 20;
  }

  score += terms.filter((term) => title.includes(term)).length * 8;
  score += terms.filter((term) => section.includes(term)).length * 4;

  return score;
}

export default function SearchPage(): ReactNode {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q')?.trim() ?? '';

  const results = useMemo(() => {
    if (!query) {
      return EmptySearchSuggestions;
    }

    return SearchEntries.map((entry) => ({
      entry,
      score: getSearchScore(entry, query),
    }))
      .filter((result) => result.score > 0)
      .sort((left, right) => right.score - left.score)
      .slice(0, 40)
      .map((result) => result.entry);
  }, [query]);

  return (
    <Layout title="Search" description="Search Dremio documentation">
      <main className={styles.searchPage}>
        <div className="container">
          <Heading as="h1" className={styles.title}>
            Search Documentation
          </Heading>
          <form className={styles.searchForm} action="/search" method="get" role="search">
            <label className={styles.searchLabel} htmlFor="search-page-input">
              Search documentation
            </label>
            <input
              id="search-page-input"
              name="q"
              type="search"
              list="search-suggestions"
              defaultValue={query}
              placeholder="Search 1,700+ docs pages..."
              autoFocus
            />
            <datalist id="search-suggestions">
              {SearchEntries.slice(0, 80).map((entry) => (
                <option key={entry.href} value={entry.title} />
              ))}
            </datalist>
            <button type="submit">Search</button>
          </form>
          <p className={styles.resultCount}>
            {query
              ? `${results.length} result${results.length === 1 ? '' : 's'} for “${query}”`
              : 'Suggested documentation links'}
          </p>
          <div className={styles.results}>
            {results.map((result) => (
              <article key={result.href} className={styles.resultCard}>
                <span>{result.section}</span>
                <Heading as="h2">
                  <Link to={result.href}>{result.title}</Link>
                </Heading>
                <p>{result.href}</p>
              </article>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
