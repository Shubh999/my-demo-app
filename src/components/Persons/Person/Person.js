import React, { Component } from "react";
import classes from "./Person.module.css";

class Person extends Component {
  render() {
    return (
      <div className={classes.Person}>
        <p onClick={this.props.Click}>
          I'm {this.props.Name} and I am {this.props.Age} old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.Changed}
          value={this.props.Name}
        ></input>
      </div>
    );
  }
}

// class Person extends Component {
//   render() {
//     return (
//       <div className={classes.Person}>
//         <p onClick={this.props.Click}>
//           I'm {this.props.Name} and I am {this.props.Age} old!
//         </p>
//         <p>{this.props.children}</p>
//         <input
//           type="text"
//           onChange={this.props.Changed}
//           value={this.props.Name}
//         ></input>
//       </div>
//     );
//   }
// }

// const person= (props) => {

//     return (
//     <div className={classes.Person}>
//         <p onClick={props.Click}>I'm {props.Name} and I am {props.Age} old!</p>
//         <p>{props.children}</p>
//         <input type="text" onChange={props.Changed} value={props.Name}></input>
//     </div>);
// }

export default Person;
