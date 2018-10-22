import axios from "axios";
const API_URL = "https://nc-news-aah.herokuapp.com/api";

export const getArticles = topic => {
  const url = topic
    ? `${API_URL}/topics/${topic}/articles`
    : `${API_URL}/articles`;
  return axios.get(url).then(({ data }) => data.articles);
};

export const getArticleCommentsById = id => {
  return axios
    .get(`${API_URL}/articles/${id}/comments`)
    .then(({ data }) => data.comments);
};
export const getArticleById = id => {
  return axios
    .get(`${API_URL}/articles/${id}`)
    .then(({ data }) => data.article);
};

export const getTopics = () => {
  return axios.get(`${API_URL}/topics`).then(({ data }) => data.topics);
};

export const getUsers = username => {
  if (!username) {
    return axios.get(`${API_URL}/users`).then(({ data }) => data.users);
  } else {
    return axios
      .get(`${API_URL}/users`)
      .then(({ data }) =>
        data.users.filter(user => user.username === username)
      );
  }
};

export const getUserById = _id => {
  return axios.get(`${API_URL}/users/${_id}`).then(({ data }) => data.user);
};

export const makeVote = (updown, id, type) => {
  return axios
    .patch(`${API_URL}/${type}s/${id}?votes=${updown}`)
    .then(({ data }) => data[type]);
};

export const addComment = (commentObj, id) => {
  return axios
    .post(`${API_URL}/articles/${id}/comments`, commentObj)
    .then(({ data }) => data.comment);
};

export const deleteComment = id => {
  return axios.delete(`${API_URL}/comments/${id}`);
};

export const addArticle = (articleObj, topic) => {
  return axios
    .post(`${API_URL}/topics/${topic}/articles`, articleObj)
    .then(({ data }) => data.article);
};
