import React, { useState } from "react";
import classes from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";


const App = props => {
  const [personState, setPersonState] = useState({
    persons: [
      { Id: "1", Name: "Shubham", Age: "27" },
      { Id: "2", Name: "Santosh", Age: "29" },
      { Id: "3", Name: "Aman", Age: "29" }
    ]
  });

  const [showPersonState, setShowPersonState] = useState({
    show: true
  });

  const [showCockpitState, setCockpitState] = useState({
    show: true
  });

  const switchNamehandler = (name, age) => {
    setPersonState({
      persons: [
        { Name: name, Age: age },
        { Name: "Santosh", Age: "28" },
        { Name: "Aman", Age: "29" }
      ]
    });
  };

  const nameChangehandler = (event, Id) => {
    // Use event for getting textbox text [event.target.value]
    const persons = [...personState.persons];

    persons.map(person => {
      if (person.Id === Id) {
        person.Name = event.target.value;
      }
      return person;
    });

    setPersonState({
      persons: persons
    });
  };

  const togglePersonHandler = () => {
    setShowPersonState({
      show: !showPersonState.show
    });
  }

  const deletePersonHandler = personIndex => {
    const persons = [...personState.persons];
    persons.splice(personIndex, 1);
    setPersonState({ persons: persons });
  }


  let persons = null;

  if (showPersonState.show) {

    // react 16+ return list data support jsx 
    persons = <Persons
          persons={personState.persons}
          Clicked={deletePersonHandler}
          Changed={nameChangehandler}
        />

        {/*personState.persons.map((person, index) => {
          return (
            <Person
              key={person.Id}
              Name={person.Name}
              Age={person.Age}
              Click={deletePersonHandler.bind(this, index)}
              Changed={event => {
                nameChangehandler(event, person.Id);
              }}
            ></Person>
          );
        })*/}

        {/* <Person
          Name={personState.persons[0].Name}
          Age={personState.persons[0].Age}
          Click={switchNamehandler.bind(this, "Shubham!!!", "28")}
        >
          My Hobbies: Racing
        </Person>
        <Person
          Name={personState.persons[1].Name}
          Age={personState.persons[1].Age}
          Click={switchNamehandler.bind(this, "Shubham!!!!!!", "29")}
          Changed={nameChangehandler}
        >
          My Hobbies: Singng
        </Person>
        <Person
          Name={personState.persons[2].Name}
          Age={personState.persons[2].Age}
        >
          My Hobbies: Dancing
        </Person> */}
      
  }

  return (
    <div className={classes.App}>
      <button onClick={()=>{ setCockpitState({show: !showCockpitState.show}) }}>Toggle Cockpit</button>

      {
        showCockpitState.show ? 
        <Cockpit
        switchName={switchNamehandler}
        togglePerson={togglePersonHandler}
        showPerson={showPersonState.show}
        persons={personState.persons}
      /> : null
      }
      
      
      {persons}
    </div>
  );
};

export default App;
