import React from "react"

function ContactCard(props) {
    console.log(props)
    //console.log(!null && "none")
    return (
        <div>
            <h1 style={{display: props.id ? "block" : "none"}}>{props.id}: </h1>
            <h3>{props.name} </h3>
        </div>
    )
}

export default ContactCard