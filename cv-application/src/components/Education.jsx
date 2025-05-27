import { useState } from 'react';
import '../styles/EducationStyles.css'

export default function EducationForm({school, setSchool, study, setStudy, start, setStart, end, setEnd}) {

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

    return (
        <div className="educationFormSection">
            <h2 className="educationTitle">Education</h2>
            <form className="educationForm" onSubmit={e => e.preventDefault()}>
                <input
                    placeholder='School'
                    value={school}
                    onChange={handleSchoolChange}
                />
                <input
                    placeholder='Area of study'
                    value={study}
                    onChange={handleStudyChange}
                />
                <input
                    type="number"
                    placeholder='Year started'
                    value={start}
                    onChange={handleDateStartChange}
                />
                <input
                    type="number"
                    placeholder='Year finished'
                    value={end}
                    onChange={handleDateEndChange}
                />
            </form>
        </div>
    )

}

