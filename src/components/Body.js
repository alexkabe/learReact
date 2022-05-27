import { Link } from 'react-router-dom';
import '../styles/Body.css'
import Boutton from './Button';
import axios from 'axios';
import React, { Component } from 'react'
import Liste from './Liste';
import users from '../users';

export default class Body extends Component {

    constructor(props){
        super(props)
        this.state = {
          users: []
        }
    }


    componentDidMount(){
      let tab = new users();
      tab.listeUsers().then(val =>{
          console.log("Coumponent did mount")
          this.setState({users: val})
        });
     
    }
    
      listElement = () =>{
        axios.get("https://restcountries.com/v3.1/all")
        .then((res) =>{
          if(res){
            let payss = res.data.filter(val => val.name.common.length <6);
            console.log(payss[0])
    
            payss = payss.map((val,index) =>{
              return  <li key={index} class="list-group-item d-flex justify-content-between align-items-center">
                        {val.name.common}<br />
                        <span className="btn btn-success">{val["capital"]}</span>
                    </li>
            })
            this.setState({
              pays: payss
            })
          }
        })
      }
      handleOpen = () =>{
        this.setState({pays: []})
      }

    
      handleDrop = (e)=>{
        let User = new users();
        User.dropUser(this.state.users[e].matricule)
        .then(val =>{
          if (val.status == 200){
            this.setState({users: val.data})
          }
        });
      }

    render() {
        return (
            <div><br />
                <Liste userss={this.state.users} handleDrop={this.handleDrop}/>
                
                  <Link to="/add" >
                      <Boutton theme="btn btn-success" text="+" />
                  </Link>&emsp;
            </div>
        )
  }
}
