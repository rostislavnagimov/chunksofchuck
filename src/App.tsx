import Search from "./components/Search"
import { useSelector } from 'react-redux';

import styles from './App.module.scss'
import Jokes from "./components/Jokes";

const App: React.FC = () => {
  const jokes = useSelector((state: any) => state.search.jokes);
  console.log('jokes', jokes)

  return (
    <section className={styles['App']}>
      <Search />
      <Jokes />
    </section>
  )
}

export default App
