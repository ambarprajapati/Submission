## Submission Details
#### by Ambar Prajapati

### Assessment 1:		
> **Completed**: Technical and functional requirements as specified.
#### Functional Requirements:
* **Done**: A user must be able to create a task.
	* **Done**: A user must not be able to create a task with no title.
* **Done**: A user must be able to delete a task.
* **Done**: A user must be able to complete a task.
	* **Done**: A user must be able to see a visual representation of a completed task.
	* **Done**: The complete button should be disabled if the task is completed.
* **Done**: A user must be able to see a list of all their tasks.
* **Done**: The add-task input field must clear after adding a task.
* **Done**: After adding a new task, the task must be added to the list of visible tasks.

#### Technical Requirements :
* **Done**: Create a react app from scratch using create-react-app.
* **Done**: Use Components.
* **Done**: Use State.
* **Done**: Use Props.
* **Done**: Use Map.
* **Done**: Use Classes
* **Done**: Use In-line styles
* **Done**: Use Conditional Classes (css)


### Assessment 2:		
> **Completed**: Technical and functional requirements as specified using redux.
* **Done**: Keep track of tasks using redux.
* **Done**: Create, Complete, and Delete tasks using action creators with redux.

### Assessment 3:		
> **Completed**:
* **Done**: Use Material-UI (current version) for user interface components.
* **Done**: Use API to manage tasks. Implemented API exactly as per the documentation. <br>Note : API code to create, fetch, update, complete, and delete tasks works well. Its written using `superagent` in `/src/actions/index.js` and is unit tested. 
* **Done**: Use `redux`, `isomorphic-fetch` <br>Note : implemented `superagent` instead of `isomorphic-fetch`.

> **To-do**:		
<br>1. Use of `redux-saga`: Integration of API functionality with Redux
<br>2. Use of `react-router-dom`: Implement detailed view of a task as per specified functionality.
<br>3. Replace `isomorphic-fetch` with  `superagent`.
