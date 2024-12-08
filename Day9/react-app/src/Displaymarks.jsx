import React from 'react'
import Marks from './Marks.jsx'

const Displaymarks = () => {
    const students=[
        {name: 'Khushi',roll: 87566,m1:98,m2:92,m3:97},
        {name: 'Anshi',roll: 97576,m1:89,m2:88,m3:95},
        {name: 'Deep',roll: 87566,m1:98,m2:92,m3:97},
        {name: 'Abhi',roll: 87566,m1:98,m2:92,m3:97},
        {name: 'Kashish',roll: 87566,m1:98,m2:92,m3:97},
        {name: 'KT',roll: 87566,m1:98,m2:92,m3:97},
        {name: 'Mahi',roll: 87566,m1:98,m2:92,m3:97},
        {name: 'Anshita',roll: 87566,m1:98,m2:92,m3:97},

    ];
  return (
    <div>
        {/* <Marks name={'Abhi'} roll={45566} m1={98} m2={58} m3={89}/> */}

        {students.map((student,index)=>(
            <Marks key={index}
             name={student.name}
             roll={student.roll} 
             m1={student.m1} 
             m2={student.m2}
              m3={student.m3} />

            ))}

    </div>
  )
}

export default Displaymarks