import React from 'react';
import ArticleList from './ArticleList';
import './User.css';

function User(props) {
  const { articles } = props.location.state;
  return (
    <div className="article-list">
      <ArticleList articles={articles} />
    </div>
  );
}

export default User;
