/**
 * ツアー詳細
 */
import s from '@/styles/tour.module.scss';

/**
 * "/tour/{id}" にアクセスすると、 id に値が渡される
 * @param {{ params: { id:string } }}
 * @returns {JSX.Element}
 */
export default function Page({ params: { id } }) {
  return (
    <main className={s.detail}>
      <div className={s.detail__gallery}>
        <div className={s.detail__gallery__wrapper}>
          <div className={s.detail__gallery__wrapper__highlight}>
            <img src='https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSWs181BrsGqL5InYIt-ekUcX1rEvPV_ydY0ZvbH2FhJYnZGZZ8JgJ4cn9CUme_1TCz_QfmIwn-3AXfQ_ZIDkp7wuJ9umh6opKdVGcEkLY' />
          </div>
          <div className={s.detail__gallery__wrapper__lowlight}>
            <img src='https://lh5.googleusercontent.com/p/AF1QipPCn1UKXVcF2X9OC_3zKpjsWczFhXlX4Zpa6_Zz=w1080-h624-n-k-no' />
            <img src='https://lh5.googleusercontent.com/p/AF1QipOIVi9VEyz1jwl68M7dd4K6k96W1Uq4c4HbQdTf=w1080-h624-n-k-no' />
            <img src='https://lh5.googleusercontent.com/p/AF1QipNgL4_GTxT6pCWAtxqv8LTxD5lLiXwTUTiAhNI7=w1080-h624-n-k-no' />
            <img src='https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQyxBUfUTsgoSWNGBXEboW6Fv9ouQ_uOv6qJS3T64TlVSWMDBuoDfYzg0prFw5T8a9RtXHw9RLcJbTToRVXhDzWZodW-zIU9hvqSYWi4g' />
            <img src='https://lh5.googleusercontent.com/p/AF1QipPCn1UKXVcF2X9OC_3zKpjsWczFhXlX4Zpa6_Zz=w1080-h624-n-k-no' />
            <img src='https://lh5.googleusercontent.com/p/AF1QipOIVi9VEyz1jwl68M7dd4K6k96W1Uq4c4HbQdTf=w1080-h624-n-k-no' />
          </div>
        </div>
      </div>
      <div className={s.detail__navbar}>
        <nav className={s.detail__navbar__nav}>
          <ul>
            <li><a href='#'>概要</a></li>
            <li><a href='#'>担当者</a></li>
          </ul>
        </nav>
        <div className={s.detail__navbar__action}>
          <div className={s.detail__navbar__action__price}>
            <p>&yen;35,000</p>
          </div>
          <button>カート追加</button>
        </div>
      </div>
      <div className={s.detail__content}>
        <section>
          <h2>これはh2です</h2>
          <h3>これはh3です</h3>
          <h4>これはh4です</h4>
          <hr />
          <p>これはpです</p>
        </section>
      </div>
    </main>
  );
}