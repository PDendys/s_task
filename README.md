# News viewing app

This application main goal is to view basic list of news. Data can be filltred by source and sorted by publication date.
Application is bootstraped using webpack.  

### Commands:
Clone repository:
```
git clone
```
Install dependencies:
```
npm install
```
Run frontend application in dev mode:
```
npm run dev
```
Run dev backend server:
```
node server.js
```
To build production version:
```
npm run build
```

 ### Tech stack:
 - React
 - Styled Components
 - Bootstrap 5
 - Typescript
 - Webpack
 
 ### Improvments
 List of potential improvments:
 
 - Using one route for fetching articles with filtering based on query parameters.
 - Implementation library like React Query to auto dealing with 'loading', 'errors' etc.
 - Implementation of server side filltering also based on query parameters.
 - Better handling different date format to avoid unnecessary operations (maby we should use some time manipulation library)
 - Test implementation. Unit or e2e tests are possible to consider.
 - Implemenation of env variable to 
