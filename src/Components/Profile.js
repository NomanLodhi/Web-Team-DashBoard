import React from 'react'

export default function Profile(props) {
  return (
    <>
      <div className="container-fluid px-4 p-2">
        <h1 className="fw-bold fs-3 py-3 border-over">Overview</h1>
        <div className="profile-container position-relative my-5 shadow-lg rounded-bottom">
            <div className="bg-profile m-0 rounded-top"></div>
                
            <div className="profile-section-footer bg-light ">
                {/* Profile Picture and Name Container */}
        <div className="position-profile d-flex">
        <div className="btn btn-transparent  dropdown-toggle position-relative" role="button" >
   <img src={props.profile} width={150} height={150} className='mx-2 shadow rounded-circle' alt="" />
   <div className="position-absolute bg-success p-1 rounded-circle end-note-pro"></div> 
  </div>
  <div className='pt-pro'>
    <p className="fs-2 fw-bold">Noman Lodhi</p>
    <p className="text-secondary">@nomanlodhi348</p>
    </div>
        </div>
            </div>
{/* Custom Tab */}
            <div className="custom-tab  d-flex overflow-scroll scroll-bar-set" >
    <span className="tab-item-1 mx-2 p-3">Overview</span>
    <span className="tab-item mx-2 p-3">Projects</span>
    <span className="tab-item mx-2 p-3">Files</span>
    <span className="tab-item mx-2 p-3">Teams</span>
    <span className="tab-item mx-2 p-3">Followers</span>
    <span className="tab-item mx-2 p-3">Activity</span>
</div>
        </div>
      <div className="row my-3 px-3">
<div className="col-lg-6 py-2">
<div className=" p-2 rounded-3 bg-light shadow-lg px-3">
<h1 className="fw-bold fs-4 py-3" >About Me</h1>
<p className="fw-bold py-1" >BIO</p>
<p className="text-secondary py-1" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam harum cupiditate repudiandae commodi illum temporibus placeat et officia eius porro voluptate exercitationem, perferendis quo facere! Eius nobis architecto omnis doloribus.</p>
<p className="fw-bold fs-5" >Postion</p>
<p className="text-secondary">Theme Design Builder At Tailwind CSS</p>
<div className="row">
    <div className="col-lg-6 py-2">
<p className="fw-bold fs-5" >Phone</p>
<p className="text-secondary">+92-12345789</p>
    </div>
    <div className="col-lg-6 py-2">
<p className="fw-bold fs-5" >Email</p>
<p className="text-secondary">nomanlodhi348@gmail.com</p>
    </div>
    <div className="col-lg-6 py-2">
<p className="fw-bold fs-5" >Date Of Birth</p>
<p className="text-secondary">10-08-2002</p>
    </div>
    <div className="col-lg-6 py-2">
<p className="fw-bold fs-5" >Location</p>
<p className="text-secondary">Karachi, Pakistan</p>
    </div>

</div>
</div>
</div>
<div className="col-lg-6 p-2">
<div className="px-3 p-2 bg-light rounded-3 shadow-lg">
    <p className='fs-5 fw-bold px-4 py-3'>Projects Contributions</p>
    <ul className='overflow-scroll scroll-bar-set'>

<li class="list-group-item p-3 w-table">
  <div className="row ">
        <div className="col-9">
        <div className="d-flex align-item-center"><img src={props.github} width={50} height={50}  alt=""/>
        <div style={{lineHeight:10+'px',paddingTop:10+'px'}}>
        <p className="fw-bold px-2 ">GitHub Satellite</p>
        <span className="text-secondary px-2 ">Project description and details about...</span>
        </div>
        </div>
        </div>
        <div className="col-3">
            <div className="row">
           
                <div className="col-6"><p className="text-secondary fw-bold">
                    <div className="d-flex position-relative">
                    <img src={props.member4}className="img-members member-1" alt="" />
                    <img src={props.member2}className="img-members member-2" alt="" />
                    <img src={props.member3}className="img-members member-3" alt="" />
                    <img src={props.member1}className="img-members member-4" alt="" />
                  
                    </div></p></div>
                <div className="col-6"><i class="bi bi-three-dots-vertical"></i></div>
              
            </div>
        </div>
    </div>
  </li>
<li class="list-group-item p-3 w-table">
  <div className="row ">
        <div className="col-9">
        <div className="d-flex align-item-center"><img src={props.stack} width={50} height={50}  alt=""/>
        <div style={{lineHeight:10+'px',paddingTop:10+'px'}}>
        <p className="fw-bold px-2 ">Full Stack Application</p>
        <span className="text-secondary px-2 ">Project description and details about...</span>
        </div>
        </div>
        </div>
        <div className="col-3">
            <div className="row">
           
                <div className="col-6"><p className="text-secondary fw-bold">
                    <div className="d-flex position-relative">
                    <img src={props.member4}className="img-members member-1" alt="" />
                    <img src={props.member2}className="img-members member-2" alt="" />
                    <img src={props.member3}className="img-members member-3" alt="" />
                    <img src={props.member1}className="img-members member-4" alt="" />
                  
                    </div></p></div>
                <div className="col-6"><i class="bi bi-three-dots-vertical"></i></div>
              
            </div>
        </div>
    </div>
  </li>
<li class="list-group-item p-3 w-table">
  <div className="row ">
        <div className="col-9">
        <div className="d-flex align-item-center"><img src={props.dropbox} width={50} height={50}  alt=""/>
        <div style={{lineHeight:10+'px',paddingTop:10+'px'}}>
        <p className="fw-bold px-2 ">Dropbox Design System</p>
        <span className="text-secondary px-2 ">Project description and details about...</span>
        </div>
        </div>
        </div>
        <div className="col-3">
            <div className="row">
           
                <div className="col-6"><p className="text-secondary fw-bold">
                    <div className="d-flex position-relative">
                    <img src={props.member4}className="img-members member-1" alt="" />
                    <img src={props.member2}className="img-members member-2" alt="" />
                    <img src={props.member3}className="img-members member-3" alt="" />
                    <img src={props.member1}className="img-members member-4" alt="" />
                  
                    </div></p></div>
                <div className="col-6"><i class="bi bi-three-dots-vertical"></i></div>
              
            </div>
        </div>
    </div>
  </li>
<li class="list-group-item p-3 w-table">
  <div className="row ">
        <div className="col-9">
        <div className="d-flex align-item-center"><img src={props.tesla} width={50} height={50}  alt=""/>
        <div style={{lineHeight:10+'px',paddingTop:10+'px'}}>
        <p className="fw-bold px-2 ">Tesla Portal</p>
        <span className="text-secondary px-2 ">Project description and details about...</span>
        </div>
        </div>
        </div>
        <div className="col-3">
            <div className="row">
           
                <div className="col-6"><p className="text-secondary fw-bold">
                    <div className="d-flex position-relative">
                    <img src={props.member4}className="img-members member-1" alt="" />
                    <img src={props.member2}className="img-members member-2" alt="" />
                    <img src={props.member3}className="img-members member-3" alt="" />
                    <img src={props.member1}className="img-members member-4" alt="" />
                  
                    </div></p></div>
                <div className="col-6"><i class="bi bi-three-dots-vertical"></i></div>
              
            </div>
        </div>
    </div>
  </li>
<li class="list-group-item p-3 w-table">
  <div className="row ">
        <div className="col-9">
        <div className="d-flex align-item-center"><img src={props.twitter} width={50} height={50}  alt=""/>
        <div style={{lineHeight:10+'px',paddingTop:10+'px'}}>
        <p className="fw-bold px-2 ">Twitter Debugging</p>
        <span className="text-secondary px-2 ">Project description and details about...</span>
        </div>
        </div>
        </div>
        <div className="col-3">
            <div className="row">
           
                <div className="col-6"><p className="text-secondary fw-bold">
                    <div className="d-flex position-relative">
                    <img src={props.member4}className="img-members member-1" alt="" />
                    <img src={props.member2}className="img-members member-2" alt="" />
                    <img src={props.member3}className="img-members member-3" alt="" />
                    <img src={props.member1}className="img-members member-4" alt="" />
                  
                    </div></p></div>
                <div className="col-6"><i class="bi bi-three-dots-vertical"></i></div>
              
            </div>
        </div>
    </div>
  </li>
  </ul>
</div>
</div>
<div className="row my-3">
    <div className="col-lg-6 py-2">
        <div className="bg-light rounded-3 shadow-lg p-3">
        <div className="d-flex align-item-center position-relative"><img src={props.profile} width={50} height={50}  alt="" className='rounded-circle'/>
        <div style={{lineHeight:10+'px',paddingTop:10+'px'}}>
        <p className="fw-bold px-2 ">Noman Lodhi</p>
        <span className="text-secondary px-2 ">30 minutes ago</span>
        </div>
        <i class="bi bi-three-dots-vertical position-absolute end-0 my-3 mx-2"></i>
        </div>
        <img src={props.post} alt="" width={95 +'%'} className='m-3 border-secondary rounded-3'/>
        <div className="d-flex py-3 border-top">
            <span className="text-secondary cursor-react mx-2"><i class="bi bi-heart mx-2"></i> 20 Likes</span>
            <span className="text-secondary cursor-react mx-2"><i class="bi bi-chat-left"></i> 12 Comments</span>
            <span className="text-secondary cursor-react mx-2"><i class="bi bi-share"></i>      Share</span>
        </div>
        <div className="d-flex py-3 border-top">
          <div className="d-flex position-relative py-2">
                   <img src={props.member4}className="img-members member-1" alt=""  />
                    <img src={props.member2}className="img-members member-2" alt=""  />
                    <img src={props.member3}className="img-members member-3" alt=""  />
                    <p className="text-secondary mx-5 px-2"> You and 20 more liked this</p>
          </div>
        </div>
          <form class="d-flex" role="search">
          <img src={props.profile} width={50} height={50}  alt="" className='rounded-circle'/>
        <input class="form-control mx-2"  placeholder="Comment" />
        <button class="btn btn-primary" >Comment</button>
      </form>
        </div>
    </div>


      <div className="col-lg-6 ">
        <div className="bg-light rounded-3 shadow-lg">
            <p className="fs-5 fw-bold px-4 py-3">My Team</p>
            <ul className="overflow-scroll scroll-bar-set">
            <li class="list-group-item p-3 w-table">
  <div className="row ">
        <div className="col-9">
        <div className="d-flex align-item-center"><img src={props.member1}  className='rounded-circle mx-2' width={60} height={60}  alt=""/>
        <div style={{lineHeight:10+'px',paddingTop:10+'px'}}>
        <p className="fw-bold px-2 ">Josh</p>
        <span className="text-secondary px-2 ">UI / UX Designer</span>
        </div>
        </div>
        </div>
        <div className="col-3">
            <div className="row">
           
                <div className="col-6"><p className="text-secondary fw-bold">
                <i class="bi bi-telephone-forward fs-3 cursor-react"></i></p></div>
                <div className="col-6"><i class="bi bi-camera-video fs-3 text-secondary cursor-react"></i></div>
              
            </div>
        </div>
    </div>
  </li>
            <li class="list-group-item p-3 w-table">
  <div className="row ">
        <div className="col-9">
        <div className="d-flex align-item-center"><img src={props.member2}  className='rounded-circle mx-2' width={60} height={60}  alt=""/>
        <div style={{lineHeight:10+'px',paddingTop:10+'px'}}>
        <p className="fw-bold px-2 ">John Courner</p>
        <span className="text-secondary px-2 ">Front End Developer</span>
        </div>
        </div>
        </div>
        <div className="col-3">
            <div className="row">
           
                <div className="col-6"><p className="text-secondary fw-bold">
                <i class="bi bi-telephone-forward fs-3 cursor-react"></i></p></div>
                <div className="col-6"><i class="bi bi-camera-video fs-3 text-secondary cursor-react"></i></div>
              
            </div>
        </div>
    </div>
  </li>
            <li class="list-group-item p-3 w-table">
  <div className="row ">
        <div className="col-9">
        <div className="d-flex align-item-center"><img src={props.member3}  className='rounded-circle mx-2' width={60} height={60}  alt=""/>
        <div style={{lineHeight:10+'px',paddingTop:10+'px'}}>
        <p className="fw-bold px-2 ">Raheem Khan</p>
        <span className="text-secondary px-2 ">Back End Developer</span>
        </div>
        </div>
        </div>
        <div className="col-3">
            <div className="row">
           
                <div className="col-6"><p className="text-secondary fw-bold">
                <i class="bi bi-telephone-forward fs-3 cursor-react"></i></p></div>
                <div className="col-6"><i class="bi bi-camera-video fs-3 text-secondary cursor-react"></i></div>
              
            </div>
        </div>
    </div>
  </li>
            <li class="list-group-item p-3 w-table">
  <div className="row ">
        <div className="col-9">
        <div className="d-flex align-item-center"><img src={props.member4}  className='rounded-circle mx-2' width={60} height={60}  alt=""/>
        <div style={{lineHeight:10+'px',paddingTop:10+'px'}}>
        <p className="fw-bold px-2 ">Elizebeth Carnie</p>
        <span className="text-secondary px-2 ">MERN Stack Developer</span>
        </div>
        </div>
        </div>
        <div className="col-3">
            <div className="row">
           
                <div className="col-6"><p className="text-secondary fw-bold">
                <i class="bi bi-telephone-forward fs-3 cursor-react"></i></p></div>
                <div className="col-6"><i class="bi bi-camera-video fs-3 text-secondary cursor-react"></i></div>
              
            </div>
        </div>
    </div>
  </li>
            </ul>
        </div>
        <div className="bg-light rounded-3 shadow-lg">
            <p className="fs-5 fw-bold px-4 py-3">Recent Interaction</p>
            <ul className="overflow-scroll scroll-bar-set">
            <li class="list-group-item p-3 w-table">
  <div className="row ">
        <div className="col-9">
        <div className="d-flex align-item-center"><img src={props.member1}  className='rounded-circle mx-2' width={60} height={60}  alt=""/>
        <div style={{lineHeight:10+'px',paddingTop:10+'px'}}>
        <p className="fw-bold px-2 ">Josh</p>
        <span className="text-secondary px-2 ">4  minutes ago</span>
        </div>
        </div>
        </div>
        <div className="col-3">
            <div className="row">
           
                <div className="col-6"><p className="text-secondary fw-bold">
                <i class="bi bi-telephone-forward fs-3 cursor-react"></i></p></div>
                <div className="col-6"><i class="bi bi-camera-video fs-3 text-secondary cursor-react"></i></div>
              
            </div>
        </div>
    </div>
  </li>
  

            <li class="list-group-item p-3 w-table">
  <div className="row ">
        <div className="col-9">
        <div className="d-flex align-item-center"><img src={props.member4}  className='rounded-circle mx-2' width={60} height={60}  alt=""/>
        <div style={{lineHeight:10+'px',paddingTop:10+'px'}}>
        <p className="fw-bold px-2 ">Elizebeth Carnie</p>
        <span className="text-secondary px-2 ">20 minutes ago</span>
        </div>
        </div>
        </div>
        <div className="col-3">
            <div className="row">
           
                <div className="col-6"><p className="text-secondary fw-bold">
                <i class="bi bi-telephone-forward fs-3 cursor-react"></i></p></div>
                <div className="col-6"><i class="bi bi-camera-video fs-3 text-secondary cursor-react"></i></div>
              
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

      
    </>
    
  )
}
