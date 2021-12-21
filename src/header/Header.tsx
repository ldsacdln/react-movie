import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css"

export default function Header(){
    const navigate = useNavigate();

    function search() {
        return(event:any) =>{
            if(event.key==="Enter"){
                const title = event.target.value;  
                navigate("/search/"+title);
            }
        }
    }

    function catalogue() {
        return() =>{  
            navigate("/");
        }
    }
    
    return (
        <div className="header">
            <div className="header-catalogue" onClick={catalogue()}>Catalog</div>
            <div>
                <input type="text" className="search" placeholder="Search Movie" onKeyUp={search()}></input>
            </div>
        </div>
    )
}