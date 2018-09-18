import React from 'react';
let BokForm = (props) => {
    return (
    <form onSubmit={ (event) => {
        event.preventDefault();
        console.log('Submit!');
        props.addBok(props.newBok);
        } } >
    <input type="text" value={props.newBok} onChange={
        (event) => {
            console.log(event.target.value);
            props.updateBokForm(event.target.value);
        }
    }/>
    <input type="submit" value="Post" />
    </form>
    )
}

export default BokForm;