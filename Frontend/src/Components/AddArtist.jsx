import React from 'react';
import "./AddArtist.css"

const AddArtist = () => {
  return (
    <div className='addArtist'>
        <div>
            <p>Add Artist</p>
        </div>
        <hr />
        <div>
            <form className='form'>
                <label>Artist Name</label>
                <input type="text" className='aName' /> <br />
                <label>Date of Birth</label>
                <input type="date" name="" id=""className='date'/> <br />
                <label>bio</label>
                <input type="text" name="" id="" className='bio'/> <br />
                <button className='cancel'>Cancel</button>
                <button className='done'>Done</button>
            </form>
        </div>
    </div>
  )
}

export default AddArtist