import { useCallback, useState } from 'react'

import type { Issue } from '../types'
import CollectionGrid from './CollectionGrid'
import IssueDetail from './IssueDetail'

const FALLBACK_ISSUE: Issue = { number: 1, status: 'missing', comics: [], schematics: [] }

interface CollectionViewProps {
  issues: Issue[]
}

const CollectionView = ({ issues: initialIssues }: CollectionViewProps) => {
  const [currentIssue, setCurrentIssue] = useState<Issue>(initialIssues[0] ?? FALLBACK_ISSUE)

  const onIssueClick = useCallback((issue: Issue): void => {
    setCurrentIssue(issue)
  }, [])

  const onIssueToggle = useCallback((_issue: Issue): void => {
    // TODO(C12): optimistic status toggle via PATCH.
    console.log('toggle issue state')
  }, [])

  return (
    <div className="grid grid-cols-1 gap-6">
      <CollectionGrid
        issues={initialIssues}
        onIssueClick={onIssueClick}
        onIssueToggle={onIssueToggle}
      />
      <IssueDetail issue={currentIssue} />
    </div>
  )
}

export default CollectionView
