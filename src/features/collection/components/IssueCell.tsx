import { PureComponent } from 'react'
import type { MouseEvent } from 'react'

import type { IssueStatus } from '../types'

import './IssueCell.css'

interface IssueCellProps {
  number: number
  status: IssueStatus
  onIssueClick: () => void
  onIssueToggle: () => void
}

class IssueCell extends PureComponent<IssueCellProps> {
  onClick = (evt: MouseEvent<HTMLDivElement>): void => {
    evt.stopPropagation()

    if (evt.ctrlKey) {
      console.debug('Ctrl+click has just happened!')
      this.props.onIssueToggle()
    } else {
      this.props.onIssueClick()
    }
  }

  render() {
    const cols = 'z-depth-2'
    return (
      <div
        className={`IssueComponent-${this.props.status} IssueComponent ${cols}`}
        onClick={this.onClick}
        title={`${this.props.number} — ${this.props.status}`}
      >
        {this.props.number}
      </div>
    )
  }
}

export default IssueCell