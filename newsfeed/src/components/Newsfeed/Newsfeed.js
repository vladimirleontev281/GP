import React from 'react';
import styles from './styles.module.css';
import {NEWSFEED, TO_READ, TO_CHANGE} from '../../store/reducers/globalReducer';
import {getNewsImagePath} from '../../utils'
import Preloader from '../Preloader/Preloader';
import NewsItem from './NewsItem/NewsItem';
import ModalToRead from './ModalToRead/ModalToRead';
import ModalToChange from './ModalToChange/ModalToChange';

const Newsfeed = (props) => {
  const {
    isLoading, mode, articles, currentArticle, search, 
    activateModalToRead, deactivateModalToRead, activateModalToChange, deactivateModalToChange
  } = props;
  const newsArray = search.length ? search : articles;

  return <div className={styles.Newsfeed}>
    {isLoading ? <Preloader absolute /> : null}

    {
      mode === TO_READ ? 
        <ModalToRead newsItem={currentArticle} handlerToClose={deactivateModalToRead}/> 
        :  null
    }

    {
      mode === TO_CHANGE ? 
        <ModalToChange newsItem={currentArticle} handlerToClose={deactivateModalToChange}/> 
      : null
    }

    <div className={styles.header} >
      <span className={styles.logo} >newsfeed</span>
      <button className={styles.addNewsButton} onClick={() => activateModalToChange(null)}>
        add news
      </button>
    </div>

    { !isLoading && mode === NEWSFEED ? 
      <ul className={styles.main} >
      {
        newsArray.map(item => {
          return <NewsItem  key={item.id} className={styles.NewsItem} prewiev={item.preview}
                            imagePath={getNewsImagePath(item)} id={item.id} 
                            toReadMoreClickHandle={activateModalToRead} 
                            toChangeNewsClickHandle={activateModalToChange}
          />
        })
      }
      </ul>
      : null
    }
  </div>;
};
export default Newsfeed;