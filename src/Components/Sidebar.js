import React from 'react'
import { Outlet,Link } from 'react-router-dom'
export default function Sidebar(props) {
  return (
    <div className={` transform${props.transform}`}>
 
    <div className="list-group rounded-0" id="list-tab" role="tablist">
      <a className="list-group-item p-3 py-5 list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home"><i class="bi bi-house-door-fill  fs-4"></i>
      <span className='fw-bold fs-4 d-desc mx-2'>Home</span></a>
      <a className="list-group-item p-3 py-5 list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">
      <i class="bi bi-person-fill  fs-4"></i>
        <span className='fw-bold fs-4 d-desc mx-2'>Profile</span></a>
      <a className="list-group-item p-3 py-5 list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">
      <i class="bi bi-file-earmark-fill  fs-4"></i>
        <span className='fw-bold fs-4 d-desc mx-2'>Components</span></a>
      <a className="list-group-item p-3 py-5 list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">
      <i class="bi bi-cloud-download-fill  fs-4"></i>
        <span className='fw-bold fs-4 d-desc mx-2'>Download</span></a>
    </div>
  
    </div>


  )
}
