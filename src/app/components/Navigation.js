import s from '@/styles/components/navigation.module.scss';
/**
 * コンテント内のナビゲーション
 * @param { list: { label: string, href: string }[]} props
 * @returns {<JSX.Element>}
 */
export default function Navigation(props) {
  const { list } = props;
  return (
    <nav className={s.nav}>
      <ul>
        {
          list.map((elem, idx) => {
            return (
              <Item label={elem.label} href={elem.href} key={idx} />
            );
          })
        }
      </ul>
    </nav>
  );
}

/**
 * Navigation 内のリストアイテム
 * @param {{ label: string, href: string }} props
 * @returns {<JSX.Element>}
 */
function Item(props) {
  const { label, href } = props;
  return (
    <li><a href={href}>{label}</a></li>
  )
}