import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Input from "../Input/Input";
import Card from "../Card/Card";
import Button from '../Button/Button';
import { saveQuery } from "../../actions";
import history from '../../history';
import './styles.scss';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
     query: ''
    };

    this.onClick = this.onClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onClick() {
    if (this.state.query !== '') {
      this.props.saveQuery(this.state.query);
      history.push(`/search_results/q=${this.state.query}`);
      this.setState({ query: ''});
    }
  }

  onInputChange(event) {
    const value = event.target.value;
    this.setState({ query: value });
  }

  render() {
    return (
      <Card>
       <div style={{width: '100%'}}>
         <h1 className="text">Search for images</h1>
         <div>
           <Input
             label="Search keyword"
             value={this.state.query}
             onChange={this.onInputChange}
           />
         </div>
         <div>
           <Button
             onClick={this.onClick}
             className="button--fill"
           >
             Search
           </Button>
         </div>
       </div>
      </Card>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return (
    bindActionCreators({
      saveQuery
    }, dispatch)
  );
}

export default connect(null, mapDispatchToProps)(SearchForm);
