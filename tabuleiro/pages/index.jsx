import Tabuleiro from "../components/Tabuleiro"
import Linha from "../components/linha"
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
        <div className={styles.container}>
       <Tabuleiro />
        </div>

    </>
  )
}
