import React, { useContext } from "react";
import Button from "./Button";
import { ThemeContext } from "./ThemeContext";

import styles from './Header.module.scss'

export default function Header(props) {
    const { theme, onToggleTheme } = useContext(ThemeContext);

    return (
        <>
            <h1 className={styles.title}>{props.title}</h1>
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