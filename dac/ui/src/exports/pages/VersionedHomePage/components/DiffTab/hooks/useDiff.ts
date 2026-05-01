import { useQuery } from "@tanstack/react-query";

export interface ColumnChange {
  name: string;
  fromType: string;
  toType: string;
  changeType: "ADDED" | "REMOVED" | "MODIFIED";
}

interface SchemaDiff {
  hasChanges: boolean;
  changes: ColumnChange[];
}

interface DataDiff {
  hasChanges: boolean;
  totalRowsChanged: number;
  sampleRows: Record<string, unknown>[];
}

export interface DiffData {
  fromHash: string;
  toHash: string;
  schemaDiff: SchemaDiff;
  dataDiff: DataDiff;
}

export function useDiff(
  datasetId: string,
  fromHash?: string,
  toHash?: string,
) {
  return useQuery<DiffData>({
    queryKey: ["catalogDiff", datasetId, fromHash, toHash],
    queryFn: async () => {
      if (!fromHash || !toHash) {
        throw new Error("from and to hashes are required");
      }
      const response = await fetch(
        `/api/v3/catalog/${datasetId}/diff?from=${encodeURIComponent(fromHash)}&to=${encodeURIComponent(toHash)}`,
      );
      if (!response.ok) {
        throw new Error("Failed to load diff");
      }
      return response.json();
    },
    enabled: !!fromHash && !!toHash,
  });
}
