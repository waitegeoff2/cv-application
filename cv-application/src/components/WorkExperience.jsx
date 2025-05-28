import { useState } from 'react';
import '../styles/WorkExperienceStyles.css'

export default function WorkExperienceForm({workExperience, setWorkExperience}) {

    function handleChange(index, value, field) {
        const newWork = [...workExperience]
        newWork[index][field] = value
        setWorkExperience(newWork)
    }

    function handleNewWork() {
        setWorkExperience([...workExperience, {company: '', position: '', responsibilities: '', startDate: '', endDate: '',}])
    }

    function handleRemoveWork() {

    }

    return (
        <div className="workFormSection">
        <h2 className="workTitle">Work Experience</h2>
            {workExperience.map((workSet, index) => {
                return(
                <div key={index} className="work-form-gen">
                    <form className="workForm" onSubmit={e => e.preventDefault()}>
                        <input
                            placeholder='Company'
                            value={workSet.company}
                            onChange={(e) => handleChange(index, e.target.value, "company")}
                        />
                        <input
                            placeholder='Position'
                            value={workSet.position}
                            onChange={(e) => handleChange(index, e.target.value, "position")}
                        />
                        <textarea
                            placeholder='Main responsibilities'
                            value={workSet.responsibilities}
                            onChange={(e) => handleChange(index, e.target.value, "responsibilities")}
                        />
                        <input
                            type="number"
                            placeholder='year start'
                            value={workSet.startDate}
                            onChange={(e) => handleChange(index, e.target.value, "startDate")}
                        />
                        <input
                            type="number"
                            placeholder='year end'
                            value={workSet.endDate}
                            onChange={(e) => handleChange(index, e.target.value, "endDate")}
                        />
                        <button onClick={handleNewWork}>Add new</button>
                        <button onClick={handleRemoveWork}>Remove section</button>
                    </form>
                </div>
                )
            })}
        </div>
    )

}

