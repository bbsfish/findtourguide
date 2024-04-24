/**
 * カート
 */

import s from '@/styles/cart.module.scss';
import TourProductListItem from '@/app/components/TourProductListItem';
import Navigation from "@/app/components/Navigation";

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

const nav = [
  { label: 'foo', href: '#' },
  { label: 'var', href: '#' },
  { label: 'hoge', href: '#' },
];

export default function Cart() {
  return (
    <main className={s.cart}>
      <div className={s.cart__wrapper}>
        <Navigation list={nav} />
        <section className={s.main}>
          <ul>
            {items.map((item) => {
              return (
                <TourProductListItem
                  key={item.id}
                  item={item}
                ></TourProductListItem>
              );
            })}
          </ul>
        </section>
        <section className={s.sub}>
            <div className={s.totalprice}>
              <p>
                <span>小計 (4 個の商品) (税込):</span><br />
                <span>&yen;97,000</span>
              </p>
              <button>
                会計する
              </button>
            </div>
        </section>
      </div>
    </main>
  );
}