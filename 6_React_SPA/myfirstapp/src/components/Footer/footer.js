import React, {Component} from 'react';
import './footer.css';


class Footer extends Component {
    render(){
        return(
            <footer className="Footer">
                <p style={{color:this.props.color}}>{this.props.Ali}</p>
                <p>{this.props.Mostafa}</p>
            </footer>
        )
    }
    // static create() {
    //     const f = document.createElement("footer")
    //     f.className = "Footer"
    //     f.innerHTML = `<p>Modules Testing Application.</p>`
    //     return f
    // }
}
export default Footer