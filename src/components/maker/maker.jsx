import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Dohyun',
      company: 'Null',
      theme: 'dark',
      title: '프론트엔드 개발자',
      email: 'dohyun033@gmail.com',
      message: 'Just do it',
      fileName: 'dohyun',
      fileURL: null,
    },
    {
      id: '2',
      name: 'Dohyun2',
      company: 'Null',
      theme: 'light',
      title: '프론트엔드 개발자',
      email: 'dohyun033@gmail.com',
      message: 'Just do it',
      fileName: 'dohyun',
      fileURL: null,
    },
    {
      id: '3',
      name: 'Dohyun3',
      company: 'Null',
      theme: 'colorful',
      title: '프론트엔드 개발자',
      email: 'dohyun033@gmail.com',
      message: 'Just do it',
      fileName: 'dohyun',
      fileURL: null,
    }
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push('/');
      }
    });
  });

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  }
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard}/>
        <Preview cards={cards}/>
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
