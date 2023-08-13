'use client'
import { useEffect, useMemo, useState } from 'react';
import Image from '../../../node_modules/next/image';
import style from './AsteroidsScrol.module.scss'

export default function AsteroidsScrol({AsteroidsList}:any) {
    console.log(AsteroidsList);
    const [km,setKm]=useState(true);
    const [lunar,setLunar]=useState(false);

    const KM=()=>{
        setKm(true);
        setLunar(false);
    }
    const LUNAR=()=>{
        setKm(false);
        setLunar(true);
    }
    return(
        <div className={style.wrapper}>
            <div className={style.main_content}>
                <div className={style.conteiner}>
                    <div className={style.conteiner_title}>Ближайшие подлёты астероидов</div>
                    <div className={style.conteiner_distanse}>
                        <div onClick={()=>KM()}>В километрах</div>
                        |
                        <div onClick={()=>LUNAR()}>В лунных орбитах</div>
                    </div>
                </div>
                <div className={style.items_list}>
                    {AsteroidsList.map((key:any)=>(key.map((item:any)=>(
                        <div key={item.id} className={style.item}>
                            <div className={style.item_title}>
                                {item.close_approach_data.map((key:any)=>key.close_approach_date)}
                            </div>
                            <div className={style.item_info}>
                                <div className={style.item_info_distanse}>
                                    <div className={`${style.km} ${km ? style.km_active : ''}`}>
                                        {item.close_approach_data.map((key:any)=>key.miss_distance.kilometers)} км
                                    </div>
                                    <div className={`${style.lunar} ${lunar ? style.lunar_active : ''}`}>
                                        {item.close_approach_data.map((key:any)=>key.miss_distance.lunar)} лунных орбит
                                    </div>
                                    <div className={style.arrow_conteiner}><div>{`◄`}</div><div className={style.line}></div><div>{`►`}</div></div>
                                </div>
                                <div className={style.item_info_subinfo}>
                                    <div className={`${style.litle} ${parseInt(item.estimated_diameter.meters.estimated_diameter_min)<100 ? style.litle_active : ''}`}>
                                        <Image
                                        src='/images/pngegg 1.png'
                                        alt='asteroid'
                                        width={22}
                                        height={24}
                                        />
                                    </div>
                                    <div className={`${style.big} ${parseInt(item.estimated_diameter.meters.estimated_diameter_min)>=100 ? style.big_active : ''}`}>
                                        <Image
                                        src='/images/pngegg 2.png'
                                        alt='asteroid'
                                        width={36}
                                        height={40}
                                        />
                                    </div>
                                        <div>
                                            <div className={style.name}>{item.name}</div>
                                            <div className={style.diameter}>{item.estimated_diameter.meters.estimated_diameter_min}</div>
                                        </div>
                                </div>
                            </div>
                            <div className={style.button}>
                                <div className={style.add}>заказать</div>
                                <div className={`${style.dangerous} ${item.is_potentially_hazardous_asteroid ? style.dangerous_active : ''}`}>⚠ Опасен</div>
                            </div>
                        </div>
                    ))))}
                </div>
            </div>
            <div className={style.cart_conteiner}>
                <div>
                    <div className={style.cart_title}>Корзина</div>
                    <div className={style.cart_subtitle}>2 астероида</div>
                </div>
                <div>
                    <div className={style.cart_button}><div>Отправить</div></div>
                </div>
            </div>
        </div>
    )
}