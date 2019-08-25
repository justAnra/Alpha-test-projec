import React, { } from 'react';
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import HeaderMenu from './HeaderMenu'
import './App.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    background: {
      background: '#f9f9f9',
    },
  })
);

export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <HeaderMenu />
        </div>
    )
}