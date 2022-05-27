import React, { useEffect } from 'react'
import Item from './Item';
import { Link } from 'react-router-dom';


export default function Liste({userss ,handleDrop}) {
  
  const listes = userss.map((value, index) => {
      return <Item key={index} value={value} index={index} handleDrop={handleDrop}/>
  });
  
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom</th>
            <th scope="col">Prenom</th>
            <th scope="col">Supprimer</th>
            <th scope="col">Modifier</th>
          </tr>
        </thead>
        <tbody>
            {listes}            
        </tbody>
      </table>
        {/* <Link to="/" >
                <Boutton theme="btn btn-danger" text="Retour"/> 
        </Link>  */}
    </div>
  )
}
