import React from 'react'
import { useDispatch } from 'react-redux';
import { reserveMission, cancelMission } from '../redux/missions/missionsSlice';

export default function Mission({missionId,missionName,description,reserved,index}) {
const dispatch = useDispatch();
  function missionReserveHandeler(missionId){
dispatch(reserveMission(missionId));
  }
  function missionCancelHandeler(missionId){
    dispatch(cancelMission(missionId));
      }
if(index === 0){
  return <tr
  style={{backgroundColor:'#fdeeee'}}
  className='comp-row'
  id={missionId}>
      <th className='name'>{missionName}</th>
      <th><p className='para'>{description}</p></th>
      {!reserved && <><th><button className='member-btn'>NOT A MEMBER</button></th>
      <th><button
       className='join-btn'
       onClick={()=>{
        missionReserveHandeler(missionId);
       }}
       >Join Mission</button></th>
      </>}
      {reserved && <><th><button className='active-member-btn'>Active Member</button></th>
      <th><button
       className='leave-btn'
       onClick={()=>{
        missionCancelHandeler(missionId);
       }}
       >Leave Mission</button></th>
      </>}
      
      
  </tr>
}

if(index === 2){
  return <tr
  style={{backgroundColor:'#fdeeee'}}
  className='comp-row'
  id={missionId}>
      <th className='name'>{missionName}</th>
      <th><p className='para'>{description}</p></th>
      {!reserved && <><th><button className='member-btn'>NOT A MEMBER</button></th>
      <th><button
       className='join-btn'
       onClick={()=>{
        missionReserveHandeler(missionId);
       }}
       >Join Mission</button></th>
      </>}
      {reserved && <><th><button className='active-member-btn'>Active Member</button></th>
      <th><button
       className='leave-btn'
       onClick={()=>{
        missionCancelHandeler(missionId);
       }}
       >Leave Mission</button></th>
      </>}
      
      
  </tr>
}
  return (
    <tr 
    className='comp-row'
    id={missionId}>
        <th className='name'>{missionName}</th>
        <th><p className='para'>{description}</p></th>
        {!reserved && <><th><button className='member-btn'>NOT A MEMBER</button></th>
        <th><button
         className='join-btn'
         onClick={()=>{
          missionReserveHandeler(missionId);
         }}
         >Join Mission</button></th>
        </>}
        {reserved && <><th><button className='active-member-btn'>Active Member</button></th>
        <th><button
         className='leave-btn'
         onClick={()=>{
          missionCancelHandeler(missionId);
         }}
         >Leave Mission</button></th>
        </>}
        
        
    </tr>
  )
}
