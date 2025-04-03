import { Component } from 'react'

import logo from './logonuevo.svg'
import './index.css'

import CollectionComponent from '../components/CollectionComponent'
import IssueDetailComponent from '../components/IssueDetailComponent'
import RandomCoverComponent from '../components/RandomCoverComponent'
import { mockedIssues, type Issue } from './mockedIssues'

interface AppState {
  currentIssue: Issue
  issues: Record<number, Issue>
}

class App extends Component<object, AppState> {
  state: AppState = {
    currentIssue: {
      number: 1,
      status: 'missing',
      comics: ['lúpin', 'resorte y el profe'],
      schematics: ['pelota de trapo', 'muñeca'],
    },
    issues: mockedIssues,
  }

  onIssueClick = (issue: Issue): void => {
    // TODO: fetch the selected number here (once it is in memory or local
    // storage), work offline first?
    this.setState({ currentIssue: issue })
  }

  onIssueToggle = (_issue: Issue): void => {
    console.log('toggle issue state')
  }

  render() {
    return (
      <div>
        <nav className="App-header">
          <div className="nav-wrapper">
            <img src={logo} className="App-logo" alt="mis lupin" />
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <RandomCoverComponent />
              </li>
              <li>
                <a href="sass.html">Login</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container" style={{ paddingTop: '2vh' }}>
          <div className="row">
            <div className="col m6 s12">
              <CollectionComponent
                onIssueClick={this.onIssueClick}
                onIssueToggle={this.onIssueToggle}
                issues={this.state.issues}
              />
            </div>
            <div className="col m6 s12">
              <IssueDetailComponent issue={this.state.currentIssue} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App