import s from '@/styles/components/tour_product_list_item.module.scss';

/**
 * ツアー商品リストのアイテムコンポーネント
 * @param {{ item: { id: number, area: string, stars: number, price: number } }} props ツアー商品に個別のデータ
 * @returns {JSX.Element}
 */
export default function TourProductListItem(props) {
  const { id, area, stars, price } = props.item ?? props;
  return (
    <li key={id} className={s.list}>
      <a href={`/tour/${id}`} className={s.list__item}>
        <div className={s.list__item__images}>
          <img src='https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSWs181BrsGqL5InYIt-ekUcX1rEvPV_ydY0ZvbH2FhJYnZGZZ8JgJ4cn9CUme_1TCz_QfmIwn-3AXfQ_ZIDkp7wuJ9umh6opKdVGcEkLY' />
          <img src='https://lh5.googleusercontent.com/p/AF1QipPCn1UKXVcF2X9OC_3zKpjsWczFhXlX4Zpa6_Zz=w1080-h624-n-k-no' />
          <img src='https://lh5.googleusercontent.com/p/AF1QipOIVi9VEyz1jwl68M7dd4K6k96W1Uq4c4HbQdTf=w1080-h624-n-k-no' />
          <img src='https://lh5.googleusercontent.com/p/AF1QipNgL4_GTxT6pCWAtxqv8LTxD5lLiXwTUTiAhNI7=w1080-h624-n-k-no' />
          <img src='https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQyxBUfUTsgoSWNGBXEboW6Fv9ouQ_uOv6qJS3T64TlVSWMDBuoDfYzg0prFw5T8a9RtXHw9RLcJbTToRVXhDzWZodW-zIU9hvqSYWi4g' />
        </div>
        <div className={s.list__item__informations}>
          <p className={s.list__item__informations__area}>{area}</p>
          <div className={s.list__item__informations__stars}>Stars: {stars}</div>
        </div>
        <div className={s.list__item__price}>
          <p>&yen;{price.toLocaleString()}</p>
        </div>
      </a>
    </li>
  );
}