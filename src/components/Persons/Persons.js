import React from "react";
import Person from "./Person/Person";

const persons = props =>
  props.persons.map((person, index) => {
    return (
      <Person
        key={person.Id}
        Name={person.Name}
        Age={person.Age}
        Click={() => {
          props.Clicked(index);
        }}
        Changed={event => {
          props.Changed(event, person.Id);
        }}
      ></Person>
    );
  });

  export default persons;
