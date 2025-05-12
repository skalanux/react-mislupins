import { useState } from 'react'

import type { Issue } from '../types'
import CollectionGrid from './CollectionGrid'
import IssueDetail from './IssueDetail'

const DEFAULT_ISSUE: Issue = { number: 1, status: 'missing', comics: [], schematics: [] }

interface CollectionViewProps {
  issues: Issue[]
}

const CollectionView = ({ issues: initialIssues }: CollectionViewProps) => {
  const [issues, setIssues] = useState<Issue[]>(initialIssues)
  const [currentIssue, setCurrentIssue] = useState<Issue>(initialIssues[0] ?? DEFAULT_ISSUE)

  const onIssueClick = (issue: Issue): void => {
    setCurrentIssue(issue)
  }

  const onIssueToggle = (_issue: Issue): void => {
    // TODO(C12): optimistis status toggle via PATCH.
    console.log('toggle issue state')
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <CollectionGrid issues={issues} onIssueClick={onIssueClick} />
      <IssueDetail issue={currentIssue} />
    </div>
  )
}

export default CollectionView
