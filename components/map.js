import React from 'react'
import { useRef, useEffect, useState } from 'react'
import mapboxgl from '!mapbox-gl'
import tw from 'tailwind-styled-components'
mapboxgl.accessToken = 'pk.eyJ1IjoiZW1tYWtpbmdvZnBvcCIsImEiOiJja3ZtYmZvcHExZThpMm90a21xZGRvb2dhIn0.usyCnUyDbOFELr0DGCAHGQ';



const Map = (props) => {
 
  useEffect(() => {
    
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-99.29011, 39.39172],
      zoom: 3
    });

     if(props.PickupCoordinates){
      AddToMap(map,props.PickupCoordinates)
     }

     if(props.DropoffCoordinates){
      AddToMap(map,props.DropoffCoordinates)
     }
     if(props.PickupCoordinates && props.DropoffCoordinates){
       map.fitBounds([
        props.PickupCoordinates,props.DropoffCoordinates
       ],
       {
         padding: 70
       })
     }

  },[props.PickupCoordinates,props.DropoffCoordinates]);

  const AddToMap = (map,coordonates)=>{
     // Create a default Marker and add it to the map.
     const marker1 = new mapboxgl.Marker()
     .setLngLat(coordonates)
     .addTo(map);
  }


    return (
        <Wrapper id='map'>

        </Wrapper>
    )
}

const Wrapper = tw.div`
bg-red-500 flex-1
`

export default Map
