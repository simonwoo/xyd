import React from 'react';
import BannerAnim from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';

import banner1 from './banner1.png';
import banner2 from './banner2.png';

import styles from './index.less';

const { Element } = BannerAnim;
const BgElement = Element.BgElement;

export default function Banner() {
  return (
    <BannerAnim className={styles.banner} autoPlay>
      <Element key="0">
        <BgElement
          key="bg"
          className="bg"
          style={{
            backgroundImage: `url(${banner1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <TweenOne
          className="banner-user-title"
          // animation={{ y: 30, opacity: 0, type: 'from' }}
        >
          Creative Ticking
        </TweenOne>
      </Element>

      <Element key="1">
        <BgElement
          key="bg"
          className="bg"
          style={{
            backgroundImage: `url(${banner2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <TweenOne
          className="banner-user-title"
          // animation={{ y: 30, opacity: 0, type: 'from' }}
        >
          Tencel
        </TweenOne>
      </Element>
    </BannerAnim>
  );
}
