/*
 * Copyright (C) 2017-2019 Dremio Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { useMemo } from "react";
import { css } from "@emotion/css";

export interface CommitGraphNode {
  hash: string;
  message: string;
  author: string;
  timestamp: number;
  parentHashes: string[];
  branchNames: string[];
  tagNames: string[];
}

interface CommitGraphProps {
  nodes: CommitGraphNode[];
  selectedHash?: string;
  onSelect?: (hash: string) => void;
}

const svgClass = css({
  width: "100%",
  height: "280px",
});

export function CommitGraph({
  nodes,
  selectedHash,
  onSelect,
}: CommitGraphProps) {
  const layout = useMemo(() => {
    const levels = new Map<string, number>();
    const queue = nodes
      .filter((n) => n.parentHashes.length === 0)
      .map((n) => n.hash);
    queue.forEach((h) => levels.set(h, 0));
    const visited = new Set<string>();

    while (queue.length > 0) {
      const hash = queue.shift()!;
      if (visited.has(hash)) continue;
      visited.add(hash);
      const level = levels.get(hash) || 0;

      nodes.forEach((child) => {
        if (child.parentHashes.includes(hash)) {
          const current = levels.get(child.hash) || 0;
          levels.set(child.hash, Math.max(current, level + 1));
          queue.push(child.hash);
        }
      });
    }

    const levelCounts = new Map<number, number>();
    const positioned = nodes.map((node) => {
      const level = levels.get(node.hash) || 0;
      const countInLevel = levelCounts.get(level) || 0;
      levelCounts.set(level, countInLevel + 1);
      return {
        ...node,
        x: 60 + level * 110,
        y: 40 + countInLevel * 50,
      };
    });

    return positioned;
  }, [nodes]);

  if (!nodes.length) return <div style={{ padding: 20 }}>No commits</div>;

  return (
    <svg className={svgClass} viewBox="0 0 800 300">
      {layout.map((node) =>
        node.parentHashes.map((parentHash) => {
          const parent = layout.find((n) => n.hash === parentHash);
          if (!parent) return null;
          const isMerge = node.parentHashes.length > 1;
          return (
            <line
              key={`${parentHash}-${node.hash}`}
              x1={parent.x}
              y1={parent.y}
              x2={node.x}
              y2={node.y}
              stroke={isMerge ? "#f59e0b" : "#cbd5e1"}
              strokeWidth={isMerge ? 2 : 1.5}
              strokeDasharray={isMerge ? "4" : undefined}
            />
          );
        })
      )}

      {layout.map((node) =>
        node.branchNames.map((branch, idx) => (
          <g key={`branch-${node.hash}-${branch}`}>
            <rect
              x={node.x + 12}
              y={node.y - 28 - idx * 22}
              width={branch.length * 7 + 14}
              height={20}
              rx={10}
              fill="#2563eb"
            />
            <text
              x={node.x + 12 + (branch.length * 7 + 14) / 2}
              y={node.y - 14 - idx * 22}
              textAnchor="middle"
              fill="white"
              fontSize={11}
              fontWeight={600}
            >
              {branch}
            </text>
          </g>
        ))
      )}

      {layout.map((node) =>
        node.tagNames.map((tag, idx) => (
          <g key={`tag-${node.hash}-${tag}`}>
            <rect
              x={node.x - 12 - tag.length * 6 - 14}
              y={node.y - 28 - idx * 22}
              width={tag.length * 6 + 14}
              height={18}
              rx={9}
              fill="#f1f5f9"
              stroke="#cbd5e1"
            />
            <text
              x={node.x - 12 - (tag.length * 6 + 14) / 2}
              y={node.y - 15 - idx * 22}
              textAnchor="middle"
              fill="#475569"
              fontSize={10}
            >
              {tag}
            </text>
          </g>
        ))
      )}

      {layout.map((node) => {
        const isSelected = selectedHash === node.hash;
        const isMerge = node.parentHashes.length > 1;
        return (
          <g
            key={node.hash}
            style={{ cursor: "pointer" }}
            onClick={() => onSelect?.(node.hash)}
          >
            <circle
              cx={node.x}
              cy={node.y}
              r={isSelected ? 8 : isMerge ? 7 : 6}
              fill={isSelected ? "#dc2626" : isMerge ? "#f59e0b" : "#2563eb"}
              stroke="white"
              strokeWidth={2}
            />
            <text
              x={node.x}
              y={node.y + 20}
              textAnchor="middle"
              fontSize={11}
              fill="#94a3b8"
              fontFamily="monospace"
            >
              {node.hash.substring(0, 7)}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
