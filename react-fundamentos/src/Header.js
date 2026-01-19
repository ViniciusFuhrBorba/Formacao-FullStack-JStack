import React, { useContext } from "react";
import Button from "./Button";
import { ThemeContext } from "./ThemeContext";
export default function Header(props) {
    const { theme, onToggleTheme } = useContext(ThemeContext);

    return (
        <>
            <h1>{props.title}</h1>
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