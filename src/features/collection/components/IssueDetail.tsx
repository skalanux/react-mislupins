import type { Issue } from '../types'
import cover from '../../../assets/covers/205.gif'

interface IssueDetailProps {
  issue: Issue
}

const IssueDetail = ({ issue }: IssueDetailProps) => (
  <div>
    <div>
      <img src={cover} className="z-depth-2" alt={`Tapa del número ${issue.number}`} />
    </div>
    <div className="col m12">
      Número: <b>{issue.number}</b>
    </div>
    <div className="col m12">
      Planitos: <b>{issue.schematics.join(', ')}</b>
    </div>
    <div className="col m12">
      Historietas: <b>{issue.comics.join(', ')}</b>
    </div>
  </div>
)

export default IssueDetail