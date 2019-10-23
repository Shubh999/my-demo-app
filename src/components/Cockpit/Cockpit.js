
import React, {useEffect} from "react";
import Classes from "./Cockpit.module.css";

const Cockpit = (props) => {

  useEffect(() => {

    console.log('[Cockpit.js] call useEffect...');
 // run when props.persons change or update. this is call control useEffect behaviour
 // if we want to run useEffect only first time pass empty array in second argument

 return ()=>{
  console.log('[Cockpit.js] clean useEffect...');
 };
  },[props.persons]);

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

export default Cockpit;
