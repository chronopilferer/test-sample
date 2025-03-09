import React from "react";

function TestArray({ users }) {
    return (
        <div>
            {users.map(({ id, name, age }) => (
                <div key={id}>
                    <h1>이름: {name}</h1>
                    <h2>나이: {age}</h2>
                </div>
            ))}
        </div>
    );
}

export default TestArray;
