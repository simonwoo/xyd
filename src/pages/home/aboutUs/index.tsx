import React from 'react';

import { useIntl } from 'umi';
import classnames from 'classnames';
import { useMount } from '@umijs/hooks';
import Swiper from 'swiper';

import p1 from './assets/1.png';
import p2 from './assets/2.png';
import p3 from './assets/3.png';
import p4 from './assets/4.png';

import styles from './index.less';

const ref = React.createRef<HTMLDivElement>()

export default function() {
    const intl = useIntl();

    useMount(() => {
        const swiper = new Swiper(ref.current as HTMLDivElement, {
            slidesPerView: 4,
        })
    })

    return (
        <div className={styles.container}>
            <h1>{intl.formatMessage({id: 'ABOUT_US'})}</h1>
            <div ref={ref} className={classnames(styles['swiper-container'], 'swiper-container', 'gallery-thumbs')}>
                <div className={classnames(styles['swiper-wrapper'], 'swiper-wrapper')}>
                    <div style={{background: `url(${p1})`}} className={classnames(styles['swiper-slide'], 'swiper-slide')}></div>
                    <div style={{background: `url(${p2})`}} className={classnames(styles['swiper-slide'], 'swiper-slide')}></div>
                    <div style={{background: `url(${p3})`}} className={classnames(styles['swiper-slide'], 'swiper-slide')}></div>
                    <div style={{background: `url(${p4})`}} className={classnames(styles['swiper-slide'], 'swiper-slide')}></div>
                </div>
            </div>
        </div>
    )
}