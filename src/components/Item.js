import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import '../styles/Item.css';
import users from '../users';
import {UserContext} from './context/UserContext';


function Item({index, value, handleDrop}){
      
      const datas = useContext(UserContext);
      const { nom, setNom} = datas[0]
      const {email, setEmail}  = datas[1];
      const {matricule, setMatricule}  = datas[2];


      let path =`/update/${index}`;
      return (
            <tr >
                  <th scope="row">{index +1}</th>
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                  <td>
                        <button type="button" class="btn btn-secondary" name="drop" onClick={() => handleDrop(index)}  >Supprimer</button> 
                  </td>
                  <td>
                        <Link to={path}>
                              <button type="button" class="btn btn-primary" name="update" onClick={() =>{
                                    setNom(value.name); 
                                    setEmail(value.email);
                                    setMatricule(value.matricule)
                              }
                              } value={index}>Update</button>
                        </Link>
                  
                  </td>
            </tr>
      )
  }


  export default Item



// function Item({index, value, handleDrop, handleUpdate}){
      
      //     return (
//         <tr >
//               <th scope="row">{index +1}</th>
//               <td>{value.name}</td>
//               <td>{value.email}</td>
//               <td>
//                     <button type="button" class="btn btn-secondary" name="drop" value={index} onClick={handleDrop} >Supprimer</button> 
//               </td>
//               <td>
//                     <button type="button" class="btn btn-primary" name="update" value={index} onClick={handleUpdate} >Update</button>
//               </td>
//           </tr>
//     )
//   }