import '../styles/GeneralInfoStyles.css'

export default function GeneralInfoForm({first, setFirst, last, setLast, phone, setPhone, mail, setMail}) {   

    function handleFirstNameChange(e) {
        setFirst(e.target.value);
    }

    function handleLastNameChange(e) {
        setLast(e.target.value);
    }

    function handlePhoneChange(e) {
        setPhone(e.target.value);
    }

    function handleEmailChange(e) {
        setMail(e.target.value);
    }

    function handleEdit() {
        setFirst('')
        setLast('')
        setPhone('')
        setMail('')
    }

    return (
        <div className="generalInformation">
            <h2>General Information</h2>
                <form className="genInfoForm" onSubmit={e => e.preventDefault()}>
                    <input
                        placeholder='First Name'
                        value={first}
                        onChange={handleFirstNameChange}
                     
                    />
                    <input 
                        placeholder='Last Name'
                        value={last}
                        onChange={handleLastNameChange}
                        
                        
                    />
                    <input
                        type='tel'
                        placeholder='xxx-xxx-xxxx'
                        value={phone}
                        onChange={handlePhoneChange}                        
                      
                    />
                    <input 
                        type='email'
                        placeholder='xxxx@xxxx.com'
                        value={mail}
                        onChange={handleEmailChange}                    
                       
                    />
                    <button onClick={handleEdit}>Restart section</button>
                </form>
        </div>
    )
}

