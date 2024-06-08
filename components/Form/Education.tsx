import React from 'react'

const Education = () => {
  return (
    <>
    <div>Education</div>

    <div>
        <label htmlFor="school">School</label>
        <input type="text" id="school" name='school' />
    </div>

    <div>
        <label htmlFor="degree">Degree</label>
        <input type="text" id='degree' name='degree' />
    </div>

    <div>
        <label htmlFor="startDate">Start Date</label>
        <input type="text"  name="startDate" id="startDate" />
    </div>

    <div>
        <label htmlFor="endDate">End Date</label>
        <input type="text" id='endDate' name='endDate' />
    </div>

    <div>
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description"></textarea>
    </div>
    
    </>
  )
}

export default Education