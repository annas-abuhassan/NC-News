import React, { Component } from 'react';
import ArticleList from './ArticleList';
import Usercard from './UserCard';
import './User.css';

class User extends Component {
  state = {
    articles: true
  };
  render() {
    const { articles } = this.props.location.state;
    return (
      <div className="user-container">
        <div>
          {' '}
          <Usercard className={'user-card'} user={this.props.location.state} />
          <button
            value={this.state.articles}
            name="articles"
            onClick={this.showList}
          >
            {!this.state.articles ? 'Show Articles' : 'Hide Articles'}
          </button>
        </div>
        <div className="article-list">
          {this.state.articles && <ArticleList articles={articles} />}
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    console.log('HIYA');
  };

  showList = event => {
    const { name } = event.target;
    this.setState({
      [name]: this.state[name] ? false : true
    });
  };
}

export default User;
