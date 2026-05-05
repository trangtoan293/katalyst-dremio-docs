import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

interface FeatureLink {
  label: string;
  href: string;
}

interface FeatureGroup {
  title: string;
  icon: ReactNode;
  links: FeatureLink[];
}

const FeatureGroups: FeatureGroup[] = [
  {
    title: 'Get Started',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M17 38 7 48M22 44l-4 10M26 46l8-8" />
        <path d="M18 35 8 25l9-9 10 4" />
        <path d="M24 42 44 22c5-5 9-12 10-18-6 1-13 5-18 10L16 34l8 8Z" />
        <circle cx="39" cy="19" r="6" />
      </svg>
    ),
    links: [
      {label: 'Get Started with Dremio', href: '/get-started'},
      {label: 'Deploying to Kubernetes', href: '/get-started/kubernetes-trial'},
      {label: 'Quick Tour of the Console', href: '/get-started/quick_tour'},
    ],
  },
  {
    title: 'Add Data',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <ellipse cx="32" cy="14" rx="17" ry="6" />
        <path d="M15 14v28c0 3 8 6 17 6s17-3 17-6V14" />
        <path d="M15 28c0 3 8 6 17 6s17-3 17-6" />
        <path d="M15 42c0 3 8 6 17 6s17-3 17-6" />
      </svg>
    ),
    links: [
      {label: 'Manage Sources', href: '/data-sources'},
      {label: 'Amazon S3', href: '/data-sources/object/s3'},
      {label: 'Azure Storage', href: '/data-sources/object/azure-storage'},
    ],
  },
  {
    title: 'Connect to BI Tools',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="10" y="8" width="44" height="48" rx="3" />
        <path d="M10 21h44M22 8v13" />
        <path d="M22 43a10 10 0 1 1 0-20v10h10a10 10 0 0 1-10 10Z" />
        <path d="M39 49V30M48 49V36" />
      </svg>
    ),
    links: [
      {label: 'Connect Client Applications to Dremio', href: '/client-applications'},
      {label: 'Microsoft Power BI', href: '/client-applications/microsoft-power-bi'},
      {label: 'Tableau', href: '/client-applications/tableau'},
    ],
  },
  {
    title: 'Create Data Products',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M11 22 32 10l21 12-21 12-21-12Z" />
        <path d="M11 22v20l21 12V34" />
        <path d="M53 22v20L32 54" />
        <path d="m42 37 4 4 8-9" />
        <path d="M38 33h16v16H38z" />
      </svg>
    ),
    links: [
      {label: 'Discover Data', href: '/data-products/discover'},
      {label: 'Develop Data Products', href: '/data-products/develop'},
      {label: 'Accelerate Queries', href: '/acceleration'},
    ],
  },
  {
    title: 'Scale Dremio',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="8" y="24" width="28" height="28" rx="3" />
        <path d="M20 12h28a4 4 0 0 1 4 4v28" />
        <path d="M12 16h28a4 4 0 0 1 4 4v28" strokeDasharray="6 6" />
      </svg>
    ),
    links: [
      {label: 'Well-Architected Framework', href: '/admin'},
      {label: 'Security & Compliance', href: '/security/compliance'},
      {label: 'Monitoring', href: '/admin/monitoring'},
    ],
  },
  {
    title: 'Reference',
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="14" y="6" width="36" height="52" rx="3" />
        <path d="M22 18h20M22 28h20M22 38h9" />
        <path d="m29 48-6-5 6-5M36 38l6 5-6 5" />
      </svg>
    ),
    links: [
      {label: 'API Reference', href: '/reference/api/catalog'},
      {label: 'SQL Reference', href: '/reference/sql/sql-functions'},
      {label: 'Data Types', href: '/reference/sql/data-types'},
    ],
  },
];

function FeatureGroup({title, icon, links}: FeatureGroup) {
  return (
    <article className={styles.featureGroup}>
      <div className={styles.featureIcon}>{icon}</div>
      <Heading as="h2" className={styles.featureTitle}>
        {title}
      </Heading>
      <ul className={styles.featureLinks}>
        {links.map((link) => (
          <li key={link.href}>
            <Link to={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features} aria-label="Documentation sections">
      <div className="container">
        <div className={styles.featureGrid}>
          {FeatureGroups.map((group) => (
            <FeatureGroup key={group.title} {...group} />
          ))}
        </div>
      </div>
    </section>
  );
}
