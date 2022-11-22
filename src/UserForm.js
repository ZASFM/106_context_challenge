import React, { useContext } from "react";
import { useGlobalContext } from "./UserContext";

const Form = () => {
    const {data,setData}=useGlobalContext();

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setData(preVal=>{
            return {
                ...preVal,
                [name]:value,
            }
        })
    }

    return (
        <div className="user-form">
            <div className="input-item">
                <label className="label">Update Name: </label>
                <input
                    className="input"
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                />
            </div>
            
            <div className="input-item">
                <label className="label">Update Location: </label>
                <input
                    className="input"
                    type="text"
                    name="location"
                    value={data.location}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default Form;
