import styles from './page.module.css';
import bg from '../../assets/back.jpg';
import Counter from '../comp/counter';
import { kv } from '@vercel/kv';


async function Home() {
  

  const user = await kv.get('count');
  
  return (
    <main className={styles.main} style={{
      backgroundImage: `url(${bg.src})`,
      backgroundPosition: 'top',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      
    }}>
        <Counter props={user}/>
    </main>
  )
}

export default Home;