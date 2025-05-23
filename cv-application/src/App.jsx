import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GeneralInfoForm from './components/GeneralInfo'
import EducationForm from './components/Education'
import WorkExperienceForm from './components/WorkExperience'


function App() {

  return (
    <>
      <div>
        <GeneralInfoForm />
        <EducationForm />
        <WorkExperienceForm />
      </div>
    </>
  )
}

export default App
