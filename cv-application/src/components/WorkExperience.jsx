import { useState } from 'react';
import '../styles/WorkExperienceStyles.css'

export default function WorkExperienceForm({company, setCompany, position, setPosition, responsibility, setResponsibility, startWork, setStartWork, endWork, setEndWork}) {

    function handleCompanyChange(e) {
        setCompany(e.target.value); 
    }

    function handlePositionChange(e) {
        setPosition(e.target.value);
    }

    function handleResponsibilitiesChange(e) {
        setResponsibility(e.target.value);
    }

    function handleDateStartWorkChange(e) {
        setStartWork(e.target.value);
    }

    function handleDateEndWorkChange(e) {
        setEndWork(e.target.value);
    }

    return (
        <div className="workFormSection">
            <h2 className="workTitle">Work Experience</h2>
            <form className="workForm" onSubmit={e => e.preventDefault()}>
                <input
                    placeholder='Company'
                    value={company}
                    onChange={handleCompanyChange}
                />
                <input
                    placeholder='Position'
                    value={position}
                    onChange={handlePositionChange}
                />
                <textarea
                    placeholder='Main responsibilities'
                    value={responsibility}
                    onChange={handleResponsibilitiesChange}
                />
                <input
                    type="number"
                    placeholder='year start'
                    value={startWork}
                    onChange={handleDateStartWorkChange}
                />
                <input
                    type="number"
                    placeholder='year end'
                    value={endWork}
                    onChange={handleDateEndWorkChange}
                />
            </form>
        </div>
    )

}

