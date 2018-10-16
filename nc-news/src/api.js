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

export const makeVote = (updown, id, type) => {
  return axios
    .patch(
      `https://nc-news-aah.herokuapp.com/api/${type}s/${id}?votes=${updown}`
    )
    .then(({ data }) => data[type]);
};
