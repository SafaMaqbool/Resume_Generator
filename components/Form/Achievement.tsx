import React from 'react'

const Achievement = () => {
  return (
    <>
    <h1>Achievements</h1>
    <div>
        <label htmlFor="achievement">Achievement</label>
        <input type="text" id="achievement" name='achievement' />
    </div>

    <div>
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description"></textarea>
    </div>
    

    </>
  )
}

export default Achievement