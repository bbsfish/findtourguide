import styles from '@/styles/footer.module.scss';

/**
 * フッター
 * @returns {JSX.Element}
 */
export default function AppFooter() {
  return (
    <div className={styles.footer}>
      <p>&copy; FindTour, Co, Ltd. All Rights Reserved.</p>
    </div>
  );
}