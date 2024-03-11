import { useSelector } from 'react-redux';

import style from "./index.module.scss"

const Jokes: React.FC = () => {
  const jokes = useSelector((state: any) => state.search.jokes.result);

  return(
    <section className={style['jokes']}>
      {jokes && jokes.map((joke: Joke) => (
        <div className={style['jokes__joke']} key={joke.id}>
          <div className={style['jokes__joke__text']}>{joke.value}</div>
          <span className={style['jokes__joke__info']}>
            <span>{joke.id}</span>
            <span>{joke.created_at}</span>
          </span>
        </div>
      ))}
    </section>
  )
}

interface Joke {
  categories: Array<string>,
  created_at: string,
  icon_url: string,
  id: string,
  updated_at: string,
  url: string,
  value: string
}

export default Jokes