import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/componets/Button/Button';

const Home = () =>{
  return(
  <div className={styles.main}>
    <div className={styles.coverText}>
      <p className={styles.ve}>Find all your favorite Character</p>
      <p className={styles.ve2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
      <Button>Se Character</Button>
    </div>
    <Image
    src="/hero-img.png"
    alt="hero img"
    width={515}
    height={557}
    priority
    />
  </div>
    
  );
};

export default Home;