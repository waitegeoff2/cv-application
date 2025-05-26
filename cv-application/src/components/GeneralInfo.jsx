import { useState } from 'react';
import '../styles/GeneralInfoStyles.css'

export default function GeneralInfoForm() {   

    return (
        <div className="generalInformation">
            <h2>General Information</h2>
                <form className="genInfoForm" onSubmit={e => e.preventDefault()}>
                    <input
                        placeholder='First Name'
                      
                     
                    />
                    <input 
                        placeholder='Last Name'
                        
                        
                    />
                    <input
                        type='tel'
                        placeholder='xxx-xxx-xxxx'
                        
                      
                    />
                    <input 
                        type='email'
                        placeholder='xxxx@xxxx.com'
                        
                       
                    />
                   
                                 
                    {/* <InfoSubmitButton firstName={firstName} lastName={lastName} phone={phoneNum} email={email} /> */}
                    {/* <submitbutton with PROPS here> */}
                    {/* SUBMIT BUTTON THAT RUNS THE OTHER ONE WITH PROPS display (NAME, PHONE, EMAIL) {} */}
                    
                </form>
        </div>
    )
}

