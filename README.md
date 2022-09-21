# **To-do List**

## Introduction:

> This is a to-do list full-stack project with Spring and React allows users to add, update, and delete tasks. The backend with Spring performs the CRUD operations with instructions received through api request from the frontend with React, and the project utilizes Redux for state management to reduce the frequency of api calls.

<p align="center">
  <img src="/demo.png" />
</p>
<p style="text-align: center;font-size:10px">Demo Figure</p>


- Credit to Agile Intelligence for the tutorial

## Instruction
- For the Frontend React: ``` npm start ``` 
- For the Backend Spring, please run in an IDE of your choice, and it's hosted on Localhost.


## Tech:

- Backend **Spring**:
> - Sprintboot
> - Maven Compiler
> - Spring web MVC
> - H2 Database
> - javax.validation

- Frontend **React**:
> - React-router-dom v6
> - React-redux
> - Redux-thunk
> - Axios
> - Bootstrap

### Helpful Guide:

React: <https://developmentarc.gitbooks.io/react-indepth/content/>

## Application Structure

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

## Progress Tracking:

> - Project Creation
> - Spring Web App Layers setup
> - Define Entity(summary, acceptanceCriteria, status)
> - Implement Post request for adding an entity
> - Validation check on Post request
> - Implement Get request for get all
> - Implement Delete request for delete
> - Create React app (dependencies..)
> - Set up the main HTML page
> - Set up HTML for add/update
> - Routing and Link with react-router-dom
> - Implement the addProjectTask component (states and events)
> - Set up Redux and Reducers (still in progress)
> - Implement Redux store with createStore (should be updated to configure store in the future)
> - Set up actions addProjectTask (store to backend through api post request)
> - Implemented errorsReducer in reducers
> - Error handling when bad add request with no summary (no redirect + err msg)
> - Add get all request in projectTaskAction and save them in redux
> - Sort out the tasks in projectBoard for display
> - Add delete request in projectTaskAction and auto re-render using redux
> - Set up update page, load the updating values when visiting
> - Add update request in projectTaskAction and auto re-render using redux

