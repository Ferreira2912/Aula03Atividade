import styles from './Post.module.css';
import Perfil from '../assets/perfil.jpg';

export function Post({ author, role, content, link, hashtags }) {
  return (
    <div className={styles.post}>
      <div className={styles.postHeader}>
        <img className={styles.avatar} src={ Perfil } alt="Avatar" />
        <div className={styles.postInfo}>
          <strong>{author}</strong>
          <span>{role}</span>
        </div>
      </div>
      <p>{content}</p>
      <a href={`https://${link}`} target="_blank" rel="noopener noreferrer">👉 {link}</a>
      <div className={styles.hashtags}>
        {hashtags.map(tag => <span key={tag}>{tag}</span>)}
      </div>
    </div>
  );
}
