import React from 'react'
import './Style.css'

export const Song = () => {
  return (
    <div className='songdiv'>
        <div className='title'>
            <div className='title1'><p className='p'>Artwork</p></div>
            <div className='title1'><p className='p'>Song</p></div>
            <div className='title1'><p className='p'>Date of Release</p></div>
            <div className='title1'><p className='p'>Artists</p></div>
            <div className='title1'><p className='p'>Rate</p></div>
        </div>
        <div className='main'>
            <div className='main1'><img src="https://yt3.ggpht.com/ytc/AMLnZu-0IsaFrJsFdnbeeLMx2x2ziGsa-RAy5QUnWPsh=s900-c-k-c0x00ffffff-no-rj" alt="" /></div>
            <div className='main1'>SOmeone you loved</div>
            <div className='main1'>July 21, 2019</div>
            <div className='main1'>Lewis Capali</div>
            <div className='main1'></div>
        </div>
        <div className='main'>
            <div className='main1'><img src="https://yt3.ggpht.com/ytc/AMLnZu-0IsaFrJsFdnbeeLMx2x2ziGsa-RAy5QUnWPsh=s900-c-k-c0x00ffffff-no-rj" alt="" /></div>
            <div className='main1'>SOmeone you loved</div>
            <div className='main1'>July 21, 2019</div>
            <div className='main1'>Lewis Capali</div>
            <div className='main1'></div>
        </div>
    </div>
  )
}

