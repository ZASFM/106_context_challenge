import React, { useContext } from "react";

const Form = () => {

    const user = '';//YOUR CODE HERE
    function onNameChange(e) {
       //YOUR CODE HERE
    }
    function onLocationChange(e) {
        //YOUR CODE HERE
    }

    return (
        <div className="user-form">
            {/* Change user's name in context */}
            <div className="input-item">
                <label className="label">Update Name: </label>
                <input
                    className="input"
                    onChange={e => onNameChange(e)}
                />
            </div>

            {/* Change user's location in context */}
            <div className="input-item">
                <label className="label">Update Location: </label>
                <input
                    className="input"
                    onChange={e => onLocationChange(e)}
                />
            </div>
        </div>
    );
};

export default Form;
