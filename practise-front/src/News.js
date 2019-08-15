import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            maxWidth: 500,
            minWidth: 260,
            width: '30%',
            margin: '0px 25px 100px 0px'
        },
        media: {
            height: 0,
            paddingTop: "56.25%" // 16:9
        },
        avatar: {
            backgroundColor: red[500]
        },
        more: {
            marginLeft: "auto"
        },
        review: {
            height: '105px',
            overflow: 'hidden',
            display: '-webkit-box',
            '-webkit-line-clamp': 6,
            '-webkit-box-orient': 'vertical'
        }
    })
);

function ConvertDate(props) {
    const date = props
    const month = [
        'Января',
        'Февраля',
        'Марта',
        'Апреля',
        'Мая',
        'Июня',
        'Июля',
        'Августа',
        'Сентября',
        'Октября',
        'Ноября',
        'Декабря'
    ]
    return (`${date.getDate()} 
    ${month[date.getMonth()]} 
    ${date.getFullYear()} г. 
    в ${date.getHours() < 10 ? ('0' + date.getHours()) : date.getHours()}:${date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes()}`)
}

export default function News(props) {
    const classes = useStyles();
    const news = props;

    return (
        <Card className={classes.card} key={news.id}>
            <CardHeader
                avatar={
                    <Avatar aria-label="News" className={classes.avatar}>
                        R
                    </Avatar>
                }
                title={news.title}
                subheader={ConvertDate(new Date(news.date))}
            />
            <CardMedia
                className={classes.media}
                image={news.picture}
                title={news.title}
            />
            <CardContent className={classes.review}>
                <Typography variant="body2" color="textSecondary" component="p">
                    {news.about}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton href={'news/'+news.id} aria-label="show more" className={classes.more}>
                    <MoreHorizIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}