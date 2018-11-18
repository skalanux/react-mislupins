import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './index.css';


class IssueComponent extends PureComponent {
  onClick = (evt) => {
    // TODO: stop propagation;
    // Estara bien crear una función para cada issue, lo que equivale a crear 500 funciones cuando
    // podria simplemente pasar un argumento como target? para eso si necesito esta funcion onclick
    this.props.onIssueClick();
  };

  render(){
    const cols = 'z-depth-2 col center';
    return (
      <div className={`IssueComponent-${this.props.status} IssueComponent ${cols}` } onClick={this.props.onIssueClick}>{this.props.number}</div>
    );
  }
};

IssueComponent.propTypes = {
  onIssueClick: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
};

export default IssueComponent;
