import style from './AsteroidsScrol.module.scss'

export default function AsteroidsScrol({asteroids}:any) {
    console.log(asteroids);
    return(
        <div className={style.wrapper}>
            <div className={style.conteiner}>
                <div className={style.conteiner_title}>Ближайшие подлёты астероидов</div>
                <div className={style.conteiner_distanse}>
                    <div>В километрах</div>
                    <div>В лунных орбитах</div>
                </div>
            </div>
            <div className={style.items_list}>
                {asteroids.map((asteroid:any)=>(
                    <div key={asteroid.id} className={style.item}>
                        <div className={style.item_title}>
                            {asteroid.close_approach_date.close_approach_date_full}
                        </div>
                        <div className={style.item_info}>
                            <div className={style.item_info_distanse}>
                                <div>{asteroids.close_approach_date.miss_distance.kilometers} км</div>
                                <div>{asteroids.close_approach_date.miss_distance.lunar} лунных орбит</div>
                                <div>полоска</div>
                            </div>
                            <div className={style.item_info_subinfo}>
                                <img/>
                                <div>
                                    <div>{asteroid.name}</div>
                                    <div>{asteroid.estimated_diameter.meters.estimated_diameter_min}</div>
                                </div>
                            </div>
                        </div>
                        <div className={style.button}>
                            <div>заказать</div>
                            <div><img/>Опасен</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}