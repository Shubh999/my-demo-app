import React, { Component } from "react";
import Aux from '../../../hoc/Auxiliary';
import classes from "./Person.module.css";
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';



class Person extends Component {

  constructor(props){
   super(props);
   this.inputElement=React.createRef();
  }

 componentDidMount(){
   this.inputElement.current.focus();
 }


  render() {
    return (
      <Aux>
        <AuthContext.Consumer>
          {(context)=>context.authenticated? <p>Authenticated !!!</p> : <p>Please Log In</p>}
        </AuthContext.Consumer>
        
        <p onClick={this.props.Click}>
          I'm {this.props.Name} and I am {this.props.Age} old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.Changed}
          value={this.props.Name}
         // ref={(inputEle)=>{this.inputElement=inputEle}}
         ref={this.inputElement}
        ></input>
      </Aux>
      // <div className={classes.Person}>
        
      // </div>
    );
  }
}

Person.propTypes={
  Name: PropTypes.string,
  Age: PropTypes.number,
  Click: PropTypes.func,
  Changed: PropTypes.func
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

export default withClass(Person,classes.Person);
