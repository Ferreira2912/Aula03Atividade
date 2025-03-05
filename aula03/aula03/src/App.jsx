import styles from './App.module.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="João Pedro"
            role="Web Developer"
            content="Fala galera 👋 Acabei de subir mais um projeto no meu portifólio. 
                     É um projeto que fiz na Alura! O nome do projeto é RentalDealer 🚀"
            link="github.com/Ferreira2912/RentalDealer"
            hashtags={["#novoprojeto", "#alura", "#newcode"]}
          />
        </main>
      </div>
      <Footer />
    </div>
  );
}
