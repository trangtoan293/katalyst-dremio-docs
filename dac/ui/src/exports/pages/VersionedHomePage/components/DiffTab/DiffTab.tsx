import { useState } from "react";
import { css } from "@emotion/css";
import { useDiff } from "./hooks/useDiff";

interface DiffTabProps {
  datasetId: string;
}

const containerClass = css({
  padding: "16px 0",
});

const selectorClass = css({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  padding: "16px",
  background: "var(--bg--secondary, #f8fafc)",
  borderRadius: "8px",
  marginBottom: "20px",
});

const selectClass = css({
  padding: "8px 12px",
  border: "1px solid var(--border--neutral, #e2e8f0)",
  borderRadius: "4px",
  fontSize: "14px",
  minWidth: "260px",
  background: "var(--bg--primary, #fff)",
  fontFamily: "inherit",
});

const tableClass = css({
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "14px",
  "& th": {
    textAlign: "left",
    padding: "10px 12px",
    borderBottom: "1px solid var(--border--neutral, #e2e8f0)",
    fontWeight: 600,
    color: "var(--text--secondary)",
    fontSize: "13px",
    background: "var(--bg--secondary, #f8fafc)",
  },
  "& td": {
    padding: "12px",
    borderBottom: "1px solid var(--border--neutral)",
  },
  "& tr:hover": {
    background: "var(--bg--hovered, #f1f5f9)",
  },
});

const badgeAdd = css({
  fontSize: "12px",
  padding: "2px 10px",
  borderRadius: "12px",
  background: "#dcfce7",
  color: "#16a34a",
  fontWeight: 500,
});

const badgeMod = css({
  fontSize: "12px",
  padding: "2px 10px",
  borderRadius: "12px",
  background: "#fef9c3",
  color: "#ca8a04",
  fontWeight: 500,
});

const badgeDel = css({
  fontSize: "12px",
  padding: "2px 10px",
  borderRadius: "12px",
  background: "#fee2e2",
  color: "#dc2626",
  fontWeight: 500,
});

const rowAdd = css({ background: "#f0fdf4" });
const rowMod = css({ background: "#fefce8" });
const rowDel = css({ background: "#fef2f2" });

export function DiffTab({ datasetId }: DiffTabProps) {
  const [fromHash, setFromHash] = useState("");
  const [toHash, setToHash] = useState("");
  const [compareKey, setCompareKey] = useState<string | null>(null);

  const { data, isLoading } = useDiff(
    datasetId,
    compareKey ? fromHash : undefined,
    compareKey ? toHash : undefined,
  );

  const handleCompare = () => {
    setCompareKey(`${fromHash}-${toHash}`);
  };

  return (
    <div className={containerClass}>
      <div className={selectorClass}>
        <div style={{ flex: 1 }}>
          <label
            style={{
              display: "block",
              fontSize: "13px",
              fontWeight: 500,
              color: "var(--text--secondary)",
              marginBottom: "6px",
            }}
          >
            From
          </label>
          <select
            className={selectClass}
            value={fromHash}
            onChange={(e) => setFromHash(e.target.value)}
          >
            <option value="">Select commit/branch...</option>
            <option value="a1b2c3d">main @ a1b2c3d (latest)</option>
            <option value="e4f5g6h">main @ e4f5g6h</option>
            <option value="m0n1o2p">feature/v2 @ m0n1o2p</option>
          </select>
        </div>
        <div
          style={{
            fontSize: "20px",
            color: "var(--text--tertiary)",
            marginTop: "18px",
          }}
        >
          &rarr;
        </div>
        <div style={{ flex: 1 }}>
          <label
            style={{
              display: "block",
              fontSize: "13px",
              fontWeight: 500,
              color: "var(--text--secondary)",
              marginBottom: "6px",
            }}
          >
            To
          </label>
          <select
            className={selectClass}
            value={toHash}
            onChange={(e) => setToHash(e.target.value)}
          >
            <option value="">Select commit/branch...</option>
            <option value="m0n1o2p">feature/v2 @ m0n1o2p</option>
            <option value="e4f5g6h">main @ e4f5g6h</option>
          </select>
        </div>
        <button
          onClick={handleCompare}
          disabled={!fromHash || !toHash}
          style={{
            marginTop: "20px",
            padding: "8px 20px",
            background: "var(--dremio--color--primary, #2563eb)",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontWeight: 500,
            cursor: "pointer",
            opacity: !fromHash || !toHash ? 0.5 : 1,
          }}
        >
          Compare
        </button>
      </div>

      {isLoading && (
        <div style={{ padding: "20px", color: "var(--text--tertiary)" }}>
          Loading diff...
        </div>
      )}

      {data && (
        <>
          <div style={{ marginBottom: "24px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "12px",
              }}
            >
              <h3 style={{ fontSize: "16px", fontWeight: 600 }}>
                Schema Changes
              </h3>
              <div style={{ display: "flex", gap: "8px" }}>
                {data.schemaDiff.changes.filter((c) => c.changeType === "MODIFIED")
                  .length > 0 && (
                  <span className={badgeMod}>
                    {
                      data.schemaDiff.changes.filter(
                        (c) => c.changeType === "MODIFIED",
                      ).length
                    }{" "}
                    modified
                  </span>
                )}
                {data.schemaDiff.changes.filter((c) => c.changeType === "ADDED")
                  .length > 0 && (
                  <span className={badgeAdd}>
                    {
                      data.schemaDiff.changes.filter(
                        (c) => c.changeType === "ADDED",
                      ).length
                    }{" "}
                    added
                  </span>
                )}
                {data.schemaDiff.changes.filter((c) => c.changeType === "REMOVED")
                  .length > 0 && (
                  <span className={badgeDel}>
                    {
                      data.schemaDiff.changes.filter(
                        (c) => c.changeType === "REMOVED",
                      ).length
                    }{" "}
                    removed
                  </span>
                )}
              </div>
            </div>
            <table className={tableClass}>
              <thead>
                <tr>
                  <th>Column</th>
                  <th>Before</th>
                  <th>After</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                {data.schemaDiff.changes.map((change) => (
                  <tr
                    key={change.name}
                    className={
                      change.changeType === "ADDED"
                        ? rowAdd
                        : change.changeType === "REMOVED"
                          ? rowDel
                          : rowMod
                    }
                  >
                    <td>
                      <strong>{change.name}</strong>
                    </td>
                    <td
                      style={{
                        color:
                          change.fromType === "\u2014"
                            ? "var(--text--tertiary)"
                            : "inherit",
                      }}
                    >
                      {change.fromType || "\u2014"}
                    </td>
                    <td
                      style={{
                        color:
                          change.toType === "\u2014"
                            ? "var(--text--tertiary)"
                            : "inherit",
                      }}
                    >
                      {change.toType || "\u2014"}
                    </td>
                    <td>
                      <span
                        className={
                          change.changeType === "ADDED"
                            ? badgeAdd
                            : change.changeType === "REMOVED"
                              ? badgeDel
                              : badgeMod
                        }
                      >
                        {change.changeType}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: 600,
                marginBottom: "12px",
              }}
            >
              Data Changes
              {data.dataDiff.hasChanges && (
                <span
                  style={{
                    marginLeft: "8px",
                    fontSize: "12px",
                    color: "var(--text--tertiary)",
                    fontWeight: 400,
                  }}
                >
                  {data.dataDiff.totalRowsChanged.toLocaleString()} rows affected
                </span>
              )}
            </h3>
            {data.dataDiff.hasChanges ? (
              <div
                style={{
                  background: "var(--bg--secondary)",
                  borderRadius: "8px",
                  padding: "16px",
                }}
              >
                <div
                  style={{
                    fontSize: "13px",
                    color: "var(--text--tertiary)",
                    marginBottom: "12px",
                  }}
                >
                  Sample diff preview
                </div>
                <pre
                  style={{
                    fontSize: "12px",
                    overflow: "auto",
                    background: "var(--bg--primary)",
                    padding: "12px",
                    borderRadius: "4px",
                    border: "1px solid var(--border--neutral)",
                  }}
                >
                  {JSON.stringify(data.dataDiff.sampleRows[0] || {}, null, 2)}
                </pre>
              </div>
            ) : (
              <div style={{ color: "var(--text--tertiary)", padding: "16px" }}>
                No data changes detected
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
