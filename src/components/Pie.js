import React from "react";
import Link from "./Link";

const Pie = ()=>{
    const contenidoPie = [
        {name : "quienes", link : "who.html"},
        {name : "soporte", link : "help.html"},
        {name : "contacto", link : "mail.html"},
        {name : "faq", link : "questions.html"}
    ]
        return (
            <div className="foot" >
                <ul>
                    {   
                        Object.keys(contenidoPie).map(function (element) {
                            return <Link key={element} link = {contenidoPie[element]} />
                        })
                    }
                </ul>
            </div>
        )
}

export default Pie;