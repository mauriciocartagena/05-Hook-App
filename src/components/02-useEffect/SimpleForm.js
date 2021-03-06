import React, { useEffect, useState } from "react";
import { Message } from "./Message";

import "./effects.css";

export const SimpleForm = () => {

     const [formState, setFormState] = useState({
         name:'',
         email:''
     });
    
     const { name, email } = formState; 

    useEffect(()=>{

        // console.log("hey")
    },[]);
    useEffect(()=>{

        // console.log("formState CAMBIO")
    },[formState]);

    useEffect(()=>{

        // console.log("Email CAMBIO")
    },[email]);

    const handleInputChange = ({ target }) =>{
        // console.log(target.name);
        // console.log(target.value);

        setFormState({
            ...formState,
           [target.name] : target.value
        });
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>

            <div
                className="form-groud"
            >
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                ></input>
            </div>
         <br/>
            <div
                className="form-groud"
            >
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                ></input>
            </div>

            {
                ( name ==='123' ) && <Message />
            }
            
        </>
    )
}
