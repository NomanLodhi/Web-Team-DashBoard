import React from 'react'

export default function Navigation(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary  sticky-nav position-sticky">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className='fw-bold text-primary'>{props.hash}</span> Dev Team</a>
  <button onClick={props.Toggle} className={`btn`}><i className={`bi bi-${props.iconChange} fw-bold fs-3`}></i></button>
  <form className="d-flex" role="search">
      <input className="form-control mx-2" type="search" placeholder="Search" aria-label="Search"/>
    </form>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <div className="navbar-nav mx-auto container"></div>
      <div className="d-flex" role="search">
      <div className="dropdown">
  <button className="btn btn-transparent  dropdown-toggle position-relative" role="button" >
   <img src={props.profile} width={50} className='shadow rounded-circle' alt="" />
   <div className="position-absolute bg-success p-1 rounded-circle end-note"></div> 
  </button>

 
</div>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
