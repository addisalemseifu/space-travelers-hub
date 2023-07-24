import React from 'react'
import Mission from './Mission'
import { useSelector,useDispatch } from 'react-redux'

export default function Missions() {
    const dispatch = useDispatch();
    const {missions} = useSelector((store)=>store.mission);
  console.log(missions);
  return (
    <div className='mission-container'>
        <table>
  <thead className='header'>
    <th>Mission</th>
    <th>Thaicom</th>
    <th>Status</th>
    <th></th>
  </thead>
{
    missions.map((mission)=> {
      let index = missions.indexOf(mission)
        return <Mission
        missionId= {mission.id}
        missionName= {mission.name}
        description= {mission.description}
        reserved= {mission.reserved}
        index = {index}
        />
      
    
  }
    )
    
}
</table>
    </div>
  )
}
