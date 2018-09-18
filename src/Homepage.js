import React from 'react';
import BokList from './BokList.js'
import BokFormContainer from './BokFormContainer'

let Homepage = props => {
    return (
    <div className="chicekn">
    <h1 className="chickken">Bok Bok Bgok!</h1>
    <h2 className="chieknen">chicken chicken chicken</h2>

    <BokFormContainer addBok={props.addBok} />
    <BokList boks={props.boks} />
    </div> )
}

export default Homepage;