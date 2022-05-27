import React from 'react';
import '../styles/Container.css'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css' 
import Update from './update';
import Item from './Item';
import Form from './Form';
import Boutton from './Button';

class Container extends React.Component{

    constructor(props){
      super(props)
      this.users = [
        {
          name: "alex",
          email: "alex@gmail.com"
        },
        {
          name: "alex2",
          email: "alex2@gmail.com"
        },
        {
          name: "alex3",
          email: "alex3@gmail.com"
        }
      ];
      this.state = {
        nom: '',
        email: '',
        button: false,
        pays: []
      }
      this.indexElement
    //   this.getData = this.getData.bind(this)
      this.handleClick = this.handleClick.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleDrop = this.handleDrop.bind(this)
  }
  componentDidMount(){
    console.log("Coumponent did mount")
    // this.listElement() 
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

  handleClick(){
    this.setState({
      button: !this.state.button
    },
      ()=>{
      if (this.etat){
        this.email = "";
        this.name = ""
      }
    });
  }
  
  handleSubmit(event){
    event.preventDefault()
    const contact = {
      name: event.target.name.value,
      email: event.target.email.value
    }
    this.users.push(contact)
    this.handleClick()
    // this.setState({})


  }

  handleDrop(e){
    this.users.splice(e.target.value, 1)
    this.setState({})
  }

  handleUpdate = (event) =>{
    this.indexElement = event.target.value
    this.setState({
      nom: this.users[this.indexElement].name,
      email: this.users[this.indexElement].email,
    });
  }

  handleOnChange = (event)=>{
    const target = event.target;
    const value = target.value
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  handleSubmitUpdate  = () =>{
    this.users[this.indexElement].name = this.state.nom
    this.users[this.indexElement].email = this.state.email
    this.indexElement = null

    this.setState({
      nom: "",
      email: ""
    })
  }

  handleCancelUpdate= () => {
    this.indexElement = null
    this.setState({
      nom: "",
      email: ""
    })
  }

  handleReset= () => {
    this.setState({
      nom: "",
      email: "",
      button: !this.state.button
    })
  }

  render(){
    const listes = this.users.map((value, index) => {
      if (index == this.indexElement){
        return <Update key={index} index={index} nom={this.state.nom} email={this.state.email} handleCancelUpdate={this.handleCancelUpdate} handleOnChange={this.handleOnChange} handleSubmitUpdate={this.handleSubmitUpdate} />  
      }
      return <Item key={index} value={value} index={index} handleDrop={this.handleDrop} handleUpdate={this.handleUpdate}/>
    });
    let but;
    if (!this.state.button) but = <div>
      <Boutton theme="btn btn-success" click={this.handleClick} text="+" />&emsp;
      <Boutton theme="btn btn-danger" click={this.handleOpen} text="-" />&emsp;
      <Boutton theme="btn btn-primary" click={this.listElement} text="List" />&emsp;
      
      </div>
    else  but = <Form handleSubmit={this.handleSubmit} handleReset={this.handleReset} />
    
    
    return <div>
      <div className="container">

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

        {but}
      </div>


      <ul class="list-group">
        {this.state.pays}
      </ul>
    </div>
  }
}

export default Container
  