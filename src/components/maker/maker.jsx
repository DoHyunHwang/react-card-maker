import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    '1': {
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
    '2' : {
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
    '3' : {
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
  });
  
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

  const createOrUpdateCard = (card) => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated
    });
  };

  const deleteCard = (card) => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id]
      return updated
    });
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor 
          cards={cards} 
          addCard={createOrUpdateCard} 
          updateCard={createOrUpdateCard} 
          deleteCard={deleteCard}/>
        <Preview cards={cards}/>
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
