
import React from "react";
import Classes from "./Cockpit.module.css";

const cockpit = props => {

   let btnClass="";

   if(props.showPerson){
       btnClass=Classes.Red;
   }

   const assignedClasses = [];

  if (props.persons.length <= 2) {
    assignedClasses.push(Classes.red);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(Classes.bold);
  }

  return (
    <div className={Classes.Cockpit}>
      <h1>Hi, I am React App</h1>
      <p className={assignedClasses.join(" ")}>This is really working !!!</p>
      <button onClick={()=>{props.switchName("Shubham!", "26")}}>
        Switch Name
      </button>
      <button className={btnClass} onClick={props.togglePerson}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
