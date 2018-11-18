import React from 'react';
import PropTypes from 'prop-types';
import IssueComponent from '../IssueComponent';

const CollectionComponent = (props) => {
       
    const issues = Object.values(props.issues).map((issue) => {
      
      const onThisIssueClick = () => {
        props.onIssueClick(issue);
    };

    return <IssueComponent key={issue.number} onIssueClick={onThisIssueClick} number={issue.number} status={issue.status} />
  }
  
)
return (<div className='rows'> 
  {issues}
</div>);
};

CollectionComponent.propTypes = {
  issues: PropTypes.object.isRequired,
  colsNumber: PropTypes.number.isRequired,
};

export default CollectionComponent;