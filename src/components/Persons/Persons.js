import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  
  static getDerivedStateFromProps(props, state) {
    console.log("[Persons.js] getDerivedStateFromProps");
    return state;
  }

  getSnapshotBeforeUpdate(prevProps,prevState){

    console.log('[Persons.js] getSnapshotBeforeUpdate');
    console.log(prevProps);

    return prevProps;
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('[Persons.js] shouldComponentUpdate');
    console.log(nextProps);
    return true;
  }

  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount');
  }

  componentDidUpdate(snapshot){
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentDidMount(){
    console.log('[Persons.js] ComponentDidMount');
  }
  // componentWillMount(){
  //   console.log('[Persons.js] componentWillMount');
  // }

  render() {
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.Id}
          Name={person.Name}
          Age={person.Age}
          Click={() => {
            this.props.Clicked(index);
          }}
          Changed={event => {
            this.props.Changed(event, person.Id);
          }}
        />
      );
    });
  }
}

// const persons = props =>
//   props.persons.map((person, index) => {
//     return (
//       <Person
//         key={person.Id}
//         Name={person.Name}
//         Age={person.Age}
//         Click={() => {
//           props.Clicked(index);
//         }}
//         Changed={event => {
//           props.Changed(event, person.Id);
//         }}
//       ></Person>
//     );
//   });

export default Persons;
