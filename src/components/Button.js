import React from "react";
import '../assets/fontawesome/css/all.min.css'

function Button({type, onClick}){
    let icon = null;
    if(type === 'add'){
        icon = <i className="fas fa-plus"></i>;
    }else if(type === 'delete'){
        icon = <i className="fas fa-trash"></i>;
    }else if(type === 'edit'){
        icon = <i className="fas fa-pen"></i>;
    }
    return(
        <button id={type} onClick={ onClick }>
            {icon}
        </button>
    );
}

export default Button;