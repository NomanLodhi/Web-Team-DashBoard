import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navigation from './Components/Navigation';
import profile from './Img/profile-pic.png'
import Sidebar from './Components/Sidebar';
import { useState } from 'react';
import Dashboard from './Components/Dashboard';
import dropbox from './Img/dropbox.png';
import github from './Img/github.png';
import twitter from './Img/twitter.png';
import tesla from './Img/brand.png';
import stack from './Img/stacked-files.png';
import member1 from './Img/member-1.jpg';
import member2 from './Img/member-2.jpg';
import member3 from './Img/member-3.jpg';
import member4 from './Img/member-4.jpg';
import Profile from "./Components/Profile";
import post from './Img/post.webp'
import Component from "./Components/Component";
import Download from "./Components/Download";
function App() {
  const [transform, setTransform] = useState('Hide');
  const [iconChange, seticonChange] = useState('list');
  const [transformD, settransformD] = useState('Full');
  
  
  
 const  Toggle=()=>{
  console.log('Hello')
  if (transform ==='Hide'){
    setTransform('Show')
  }
  else{
    setTransform('Hide')
  }
  if (transformD ==='Full'){
    settransformD('Half')
  }
  else{
    settransformD('Full')
  }
  if (iconChange ==='list'){
  seticonChange('arrow-left')
}
else{
    seticonChange('list')
  }
 }


  return (
    <>
 
    <Navigation profile={profile} hash={'</>'} Toggle={Toggle} iconChange={iconChange}/>   

<div className="container-fluid d-flex p-0">
<Sidebar transform={transform} /> 
<div className="tab-content container-fluid p-0" id="nav-tabContent">
      <div className="tab-pane fade show active " id="list-home" role="tabpanel" aria-labelledby="list-home-list">
        <Dashboard dropbox={dropbox}  github={github} twitter={twitter} tesla={tesla} stack={stack} member1={member1} member2={member2} member3={member3} member4={member4}/>
        </div>
      <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list"><Profile profile={profile} dropbox={dropbox}  github={github} twitter={twitter} tesla={tesla} stack={stack} member1={member1} member2={member2} member3={member3} member4={member4} post={post}/></div>
      <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list"><Component codealert={`
<div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
<div class="alert alert-secondary" role="alert">
  A simple secondary alert—check it out!
</div>
<div class="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>
<div class="alert alert-danger" role="alert">
  A simple danger alert—check it out!
</div>
<div class="alert alert-warning" role="alert">
  A simple warning alert—check it out!
</div>
<div class="alert alert-info" role="alert">
  A simple info alert—check it out!
</div>
<div class="alert alert-light" role="alert">
  A simple light alert—check it out!
</div>
<div class="alert alert-dark" role="alert">
  A simple dark alert—check it out!
</div>
`}
badge={`
<span class="badge rounded-pill text-bg-primary">Primary</span>
<span class="badge rounded-pill text-bg-secondary">Secondary</span>
<span class="badge rounded-pill text-bg-success">Success</span>
<span class="badge rounded-pill text-bg-danger">Danger</span>
<span class="badge rounded-pill text-bg-warning">Warning</span>
<span class="badge rounded-pill text-bg-info">Info</span>
<span class="badge rounded-pill text-bg-light">Light</span>
<span class="badge rounded-pill text-bg-dark">Dark</span>`}/></div>
      <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list"><Download downloadtxt={`PS C:your-repo-name>git clone https://github.com/NomanLodhi/Web-Team-DashBoard.git`}/></div>
    </div>
</div>



    </>
  );
}

export default App;
