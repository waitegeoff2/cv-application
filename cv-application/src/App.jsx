import { useState } from 'react'
import './App.css'
import GeneralInfoForm from './components/GeneralInfo'
import EducationForm from './components/Education'
import WorkExperienceForm from './components/WorkExperience'


function App() {
  // you are adding STATE VARIABLES HERE (info, setinfo)
  //keep the info at the top of the app
  //pass it in to change it and then display it below

  //states for general info
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [email, setEmail] = useState('');

  return (
    <>
      <div className="app">
        <h1>Resume Builder</h1>
        <div className="app-body">
          <div className="app-form-section">
            <h2>Input Details</h2>
            <div className="app-forms">
              <GeneralInfoForm first={firstName} setFirst={setFirstName} last={lastName} setLast={setLastName} phone={phoneNum} setPhone={setPhoneNum} mail={email} setMail={setEmail} />
            </div>
          </div>
          <div className="displaySidebar">
            <h2>Resume Preview</h2>
            <div className="preview-gen-info">
              <h2 className='preview-name'>{firstName} {lastName}</h2>
              <h4 className="phone-email">{phoneNum}. {email}</h4>
            </div>
            {/* POPULATE THIS WITH VALUES FROM FORMS */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
