import React from 'react';
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        header: {
            background: 'white',
            display: 'flex',
            'box-shadow': '0px 0px 15px rgba(0,0,0,0.15)',
            margin: '20px 100px 80px 100px',
            'border-radius': '5px',
            'min-width': '660px',
        },
        'menu-item': {
            'text-align': 'center',
            'width': '90px',
            'font-size': '12pt',
            'line-height': '60px',
            'text-decoration': 'none',
            'color': 'black',
            'padding': '0px 20px 0px 20px',
            'box-sizing': 'unset',
            '&:hover': {
                cursor: 'pointer',
                background: '#fbfbfb',
                'box-shadow': 'inset 2px 1px 10px -2px #c7c7c7',
            },
        },
        auth: {
            'margin-left': 'auto',
            display: 'flex',
        },
    })
);

export default function HeaderMenu() {
    const classes = useStyles()
    return (
        <div className={classes.header}>
            <a href={'/'} className={classes["menu-item"]}>Главная</a>
            <div className={classes.auth}>
                <a href={'/registration'} className={classes["menu-item"]}>Регистрация</a>
                <a href={'/login'} className={classes["menu-item"]}>Войти</a>
            </div>
        </div>
    )
}