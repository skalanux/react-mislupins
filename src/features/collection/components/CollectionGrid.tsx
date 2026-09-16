import type { ReactNode } from "react";

import type { Issue } from "../types";
import IssueCell from "./IssueCell";

interface CollectionGridProps {
  issues: Issue[];
  onIssueClick: (issue: Issue) => void;
  onIssueToggle: (issue: Issue) => void;
}

const CollectionGrid = ({
  issues,
  onIssueClick,
  onIssueToggle,
}: CollectionGridProps) => {
  const issueNodes: ReactNode[] = issues.map((issue) => (
    <IssueCell
      key={issue.number}
      number={issue.number}
      status={issue.status}
      onIssueClick={() => onIssueClick(issue)}
      onIssueToggle={() => onIssueToggle(issue)}
    />
  ));

  return (
    <div className="rows">
      <h1 className="text-3xl font-bold text-stone-900">Mi colección</h1>
      <div>{issueNodes}</div>
    </div>
  );
};

export default CollectionGrid;

