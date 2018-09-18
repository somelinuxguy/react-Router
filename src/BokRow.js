import React from 'react';
import {Link} from 'react-router-dom';

let BokRow = (props) =>
    <li>
        <p>{props.bok.content} <Link to={`/boks/${props.bok.id}`}>Share</Link> </p>
    </li>

export default BokRow;