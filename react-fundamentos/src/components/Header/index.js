import React, { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

import Button from "../Button";
import Title from "../Title";

export default function Header(props) {
    const { theme, onToggleTheme } = useContext(ThemeContext);

    return (
        <>
            <Title>{props.title}</Title>
            <Button onClick={onToggleTheme}>
                Mudar Tema
            </Button>
            <p>Cor: {theme}</p>
            {props.children}
        </>
    )
}

//Propriedades default do componente
Header.defaultProps = {
    title: `JStack's Blog`
}