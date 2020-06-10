import React from 'react';

import { useIntl } from 'umi';
import classnames from 'classnames';
import { useMount } from '@umijs/hooks';
import Swiper from 'swiper';
import banner1 from './banner1.png';
import banner2 from './banner2.png';


import styles from './index.less';

const ref = React.createRef<HTMLDivElement>()

export default function() {
    const intl = useIntl();

    useMount(() => {
        const swiper = new Swiper(ref.current as HTMLDivElement, {
            loop: true,
            freeMode: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
            },
        })
    })

    return (
        <div className={styles.container}>
            <div ref={ref} className={classnames(styles['swiper-container'], 'swiper-container', 'gallery-thumbs')}>
                <div className={classnames(styles['swiper-wrapper'], 'swiper-wrapper')}>
                    <div style={{background: `url(${banner1})`}} className={classnames(styles['swiper-slide'], 'swiper-slide')}>
                        <div className="banner-user-title">
                            Creative Ticking
                        </div>    
                    </div>
                    
                    <div style={{background: `url(${banner2})`}} className={classnames(styles['swiper-slide'], 'swiper-slide')}>
                        <div className="banner-user-title">
                            Tencel
                        </div>
                    </div>
                </div>
                
                <div className={classnames(styles['swiper-pagination'], 'swiper-pagination')}></div>
                <div className="swiper-button-next" style={{color: '#ffffff'}}></div>
                <div className="swiper-button-prev" style={{color: '#ffffff'}}></div>
            </div>
        </div>
    )
}