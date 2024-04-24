/**
 * トップぺージ
 */
import s from '@/styles/partners.module.scss';
import IDForm from "@/app/components/IDForm";

export default function Partners() {
  return (
    <main className={s.partners}>
      <h1>パートナー</h1>
      <div className={s.main}>
        <h1>ログイン</h1>
        <IDForm formName="plogin" idName="pid" passName="pwd"
          buttonValue="ログイン" action="/partners/mypage" />
        <p className={s.register}><a href="/">登録はこちら</a></p>
      </div>
    </main>
  );
}
