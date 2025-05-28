import { useState } from 'react'
import './App.css'
import GeneralInfoForm from './components/GeneralInfo'
import EducationForm from './components/Education'
import WorkExperienceForm from './components/WorkExperience'


function App() {
  //states for general info
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [email, setEmail] = useState('');

  //states for education
  //make this an ARRAY so i can add to it
  const [educationInfo, setEducationInfo] = useState([{
    school: '',
    study: '',
    startDate: '',
    endDate: ''
  }])
  // const [schoolName, setSchoolName] = useState('');
  // const [studyName, setStudyName] = useState('');
  // const [dateStart, setDateStart] = useState('');
  // const [dateEnd, setDateEnd] = useState('');

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
                       {/*  <EducationForm school={schoolName} setSchool={setSchoolName} study={studyName} setStudy={setStudyName} start={dateStart} setStart={setDateStart} end={dateEnd} setEnd={setDateEnd} /> */}
              <EducationForm eduInfo={educationInfo} setEduInfo={setEducationInfo} />
              <WorkExperienceForm company={companyName} setCompany={setCompanyName} position={positionName} setPosition={setPositionName} responsibility={mainResponsibilities} setResponsibility={setMainResponsibilities} startWork={dateStartWork} setStartWork={setDateStartWork} endWork={dateEndWork} setEndWork={setDateEndWork} />
            </div>
          </div>
          <div className="displaySidebar">
            <div className="preview-gen-info">
              <h2 className='preview-name'>{firstName} {lastName}</h2>
              <h4 className="phone-email">{phoneNum}. {email}</h4>
            </div>
            <div className="preview-education">
              <h3 className="section-title">Education</h3>
              <div className="edu-gen-items">
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
