import React, { useState } from 'react';
import Axios from 'axios';

function Demo() {
    const [firstName, setFirstName] = useState("")
    const [companyRole, setCompanyRole] = useState("")

    const handleInsert = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post('http://localhost:4000/insert', {
                firstName,
                companyRole
            });
            console.log("responce data = " + response.data);
        } catch (error) {
            console.error("responce data error =" + error);
        }
    };

    return (
        <form onSubmit={handleInsert}>
            <label>
                First Name:
                <input
                    type="text"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                />
            </label>
            <br />
            <label>
                Company Role:
                <input
                    type="text"
                    value={companyRole}
                    onChange={(event) => setCompanyRole(event.target.value)}
                />
            </label>
            <br />
            <button type="submit">Insert Data</button>
        </form>
    );
}

export default Demo;