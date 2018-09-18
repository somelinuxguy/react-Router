import React from 'react';
import BokRow from './BokRow.js'

let BokList = (props) => 
    <ul>
        { props.boks.map(bok => <BokRow bok={bok} key={bok.id} />) }
    </ul>

export default BokList;