import React, {Component} from 'react';
import './leftSide.css';




class LeftSide extends Component{
    render(){
        return(
            <div className="LeftSide">
                <ul>
                    <li>
                        <img src="https://simply-communicate.com/wp-content/uploads/2019/03/facebook-2661207_960_720.jpg" alt=""/>
                    </li>
                    <li>
                        <img src="https://assets.materialup.com/uploads/82eae29e-33b7-4ff7-be10-df432402b2b6/preview" alt=""/>
                    </li>
                </ul>
            </div>
        )
    }
    // static create(){
    //     const left = document.createElement("div")
    //     left.className = "LeftSide"
    //     const ul = document.createElement("ul")
    //     ul.innerHTML = `<li><img src="https://simply-communicate.com/wp-content/uploads/2019/03/facebook-2661207_960_720.jpg"></li>
    //                     <li><img src="https://assets.materialup.com/uploads/82eae29e-33b7-4ff7-be10-df432402b2b6/preview"></li>`
    //     left.append(ul)

    //     return left
    // }
}
export default LeftSide