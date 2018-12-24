import React from 'react';
import PropTypes from 'prop-types';
import IssueComponent from '../IssueComponent';

const CollectionComponent = (props) => {
       
    const issues = Object.values(props.issues).map((issue) => {
      
      const onThisIssueClick = () => {
        props.onIssueClick(issue);
    };

    const onThisIssueToggle = () => {
      props.onIssueToggle(issue);
  };

    return <IssueComponent key={issue.number} onIssueClick={onThisIssueClick} onIssueToggle={onThisIssueToggle}  number={issue.number} status={issue.status} />
  }
  
)
return (<div className='rows' > 
  <h3>Mi colección</h3>
  {/*<div className='z-depth-2 center' style={{border: '3px solid', overflow: 'auto', backgroundColor: 'black'}}>*/}
  <div>
    {issues}
  </div>
  </div>);
};

CollectionComponent.propTypes = {
  issues: PropTypes.object.isRequired,
  colsNumber: PropTypes.number.isRequired,
};

export default CollectionComponent;