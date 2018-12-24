import React, { Component } from 'react';
import logo from './logonuevo.svg';
import './index.css';
import RandomCoverComponent from '../components/RandomCoverComponent';
import CollectionComponent from '../components/CollectionComponent'
import IssueDetailComponent from '../components/IssueDetailComponent';
import { mockedIssues } from './mockedIssues';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {currentIssue: {number: 1, status:'missing', comics: ['lúpin', 'resorte y el profe'], schematics: ['pelota de trapo', 'muñeca']} }
  }
  onIssueClick = (issue) => {
    // TODO, recien aca hacer el fetch del numero en cuestion (al menos que ya este en memoria o local storage), hacer offline first?
    this.setState({currentIssue: issue});
  }
  onIssueToggle = (issue) => {
    // TODO, recien aca hacer el fetch del numero en cuestion (al menos que ya este en memoria o local storage), hacer offline first?
    console.log('toggle issue state');
    //this.setState({currentIssue: issue});
  }
  render() {
    return (
      <div>
      <nav className='App-header'>
      <div className="nav-wrapper">
        <img src={logo} className="App-logo" alt="mis lupin" />
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>         
            <RandomCoverComponent />   
          </li>
          <li><a href="sass.html">Login</a></li>
        </ul>
      </div>
    </nav>
      <div className="container" style={{paddingTop: '2vh'}} >

      
        <div className="row">
          <div className="col m6 s12">
            <CollectionComponent onIssueClick={this.onIssueClick} onIssueToggle ={this.onIssueToggle} issues={mockedIssues} colsNumber={10}/>
          </div>
          <div className="col m6 s12">
            <IssueDetailComponent issue={this.state.currentIssue} />
          </div>
        </div>
      </div>
      </div>
      );
    }
  }
  
  export default App;
  