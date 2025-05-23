import { useState } from 'react';
import '../styles/GeneralInfoStyles.css'

// put this in the app????
function InfoSubmitButton({firstName ='*First Name', lastName = '*Last Name', phone = '*Phone', email = '*Email'}) {
    return (
    <div className="generalInfoDisplay">
        <h1 className="aboutSection">About</h1>
            <h3>{firstName}</h3>
            <h3>{lastName}</h3>
            <h3>{phone}</h3>
            <h3>{email}</h3>
    </div>
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

    const displayValues = () => {
        console.log("h")
        return (
            <div className="infoSubmit">
                <h1>hi</h1>
            <InfoSubmitButton firstName={firstName} />
            </div>
        )
    }

    return (
        <div className="generalInformation">
            <h2>General Information</h2>
                <form className="genInfoForm" onSubmit={e => e.preventDefault()}>
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
                        type='tel'
                        placeholder='xxx-xxx-xxxx'
                        value={phoneNum}
                        onChange={handlePhoneChange}
                    />
                    <input 
                        type='email'
                        placeholder='xxxx@xxxx.com'
                        value={email}
                        onChange={handleEmailChange} 
                    />
                    <button onClick={displayValues}>Submit</button> 
                    {/* <InfoSubmitButton firstName={firstName} lastName={lastName} phone={phoneNum} email={email} /> */}
                    {/* <submitbutton with PROPS here> */}
                    {/* SUBMIT BUTTON THAT RUNS THE OTHER ONE WITH PROPS display (NAME, PHONE, EMAIL) {} */}
                    
                </form>
        </div>
    )
}

// function displayGeneralInfo({firstName, lastName}) {
//     return (
//         <h1> {firstName} </h1>
//         <h1> {lastName} </h1>
//     )
// }

