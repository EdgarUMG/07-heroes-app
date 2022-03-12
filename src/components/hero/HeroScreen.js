
import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import {getHeroById} from '../../selectors/getHeroById'
export const HeroScreen = () => {

  const navigate =useNavigate();

  const {heroeId}=useParams();
  
  const hero= useMemo(()=>getHeroById(heroeId),[heroeId]); 
  

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  }=hero;

  if(!hero){
    return <Navigate to='/'/>
  } 

  const imagePath=`/assets/${id}.jpg`;

  const handleReturn=()=>{
    navigate(-1)

  }

  return (
    <div className='row mt-5 animate__animated animate__fadeInLeft'>
      <div className='col-4'> 
        <img 
          src={imagePath}
          alt={superhero}
          className="img-thumbnail"
        />
      </div>

      <div className='col-8'>
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter ego: </b>{alter_ego}</li>
          <li className='list-group-item'><b>Publisher: </b>{publisher}</li>
          <li className='list-group-item'><b>First Appareance: </b>{first_appearance}</li>
  
        </ul>

        <h5 className='mt-3'>Characters</h5>
        <p>{characters}</p>

        <button
          className='btn btn-outline-info'
          onClick={handleReturn}
        >
          Regresar 
        </button>
      </div>
        
    </div>
  )
}
