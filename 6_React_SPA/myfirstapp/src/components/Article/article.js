import React, {Component} from 'react';
import './article.css';

class Article extends Component{
    state = {
        InputValue: ""
    }
    ChangeTitle(ev){
        //console.log(ev.target)
        this.setState({
            InputValue: ev.target.value
        })
    }
    render(){
        return(
            <div className="Article">
                <input type="text" placeholder="Enter Title" className="inputTitle" onChange={e=>{
                    this.ChangeTitle(e)
                }}/>
                <h2 id = "title">{this.state.InputValue}</h2>
                <p>This is an example of class components using only normal JS ES6 modules</p>
                <p>We will test the module export and import capabilities</p>
            </div>
        )
    }
    // static create(){
    //     const arti = document.createElement("div")
    //     arti.className = "Article"
    //     arti.innerHTML = `<input type ="text"
    //                         id = "inpt"
    //                         placeholder = "Enter Title">
    //                         <h2 id = "title"></h2>
    //                         <p>This is an example of class components using only normal JS ES6 modules</p>
    //                         <p>We will test the module export and import capabilities</p>`
    
    //     return arti
    // }
}
export default Article