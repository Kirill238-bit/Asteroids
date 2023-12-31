import AsteroidsScrol from '@/components/AsteroidsScrol/AsteroidsScrol';
import { AsteroidsMassive } from '@/components/Type/AsteroidsProps';
import Image from '../../node_modules/next/image'
import style from '../styles/page.module.scss'

async function getAsteroids(){//получение астероидов
  const start_time=getStartDate();

  const respons=await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_time}&api_key=BDfzLDpe4sPx7D4cbDuYXSIhiMTC2SUFkcXwn6i1`)

  return respons.json();
}
function getStartDate() {//получение даты пользователя
  let today = new Date();
  let year = today.getFullYear();
  let month = String(today.getMonth() + 1).padStart(2, '0');
  let day = String(today.getDate()).padStart(2, '0');
  
  return year + '-' + month + '-' + day;
}


export default async function Home() {
  const asteroids:AsteroidsMassive[]= await getAsteroids()
  .then(asteroids=>asteroids.near_earth_objects) //типизация пришедших объектов
  .then(asteroids=>Object.values(asteroids))
  return (
    <main>
      <div className={style.wrapper}>
        <div className={style.conteiner}>
          <div className={style.title}>
            ARMAGEDDON 2023
          </div>
          <div className={style.subtitle}>
            ООО “Команда им. Б. Уиллиса”. Взрываем астероиды с 1998 года.
          </div>
          <div className={style.image}>
            <Image
              src='/images/planeta.png'
              alt='планета'
              width={536}
              height={620}
            />
          </div>
        </div>
        <div className={style.asteroids}>
          <AsteroidsScrol AsteroidsList={asteroids}/>
        </div>
      </div>
    </main>
  )
}
