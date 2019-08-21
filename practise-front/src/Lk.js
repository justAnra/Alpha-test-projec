import React from 'react'
import { Form, Field } from 'react-final-form'
import { BrowserRouter as Redirect, Link, Route, Router } from "react-router-dom"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from './HeaderMenu'
import AddUser from './AddUser'

export default function Lk(){
    return(
        <Box>
        <Header/>
        <AddUser/>
        </Box>
    )
}