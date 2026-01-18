import React from "react";

export default function Header(props) {
    return (
        <>
            <h1>{props.title}</h1>
            {props.children}
        </>
    )
}

//Propriedades default do componente
Header.defaultProps = {
    title: `JStack's Blog`
}