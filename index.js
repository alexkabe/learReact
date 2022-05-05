class TextClass extends React.Component{

  render(){
    return       <input type="text" ref={this.props.fore}/>
  }
}


const Text = React.forwardRef((props, ref) =>{
  return       <TextClass fore={ref}/>
})

class Home extends React.Component{
  constructor(props){
    super(props);
    this.input = React.createRef();
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(){
    console.log(this.input.current.value)
  }


  render(){
    console.log(this.input)

    return <div>
      <Text ref={this.input}/>
      <button onClick={this.handleChange} >Tester</button>
    </div>
  }
}

ReactDOM.render(<Home />, document.querySelector("#app"))