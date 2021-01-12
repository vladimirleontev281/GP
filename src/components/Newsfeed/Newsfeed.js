import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import {NEWSFEED, TO_READ, TO_CHANGE} from '../../store/reducers/globalReducer';
import {getNewsImagePath} from '../../utils'
import Preloader from '../Preloader/Preloader';
import Search from './Search/Search';
import Button from './Button/Button';
import NewsItem from './NewsItem/NewsItem';
import ModalToRead from './ModalToRead/ModalToRead';
import FormToChange from './FormToChange/FormToChange';

const Newsfeed = (props) => {
  const {
    isLoading, mode, articles, currentArticle, search, 
    activateModal, deactivateModal, initFormToChange, 
    setNewNewsItem, deleteNewsItem, setSearch, clearSearch
  } = props;

  const newsArray = search ? search : articles;
  
  return <div className={`${styles.Newsfeed} ${mode === 2 ? styles.modalMode : ''}`}>
    <div className={styles.header} >
      <span className={styles.logo} >newsfeed</span>
      <Search className={styles.Search} articles={articles} 
              setSearch={setSearch} clearSearch={clearSearch}
      />
      <Button className={styles.addNewsButton} 
              clickHandler={() => activateModal(null, TO_CHANGE)}
      >add news</Button>
    </div>

    { mode === NEWSFEED ? 
      <ul className={styles.main} >
      {
        newsArray.map(item => {
          return <NewsItem  key={item.id} className={styles.NewsItem} prewiev={item.preview}
                            imagePath={getNewsImagePath(item)} id={item.id} 
                            activateModal={activateModal}
          />
        })
      }
      </ul>
      : null
    }
    
    {
      mode === TO_READ ? 
        <ModalToRead  className={styles.ModalToRead} newsItem={currentArticle} 
                      handlerToClose={deactivateModal}
        /> 
        :  null
    }

    {
      mode === TO_CHANGE ? 
        <FormToChange newsItem={currentArticle} handlerToClose={deactivateModal}
                      onSubmit={setNewNewsItem} initForm={initFormToChange}
                      className={styles.FormToChange} isLoading={isLoading} 
                      handlerToDelete={deleteNewsItem}
        /> 
      : null
    }

    {isLoading && mode === NEWSFEED ? <Preloader className={styles.Preloader} absolute /> : null}
  </div>;
};

const itemPropTypes = PropTypes.shape({
  id: PropTypes.number,
  original: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]),
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]),
  preview: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]),
  newsLayout: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]),
  images:PropTypes.shape({
    small: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]),
    large: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]),
  }),
});

Newsfeed.propTypes = {
  isLoading: PropTypes.bool, 
  mode: PropTypes.number, 
  articles: PropTypes.arrayOf(itemPropTypes),
  currentArticle: PropTypes.oneOfType([
    itemPropTypes,
    PropTypes.oneOf([null]).isRequired
  ]),
  search: PropTypes.oneOfType([
    PropTypes.arrayOf(itemPropTypes).isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]), 
  activateModal: PropTypes.func,  
  deactivateModal: PropTypes.func,  
  initFormToChange: PropTypes.func,  
  setNewNewsItem: PropTypes.func,  
  deleteNewsItem: PropTypes.func,  
  setSearch: PropTypes.func,  
  clearSearch: PropTypes.func, 
};
export default Newsfeed;