// function Header(){
//   return <div class="header">
//     <a href="#default" class="logo">Company Logo</a>
//     <div class="header-right">
//         <a class="active" href="#home">Alex Kabe Kabe</a>
//         {/* <a href="#contact">Contact</a>
//         <a href="#about">About</a> */}
//     </div>
//   </div>
// }

// class Container extends React.Component{

//   constructor(props){
//     super(props)
//     this.users = [
//       {
//         name: "alex",
//         email: "alex"
//       },
//       {
//         name: "alex2",
//         email: "alex2"
//       },
//       {
//         name: "alex3",
//         email: "alex3"
//       }
//     ];
//     this.button = false
//     this.getData = this.getData.bind(this)
//   }

//   getData(val){
//     console.log(val)
//     this.users.push(val)
//     this.setState({})
//   }


//   render(){
//     const listes = this.users.map((value, index) => {
//       return <Cards key={index} nom={value.name} prenom={value.email} />
//     });
//     console.log(listes)
    
//     let but;
//     if (this.button) but = <Form etat={true}  sendData={this.getData}/> 
//     else  but = <Form etat={false} sendData={this.getData}/>
    
//     return <div>
//       <div className="container">
//         <ul>
//           {listes}
//         </ul>
//         {but}
//       </div>
//     </div>
//   }
// }


// function Cards(props){
  
//   return <div className="cards">
//       <label>Nom: {props.nom}</label><br/>
//       <label>Prenom: {props.prenom}</label><br/>
//       <button href="#" >-</button><br/><br/><br/>
//   </div>
// }

// class Form extends React.Component{
//   constructor(props){
//     super(props)
//     this.etat = props.etat
//     this.handleClick = this.handleClick.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }

//   handleClick(){
//     this.setState({},()=>{
//       if (this.etat){
//         this.email = "";
//         this.name = ""
//       }
//       this.etat = !this.etat
//     });
//   }
  
//   handleSubmit(event){
//     event.preventDefault()
//     console.log(event.target)
//     const contact =  {
//         name: event.target.name.value,
//         email: event.target.email.value
//     }

//     this.props.sendData(contact)
//     this.handleClick()
//     this.setState({})
  
//   }

//   render(){
//     let body;
//     if (this.etat){
//       body = <form className="form" onSubmit={this.handleSubmit}>
//         <div>
//             <label >Name:</label>
//             <input type="text" name="name" required/><br/><br/>
//         </div>

//         <div>
//             <label >Email:</label>
//             <input type="email" name="email" required/><br/><br/>
//         </div>
//         <input type="submit" value="Ajouter" />
//       </form>
//     }else{
//       body =     <button className="button" href="#" onClick={this.handleClick} >+</button>
//     }
//     return <div >
//       {body}
//     </div>
//   }
// }

// function Body(){
//   return <div className="body">
//     <Container />
//   </div>
// }


// function Home(){
//   return <div>
//     <Header />
//     <Body />
//   </div>
// }

// ReactDOM.render(<Home />, document.querySelector("#app"))