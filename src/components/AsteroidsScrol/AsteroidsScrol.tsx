'use client'
import { Context } from '@/app/actions/context';
import { useContext, useEffect, useRef, useState } from 'react';
import { setTimeout } from 'timers';
import Image from '../../../node_modules/next/image';
import Link from '../../../node_modules/next/link';
import { AsteroidsMassive, AsteroidsMassProps } from '../Type/AsteroidsProps';
import { CartItem } from '../Type/CartItem';
import style from './AsteroidsScrol.module.scss'

export default function AsteroidsScrol({AsteroidsList}:AsteroidsMassProps) {
    const [km,setKm]=useState(true);
    const [lunar,setLunar]=useState(false);//резет для выбора расстояния

    const {CartItems,setCartItems}=useContext(Context);

    const lastElement=useRef<any>();// последний элемент для пагинации
    const observer=useRef<any>();//слежка за пагинацией

    const [pagination,setPagination]=useState<number>(1)//изменение кол-во отрисованных элементов

    const KM=()=>{
        setKm(true);
        setLunar(false);
    }
    const LUNAR=()=>{
        setKm(false);
        setLunar(true);
    }
    //для пагинации
    useEffect(()=>{
        if(observer.current)
        observer.current.disconnect()

        let callback=function(entries:any,observer:any){

            if(entries[0].isIntersecting &&pagination<7){

                setTimeout(async()=>{
                    setPagination(pagination+1);
                },500)
            }
        };
         observer.current=new IntersectionObserver(callback);
         observer.current.observe(lastElement.current)
    },[pagination])

    function addToCart(item:AsteroidsMassive){
        const newItem: CartItem = {
          id:item.id,
          name:item.name,
          km:item.close_approach_data.map((key)=>key.miss_distance.kilometers),
          lunar:item.close_approach_data.map((key)=>key.miss_distance.lunar),
          diameter:item.estimated_diameter.meters.estimated_diameter_min,
          dangerous:item.is_potentially_hazardous_asteroid,
          date:item.close_approach_data.map((key)=>key.close_approach_date),
        };
          if(AsteroidsList.find((item:AsteroidsMassive)=> item.id===newItem.id)){
            alert('Сближение уже добавлено в корзину');
          }
          else{
            setCartItems([...CartItems, newItem]);
          }
    }
    console.log(CartItems)
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
                    {AsteroidsList.map((key:any)=>(key.slice(0,pagination).map((item:AsteroidsMassive)=>(
                        <div key={item.id} className={style.item}>
                            <div className={style.item_title}>
                                {item.close_approach_data.map((key)=>key.close_approach_date)}
                            </div>
                            <div className={style.item_info}>
                                <div className={style.item_info_distanse}>
                                    <div className={`${style.km} ${km ? style.km_active : ''}`}>
                                        {item.close_approach_data.map((key)=>key.miss_distance.kilometers)} км
                                    </div>
                                    <div className={`${style.lunar} ${lunar ? style.lunar_active : ''}`}>
                                        {item.close_approach_data.map((key)=>key.miss_distance.lunar)} лунных орбит
                                    </div>
                                    <div className={style.arrow_conteiner}><div>{`◄`}</div><div className={style.line}></div><div>{`►`}</div></div>
                                </div>
                                <div className={style.item_info_subinfo}>
                                    <div className={`${style.litle} ${item.estimated_diameter.meters.estimated_diameter_min <100 ? style.litle_active : ''}`}>
                                        <Image
                                            src='/images/pngegg 1.png'
                                            alt='asteroid'
                                            width={22}
                                            height={24}
                                        />
                                    </div>
                                    <div className={`${style.big} ${item.estimated_diameter.meters.estimated_diameter_min >=100 ? style.big_active : ''}`}>
                                        <Image
                                            src='/images/pngegg 2.png'
                                            alt='asteroid'
                                            width={36}
                                            height={40}
                                        />
                                    </div>
                                    <Link href={`/Asteroidpage/${item.id}`}>
                                        <div>
                                            <div className={style.name}>{item.name}</div>
                                            <div className={style.diameter}>{item.estimated_diameter.meters.estimated_diameter_min}</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className={style.button}>
                                <div className={style.add} onClick={()=>addToCart(item)}>заказать</div>
                                <div className={`${style.dangerous} ${item.is_potentially_hazardous_asteroid ? style.dangerous_active : ''}`}>⚠ Опасен</div>
                            </div>
                        </div>
                    ))))}
                    <div ref={lastElement}/>
                </div>
            </div>
            <div className={style.cart_conteiner}>
                <div>
                    <div className={style.cart_title}>Корзина</div>
                    <div className={style.cart_subtitle}>{CartItems.length} астероида</div>
                </div>
                <div>
                    <Link href='/Cartpage'><div className={style.cart_button}><div>Отправить</div></div></Link>
                </div>
            </div>
        </div>
    )
}