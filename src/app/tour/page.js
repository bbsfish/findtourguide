/**
 * トップぺージ
 */
import s from '@/styles/tour.module.scss';
import TourProductListItem from '@/app/components/TourProductListItem';

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

export default function Tour() {
  return (
    <main className={s.tour}>
      <ul className={s.tourlist}>
        {items.map((item) => {
          return (
            <TourProductListItem
              key={item.id}
              item={item}
            ></TourProductListItem>
          );
        })}
      </ul>
    </main>
  );
}
