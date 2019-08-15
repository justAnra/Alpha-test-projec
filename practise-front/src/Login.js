import React from 'react'
import { Form, Field } from 'react-final-form'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from './HeaderMenu'

const onSubmit = async values => {
    window.alert(JSON.stringify(values, 0, 2))
}

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#83a2f9',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
        background: 'white',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    background: {
        background: '#f9f9f9'
    },
}));

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required';
    }
    if (!values.password) {
        errors.password = 'Required';
    }
    return errors;
};

export default function SignUp() {
    const classes = useStyles();

    return (
        <div className={classes.background}>
            <Header />
            <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({ handleSubmit, reset, submitting, pristine, values }) => (
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}><LockOutlinedIcon /></Avatar>
                            <Typography component="h1" variant="h5">Авторизация</Typography>
                            <form onSubmit={handleSubmit} className={classes.form} validate>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Field name="username">
                                            {props => (
                                                <TextField
                                                    variant="outlined"
                                                    required
                                                    fullWidth
                                                    id="username"
                                                    label="Логин"
                                                    name={props.input.name}
                                                    value={props.input.value}
                                                    onChange={props.input.onChange}
                                                    autoComplete="nickname"
                                                    autoFocus
                                                />
                                            )}
                                        </Field>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Field name="password">
                                            {props => (
                                                <TextField
                                                    variant="outlined"
                                                    required
                                                    fullWidth
                                                    type="password"
                                                    id="password"
                                                    label="Пароль"
                                                    name={props.input.name}
                                                    value={props.input.value}
                                                    onChange={props.input.onChange}
                                                    autoComplete="password"
                                                />
                                            )}
                                        </Field>
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}>
                                    Войти
                                </Button>
                                <Grid container justify="flex-end">
                                    <Grid item>
                                        <Link href="/registration" variant="body2">
                                            Нету аккаунта? Зарегистрируйтесь
                                    </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </Container>
                )}
            />
        </div>
    );
}