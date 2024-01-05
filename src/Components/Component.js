import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useState } from 'react';
export default function Component(props) {
    const [Copy, setCopy] = useState(false);
    return (
    <>
     <div className="container-fluid px-4 py-5">
        {/* alerts */}
        <div className=' border-over'>
     <h1 className="fw-bold fs-2 pt-3">Alerts</h1>
     <p className="text-secondary">Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
     </div>
     <h1 className="fw-bold fs-3 pt-3">Simple Alert</h1>
     <p className="text-secondary">Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight <code className="text-danger">variants</code>.</p>
     
     {/* Alerts Tab*/}
<div className="bg-light rounded-3">
<nav className='py-3 position-relative'>
  <div className="nav nav-tabs mx-2" id="nav-tab" role="tablist">
    <button className="nav-link active mx-2 " id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Design</button>
    <button className="nav-link mx-2 " id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Code</button>
<CopyToClipboard text={props.codealert} onCopy={()=>setCopy(true)}>
    <button className="btn btn-primary position-absolute end-0 mx-3 ">Copy</button>
</CopyToClipboard>
  </div>
</nav>
<div className="tab-content mx-2" id="nav-tabContent">
  <div className="tab-pane fade show active py-3" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
  <div className="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
<div className="alert alert-secondary" role="alert">
  A simple secondary alert—check it out!
</div>
<div className="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>
<div className="alert alert-danger" role="alert">
  A simple danger alert—check it out!
</div>
<div className="alert alert-warning" role="alert">
  A simple warning alert—check it out!
</div>
<div className="alert alert-info" role="alert">
  A simple info alert—check it out!
</div>
<div className="alert alert-light" role="alert">
  A simple light alert—check it out!
</div>
<div className="alert alert-dark" role="alert">
  A simple dark alert—check it out!
</div>
  </div>
  <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0"><pre className='bg-dark text-light m-2 p-2 rounded-3'>{props.codealert}</pre></div>
</div>
</div>
 {/* Badges */}
 <div className=' border-over my-3'>
     <h1 className="fw-bold fs-2 pt-3">Badges</h1>
     <p className="text-secondary">Documentation and examples for badges, our small count and labeling component.</p>
     </div>
        {/* Badges Tabs */}
        <div className="bg-light rounded-3">
<nav className='py-3 position-relative'>
  <div className="nav nav-tabs mx-2" id="nav-tab" role="tablist">
    <button className="nav-link active mx-2 " id="nav-badge-tab" data-bs-toggle="tab" data-bs-target="#nav-badge" type="button" role="tab" aria-controls="nav-badge" aria-selected="true">Design</button>
    <button className="nav-link mx-2 " id="nav-badgecode-tab" data-bs-toggle="tab" data-bs-target="#nav-badgecode" type="button" role="tab" aria-controls="nav-badgecode" aria-selected="false">Code</button>
<CopyToClipboard text={props.badge} onCopy={()=>setCopy(true)}>
    <button className="btn btn-primary position-absolute end-0 mx-3 ">Copy</button>
</CopyToClipboard>
  </div>
</nav>
<div className="tab-content mx-2" id="nav-tabContent">
  <div className="tab-pane fade show active py-3" id="nav-badge" role="tabpanel" aria-labelledby="nav-badge-tab" tabindex="0">
  <span className="badge text-bg-primary mx-2">Primary</span>
<span className="badge text-bg-secondary mx-2">Secondary</span>
<span className="badge text-bg-success mx-2">Success</span>
<span className="badge text-bg-danger mx-2">Danger</span>
<span className="badge text-bg-warning mx-2">Warning</span>
<span className="badge text-bg-info mx-2">Info</span>
<span className="badge text-bg-light mx-2">Light</span>
<span className="badge text-bg-dark mx-2">Dark</span>
  </div>
  <div className="tab-pane fade" id="nav-badgecode" role="tabpanel" aria-labelledby="nav-badgecode-tab" tabindex="0"><pre className='bg-dark text-light m-2 p-2 rounded-3'>{props.badge}</pre></div>
</div>
</div>
        
        </div> 
        
    </>
  )
}
