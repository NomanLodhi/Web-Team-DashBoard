import React from 'react'
export default function Dashboard(props) {
  return (
    <>
    <div className='container-fluid p-0' >
     <div className="position-relative h-relative">
     <div className='bg-cyan p-5 h-bg px-2 '>
        <div className="d-flex position-relative">
            <h1 className="text-light px-3 fw-bold">Projects</h1>
        <button className="position-absolute btn btn-light fw-bold end-0 mx-3 shadow-sm">Create New Project</button>
        </div>
      </div>
      {/* Cards Section */}
      <div className="container-fluid position-absolute cards-pos  ">
        <div className="row px-2">
            <div className="col-lg-3 col-md-6 p-3">
                <div className="card shadow-sm p-4 position-relative"><div className="head d-flex"><h5 className='fw-bold'>Projects</h5> <i class="bi bi-bag-check-fill position-absolute end-0 mx-3 bg-cyan-op p-1 px-2 rounded-3 text-ico"></i>
                </div>
                <p className="fs-1 fw-bolder">18</p>
                <p className="text-secondary">2 Completed</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 p-3">
                <div className="card shadow-sm p-4"><div className="head d-flex"><h5 className='fw-bold'>Active Task</h5> <i class="bi bi-list-check position-absolute end-0 mx-3 bg-cyan-op p-1 px-2 rounded-3 text-ico"></i></div>
                <p className="fs-1 fw-bolder">132</p>
                <p className="text-secondary">28 Completed</p></div>
            </div>
            <div className="col-lg-3 col-md-6 p-3">
                <div className="card shadow-sm p-4"><div className="head d-flex"><h5 className='fw-bold'>Teams</h5> <i class="bi bi-people position-absolute end-0 mx-3 bg-cyan-op p-1 px-2 rounded-3 text-ico"></i></div> <p className="fs-1 fw-bolder">12</p>
                <p className="text-secondary">1 Completed</p></div>
            </div>
            <div className="col-lg-3 col-md-6 p-3">
                <div className="card shadow-sm p-4"><div className="head d-flex"><h5 className='fw-bold'>Productivity</h5> <i class="bi bi-cpu-fill position-absolute end-0 mx-3 bg-cyan-op p-1 px-2 rounded-3 text-ico"></i></div> <p className="fs-1 fw-bolder">76%</p>
                <p className="text-secondary">5% Completed</p></div>
            </div>
        </div>
    
            {/* Table */}
        <div className="container-fluid px-3">
        <ul class="list-group overflow-scroll scroll-bar-set">
  <li class="list-group-item p-3 w-table">
    <h4 className='fw-bold'>Active Projects</h4>
  </li>
  <li class="list-group-item p-3 bg-primary-subtitle w-table">
  <div className="row">
        <div className="col-6">
            <p className="text-secondary fw-bold">Project Name</p>
        </div>
        <div className="col-6">
            <div className="row">
                <div className="col-3"><p className="text-secondary fw-bold">Hours</p></div>
                <div className="col-3"><p className="text-secondary fw-bold">Priority</p></div>
                <div className="col-3"><p className="text-secondary fw-bold">
                    Members</p></div>
                <div className="col-3"><p className="text-secondary fw-bold">
      Progress</p></div>
            </div>
        </div>
    </div></li>
  <li class="list-group-item p-3 w-table">
  <div className="row">
        <div className="col-6">
        <div className="d-flex align-item-center"><img src={props.github} width={40} height={40} alt=""/>
        <p className="fw-bold px-2 my-2 ">GitHub Satellite</p>
        </div>
        </div>
        <div className="col-6">
            <div className="row">
                <div className="col-3"><p className="text-secondary fw-bold">34</p></div>
                <div className="col-3"><p className="text-secondary fw-bold"><span class="badge text-bg-warning text-light">Medium</span></p></div>
                <div className="col-3"><p className="text-secondary fw-bold">
                    <div className="d-flex position-relative">
                    <img src={props.member4}className="img-members member-1" alt="" />
                    <img src={props.member2}className="img-members member-2" alt="" />
                    <img src={props.member3}className="img-members member-3" alt="" />
                    <img src={props.member1}className="img-members member-4" alt="" />
                    <p className="img-members member-5 bg-primary text-center fw-bold text-light" alt="" >+5</p>
                    </div></p></div>
                <div className="col-3"><p className="text-secondary fw-bold ">
                    50%</p>
                    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style={{width:50+'%'}}></div>
</div></div>
            </div>
        </div>
    </div>
  </li>
  <li class="list-group-item p-3 w-table">
  <div className="row">
        <div className="col-6">
          <div className="d-flex align-item-center"><img src={props.dropbox} width={40} height={40} alt="" />
           <p className="fw-bold px-2 my-2 ">Drop box Design System</p></div>
        </div>
        <div className="col-6">
            <div className="row">
                <div className="col-3"><p className="text-secondary fw-bold">12</p></div>
                <div className="col-3"><p className="text-secondary fw-bold"><span class="badge text-bg-danger text-light">High</span></p></div>
                <div className="col-3"><p className="text-secondary fw-bold">
                <div className="d-flex position-relative">
                    <img src={props.member3}className="img-members member-1" alt="" />
                    <img src={props.member2}className="img-members member-2" alt="" />
                    <img src={props.member1}className="img-members member-3" alt="" />
                    <img src={props.member4}className="img-members member-4" alt="" />
                    <p className="img-members member-5 bg-primary text-center fw-bold text-light" alt="" >+5</p>
                    </div></p></div>
                <div className="col-3"><p className="text-secondary fw-bold">15%</p><div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style={{width:15 + '%'}}></div>
</div></div>
            </div>
        </div>
    </div>
  </li>
  <li class="list-group-item p-3 w-table">
  <div className="row">
        <div className="col-6">
        <div className="d-flex"><img src={props.twitter} width={40} height={40} alt="" />
        <p className="fw-bold px-2 my-2 ">Twitter Debugging</p></div>
        </div>
        <div className="col-6">
            <div className="row">
                <div className="col-3"><p className="text-secondary fw-bold">30</p></div>
                <div className="col-3"><p className="text-secondary fw-bold"><span class="badge text-bg-primary">Low</span></p></div>
                <div className="col-3"><p className="text-secondary fw-bold">
                <div className="d-flex position-relative">
                    <img src={props.member2}className="img-members member-1" alt="" />
                    <img src={props.member1}className="img-members member-2" alt="" />
                    <img src={props.member3}className="img-members member-3" alt="" />
                    <img src={props.member4}className="img-members member-4" alt="" />
                    <p className="img-members member-5 bg-primary text-center fw-bold text-light" alt="" >+5</p>
                    </div></p></div>
                <div className="col-3"><p className="text-secondary fw-bold">75%</p><div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style={{width:75 + '%'}}></div>
</div></div>
            </div>
        </div>
    </div>
  </li>
  <li class="list-group-item p-3 w-table">
  <div className="row">
        <div className="col-6">
        <div className="d-flex"><img src={props.tesla} width={40} height={40} alt="" />
         <p className="fw-bold px-2 my-2 ">Tesla Portal</p></div>
        </div>
        <div className="col-6">
            <div className="row">
                <div className="col-3"><p className="text-secondary fw-bold">40</p></div>
                <div className="col-3"><p className="text-secondary fw-bold"><span class="badge text-bg-warning text-light">Medium</span></p></div>
                <div className="col-3"><p className="text-secondary fw-bold">
                    <div className="d-flex position-relative">
                    <img src={props.member3}className="img-members member-1" alt="" />
                    <img src={props.member2}className="img-members member-2" alt="" />
                    <img src={props.member1}className="img-members member-3" alt="" />
                    <img src={props.member4}className="img-members member-4" alt="" />
                    <p className="img-members member-5 bg-primary text-center fw-bold text-light" alt="" >+5</p>
                    </div></p></div>
                <div className="col-3"><p className="text-secondary fw-bold">30%</p><div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style={{width:30 + '%'}}></div>
</div></div>
            </div>
        </div>
    </div>
  </li>
  <li class="list-group-item p-3 w-table">
      <div className="row">
        <div className="col-6">
        <div className="d-flex"><img src={props.stack} width={40} height={40} alt="" />
         <p className="fw-bold px-2 my-2 ">Full stack Application</p></div>
        </div>
        <div className="col-6">
            <div className="row">
                <div className="col-3"><p className="text-secondary fw-bold">29</p></div>
                <div className="col-3"><p className="text-secondary fw-bold"><span class="badge text-bg-success">Track</span></p></div>
                <div className="col-3">
                    <div className="d-flex position-relative">
                    <img src={props.member1}className="img-members member-1" alt="" />
                    <img src={props.member1}className="img-members member-2" alt="" />
                    <img src={props.member3}className="img-members member-3" alt="" />
                    <img src={props.member4}className="img-members member-4" alt="" />
                    <p className="img-members member-5 bg-primary text-center fw-bold text-light" alt="" >+5</p>
                    </div>
                    </div>
                <div className="col-3"><p className="text-secondary fw-bold">90%</p><div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style={{width:90 + '%'}}></div>
</div></div>
            </div>
        </div>
    </div>
  </li>
  

</ul>
        </div>
 {/* graph */}
 <div className="container-fluid py-5 my-2">
    <div className="row">
        <div className="col-lg-4 my-2">
        <div className="card shadow-lg d-flex justify-content-center align-items-center ">
            <div className="w-100 position-relative py-3">
                <span className='p-4 fw-bold fs-5'>Task Performance</span>
                <span className='position-absolute end-0 mx-3'><i class="bi bi-three-dots-vertical"></i></span>
                </div>
        <div className="box-1 mt-4">
                <div className="box-2 ">
                    <div className="box-3 "></div>
                </div>
            </div>
            <div className="d-flex align-item-center justify-content-center">
                <div className=" text-center mx-3 my-2">
                    <p><i class="bi bi-check-circle fs-3" style={{color:'blue'}}></i></p>
                    <h1 className="fs-2 fw-bold">76%</h1>
                    <p className="text-secondary">Completed</p>
                    </div>
                <div className=" text-center mx-3 my-2">
                     <p><i class="bi bi-graph-up-arrow fs-3" style={{color:'green'}}></i></p>
                    <h1 className="fs-2 fw-bold">32%</h1>
                    <p className="text-secondary">In-progress</p>
                </div>
                <div className=" text-center mx-3 my-2">
                     <p><i class="bi bi-graph-down-arrow fs-3" style={{color:'red'}}></i></p>
                    <h1 className="fs-2 fw-bold">13%</h1>
                    <p className="text-secondary">Behind</p>
                </div>
            </div>
        </div>
        </div>
 {/* graph end */}
  {/*Team  */}
        <div className="col-lg-8 my-2">
        <ul class="list-group overflow-scroll scroll-bar-set shadow-lg">
  <li class="list-group-item p-3 w-table">
    <h4 className='fw-bold'>Teams</h4>
  </li>
  <li class="list-group-item p-3 bg-primary-subtitle w-table">
  <div className="row">
        <div className="col-5">
            <p className="text-secondary fw-bold">Name</p>
        </div>
        <div className="col-6">
            <div className="row">
                <div className="col-5"><p className="text-secondary fw-bold">Role</p></div>
                <div className="col-5"><p className="text-secondary fw-bold">Last Activity</p></div>
               
                
            </div>
        </div>
    </div></li>
  <li class="list-group-item p-3 w-table">
  <div className="row">
        <div className="col-5">
        <div className="d-flex align-item-center"><img src={props.member1} className='rounded-circle' width={40} height={40} alt=""/>
        <div>
        <p className="fw-bold px-2 m-0 fs-5">Fazal Khan</p>
        <p className="px-2 text-secondary">FazalKhan123@gmail.com</p>
        </div>
        </div>
        </div>
        <div className="col-6">
            <div className="row position-relative">
                <div className="col-5"><p className="text-secondary fw-bold">Front-End Developer</p></div>
                <div className="col-3"><p className="text-secondary fw-bold">28 11 2023</p></div>
                <div className="col-4"><span className="text-secondary fw-bold position-absolute end-0">
                <i class="bi bi-three-dots-vertical"></i></span>
                  </div>
              
            </div>
        </div>
    </div>
  </li>
  <li class="list-group-item p-3 w-table">
  <div className="row">
  <div className="col-5">
        <div className="d-flex align-item-center"><img src={props.member2} className='rounded-circle' width={40} height={40} alt=""/>
        <div>
        <p className="fw-bold px-2 m-0 fs-5">Abdul Rahman</p>
        <p className="px-2 text-secondary">A.Rahman123@gmail.com</p>
        </div>
        </div>
        </div>
        <div className="col-6">
            <div className="row position-relative">
                <div className="col-5"><p className="text-secondary fw-bold">Front-End Developer</p></div>
                <div className="col-3"><p className="text-secondary fw-bold">20 09 2023</p></div>
                <div className="col-4"><span className="text-secondary fw-bold position-absolute end-0">
                <i class="bi bi-three-dots-vertical"></i></span>
                  </div>
              
            </div>
        </div>
    </div>
  </li>
  <li class="list-group-item p-3 w-table">
  <div className="row">
  <div className="col-5">
        <div className="d-flex align-item-center"><img src={props.member3} className='rounded-circle' width={40} height={40} alt=""/>
        <div>
        <p className="fw-bold px-2 m-0 fs-5">Andrew Fernandiz</p>
        <p className="px-2 text-secondary">Andrew 123@gmail.com</p>
        </div>
        </div>
        </div>
        <div className="col-6">
            <div className="row position-relative">
                <div className="col-5"><p className="text-secondary fw-bold">Back-End Developer</p></div>
                <div className="col-3"><p className="text-secondary fw-bold">18 08 2023</p></div>
                <div className="col-4"><span className="text-secondary fw-bold position-absolute end-0">
                <i class="bi bi-three-dots-vertical"></i></span>
                  </div>
              
            </div>
        </div>
    </div>
  </li>
  <li class="list-group-item p-3 w-table">
  <div className="row">
  <div className="col-5">
        <div className="d-flex align-item-center"><img src={props.member4} className='rounded-circle' width={40} height={40} alt=""/>
        <div>
        <p className="fw-bold px-2 m-0 fs-5">Maham Faisal</p>
        <p className="px-2 text-secondary">Mahii123@gmail.com</p>
        </div>
        </div>
        </div>
        <div className="col-6">
            <div className="row position-relative">
                <div className="col-5"><p className="text-secondary fw-bold">Full Stack Developer</p></div>
                <div className="col-3"><p className="text-secondary fw-bold">20 10 2023</p></div>
                <div className="col-4"><span className="text-secondary fw-bold position-absolute end-0">
                <i class="bi bi-three-dots-vertical"></i></span>
                  </div>
              
            </div>
        </div>
    </div>
  </li>
 
  

</ul>
        </div>
    </div>
 </div>
     
            </div>  
      </div>
        </div>   

    </>
  )
}
