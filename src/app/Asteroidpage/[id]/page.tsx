import { Asteroid, AsteroidDATA } from '@/components/Type/Asteroid';
import style from '@/styles/asteroidpage.module.scss'
import Image from '../../../../node_modules/next/image';


export default  async function AsteroidPage({params:{id}}:any) {

    async function getAsteroid(id:number){
        const respons=await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=BDfzLDpe4sPx7D4cbDuYXSIhiMTC2SUFkcXwn6i1`)

        return respons.json();
    }
    const asteroid:Asteroid=await getAsteroid(+id)
  return (
    <div className={style.wrapper}>
        <div className={style.left_conteiner}>
            <div className={style.image}>
                <Image
                    src='/images/asteroid.png'
                    alt='asteroid'
                    width={400}
                    height={460}
                />
            </div>
            <div className={style.left_conteiner_title}>{asteroid.name}</div>
            <div className={`${style.little} ${asteroid.estimated_diameter.meters.estimated_diameter_min <100 ? style.little_active : ''}`}>
                <Image
                    src='/images/pngegg 1.png'
                    alt='asteroid'
                    width={22}
                    height={24}
                />
            </div>
            <div className={`${style.big} ${asteroid.estimated_diameter.meters.estimated_diameter_min >=100 ? style.big_active : ''}`}>
                <Image
                    src='/images/pngegg 2.png'
                    alt='asteroid'
                    width={36}
                    height={40}
                />
            </div>
            <div className={style.left_conteiner_text}>
                <div>{asteroid.estimated_diameter.meters.estimated_diameter_min} м</div>
                <div className={`${style.dangerous} ${asteroid.is_potentially_hazardous_asteroid ? style.dangerous_active : ''}`}>⚠ Опасен</div>
            </div>
        </div>
        <div className={style.right_conteiner}>
            {asteroid.close_approach_data.map((item:AsteroidDATA)=>(
                <div key={item.close_approach_date} className={style.item}>
                    <div className={style.item_title}>{item.orbiting_body}</div>
                    <div className={style.item_text}>Время сближения с Землей:<div>{item.close_approach_date_full}</div></div>
                    <div className={style.item_text}>Скорость относительно Земли:<div>{item.relative_velocity.kilometers_per_hour} км</div></div>
                    <div className={style.item_text}>Расстояние:<div>{item.miss_distance.kilometers} км</div></div>
                </div>
                ))}
        </div>
    </div>
  )
}
