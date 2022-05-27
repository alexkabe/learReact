import React, {useRef } from 'react' 
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Form.css'
import Boutton from './Button';
import axios from '../axios';
import Users from '../users';




function Form(props){
    const navigate = useNavigate();
    let nom = useRef('');
    let email = useRef('');

    const ajout = () => {
        const user = {
            name: nom.current.value,
            email: email.current.value
        }
        let User = new Users();
        User.addUser(user)
        .then(request =>{
            if(request.statusText == "OK") navigate('/');
            else{
                console.log("Il y'a probleme")
            }
        })

    }
    
    
    return (<div>
        <div class="form-group mx-sm-3 mb-2">
            <label >
                <input placeholder='Nom' type="text" className='form-control' name="name" ref={nom} required/>
            </label>
            </div>
            <div class="form-group mb-2">
            <label>
                <input type="email" placeholder='Email' className='form-control' name="email" ref={email} required/>
            </label>
            </div>
            <input type="button" onClick={ajout} class="btn btn-primary" value="Ajouter" />&emsp;
            <Link to="/" >
                <Boutton theme="btn btn-danger"  text="Retour"/> 
            </Link>  
        </div>);
}

export default Form