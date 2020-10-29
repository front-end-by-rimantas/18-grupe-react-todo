import React, { useState } from 'react';
import '../css/item.css';

function Item(props) {
    const [status, setStatus] = useState(props.completionStatus);

    return (
        <div className="todo-item">
            <p>{props.text}</p>
            <div className="status"
                onClick={() => setStatus(!status)}>{status ? '' : 'not '}completed</div>
        </div>
    );
}

export default Item;