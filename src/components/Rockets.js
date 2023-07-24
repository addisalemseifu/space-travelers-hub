import React from 'react'
import Rocket from './Rocket'
import { useSelector,useDispatch } from 'react-redux'

export default function Rockets() {
    const dispatch = useDispatch();
    const {rockets} = useSelector((store)=>store.rocket);
  console.log(rockets);
  return (
    <div className='rockets'>
        {
            rockets.map((rocket)=> 
            <Rocket
            reserved = {rocket.reserved}
            rocketName = {rocket.name}
            description = {rocket.description}
            flickrImages = {rocket.flickr_images}
            id = {rocket.id}
            />
            )
        }
    </div>
  )
}
