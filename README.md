To-do List

Introduction:

This is a to-do list full-stack project with Spring and React allows users to add, update, and delete tasks. The backend with Spring performs the CRUD operations with instructions received through api request from the frontend with React, and the project utilizes Redux for state management to reduce the frequency of api calls.

![](Aspose.Words.baa6a426-70fe-41c0-9d82-e4e980c69ae3.001.png)

Demo Figure

Credit to Agile Intelligence for the tutorial: [https://www.youtube.com/watch?v=PkQivzgsLxM&list=PLhxN8qSgOT20PXVZo4eksXMf smp1Ndnwb](https://www.youtube.com/watch?v=PkQivzgsLxM&list=PLhxN8qSgOT20PXVZo4eksXMfsmp1Ndnwb)

Tech:

- Backend **Spring**:
- Sprintboot
- Maven Compiler
- Spring web MVC
- H2 Database
- javax.validation

○

- Frontend **React**:
- React-router-dom v6
- React-redux
- Redux-thunk
- Axios
- Bootstrap

Helpful Guide:

React: <https://developmentarc.gitbooks.io/react-indepth/content/>

Application Structure

- **Spring Web App Layers:**
- **Domain**
- Defines Database Entity attributes
- **Repository**
- Interface that extends CrudRepository<db, id\_type>
- **Service**
- Class annotated with @Service
- **Web**
- Class annotated with @RestController @RequestMapping and @CrossOrigin
- Autowired Service object
- \***pom.xml** to declare all the dependencies
- **React App Structure:**
- **Index.html**
- The HTML page that is going to get rendered
- **Index.js**
- Main render method that renders App into index.html in div “root”
- **App.js**
- Where all the components going to meet
- Routings
- \***package.json** to declare all the dependencies
- **Redux**
- State management library (keep state in the client side)
- API is stateless
- **Thunk**
- Dispatch actions from Store to API

Backend with Spring

1. Spring Initializer
   1. start.spring.io (bootstrap the application)
   1. Configuration: Maven project, Java, Spring Boot 2.7.3, Jar packaging, and Java 17
   1. Dependencies: Spring Boot DevTools, Spring Web, H2 (clear DB everytime server restart), Spring Data JPA, H2 Database, MySQL Driver
1. AWS SDK for Java Maven
   1. <https://mvnrepository.com/artifact/com.amazonaws/aws-java-sdk>
   1. Paste the Maven dependency in pom.xml
1. H2-Database Test with DevTool
1. <http://localhost:8080/h2-console/>
1. Since 2.3.0, default value of generate-unique-name is true, we need to add a few setting in src/main/resources/application.properties
   1. spring.datasource.generate-unique-name=false
   1. spring.h2.console.enabled=true
   1. spring.datasource.url=jdbc:h2:mem:testdb
1. Change the JDBC URL to jdbc:h2:mem:testdb
1. Go to your user directory C:\users\your\_name

i. Pre-create the test database file “test.mv.db”

4. Add dependencies for API validation

a. ![](Aspose.Words.baa6a426-70fe-41c0-9d82-e4e980c69ae3.002.png)

5. Enjoy! You can now start implementing backend app logic!

Frontend with React.js

1. Root folder, create project
   1. “npm init react-app name-of-your-app”
   1. or “npx create-react-app name-of-your-app”
1. Install dependencies
   1. redux react-redux redux-thunk
   1. react-router-dom
   1. axios
   1. bootstrap
   1. Classnames
1. In App.js
1. Make App a class that extends Component
1. import React, { Component } from 'react';
1. import "bootstrap/dist/css/bootstrap.min.css";
1. import {BrowserRouter, Routes, Route, withRouter} from "react-router-dom";
1. react-router-dom version 6 it is a bit different
   1. [https://stackoverflow.com/questions/69832748/error-error-a-rout e-is-only-ever-to-be-used-as-the-child-of-routes-element](https://stackoverflow.com/questions/69832748/error-error-a-route-is-only-ever-to-be-used-as-the-child-of-routes-element)
1. Routing: (<https://www.youtube.com/watch?v=UjHT_NKR_gU>)
1. Surround the App.js return with <BrowserRouter>< ../>
1. Surround <Route /> with <Routes>< ../>
1. <Route /> takes
   1. Path, for routing url
   1. Element, for component, in element = {<component />}
1. <Link to=”path”> </Link>
3. History:
   1. To access props.history, we need withRouter
   1. export default withRouter(ComponentName)
3. Example:

\1. ![](..\demo_images\Aspose.Words.baa6a426-70fe-41c0-9d82-e4e980c69ae3.003.jpeg)

4. Create folder “components” under “src” for components

a. short-cut for creating component from extension

1. “rcc” for react class component
1. “rfc” for react function component
5. Redux storage and Reducers
1. <https://github.com/reduxjs/redux-devtools/tree/main/extension#installation>
1. Create “store.js” under “src/”
   1. import {createStore, applyMiddleware, compose} from "redux";
   1. import thunk from "thunk";
1. Create a new folder “reducers” under “src/”, and create “index.js” in it
   1. import { combineReducers } from "redux";
1. In App.js
1. Import { Provider } from “react-redux”;
   1. Then wrap the entire App.js return in Provider tag pairs
   1. <Provider store = {store}> … </Provider>
1. import store from “./store”;
5. Create reducer for action:
1. Create new file “type.js” under “src/actions/”
   1. export const GET\_ERRORS = "GET\_ERRORS";
   1. actions/ is where the action logics are implemented
1. Create new file “errorsReducer.js” under “src/reducers/”

\1. ![](Aspose.Words.baa6a426-70fe-41c0-9d82-e4e980c69ae3.004.png)

3. Add this reducer in “src/reducers/index.js” in combineReducer export

\1. erros: errorReducer,

6. dispatch({})
   1. Async dispatch =>
6. .propTypes
   1. Import PropTypes from “prop-types”;
6. Connect
   9. Import { connect } from “react-redux”;

Progress Tracking:

- Project Creation
- Spring Web App Layers setup
- Define Entity(summary, acceptanceCriteria, status)
- Implement Post request for adding an entity
- Validation check on Post request
- Implement Get request for get all
- Implement Delete request for delete
- Create React app (dependencies..)
- Set up the main HTML page
- Set up HTML for add/update
- Routing and Link with react-router-dom
- Implement the addProjectTask component (states and events)
- Set up Redux and Reducers (still in progress)
- Implement Redux store with createStore (should be updated to configure store in the future)
- Set up actions addProjectTask (store to backend through api post request)
- Implemented errorsReducer in reducers
- Error handling when bad add request with no summary (no redirect + err msg)
- Add get all request in projectTaskAction and save them in redux
- Sort out the tasks in projectBoard for display
- Add delete request in projectTaskAction and auto re-render using redux
- Set up update page, load the updating values when visiting
- Add update request in projectTaskAction and auto re-render using redux

Working Product:

![](Aspose.Words.baa6a426-70fe-41c0-9d82-e4e980c69ae3.005.png)

![](Aspose.Words.baa6a426-70fe-41c0-9d82-e4e980c69ae3.006.png)

![](Aspose.Words.baa6a426-70fe-41c0-9d82-e4e980c69ae3.007.png)
