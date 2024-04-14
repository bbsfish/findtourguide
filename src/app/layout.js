/**
 * サイト大枠設計
 */
import 'the-new-css-reset/css/reset.css'; // CSSリセット
import '@/styles/globals.scss';           // グローバルCSS
import AppHeader from '@/app/components/AppHeader';
import AppFooter from '@/app/components/AppFooter';

// head 設定
export const metadata = {
  /** @type {string} ブラウザのタブに表示 */
  title: 'Find Tour Guide',
  /** @type {string} Google 検索時、サイトの概要として表示される */
  description: 'App to find Tour Guide',
}

/**
 * レイアウト
 * サイトコンテンツは、main タグでラップされ、そのクラスに path 名を持たせること
 * (例) @/app/home/page.js なら、<main class="home">中身</main>
 * @param {JSX.Element} children サイトコンテンツ
 * @returns {JSX.Element}
 */
export default function RootLayout({ children }) {
 return (
    <html lang="ja">
      <body>
        <header><AppHeader /></header>
        {children}
        <footer><AppFooter /></footer>
      </body>
    </html>
  )
}
