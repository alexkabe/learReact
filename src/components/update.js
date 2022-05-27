import React,  { useState, useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import users from '../users'
import { UserContext } from './context/UserContext';


export default function Update() {

  const navigate = useNavigate();
  const datas = useContext(UserContext);
  const { nom, setNom} = datas[0]
  const {email, setEmail}  = datas[1];
  const {matricule, setMatricule}  = datas[2];

  let {id } = useParams();
  // const [nom, setNom] = useState(users[id].name);
  // const [email, setEmail] = useState(users[id].email);

  // let user = users.filter((val, index) => {
  //   if (index == id) return val});
  // user = user[0];
  
  const onSubmit = () =>{
    // users[id].nom = nom;
    // users[id].email = email;
    // console.log(users[id])
    let User  = new users();
    User.updateUser({
      matricule: matricule,
      name: nom,
      email: email
    })
    .then(val =>{
      if (val.status == 200) navigate('/', { replace: true });
    });
  }

  return (
          <div>
            <div class="form-group mx-sm-3 mb-2">
                <label >
                  <input type="text" className='form-control' name="nom" value={nom} onChange={(event) =>setNom(event.target.value)} required/>
                </label>
                <label>
                  <input type="email" className='form-control' name="email"  value={email} onChange={(event) =>setEmail(event.target.value)} required/>
                </label>
                <input type="button" class="btn btn-success" onClick={onSubmit} value="Modifier" />
                  
                <Link to="/" >
                    <input type="submit" class="btn btn-danger"value="Retour" />
                </Link> 
            </div>
        </div>

            
  )
}
