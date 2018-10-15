import axios from "axios";
const API_URL = "https://nc-news-aah.herokuapp.com/api";

export const getArticles = () => {
  return axios.get(`${API_URL}/articles`).then(({ data }) => data.articles);
};

export const getArticlesByTopic = topic => {
  return axios
    .get(`${API_URL}/topics/${topic}/articles`)
    .then(({ data }) => data.articles);
};
