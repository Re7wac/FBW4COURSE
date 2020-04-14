import React, {Component} from 'react';
import './rightSide.css';

class RightSide extends Component{
    render(){
        return(
            <div className="RightSide">
                <ul>
                    <li>Item1</li>
                    <li>Item2</li>
                    <li>Item3</li>
                    <li>Item4</li>
                </ul>
            </div>
        )
    }
    // static create(){
    //     const right = document.createElement("div")
    //     right.className = "RightSide"
    //     const ul = document.createElement("ul")
    //     ul.innerHTML = `<li>Item 1</li>
    //                     <li>Item 2</li>
    //                     <li>Item 3</li>
    //                     <li>Item 4</li>`
    //     right.append(ul)

    //     return right
    // }
}
export default RightSide