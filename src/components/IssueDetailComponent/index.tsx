import type { Issue } from '../../features/collection/types'
import cover from '../RandomCoverComponent/covers/205.gif'

interface IssueDetailComponentProps {
  issue: Issue
}

const IssueDetailComponent = ({ issue }: IssueDetailComponentProps) => (
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

export default IssueDetailComponent