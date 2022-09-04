import React from 'react';
import "./AddSong.css"

const AddSong = () => {
  return (
    <div>
        <div className='addsong'><h2>Adding a new Song</h2></div>
        <div className='addsong1'>
        <form className='addsongform'> 
            <label>Song Name</label> 
            <input type="text" className='songname' /> <br />
            <label>Date Release</label> 
            <input type="text" className='daterelease'/> <br />
            <label>Artwork</label> 
            <input type="file" className='file' name='Upload Image'/> <br />
            <label>Artists</label> 
            <input type="text" className='artists'/> 
            <button className='addartist'>Add Artist</button> <br />
            <button className='Cancel'>Cancel</button>
            <button className='Save'>Save</button>

        </form>
        </div>
    </div>
  )
}

export default AddSong