import { useState } from 'react';
import '../styles/WorkExperienceStyles.css'

export default function WorkExperienceForm() {
    const [companyName, setCompanyName] = useState("");
    const [positionName, setPositionName] = useState("");
    const [dateStartWork, setDateStartWork] = useState("");
    const [mainResponsibilities, setMainResponsibilities] = useState("");
    const [dateEndWork, setDateEndWork] = useState("");

    function handleCompanyChange(e) {
        setCompanyName(e.target.value); 
    }

    function handlePositionChange(e) {
        setPositionName(e.target.value);
    }

    function handleResponsibilitiesChange(e) {
        setMainResponsibilities(e.target.value);
    }

    function handleDateStartWorkChange(e) {
        setDateStartWork(e.target.value);
    }

    function handleDateEndWorkChange(e) {
        setDateEndWork(e.target.value);
    }

    return (
        <div className="workFormSection">
            <h2 className="workTitle">Work Experience</h2>
            <form className="workForm" onSubmit={e => e.preventDefault()}>
                <input
                    placeholder='Company'
                    value={companyName}
                    onChange={handleCompanyChange}
                />
                <input
                    placeholder='Position'
                    value={positionName}
                    onChange={handlePositionChange}
                />
                <textarea
                    placeholder='Main responsibilities'
                    value={mainResponsibilities}
                    onChange={handleResponsibilitiesChange}
                />
                <input
                    type="date"
                    placeholder='Date start'
                    value={dateStartWork}
                    onChange={handleDateStartWorkChange}
                />
                <input
                    type="date"
                    placeholder='Date end'
                    value={dateEndWork}
                    onChange={handleDateEndWorkChange}
                />
            </form>
        </div>
    )

}

