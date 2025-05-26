import { useState } from 'react'
import './App.css'
import GeneralInfoForm from './components/GeneralInfo'
import EducationForm from './components/Education'
import WorkExperienceForm from './components/WorkExperience'


function App() {
  // you are adding STATE VARIABLES HERE (info, setinfo)
  //AND PASSING IT through general info form to get new variables which you display below
  //it's the same as how you did it in general info form with other variables
  //take info, change it to set info

  

  return (
    <>
      <div className="app">
        <h1>Resume Builder</h1>
        <div className="app-body">
          <div className="app-form-section">
            <h2>Input Details</h2>
            <div className="app-forms">
              <GeneralInfoForm />
            </div>
          </div>
          <div className="displaySidebar">
            <h2>Resume Preview</h2>
            <h3>General Information</h3>
            <h4></h4>
            {/* POPULATE THIS WITH VALUES FROM FORMS */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
