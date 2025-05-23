import { useState } from 'react'
import './App.css'
import GeneralInfoForm from './components/GeneralInfo'
import EducationForm from './components/Education'
import WorkExperienceForm from './components/WorkExperience'


function App() {

  return (
    <>
      <div className="app">
        <h1>Resume Builder</h1>
        <div className="app-body">
          <div className="app-form-section">
            <h2>Input Details</h2>
            <div className="app-forms">
              <GeneralInfoForm />
              <EducationForm />
              <WorkExperienceForm />
            </div>
          </div>
          <div className="displaySidebar">
            <h2>Resume Preview</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
