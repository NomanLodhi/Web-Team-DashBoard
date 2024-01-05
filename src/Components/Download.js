import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { useState } from 'react';
export default function Download(props) {
    const [Copy, setCopy] = useState(false);
  return (
    <>
      <div className="container-fluid px-4 py-5">
        {/* alerts */}
        <div className=' border-over my-2'>
     <h1 className="fw-bold display-5 pt-3">Download from Github</h1>
     <p className="text-secondary fs-5">Easy Download from Github</p>
     </div>
     <div className="bg-light rounded-3 p-3">
        <div className="position-relative py-3">
            <span className="fw-bold fs-5">Copy To Clipboard</span>
            <CopyToClipboard text={props.downloadtxt} onCopy={()=>setCopy(true)}>
            <button className='position-absolute end-0 btn btn-primary'>Copy</button>
            </CopyToClipboard>
           
        </div>
     <div className="bg-dark text-light rounded-3 py-5 px-3">
        <code>{props.downloadtxt}</code>
     </div>
     </div>
   </div>
    </>
  )
}
