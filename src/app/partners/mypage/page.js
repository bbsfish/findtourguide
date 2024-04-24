/**
 * ログイン
 */
import s from '@/styles/partners.module.scss';
import Navigation from "@/app/components/Navigation";
import TourProductListItem from '@/app/components/TourProductListItem';

const nav = [
  { label: 'あなたのツアー', href: '#yourtour' },
  { label: 'var', href: '#' },
  { label: 'hoge', href: '#' },
];

const items = [
  {
    id: 1, area: '江東区, 墨田区, および周辺地区', stars: 4, price: 35000,
  },
  {
    id: 2, area: '江東区, 墨田区, および周辺地区', stars: 4, price: 35000,
  },
  {
    id: 3, area: '江東区, 墨田区, および周辺地区', stars: 4, price: 35000,
  },
  {
    id: 4, area: '江東区, 墨田区, および周辺地区', stars: 4, price: 35000,
  },
  {
    id: 5, area: '江東区, 墨田区, および周辺地区', stars: 4, price: 35000,
  },
  {
    id: 6, area: '江東区, 墨田区, および周辺地区', stars: 4, price: 35000,
  },
];

export default function Mypage() {
  return (
    <main className={s.mypage}>
      <h1>こんにちは</h1>
      <Navigation list={nav} />
      <section id='yourtour'>
        <h2>あなたのツアー</h2>
        <div>
          {items.map((item) => {
            return (
              <TourProductListItem
                key={item.id}
                item={item}
              ></TourProductListItem>
            );
          })}
        </div>
      </section>
    </main>
  );
}
