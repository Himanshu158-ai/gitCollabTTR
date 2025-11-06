import React, { useState } from "react";
import axios from "axios";

export const Login = () => {
    const [name, setname] = useState(``);
    const [pass, setpass] = useState(``);

    /**
     * The function `Onsubmit` sends a POST request to a local server endpoint `/login` with user
     * credentials and logs the response data's `userId` if successful.
     */
    async function Onsubmit() {
        try {
            const response = await axios.post("http://localhost:3000/login", {
                name,
                pass,
            });
            Swal.fire({
                title: "Success",
                text: response.data?.userId,
                icon: "success",
            });
            console.log(response.data?.userId);
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
