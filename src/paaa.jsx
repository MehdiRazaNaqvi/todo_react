import react from 'react'





export default class Ku extends react.Component {
    constructor() {
        super()
        this.state = {
            task: [],
            val: ""
        }
    }

    butttt = () => {
            var obj = {
            title:this.state.val,
            edit:false
        
        }
        this.setState({
            task:[...this.state.task , obj],
            val:""
        })
        console.log(obj)
    }

   editit = (i , e) => {
    this.state.task[i].title = e;
    this.state.task[i].edit = true;

       this.setState({                    
          task:this.state.task
       })
   }

    up = (i ) => {
    

    this.state.task[i].edit = false;
            this.setState({
                task:this.state.task
            })


    }

    dlt = (i) => {
        console.log(i)
        this.state.task.splice(i,1)
        this.setState({
            task:this.state.task
        })
    }
    render() {
        return (
            <div className="b" >
                <input value={this.state.val} onChange={(e) => this.setState({ val: e.target.value })} type="text" placeholder="enter task" />
                <button onClick={this.butttt} >Add task</button>


                <div className="c" >
                    <ul>
                        {this.state.task.map((v, i) => { return <li key={i} >
                        {v.edit?  <input onChange={(e)=>{this.editit( i , e.target.value )}} type="text" placeholder="enter value"/> : v.title }
                        {v.edit? <button  onClick={()=>{this.up(i)}}>Update</button> :<button onClick={()=>{this.editit(i)}} >Edit</button>
 }
                            <button onClick={() => {this.dlt(i)}} >Delete</button>

                            
                        

                        </li> 
                        


                        })}
                    </ul>
                </div>
            </div>

        )
    }
}