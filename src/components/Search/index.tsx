import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJokes } from '../../store/actions/searchAction';
import style from './index.module.scss';

const Search: React.FC = () => {
  const dispatch = useDispatch()
  const total = useSelector((state: any) => state.search.jokes.total);

  const api = 'https://api.chucknorris.io/jokes/search'

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length >= 3) {
      try {
        const response = await fetch(`${api}?query=${event.target.value}`);
        if (response.ok) {
          const data = await response.json();
          dispatch(fetchJokes(data))
        } else {
          console.error('Ошибка HTTP:', response.status);
        }
      } catch (error) {
        console.error('Ошибка при выполнении GET-запроса:', error);
      }
    }
  };

  return (
    <>
      <section className={style['search']}>
        <input 
          className={style['search__input']}
          ref={inputRef}
          type="text"
          placeholder='Search jokes...'
          onChange={handleInputChange} />
      </section>
      {total > 0 && <span className={style['search__total']}>Found jokes: {total}</span>}
    </>
  );
};

export default Search;
