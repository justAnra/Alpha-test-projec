import React, { } from 'react';
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import HeaderMenu from './HeaderMenu'
import Footer from './Footer'
import News from './News'
import './App.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    background: {
      background: '#f9f9f9',
    },
    news: {
      display: 'flex',
      margin: '0px 100px 0px 100px',
      'flex-wrap': 'wrap',
    }
  })
);

function GetNews(props) {
    const items = props.news
    const itemsList = []
    items.forEach(item => {
        itemsList.push(
            News(item)
        )
    });
    return (
        itemsList
    )
}


const Newsdata = [
    {
      id: '0',
      picture: 'https://cdn21.img.ria.ru/images/155704/36/1557043627_0:0:3072:2048_1440x900_80_1_1_6ae4cb528e93f68b3ac704588c3a05dd.jpg',
      title: 'ВС разъяснил, при каких условиях не могут забрать за долги ипотечное жилье',
      summary: 'Узнайте что разъяснил ВС',
      date: Date(),
      about: `МОСКВА, 13 авг — РИА Новости. Судебная коллегия Верховного суда разъяснила, в каких ситуациях у ипотечных заемщиков не могут отобрать жилье за долги, пишет "Российская газета".
      Соответствующее решение отражено в постановлении по делу молодой семьи из Башкирии.
      Супруги купили по ипотечному кредиту однокомнатную квартиру в залог и практически десять лет аккуратно и вовремя расплачивались с банком, который осенью 2015 года передал права по закладной другому юридическому лицу, а заемщики несколько раз просрочили платежи.
      В итоге кредитор через суд потребовал от семьи досрочно вернуть оставшуюся сумму в размере 458 тысяч рублей, выплатить более 80 тысяч за пользование займом, пеню за просрочку в размере 115 тысяч, а также выставить на торги их квартиру, которую оценили в 1,28 миллиона рублей.`
    },
  
  ]

export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <HeaderMenu />
            <div className={classes.news}>
                <GetNews news={Newsdata} />
            </div>
            <Footer />
        </div>
    )
}