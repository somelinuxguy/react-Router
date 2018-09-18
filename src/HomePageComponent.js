import React from 'react';
import Router from './Router.js';
import genID from './genID.js';

class HomePageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boks: []
        }
    }
// componentDidMount() {
// get rid of this getBoks button and
// didmount only runs once
    componentDidMount() {
        fetch('http://0.tcp.ngrok.io:11140/wassups.json')
            .then( res => res.json())
            .then( boks => {
                this.setState({
                    boks: boks
                });
            });
        };

    render () {
        let addBok = (newBok) => {
            this.setState({
                boks: this.state.boks.concat([
                    {
                        userId: genID(),
                        id: genID(),
                        user: "kevin",
                        content: newBok
                    }
                ])
            })
        }
        return <Router addBok={addBok} boks={this.state.boks} />
    }
}

export default HomePageComponent;