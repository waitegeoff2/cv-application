import { useState } from 'react';
import '../styles/EducationStyles.css'

export default function EducationForm() {
    const [schoolName, setSchoolName] = useState("");
    const [studyName, setStudyName] = useState("");
    const [dateStart, setDateStart] = useState("");
    const [dateEnd, setDateEnd] = useState("");

    function handleSchoolChange(e) {
        setSchoolName(e.target.value);
        
    }

    function handleStudyChange(e) {
        setStudyName(e.target.value);
    }

    function handleDateStartChange(e) {
        setDateStart(e.target.value);
    }

    function handleDateEndChange(e) {
        setDateEnd(e.target.value);
    }

    return (
        <div className="educationFormSection">
            <h2 className="educationTitle">Education</h2>
            <form className="educationForm" onSubmit={e => e.preventDefault()}>
                <input
                    placeholder='School'
                    value={schoolName}
                    onChange={handleSchoolChange}
                />
                <input
                    placeholder='Area of study'
                    value={studyName}
                    onChange={handleStudyChange}
                />
                <input
                    type="date"
                    placeholder='Date start'
                    value={dateStart}
                    onChange={handleDateStartChange}
                />
                <input
                    type="date"
                    placeholder='Date end'
                    value={dateEnd}
                    onChange={handleDateEndChange}
                />
            </form>
        </div>
    )

}

