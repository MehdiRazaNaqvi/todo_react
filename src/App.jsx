import react from "react";


// export default class App extends react.Component{
//   constructor () {
//     super()
//     this.state = {
//       name : "syed mehdi",
//       email : "mehdi@gmail.com"
//     }
//   }
//   setn = () => {
//     this.setState({name:"umair" , email:"43"})
//   }

//   getn = () => {
//     console.log(this.state.name)
//   }
//   render () {
//     return(<div>

//       <h1>My name is {this.state.name}</h1>
//       <h2>Email : {this.state.email}</h2>
//       <button onClick = {this.setn}>set name</button>
//       <button onClick = {this.getn}>get name</button>
//     </div>)
//   }
// }



export default class Ch extends react.Component {

  render() {
    console.log(this.props)
    var msg = "jiye bhutto"
    return (


      <div>
        <h4>{this.props.name + " :"}</h4>
        <h4>{this.props.price}</h4>
        <button onClick={()=>this.props.pr(msg)} >send dts</button>
       ?
        
        
      </div>
    )
  }
}