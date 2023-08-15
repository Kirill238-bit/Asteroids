'use client'
import style from '@/styles/cartpage.module.scss'
import { useContext } from 'react';
import Image from '../../../node_modules/next/image'
import Link from '../../../node_modules/next/link'
import { Context } from '../actions/context';

export default function Cartpage() {
  const {CartItems,setCartItems}=useContext(Context);
  return (
    <div className={style.wrapper}>
      <div className={style.title}>Заказ отправлен!</div>
      <div className={style.items_list}>
                    {CartItems.map((item:any)=>(
                        <div key={item.id} className={style.item}>
                            <div className={style.item_title}>
                                {item.data}
                            </div>
                            <div className={style.item_info}>
                                <div className={style.item_info_distanse}>
                                    <div className={style.km_active}>
                                        {item.km} км
                                    </div>
                                    <div className={style.arrow_conteiner}><div>{`◄`}</div><div className={style.line}></div><div>{`►`}</div></div>
                                </div>
                                <div className={style.item_info_subinfo}>
                                    <div className={`${style.litle} ${parseInt(item.diameter)<100 ? style.litle_active : ''}`}>
                                        <Image
                                        src='/images/pngegg 1.png'
                                        alt='asteroid'
                                        width={22}
                                        height={24}
                                        />
                                    </div>
                                    <div className={`${style.big} ${parseInt(item.diameter)>=100 ? style.big_active : ''}`}>
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
                                            <div className={style.diameter}>{item.diameter}</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className={style.button}>
                                <div className={`${style.dangerous} ${item.dangerous ? style.dangerous_active : ''}`}>⚠ Опасен</div>
                            </div>
                        </div>
                    ))}
                </div>
    </div>
  )
}
