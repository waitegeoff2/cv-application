import { useState } from 'react';

function displayGeneralInfo({firstName}) {
    return (
    <h1>{firstName}</h1>
    )
}

export default function GeneralInfoForm() {
    const [firstName, setFirstName] = useState ("");
    const [lastName, setLastName] = useState ("");
    const [phoneNum, setPhone] = useState ("");
    const [email, setEmail] = useState ("")

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    function handlePhoneChange(e) {
        setPhone(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    return (
        <form class="genInfoForm" onSubmit={e => e.preventDefault()}>
            <input
                placeholder='First Name'
                value={firstName}
                onChange={handleFirstNameChange}
            />
            <input 
                placeholder='Last Name'
                value={lastName}
                onChange={handleLastNameChange} 
            />
            <input
                placeholder='xxx-xxx-xxxx'
                value={phoneNum}
                onChange={handlePhoneChange}
            />
            <input 
                placeholder='xxxx@xxxx.com'
                value={email}
                onChange={handleEmailChange} 
            /> 
            
        </form>
    )
}

// function displayGeneralInfo({firstName, lastName}) {
//     return (
//         <h1> {firstName} </h1>
//         <h1> {lastName} </h1>
//     )
// }

