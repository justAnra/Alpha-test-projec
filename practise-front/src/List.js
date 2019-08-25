import React, { } from 'react';
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import HeaderMenu from './HeaderMenu'
import Book from './Book'
import './App.css';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        background: {
            background: '#f9f9f9',
        },
    })
);

export default function List() {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <HeaderMenu />
            <BookList books={booksData} />
        </div>
    )
}

function BookList(props) {
    const books = props.books
    const bookList = []
    books.forEach(item => {
        bookList.push(
            <Book bookData={item} key={item.id}/>
        )
    });
    return bookList
}
const booksData = [
    {
        id: '1',
        img: 'https://exploringjs.com/impatient-js/img-homepage/cover-homepage.jpg',
        name: 'Выразительный JavaScript',
        author: 'Marijn Haverbeke',
        date: Date(),
        about: `Перевод книги Marijn Haverbeke "Eloquent JavaScript". Лицензия Creative Commons attribution-noncommercial license. Код предоставляется под лицензией MIT. Перевод книги Marijn Haverbeke "Eloquent JavaScript".`,
        tags: ['JS', 'Junior'],
        currentInUsing: 0,
        totalAmount: 5,
        ratesUp: 100,
        ratesDown: 5,
    }, {
        id: '2',
        img: 'https://exploringjs.com/impatient-js/img-homepage/cover-homepage.jpg',
        name: 'Выразительный JavaScript',
        author: 'Marijn Haverbeke',
        date: Date(),
        about: `Перевод книги Marijn Haverbeke "Eloquent JavaScript". Лицензия Creative Commons attribution-noncommercial license. Код предоставляется под лицензией MIT. Перевод книги Marijn Haverbeke "Eloquent JavaScript".`,
        tags: ['JS'],
        currentInUsing: 2,
        totalAmount: 5,
        ratesUp: 235,
        ratesDown: 5,
    }, {
        id: '3',
        img: 'https://exploringjs.com/impatient-js/img-homepage/cover-homepage.jpg',
        name: 'Выразительный JavaScript',
        author: 'Marijn Haverbeke',
        date: Date(),
        about: `Перевод книги Marijn Haverbeke "Eloquent JavaScript". Лицензия Creative Commons attribution-noncommercial license. Код предоставляется под лицензией MIT. Перевод книги Marijn Haverbeke "Eloquent JavaScript".`,
        tags: ['JS', 'Junior'],
        currentInUsing: 0,
        totalAmount: 5,
        ratesUp: 1000,
        ratesDown: 5000,
    },
]