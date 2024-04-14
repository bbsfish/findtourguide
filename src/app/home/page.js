/**
 * トップページ
 */
import styles from '@/styles/home.module.scss';

export default function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.keyvisual}>
        <div className={styles.keyvisual__wrapper}>
          <input type="text" placeholder="どこへ行きますか？"></input>
          <button>検索</button>
        </div>
      </div>
    </main>
  );
}
