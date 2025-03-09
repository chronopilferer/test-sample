import React from 'react';

function Test(props) {
    return (
        <div>
            <h1>props 를 받았습니다! {props.text}</h1>
        </div>
    )
}

export default Test;