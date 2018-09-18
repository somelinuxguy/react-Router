// const boks =
//  [
//     {
//       "userId": 5,
//       "id": 4,
//       "user": "The Fly-Hard Navy",
//       "content": "🦆 🐰 🦆 🐰 🦆 🐰 😵"
//     },
//     {
//       "userId": 1,
//       "id": 1,
//       "user": "BDFL",
//       "content": "There are cookies in the kitchen. 🍪 No, really! @dan!"
//     },
//     {
//       "userId": 3,
//       "id": 2,
//       "user": "Watman",
//       "content": "Sooo I discovered the 🕵️ 1984 Sherlock Holmes TV series."
//     },
//     {
//       "userId": 5,
//       "id": 3,
//       "user": "Master Commander Duck",
//       "content": "Those pop tarts are a lie. 🤫"
//     }
//   ]


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