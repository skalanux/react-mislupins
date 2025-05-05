import { Component } from 'react'

import logo from '../assets/logonuevo.svg'
import { SeedCollectionRepository } from '../features/collection/collectionRepository'
import CollectionGrid from '../features/collection/components/CollectionGrid'
import IssueDetail from '../features/collection/components/IssueDetail'
import RandomCover from '../features/collection/components/RandomCover'
import { buildSeedIssues } from '../features/collection/data/seedIssues'
import type { Issue } from '../features/collection/types'

import './app.css'

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
                <RandomCover />
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container" style={{ paddingTop: '2vh' }}>
          <div className="row">
            <div className="col m6 s12">
              <CollectionGrid
                onIssueClick={this.onIssueClick}
                onIssueToggle={this.onIssueToggle}
                issues={this.state.issues}
              />
            </div>
            <div className="col m6 s12">
              <IssueDetail issue={this.state.currentIssue} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App