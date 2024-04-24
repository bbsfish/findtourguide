import s from '@/styles/components/id_form.module.scss';

/**
 * ID Form コンポーネント / ログイン、会員登録など
 * @param {{ item: { id: number, area: string, stars: number, price: number } }} props ツアー商品に個別のデータ
 * @returns {JSX.Element}
 */
export default function IDForm(props) {
  const { formName, idName, passName, buttonValue,
    action, method } = props.item ?? props;
  return (
    <form name={formName} action={action} method={method??'post'} className={s.idform}>
      <input className={s.idform__id} type="text" name={idName} placeholder='パートナーIDまたはメールアドレス' />
      <input className={s.idform__pass} type="password" name={passName} placeholder='パスワード' />
      <input className={s.idform__button} type="submit" value={buttonValue??'ログイン'} />
    </form>
  );
}