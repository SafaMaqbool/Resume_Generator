import React from 'react'

const Skills = () => {
  return (
    <>
    <h1>Skills</h1>

    <div>
        <label htmlFor="skill">Skill</label>
        <input type="text" id='skill' name='skill' />
    </div>

    <div>
        <label htmlFor="proficiency">Proficiency</label>
        <input type="range" id='proficieny' name='proficieny' />

    </div>

    <div>
        <label htmlFor="years">Years</label>
        <input type="number" id='years' name='years' />
    </div>
    </>
  )
}

export default Skills