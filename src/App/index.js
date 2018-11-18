import React, { Component } from 'react';
import logo from './logonuevo.svg';
import './index.css';
import RandomCoverComponent from '../components/RandomCoverComponent';
import CollectionComponent from '../components/CollectionComponent'
import IssueDetailComponent from '../components/IssueDetailComponent';


const mockedIssues = {
  1: {number: 1, status:'missing', comics: ['lúpin', 'resorte y el profe'], schematics: ['pelota de trapo', 'muñeca']},
  2: {number: 2, status:'existent', comics: ['lúpin', 'saltapones'], schematics: ['mosquitero', 'radio']},
  3: {number:3, status:'missing', comics: ['hercu sansonacho', 'al feñique'], schematics: ['luces audiorítmicas', 'calentador solar']},
  4: {number:4, status:'duplicated', comics: ['bicho y gordi', 'manija'], schematics: ['pulqui', 'radio fm']},
  5: {number: 5, status:'missing', comics: ['lúpin', 'resorte y el profe'], schematics: ['pelota de trapo', 'muñeca']},
  6: {number: 6, status:'existent', comics: ['lúpin', 'saltapones'], schematics: ['mosquitero', 'radio']},
  7: {number:7, status:'missing', comics: ['hercu sansonacho', 'al feñique'], schematics: ['luces audiorítmicas', 'calentador solar']},
  8: {number:8, status:'duplicated', comics: ['bicho y gordi', 'manija'], schematics: ['pulqui', 'radio fm']},
  9: {number: 9, status:'missing', comics: ['lúpin', 'resorte y el profe'], schematics: ['pelota de trapo', 'muñeca']},
  10: {number: 10, status:'existent', comics: ['lúpin', 'saltapones'], schematics: ['mosquitero', 'radio']},
  11: {number:11, status:'missing', comics: ['hercu sansonacho', 'al feñique'], schematics: ['luces audiorítmicas', 'calentador solar']},
  12: {number:12, status:'duplicated', comics: ['bicho y gordi', 'manija'], schematics: ['pulqui', 'radio fm']},
  13: {number: 13, status:'missing', comics: ['lúpin', 'resorte y el profe'], schematics: ['pelota de trapo', 'muñeca']},
  14: {number: 14, status:'existent', comics: ['lúpin', 'saltapones'], schematics: ['mosquitero', 'radio']},
  15: {number:15, status:'missing', comics: ['hercu sansonacho', 'al feñique'], schematics: ['luces audiorítmicas', 'calentador solar']},
  16: {number:16, status:'duplicated', comics: ['bicho y gordi', 'manija'], schematics: ['pulqui', 'radio fm']},
  17: {number: 17, status:'missing', comics: ['lúpin', 'resorte y el profe'], schematics: ['pelota de trapo', 'muñeca']},
  18: {number: 18, status:'existent', comics: ['lúpin', 'saltapones'], schematics: ['mosquitero', 'radio']},
  19: {number:19, status:'missing', comics: ['hercu sansonacho', 'al feñique'], schematics: ['luces audiorítmicas', 'calentador solar']},
  20: {number:20, status:'duplicated', comics: ['bicho y gordi', 'manija'], schematics: ['pulqui', 'radio fm']},
  21: {number: 21, status:'missing', comics: ['lúpin', 'resorte y el profe'], schematics: ['pelota de trapo', 'muñeca']},
  22: {number: 22, status:'existent', comics: ['lúpin', 'saltapones'], schematics: ['mosquitero', 'radio']},
  23: {number:23, status:'missing', comics: ['hercu sansonacho', 'al feñique'], schematics: ['luces audiorítmicas', 'calentador solar']},
  24: {number:24, status:'duplicated', comics: ['bicho y gordi', 'manija'], schematics: ['pulqui', 'radio fm']},
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {currentIssue: {number: 1, status:'missing', comics: ['lúpin', 'resorte y el profe'], schematics: ['pelota de trapo', 'muñeca']} }
  }
  onIssueClick = (issue) => {
    console.log(issue);
    // TODO, recien aca hacer el fetch del numero en cuestion (al menos que ya este en memoria o local storage), hacer offline first?
    this.setState({currentIssue: issue});
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
            <CollectionComponent onIssueClick={this.onIssueClick} issues={mockedIssues} colsNumber={10}/>
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
  