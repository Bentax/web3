## React
Установить приложение `create-react-app` помогает настроить все инструменты, необходимые для создания приложений React. 
Выполните следующую команду npm, чтобы установить утилиту `create-response-app`:
```bash
sudo npm -g install create-react-app
```
Проверьте, обновлена ли версия (5.0.1 - 15.03.23) с помощью команды:
```bash
create-react-app --version
```
Процесс загрузки завершен. Теперь вы можете создать React-Application.

Мы даем название приложению `client`. Выполните указанную ниже команду, чтобы создать приложение:
```bash
npx create-react-app client
```
We will also need Axios in order to make get/post requests with ajax. So let’s install that now:
```bash
npm i -S axios
```
Screen
```bash
apt install screen -y
screen -S session1
```
Bootstrap
```bash
npm install bootstrap react-router-dom
```
Setting Up the React Router
Let's start by emptying the `sr`c folder and adding two new files in it: `index.js` and `App.js`.
```bash
rm src/**/*
touch src/index.js src/App.js
```
Inside `src/index.js`, we add the following code:
```bash
//mern/client/src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
```
We have used BrowserRouter to keep our UI in sync with the URL. `BrowserRouter` helps with seamless transitions while switching between components. Basically, it will only reload/refresh the component that needs to be changed instead of refreshing/reloading the entire page. Though `BrowserRouter` is not a necessity, it is a must if you want your app to be responsive.
## Creating Components
After adding the code to index.js files, we will create a components folder inside src. For each component we create, we will add a new .js file inside the components folder. In this case, we will add create.js, edit.js, navbar.js, and recordList.js.
```bash
mkdir src/components
cd src/components && touch create.js edit.js navbar.js recordList.js
```
A snapshot of each file would look like the following.
`create.js`
The following code will serve as a creating component for our records. Using this component, users can create a new record. This component will submit a create command to our server.
```bash
//mern/client/src/components/create.js
import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   name: "",
   position: "",
   level: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: "", position: "", level: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">Position</label>
         <input
           type="text"
           className="form-control"
           id="position"
           value={form.position}
           onChange={(e) => updateForm({ position: e.target.value })}
         />
       </div>
       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionIntern"
             value="Intern"
             checked={form.level === "Intern"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionIntern" className="form-check-label">Intern</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionJunior"
             value="Junior"
             checked={form.level === "Junior"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionJunior" className="form-check-label">Junior</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionSenior"
             value="Senior"
             checked={form.level === "Senior"}
             onChange={(e) => updateForm({ level: e.target.value })}
           />
           <label htmlFor="positionSenior" className="form-check-label">Senior</label>
         </div>
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Create person"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}
```
