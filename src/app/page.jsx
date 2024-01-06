
import styles from "./home.module.css";
import Image from "next/image";

const Home = () => {
  return(
  <>
 <div className={styles.conatiner}></div>
   <div className={styles.textConatiner}>

   <h1 className={styles.title}>Creative <br/> Thoughts <br/> Agency</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci <br/>minima reiciendis a autem assumenda dolore.
        </p>

        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>

        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
        </div>

   </div>
   <div className={styles.imageConatiner}></div>
  </>
   )
  };

export default Home;