import '../styles/EducationStyles.css'

export default function EducationForm({eduInfo, setEduInfo}) {

    //first, copies the state array cause we don't mutate arrays
    //goes to the index and field(object property) and then changes that to the value
    //set the state to the new array with the new value
    console.log(eduInfo)
    
    function handleChange(index, value, field) {
        //copy and update, don't mutate original
        const newEducation = [...eduInfo];
        newEducation[index][field] = value;
        setEduInfo(newEducation)   
    }

    function handleNewEducation() {
        setEduInfo([...eduInfo, {school: '', study: '', startDate: '', endDate: '',}])
    }

    function handleRemoveEducation(index) {
        //going into the eduinfo array and splicing out that index
        const newEducation = [...eduInfo]
        newEducation.splice(index, 1)
        setEduInfo(newEducation)
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
                        <button onClick={() => handleRemoveEducation(index)}>Remove section</button>
                    </form>
                </div>
                )
            })}
        </div>
    )

}

