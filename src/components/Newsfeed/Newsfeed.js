import React from 'react';
import PropTypes from 'prop-types';
import styles from './Newsfeed.module.css';
import {NEWSFEED, TO_READ, TO_CHANGE} from '../../store/reducers/globalReducer';
import {getNewsImagePath} from '../../utils'
import Preloader from '../Preloader/Preloader';
import Search from '../Search/Search';
import Button from '../Button/Button';
import NewsItem from './NewsItem/NewsItem';
import ModalToRead from './ModalToRead/ModalToRead';
import FormToChange from './FormToChange/FormToChange';
import Switcher from '../Switcher/Switcher';
import Menu from './Menu/Menu';
import UserSection from './UserSection/UserSection';
import FilterContainer from './Filter/FilterContainer';

const Newsfeed = (props) => {
  const {
    isLoading, mode, articles, currentArticle, user, arrOfSortNames, defaultSortName, isMenuOpen,
    activateModal, deactivateModal, setNewsItem, deleteNewsItem, initForm, setMenu,
    setFilter, removeFilter, setSort, logout, setRedirect,
    searchValue, setSearchValue, filterMethods,
  } = props;

  const userBlock = <UserSection  
    user={user} logoutClickHandler={logout} closeMenu={() => {setMenu(false)}}
    setRedirect={setRedirect}
  />
  const addButton = <Button 
    className={styles.addNewsButton} clickHandler={() => activateModal(null, TO_CHANGE)}
  >add news</Button>;

  const sortInterface = <Switcher 
    extStyles={styles} name={'Sort'} items={arrOfSortNames} active={defaultSortName} 
    clickHandler={value => {setSort(value)}}  
  />

  const filter = <FilterContainer  
    className={styles.Filter} setFilter={setFilter} removeFilter={removeFilter} 
    filterMethods={filterMethods}
  />

  const menuArray = [userBlock, addButton, sortInterface, filter];
  if (!user) menuArray.splice(1, 1);
  
  return <div className={`${styles.Newsfeed} ${mode === 2 ? styles.modalMode : ''}`}>
    <div className={styles.header} >
      <span className={`unselectable ${styles.logo}`} >newsfeed</span>
      <Search className={styles.Search} placeholder={'Enter filter value'} value={searchValue}
              onChangeHandler={setSearchValue} clearForm={() => {setSearchValue('')}}
      />
      <Menu className={styles.Menu} bodyClassName={styles.memuBody} listClassName={styles.MenuList} 
            bgOfCloseButton={'./img/close.png'} isOpen={isMenuOpen} items={menuArray} 
            clickHandler={setMenu}
      />
    </div>

    { mode === NEWSFEED ? 
      <ul className={styles.main} >
        {articles.map(item => {
        return <NewsItem  key={item.id} className={styles.NewsItem} prewiev={item.preview}
                          imagePath={getNewsImagePath(item, {prefix: props.prefix})} 
                          id={item.id} date={item.date}
                          owner={item.owner} activateModal={activateModal}
                          activeUser={user ? user.id : null}
        />
        })}
      </ul>
    : null
    }
    
    { mode === TO_READ ? 
      <ModalToRead  className={styles.ModalToRead} newsItem={currentArticle} 
                    handlerToClose={deactivateModal}
      /> 
    : null
    }

    {mode === TO_CHANGE ? 
      <FormToChange newsItem={currentArticle} handlerToClose={deactivateModal}
                    onSubmit={e => setNewsItem(e, user)} initForm={initForm}
                    className={styles.FormToChange} isLoading={isLoading} 
                    handlerToDelete={deleteNewsItem}
      /> 
    : null
    }

    {isLoading && mode === NEWSFEED ? <Preloader className={styles.Preloader} absolute /> : null}
  </div>;
};

const userPropTypes = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  surname: PropTypes.string
});

const itemPropTypes = PropTypes.shape({
  id: PropTypes.number,
  owner: userPropTypes,
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
  user: userPropTypes,
  arrOfSortNames: PropTypes.arrayOf(PropTypes.string),
  defaultSortName: PropTypes.string, 
  isMenuOpen: PropTypes.bool,
  activateModal: PropTypes.func, 
  deactivateModal: PropTypes.func, 
  setNewsItem: PropTypes.func, 
  deleteNewsItem: PropTypes.func, 
  initForm: PropTypes.func, 
  setMenu: PropTypes.func,
  setFilter: PropTypes.func, 
  removeFilter: PropTypes.func, 
  setSort: PropTypes.func, 
  logout: PropTypes.func, 
  setRedirect: PropTypes.func,
  searchValue: PropTypes.string, 
  setSearchValue: PropTypes.func, 
  filterMethods: PropTypes.arrayOf(PropTypes.string),
};
export default Newsfeed;