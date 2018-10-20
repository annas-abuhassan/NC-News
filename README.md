# NC-News

## Front End React Application

NC-News is a reddit-esque news aggregator. A live version of this app can be found here: https://5bc9c8263813f06d2fec9f73--aah-nc-news.netlify.com/

This front end application renders data from a RESTful backend API created by myself during Week 6 of the Northcoders Developer Pathway, a Full-Stack coding bootcamp. More details regarding this backend API can be found [here](https://nc-news-aah.herokuapp.com)

This project requires the following packages:

- [react](https://www.npmjs.com/package/react)
- [axios](https://www.npmjs.com/package/axios)
- [@reach/router](https://www.npmjs.com/package/@reach/router)
- [lodash](https://www.npmjs.com/package/lodash)
- [react-spinners](https://www.npmjs.com/package/react-spinners)
- [reactjs-popup](https://www.npmjs.com/package/reactjs-popup)
- [emotion](https://www.npmjs.com/package/emotion)
- [hover.css](https://github.com/IanLunn/Hover)
- [moment](https://momentjs.com/)

### Steps

1. Clone this repo:

   ```
   git clone https://github.com/annas-abuhassan/NC-News
   ```

2. cd into the cloned repo and install all package dependencies:

   ```
   npm install
   ```

3. Run in a separate terminal:

   ```
   npm start
   ```

4) In terms of actual functionality of website:

3000:/

Main page will display a list of X articles (GET REQUESTS), filtered first by popularity (votes), but this can be changed to most recent.

You are able to vote up and down individual articles (PATCH REQUESTS)

You can click show more to display X more articles, when you are at the end of the list the showmore button will disappear.

clicking an article title takes you to:

articles/:\_id

## Deployment

This app has been deployed to [Netlify](https://www.netlify.com/).
The backend API has been deployed to [Heroku](https://dashboard.heroku.com/).  
The API's MongoDB data is currently hosted using [mLabs](https://mlab.com/).

## Authors

Name: Annas Abu-Hassan  
Git: annas-abuhassan
