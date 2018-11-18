import React from 'react';
import PropTypes from 'prop-types';
import cover from '../RandomCoverComponent/covers/205.gif';

const IssueDetailComponent = (props) => {
return (<div>
    <div  className="col m12">
        <img src={cover} />
    </div>
    <div  className="col m12">
        Número: <b>{props.issue.number}</b>
    </div>
    <div  className="col m12">
        Planitos: <b>{props.issue.schematics.join(', ')}</b>
    </div>
    <div  className="col m12">
        Historietas: <b>{ props.issue.comics.join(', ')}</b>
    </div>
</div>
)
};

IssueDetailComponent.propTypes = {
    issue: PropTypes.object.isRequired
};

export default IssueDetailComponent;

