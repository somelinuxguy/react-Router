import React from 'react';
import BokForm from './BokForm.js'

class BokFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newBok: ''
        }
    }

    render() {
        let updateBokForm = (value) => {
            this.setState({ newBok: value})
        }
        return <BokForm newBok={this.state.newBok} updateBokForm={updateBokForm} addBok={this.props.addBok}/>
    }
}

export default BokFormContainer;