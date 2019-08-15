import React from 'react';
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import HeaderMenu from './HeaderMenu'
import Footer from './Footer'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        background: {
            background: '#f9f9f9',
        },
        new: {
            padding: '0px 0px 0px 0px',
            margin: '0px 100px 0px 100px',
        },
        'news-title': {
            padding: '10px 10px 10px 10px',
            margin: '0px 0px 20px 0px',
        },
        about: {
            padding: '10px 10px 10px 10px',
            'font-size': '12pt;',
            'line-height': '27px;',
            width: '80%;',
            margin: '0px 0px 40px 0px;',
        },
        'news-img-container': {
            width: 900,
            margin: 'auto'
        },
        media: {
            height: 0,
            paddingTop: "56.25%" // 16:9
        },
        card: {
            width: '50%',
            margin: '0 auto 20px auto'
        }
    })
);

function GetNewsInfo(props) {
    const classes = useStyles()
    const news = props.new
    return (
        <div className={classes.new}>
            <Paper className={classes.new}>
                <Typography  className={classes['news-title']} variant="h5" component="h3">
                    {news.title}
                </Typography>
            </Paper>
            <Card className={classes.card}>
            <CardMedia className={classes.media} image={news.picture}/>
            </Card>
            <Paper className={classes.new}>
                <Typography  className={classes['about']} variant="h5" component="h3">
                    {news.about}
                </Typography>
            </Paper>
        </div >
    )
}

const NewData = {
    id: '0',
    picture: 'https://cdn21.img.ria.ru/images/155704/36/1557043627_0:0:3072:2048_1440x900_80_1_1_6ae4cb528e93f68b3ac704588c3a05dd.jpg',
    title: 'ВС разъяснил, при каких условиях не могут забрать за долги ипотечное жилье',
    summary: 'Узнайте что разъяснил ВС',
    about: `МОСКВА, 13 авг — РИА Новости. Судебная коллегия Верховного суда разъяснила, в каких ситуациях у ипотечных заемщиков не могут отобрать жилье за долги, пишет "Российская газета".
      Соответствующее решение отражено в постановлении по делу молодой семьи из Башкирии.
      Супруги купили по ипотечному кредиту однокомнатную квартиру в залог и практически десять лет аккуратно и вовремя расплачивались с банком, который осенью 2015 года передал права по закладной другому юридическому лицу, а заемщики несколько раз просрочили платежи.
      В итоге кредитор через суд потребовал от семьи досрочно вернуть оставшуюся сумму в размере 458 тысяч рублей, выплатить более 80 тысяч за пользование займом, пеню за просрочку в размере 115 тысяч, а также выставить на торги их квартиру, которую оценили в 1,28 миллиона рублей.`

}

export default function FullNews({ match }) {
    const classes = useStyles()
    return (
        <div className={classes.background}>
            <HeaderMenu />
            <GetNewsInfo new={NewData} />
            <Footer />
        </div>
    )
}