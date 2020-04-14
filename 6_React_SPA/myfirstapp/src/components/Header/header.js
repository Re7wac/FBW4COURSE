import React, {Component} from 'react';
import './header.css';




class Header extends Component{
    
    // static create() {
    //     const header = document.createElement("header")
    //     header.className = "Header"
    //     const a = document.createElement("a")
    //     a.setAttribute("href", "#")
    //     a.innerHTML = `Home Page`
    //     header.append(a)
    //     return header
    // }
    render(){
        return (
            <header className="Header">
                <a href="/">Home Page</a>
            </header>
        )
    }
}
export default Header