import { Component } from 'react'

import logo from './logonuevo.svg'
import './index.css'

import CollectionComponent from '../components/CollectionComponent'
import IssueDetailComponent from '../components/IssueDetailComponent'
import RandomCoverComponent from '../components/RandomCoverComponent'
import { SeedCollectionRepository } from '../features/collection/collectionRepository'
import { buildSeedIssues } from '../features/collection/data/seedIssues'
import type { Issue } from '../features/collection/types'

const repository = new SeedCollectionRepository(buildSeedIssues())

interface AppState {
  currentIssue: Issue
  issues: Issue[]
}

class App extends Component<object, AppState> {
  state: AppState = {
    currentIssue: { number: 1, status: 'missing', comics: [], schematics: [] },
    issues: repository.getCollection(),
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