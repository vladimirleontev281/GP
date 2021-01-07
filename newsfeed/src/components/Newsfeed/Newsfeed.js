import React from 'react';
import styles from './styles.module.css';
import {NEWSFEED, TO_READ, TO_CHANGE} from '../../store/reducers/globalReducer';
import {getNewsImagePath} from '../../utils'
import Preloader from '../Preloader/Preloader';
import Button from './Button/Button';
import NewsItem from './NewsItem/NewsItem';
import ModalToRead from './ModalToRead/ModalToRead';
import FormToChange from './FormToChange/FormToChange';

const Newsfeed = (props) => {
  const {
    isLoading, mode, articles, currentArticle, search, 
    activateModalToRead, deactivateModal, activateFormToChange, 
    initFormToChange, setNewNewsItem
  } = props;
  const newsArray = search.length ? search : articles;

  return <div className={styles.Newsfeed}>
    {isLoading ? <Preloader absolute /> : null}

    {
      mode === TO_READ ? 
        <ModalToRead newsItem={currentArticle} handlerToClose={deactivateModal}/> 
        :  null
    }

    {
      mode === TO_CHANGE ? 
        <FormToChange newsItem={currentArticle} handlerToClose={deactivateModal}
                      onSubmit={setNewNewsItem} initForm={initFormToChange}
        /> 
      : null
    }

    <div className={styles.header} >
      <span className={styles.logo} >newsfeed</span>
      <Button className={styles.addNewsButton} clickHandler={() => activateFormToChange(null)}>
        add news
      </Button>
    </div>

    { !isLoading && mode === NEWSFEED ? 
      <ul className={styles.main} >
      {
        newsArray.map(item => {
          return <NewsItem  key={item.id} className={styles.NewsItem} prewiev={item.preview}
                            imagePath={getNewsImagePath(item)} id={item.id} 
                            toReadMoreClickHandler={activateModalToRead} 
                            toChangeNewsClickHandler={activateFormToChange}
          />
        })
      }
      </ul>
      : null
    }
  </div>;
};
export default Newsfeed;