import { useState } from 'react'
import './App.css'
import GeneralInfoForm from './components/GeneralInfo'
import EducationForm from './components/Education'
import WorkExperienceForm from './components/WorkExperience'


function App() {
  //states for general info, pass down into components to change the state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [email, setEmail] = useState('');

  //states for education
  const [educationInfo, setEducationInfo] = useState([{
    school: '',
    study: '',
    startDate: '',
    endDate: ''
  }])

  //states for work experience

  const[workExperienceInfo, setWorkExperienceInfo] = useState([{
    company: '',
    position: '',
    responsibilities: '',
    startDate: '',
    endDate: ''
  }])

  return (
    <>
      <div className="app">
        <h1 className='app-title'>Resume Builder</h1>
        <div className="app-body">
          <div className="app-form-section">
            <h1 className="input-title">Input Your Details</h1>
            <div className="app-forms">
              <GeneralInfoForm first={firstName} setFirst={setFirstName} last={lastName} setLast={setLastName} phone={phoneNum} setPhone={setPhoneNum} mail={email} setMail={setEmail} />
              <EducationForm eduInfo={educationInfo} setEduInfo={setEducationInfo} />
              <WorkExperienceForm workExperience={workExperienceInfo} setWorkExperience={setWorkExperienceInfo} />
            </div>
          </div>
          <div className="displaySidebar">
            <div className="preview-gen-info">
              <h2 className='preview-name'>{firstName} {lastName}</h2>
              <h4 className="phone-email">{phoneNum}. {email}</h4>
            </div>
            <div className="preview-education">
              <h3 className="section-title">Education</h3>
              <div className="gen-items">
                {/* Mapping out the multiple education forms (stored as objects) here */}
                {educationInfo.map((eduItem) => {
                  return(
                    <div className="education-gen">
                      <div className="study-and-year">
                        <h4 className="preview-study">{eduItem.study}</h4>
                        <p className="preview-study-year">{eduItem.startDate}-{eduItem.endDate}</p>
                      </div>
                      <h4>{eduItem.school}</h4>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="preview-work-experience">
              <h3 className="section-title">Work Experience</h3>
              <div className="gen-items">
                {workExperienceInfo.map((workItem) => {
                  return(
                    <div className="work-gen">
                      <div className="title-and-year">
                        <h4 className="preview-position">{workItem.position}</h4>
                        <p className="preview-position-dates">{workItem.startDate}-{workItem.endDate}</p>
                      </div>
                      <h4 className="preview-company">{workItem.company}</h4>
                      <p className="preview-responsibilities">{workItem.responsibilities}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
