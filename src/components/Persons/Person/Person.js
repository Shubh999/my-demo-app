import React from 'react';
import classes from './Person.module.css';


const person= (props) => {

    return (
    <div className={classes.Person}>
        <p onClick={props.Click}>I'm {props.Name} and I am {props.Age} old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.Changed} value={props.Name}></input>
    </div>);
}

export default person;
