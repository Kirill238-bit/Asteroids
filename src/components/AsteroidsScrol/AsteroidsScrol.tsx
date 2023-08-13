import style from './AsteroidsScrol.module.scss'

export default function AsteroidsScrol({AsteroidsList}:any) {
    console.log(AsteroidsList);
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
            {AsteroidsList.map((key:any)=>(key.map((item:any)=>(<div>{item.id}</div>))))}
                {/*posts.map((key:any)=>(Object.entries(key).map((asteroid:any)=>(asteroid.map((item:any)=>(
                    <div>{item.name}</div>
                ))))))*/}
                {/*posts.map((asteroid:any)=>(
                    <div key={asteroid.id} className={style.item}>
                        <div className={style.item_title}>
                            {asteroid.close_approach_data.close_approach_date_full}
                        </div>
                        <div className={style.item_info}>
                            <div className={style.item_info_distanse}>
                                <div>{asteroid.close_approach_data.miss_distance.kilometers} км</div>
                                <div>{asteroid.close_approach_data.miss_distance.lunar} лунных орбит</div>
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
                ))*/}
            </div>
        </div>
    )
}