import { useState } from 'react';
import '../styles/EducationStyles.css'

export default function EducationForm({eduInfo, setEduInfo}) {
    //school, setSchool, study, setStudy, start, setStart, end, setEnd
    let index = 0;
    //something to change the value of each one. takes the INDEX OF IT
    //something to add a new one with its own index value. 
    console.log(eduInfo)

    function handleChange(index, value, field) {
        //copy and update, don't mutate original
        const newEducation = [...eduInfo];
        newEducation[index][field] = value;
        setEduInfo(newEducation)   
    }

    function handleSchoolChange(e) {
        setSchool(e.target.value);
        
    }

    function handleStudyChange(e) {
        setStudy(e.target.value);
    }

    function handleDateStartChange(e) {
        setStart(e.target.value);
    }

    function handleDateEndChange(e) {
        setEnd(e.target.value);
    }

    function handleEdit() {
        setEduInfo([{school: '', study: '', startDate: '', endDate: '',}])
    }

    function handleNewEducation() {
        setEduInfo([...eduInfo, {school: '', study: '', startDate: '', endDate: '',}])
    }

    function handleRemoveEducation() {

    }

    return (
        //MAP the educationinfo array and return an input for each section
        //input that below the form
        <div className="educationFormSection">
        <h2 className="educationTitle">Education</h2>
            {eduInfo.map((eduSet, index)=> {
                return(
                <div key={index} className="education-form-gen">
                    <form className="educationForm" onSubmit={e => e.preventDefault()}>
                        <input
                            placeholder='School'
                            value={eduSet.school}
                            onChange={(e) => handleChange(index, e.target.value, "school")}
                        />
                        <input
                            placeholder='Area of study'
                            value={eduSet.study}
                            onChange={(e) => handleChange(index, e.target.value, "study")}
                        />
                        <input
                            type="number"
                            placeholder='Year started'
                            value={eduSet.startDate}
                            onChange={(e) => handleChange(index, e.target.value, "startDate")}
                        />
                        <input
                            type="number"
                            placeholder='Year finished'
                            value={eduSet.endDate}
                            onChange={(e) => handleChange(index, e.target.value, "endDate")}
                        />
                        {/* <button onClick={handleEdit}>Restart section</button> */}
                        <button onClick={handleNewEducation}>Add new</button>
                        <button onClick={handleRemoveEducation}>Remove section</button>
                    </form>
                </div>
                )
            })}
        </div>
    )

}

