import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from "../Card/Card";
import Button from '../Button/Button';
import { bindActionCreators } from "redux";
import { clearSearch, searchImages } from "../../actions";
import history from '../../history';
import './styles.scss';

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = { images: this.props.images };

    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.props.searchImages(this.props.query);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.images !== this.props.images) {
      this.setState({images: nextProps.images});
    }
  }

  onClick() {
    this.props.clearSearch();
    history.push('/');
  }

  renderImages() {
    return this.state.images.map((image) => {
      return (
        <img
          key={image.id}
          src={image.largeImageURL}
          alt=''
          className="thumbnail"
        />)
    })
  }

  renderLoader() {
    if (this.state.images.length > 0) {
     return (
         <Button
           onClick={this.onClick}
           className="button--outline"
         >
           Search Again
         </Button>
       )
    } else {
      return <p className="loader">Loading</p>
    }
  }

  render() {

    return (
      <Card>
        <div>
          <h1 className="text">Search results</h1>
          <div className="grid">
            {this.renderImages()}
          </div>
          <div>
            {this.renderLoader()}
          </div>
        </div>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    images: state.images,
    query: state.query
  };
}

function mapDispatchToProps(dispatch) {
  return (
    bindActionCreators({
      clearSearch, searchImages
    }, dispatch)
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
