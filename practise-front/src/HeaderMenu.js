import React from 'react';
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Container, Button, Typography } from '@material-ui/core';
import { Link } from "react-router-dom"
import AccountBox from '@material-ui/icons/AccountBox';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToApp from '@material-ui/icons/ExitToApp';
import LoginContext from './context/login';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        'body': {
            background: 'black'
        },
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
                background: 'white',
                'box-shadow': 'inset 2px 1px 10px -2px #c7c7c7',
            },
        },
        auth: {
            float: 'right',
        },
        root: {
            'padding-top': '20px',
            'margin-bottom': '20px',
            flexGrow: 1,
            background: 'inherit',
        },
        menu: {
            padding: theme.spacing(1),
            textAlign: 'center',
            display: 'flex',
            color: theme.palette.text.secondary,
            '&:hover': {
                'text-decoration': 'none',
            }
        },
        icon: {
            'margin-left': '10px',
            'font-size': '1.3rem'
        },
        authMenu: {
            display: 'contents',
        },

    })
);

export default function HeaderMenu(props) {
    const classes = useStyles()
    return (
        <Container className={classes.root}>
            <MainMenuItems />
            <AuthenticationItems isLogin={false} />
        </Container>
    )
}

function MainMenuItems() {
    const classes = useStyles()
    return (
        <Button>
            <Link className={classes.menu} to="/">
                <Typography variant="h8">Главная</Typography><HomeIcon className={classes.icon} />
            </Link>
        </Button>
    )
}

function AuthenticationItems(props) {
    const classes = useStyles()

    return (<LoginContext.Consumer>
        {value => value.login ?
            (
                <Container className={classes.authMenu}>
                    <Button className={classes.auth}
                        onClick={() => {
                            value.changeLoginState(false)
                            document.cookie=`sessionKey=null`
                        }
                        }>
                        <Link className={classes.menu} href="/login" variant="body2">
                            <Typography variant="h8">Выход</Typography><ExitToApp className={classes.icon} />
                        </Link>
                    </Button >
                    <Button className={classes.auth} >
                        <Link className={classes.menu} to="/lk" variant="body2">
                            <Typography variant="h8">{value.username}</Typography><AccountCircle className={classes.icon} />
                        </Link>
                    </Button>
                </Container>
            ) : (
                <Button className={classes.auth} >
                    <Link className={classes.menu} to='/login'>
                        <Typography variant="h8">Вход</Typography><AccountBox className={classes.icon} />
                    </Link>
                </Button>
            )}
    </LoginContext.Consumer>
    )

}

/*
        <div className={classes.header}>
            <a href={'/'} className={classes["menu-item"]}>Главная</a>
            <div className={classes.auth}>
                <a href={'/login'} className={classes["menu-item"]}>Войти</a>
            </div>
        </div>
*/