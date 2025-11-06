import React, { useState } from "react";
import axios from "axios";

export const Signup = () => {
    const [name, setname] = useState(``);
    const [pass, setpass] = useState(``);

    async function Onsubmit() {
        try {
            const response = await axios.post("http://localhost:3000/signup", {
                name,
                pass,
            });
            console.log(response.data.reply);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <input
                type="text"
                placeholder="enter your name"
                onChange={(e) => {
                    // console.log(e.target.value);
                    setname(e.target.value);
                }}
            />
            <input
                type="text"
                placeholder="enter your pass"
                onChange={(e) => {
                    // console.log(e.target.value);
                    setpass(e.target.value);
                }}
            />
            <button onClick={Onsubmit}>Submit</button>
        </div>
    );
};
