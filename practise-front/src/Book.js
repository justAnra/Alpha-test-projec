import React from "react";
import { Link } from "react-router-dom"
import { makeStyles, Theme } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import RateUp from '@material-ui/icons/ThumbUpAlt';
import RateDown from '@material-ui/icons/ThumbDownAlt';
import ArrowFoward from '@material-ui/icons/ArrowForwardIos';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles((theme: Theme) => ({
    '@keyframes hoverBook': {
        from: {
            boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)'},
        to: { boxShadow: '0px 10px 20px 9px rgba(0,0,0,0.2)' }
    },
    book: {
        flexGrow: 1,
        width: 'fit-content',
        padding: theme.spacing(1),
        '&:hover .rating': {
            display: 'flex',
        }

    },
    paper: {
        padding: theme.spacing(1),
        margin: 'auto',
        maxWidth: 800,
        minWidth: 400,
    },
    image: {
        height: 220,
        width: 165,
        
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        height: 'fit-content',
        
    },
    rating: {
        position: 'absolute',
        bottom: '4px',
        background: '#000000aa',
        width: 165,
        right: '4px',
        display: 'none',
    },
    rateButton: {
        'border-radius': '6px',
        color: '#ffffffab',
        'text-align': 'center',
        height: 30,
    },
    avatar: {
        position: `relative`,
        marginRight: 10,
    },
    subInfo: {
        color: '#9f9f9f'
    },
    aboutInfo: {
        display: '-webkit-box',
        '-webkit-line-clamp': 3,
        '-webkit-box-orient': 'vertical',
        'overflow': 'hidden',
        'text-overflow': 'ellipsis',
    },
    tag: {
        margin: theme.spacing(0.3),
        '&:hover': {
            background: '#c4c4c4'
        }
    },
    subFooter: {
        color: '#9f9f9f',
        marginTop: 7,
    },
}))

function GetTags(props) {
    const classes = useStyles();
    const items = props.tags
    const tagList = []
    items.forEach(item => {
        tagList.push(
            <Chip className={classes.tag} variant="outlined" color="default" size="small" label={item} key={item} />
        )
    });
    return tagList
}

export default function Books(props) {
    const classes = useStyles();
    const book = props.bookData;
    return (
        <Container className={classes.book}>
            <Paper className={classes.paper}>
                <Grid container spacing={0}>
                    <Grid item className={classes.avatar} >
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={book.img} />
                        </ButtonBase>
                        <Grid justify="flex-end" container spacing={1} className={`${classes.rating} ${'rating'}`}>
                            <Grid xs={6} item style={{ textAlign: 'center' }}>
                                <ButtonBase className={classes.rateButton}>
                                    <RateUp color='inherit' fontSize="small" />
                                    <Typography variant="subtitle2" style={{ marginLeft: 5 }}>{book.ratesUp}</Typography>
                                </ButtonBase>
                            </Grid>
                            <Grid xs={6} item style={{ textAlign: 'center' }}>
                                <ButtonBase className={classes.rateButton}>
                                    <RateDown color='inherit' fontSize="small" />
                                    <Typography variant="subtitle2" style={{ marginLeft: 5 }}>{book.ratesDown}</Typography>
                                </ButtonBase>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs container style={{ cursor: 'default' }} direction="row">
                        <Grid item xs={12} style={{ height: 25 }}>
                            <Typography gutterBottom variant="h6" style={{ marginBottom: '0px' }}>
                                {book.name}
                            </Typography>
                            <Divider />
                        </Grid>
                        <Grid item className={classes.subInfo} xs={12} container justify="space-between">
                            <Grid item xs={9}>
                                <Typography gutterBottom variant="subtitle2">
                                    {book.author}
                                </Typography>
                            </Grid>
                            <Grid item xs={3} style={{ textAlign: 'right' }}>
                                <Typography gutterBottom variant="subtitle2">
                                    {new Date(book.date).getFullYear() + ' г.'}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className={classes.aboutInfo} variant="body2">
                                {book.about}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <GetTags tags={book.tags} />
                        </Grid>
                        <Grid item xs={12} style={{ height: 18 }}>
                            <Divider />
                            <Grid item className={classes.subFooter} xs={12} container justify="space-between">
                                <Grid item xs={4}>
                                    <Typography gutterBottom variant="subtitle2">
                                        {`Читают: ${book.currentInUsing} из ${book.totalAmount}`}
                                    </Typography>
                                </Grid>
                                <Grid item xs={5} style={{ textAlign: 'right' }}>
                                    <Link to={''}>
                                        <Typography gutterBottom variant="subtitle2">
                                            Подробнее <ArrowFoward style={{ fontSize: '1.0rem', verticalAlign: 'text-top' }} />
                                        </Typography>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}