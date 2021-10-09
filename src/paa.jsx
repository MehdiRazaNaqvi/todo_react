import react from "react";
import firebase from "../src/config/firebase.js"
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import Button from '@mui/material/Button';
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';




// import Two from "./appp";




// export default class Ku extends react.Component {

//     constructor() {
//         super()
//         this.state = {

//             name: "",
//             email:"",

//         }
//     }


//         set_name = (e) => {

//             this.setState({
//         name : e.target.value
//             })


//         }

//         lena = (data) => {
//                 console.log(data)
//         }


//     render() {


//         return (
//             <div>
//             <input name="name" onChange={(e) => this.set_name(e)} placeholder="name" type="text" />
//             <input placeholder="email" type="text" />
//             {/* <button onClick={(e) => this.set_name()} >Submit</button> */}
//             <h1> {this.state.name}</h1>
//             <Two le = {this.lena} code = {this.state.name} />
//             </div>
//         )
//     }
// }


export default class Ku extends react.Component {
    constructor() {
        super()
        this.state = {
            todo: [],
            val: ""
        }
    }

    addtodo = () => {
        
        var obj = { title: this.state.val, edit: false }
        console.log(obj)
        firebase.database().ref("/").child("todos").push(obj)

        this.setState({

            todo: [...this.state.todo, obj],
            val: ""

        })
        
    }

    dlt = (i) => {


        this.state.todo.splice(i, 1)
        this.setState({
            todo: this.state.todo
        })
    }

    dltall = () => {
        //    console.log(this.state.todo.length)
        //    this.state.todo.length = 0;
        //    this.setState({
        //        todo : this.state.todo
        //    })


        this.state.todo.splice(0, this.state.todo.length);
        this.setState({
            todo: this.state.todo
        })
    }



    edit = (i, e) => {

        this.state.todo[i].edit = true
        this.state.todo[i].title = e

        this.setState({
            todo: this.state.todo,

        })

    }

    updat = (i) => {
        this.state.todo[i].edit = false;
        console.log(this.state.todo[i].edit)
        this.setState({
            todo: this.state.todo
        })



    }
    render() {

        return (

            <div style={{    display: "flex", justifyContent: "center", flexDirection: "column" }} >
                <div className="uper" >
                    <input value={this.state.val} maxLength="10" onChange={(e) => { this.setState({ val: e.target.value }) }} placeholder="enter todo" type="text" />

                    <button onClick={this.addtodo} >Add <AddIcon color="success" /></button>

                </div>
                <div>
                <ul className="ul" >
                    {this.state.todo.map((v, i) => {
                        return (<li key={i} >

                            {v.edit ? <input maxLength="10" type="text" onChange={(e) => this.edit(i, e.target.value)} /> : v.title}
                            {v.edit ? <Button onClick={() => this.updat(i)} variant="outlined" size="small" color="primary" font  >Update <BackupOutlinedIcon fontSize="small" /> </Button>
                                :
                                <button onClick={() => this.edit(i)} >Edit <ModeEditOutlineOutlinedIcon fontSize="small" color="primary" /></button>
                            }

                            <button onClick={() => { this.dlt(i) }} >Delete <DeleteOutlinedIcon color="warning" /></button>

                        </li>)
                    })}
                    
                </ul>

                </div>
                <button id="d" onClick={this.dltall} >Delete all <ClearAllIcon fontSize="medium" sx={{ color: "red" }} /> </button>
               


            </div>
        )

    }
}