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
import Switcher from '../Switcher/Switcher';
import Menu from './Menu/Menu';

const Newsfeed = (props) => {
  const {
    isLoading, mode, articles, currentArticle, search, sortArray, defaultSort, isMenuOpen,
    activateModal, deactivateModal, initFormToChange, setMenu,
    setNewsItem, deleteNewsItem, setSearch, clearSearch, setSort,
  } = props;
  const newsArray = search ? search : articles;

  const addButton = <Button 
    className={styles.addNewsButton} 
    clickHandler={() => activateModal(null, TO_CHANGE)}
  >add news</Button>;

  const sortInterface = <Switcher 
    className={styles.Switcher} itemClassName={styles.SwitcherItem}
    descripClassName={styles.SwitcherDescrip}
    name={'Sort'} clickHandler={value => {setSort(value)}}
    items={sortArray} active={defaultSort}
  />
  
  return <div className={`${styles.Newsfeed} ${mode === 2 ? styles.modalMode : ''}`}>
    <div className={styles.header} >
      <span className={styles.logo} >newsfeed</span>
      <Search className={styles.Search} articles={articles} 
              setSearch={setSearch} clearSearch={clearSearch}
      />
      <Menu className={styles.Menu} bodyClassName={styles.memuBody} listClassName={styles.MenuList} 
            bgOfCloseButton={'./img/close.png'} isOpen={isMenuOpen}
            items={[addButton, sortInterface]}
            clickHandler={setMenu}
      />
    </div>

    { mode === NEWSFEED ? 
      <ul className={styles.main} >
      {
        newsArray.map(item => {
          return <NewsItem  key={item.id} className={styles.NewsItem} prewiev={item.preview}
                            imagePath={getNewsImagePath(item)} id={item.id} date={item.date}
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
                      onSubmit={setNewsItem} initForm={initFormToChange}
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
  date: PropTypes.number,
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
  setNewsItem: PropTypes.func,  
  deleteNewsItem: PropTypes.func,  
  setSearch: PropTypes.func,  
  clearSearch: PropTypes.func, 
};
export default Newsfeed;