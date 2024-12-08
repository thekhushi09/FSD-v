import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import App from './App.jsx'
// import Marks from './Marks.jsx'
// import Profile from './Profile.jsx'
import Displaymarks from './Displaymarks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App b1={'Khushi'} b2={'thexxxx@gmail.com'} b3={'ABES'}/>     //App.jsx
    <App b1={'Aditi'} b2={'theyyyyy@gmail.com'} b3={'ABES'}/>

    <Marks m1='91' m2='89' m3='90'/>                                 //Marks.jsx
    <Marks m1='85' m2='87' m3='91'/> */}

    <Displaymarks/>

    {/* <Profile/> */}
  </StrictMode>,
)
