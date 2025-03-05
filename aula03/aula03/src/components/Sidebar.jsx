import styles from './Sidebar.module.css';
import Perfil from '../assets/perfil.jpg';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.background}></div>
      <img className={styles.profileImage} src={Perfil} alt="Foto do usuário" />
      <strong>João Pedro</strong>
      <span>Web Developer</span>
      <button className={styles.button}>Editar seu Perfil</button>
    </aside>
  );
}
