import React, { useEffect,useRef,useContext } from "react";
import Classes from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context";

const Cockpit = props => {
  // use both way to use Refs in function component
  //const togglePersonRefs = React.createRef();
  const togglePersonRefs = useRef(null);

  //React hooks
  const Context=useContext(AuthContext);

  useEffect(() => {
    togglePersonRefs.current.click();
    console.log("[Cockpit.js] call useEffect...");
    // run when props.persons change or update. this is call control useEffect behaviour
    // if we want to run useEffect only first time pass empty array in second argument

    return () => {
      console.log("[Cockpit.js] clean useEffect...");
    };
  }, []);

  let btnClass = "";

  if (props.showPerson) {
    btnClass = Classes.Red;
  }

  const assignedClasses = [];

  if (props.personLength <= 2) {
    assignedClasses.push(Classes.red);
  }

  if (props.personLength <= 1) {
    assignedClasses.push(Classes.bold);
  }



  return (
    <div className={Classes.Cockpit}>
      <h1>Hi, I am React App</h1>
      <p className={assignedClasses.join(" ")}>This is really working !!!</p>
      <button
        onClick={() => {
          props.switchName("Shubham!", 26);
        }}
      >
        Switch Name
      </button>
      <button
        ref={togglePersonRefs}
        className={btnClass}
        onClick={props.togglePerson}
      >
        Toggle Persons
      </button>

      {<button onClick={Context.Login}>Log In</button>}

      {/* This is the way to use Context before React 16.6
       <AuthContext.Consumer>
        {(context)=> <button onClick={context.Login}>Log In</button>}
        
      </AuthContext.Consumer> */}
    </div>
  );
};

export default React.memo(Cockpit);
