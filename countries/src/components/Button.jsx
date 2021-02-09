import React from "react";

class Button extends React.Component{

    render(){

        return(
            
                <button onClick = {this.props.onClick} 
                     className= "btn btn-primary m-3"> 
                {this.props.children}
                </button>

        )
    }
}
export default Button;

