import React from "react";

export default class Contact extends React.Component{
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div style={{padding:"10px"}}>
                <div style={{display:"flex"}}>
                <label> Name:</label> <p> Kevin Vissuet</p>
                </div>
                <div style={{display:"flex"}}>
                <label> Phone Number: </label> <p> 619 971 3071</p>
                </div>
                <div style={{display:"flex"}}>
                <label> Email: </label> <p> kvissuet@gmail.com </p>
                </div>
            </div>
        )
    }
}