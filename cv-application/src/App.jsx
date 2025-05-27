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
  const [firstName, setFirstName] = useState('First');
  const [lastName, setLastName] = useState('Last');
  const [phoneNum, setPhoneNum] = useState('phone');
  const [email, setEmail] = useState('email');

  //states for education
  const [schoolName, setSchoolName] = useState('School');
  const [studyName, setStudyName] = useState('Area of Study');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');

  //states for work experience
  const [companyName, setCompanyName] = useState("");
  const [positionName, setPositionName] = useState("");
  const [mainResponsibilities, setMainResponsibilities] = useState("");
  const [dateStartWork, setDateStartWork] = useState("");
  const [dateEndWork, setDateEndWork] = useState("");

  return (
    <>
      <div className="app">
        <h1 className='app-title'>Resume Builder</h1>
        <div className="app-body">
          <div className="app-form-section">
            <h2>Input Your Details</h2>
            <div className="app-forms">
              <GeneralInfoForm first={firstName} setFirst={setFirstName} last={lastName} setLast={setLastName} phone={phoneNum} setPhone={setPhoneNum} mail={email} setMail={setEmail} />
              <EducationForm school={schoolName} setSchool={setSchoolName} study={studyName} setStudy={setStudyName} start={dateStart} setStart={setDateStart} end={dateEnd} setEnd={setDateEnd} />
              <WorkExperienceForm company={companyName} setCompany={setCompanyName} position={positionName} setPosition={setPositionName} responsibility={mainResponsibilities} setResponsibility={setMainResponsibilities} startWork={dateStartWork} setStartWork={setDateStartWork} endWork={dateEndWork} setEndWork={setDateEndWork} />
            </div>
          </div>
          <div className="displaySidebar">
            <div className="preview-gen-info">
              <h2 className='preview-name'>{firstName} {lastName}</h2>
              <h4 className="phone-email">{phoneNum}. {email}</h4>
            </div>
            <div className="preview-education">
              <h3 className="preview-education-title">Education</h3>
              <div className="study-and-year">
                <h4 className="preview-study">{studyName}</h4>
                <h4 className="preview-study-year">{dateEnd}</h4>
              </div>
              <h4>{schoolName}</h4>
            </div>
            <div className="preview-work-experience">
              <h3 className="work-title">Work Experience</h3>
              <div className="title-and-year">
                <h4 className="preview-position">{positionName}</h4>
                <h4 className="preview-position-dates">{dateStartWork}-{dateEndWork}</h4>
              </div>
              <h4 className="preview-company">{companyName}</h4>
              <p className="preview-responsibilities">{mainResponsibilities}</p>
            </div>
            {/* POPULATE THIS WITH VALUES FROM FORMS */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
