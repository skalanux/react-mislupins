import type { ReactNode } from 'react'

import type { Issue } from '../../features/collection/types'
import IssueComponent from '../IssueComponent'

interface CollectionComponentProps {
  issues: Issue[]
  onIssueClick: (issue: Issue) => void
  onIssueToggle: (issue: Issue) => void
}

const CollectionComponent = ({ issues, onIssueClick, onIssueToggle }: CollectionComponentProps) => {
  const issueNodes: ReactNode[] = issues.map((issue) => (
    <IssueComponent
      key={issue.number}
      number={issue.number}
      status={issue.status}
      onIssueClick={() => onIssueClick(issue)}
      onIssueToggle={() => onIssueToggle(issue)}
    />
  ))

  return (
    <div className="rows">
      <h3>Mi colección</h3>
      <div>{issueNodes}</div>
    </div>
  )
}

export default CollectionComponent