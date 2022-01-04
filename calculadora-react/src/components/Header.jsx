import React, { Component } from "react";

export default class Header extends Component {

    render(){
        return(
            <header style={style.header}>
            <h1>{this.props.title}</h1>
            </header>
        );
    }
}

const style = { //pode-se colocar style css usando jS, para isso deve se trocar umas coisas como 
                // no lugar do ; tem q ser só virgula. E não pode ter - tem q tirar e usar a primeira letra da proxima palavar em maiusculo. 
    header: {
        height: '150px', 
        background: 'yellow',
        padding: '30px',
        display: 'flex',
        alignItems: 'flex-end',
    }// isto é um objeto.
}