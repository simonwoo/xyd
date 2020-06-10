import React from 'react';
import classnames from 'classnames';
import { useIntl, Link } from 'umi';
import { useMount } from '@umijs/hooks';

import anti_static_esd from './assets/Anti_static_ESD.png';
import nanocool from './assets/Nanocool.png';
import anti_microbial from './assets/Anti-microbial.png';
import camellia from './assets/camellia.png';
import waterproof from './assets/waterproof.png';
import flame_retardant from './assets/Flame_retardant.png';
import recycled_fibre from './assets/Recycled_fibre.png';
import silver from './assets/Silver.png';
import moisture_wicking from './assets/Moisture_Wicking.png';
import graphene from './assets/Graphene.png';
import cbd from './assets/CBD.png';
import silver_ion_antibacterial from './assets/Sliver_ion_Antibacterial.png';
import sheabutter from './assets/sheabutter.png';
import sannitized from './assets/sanitized.png';
import fragrance from './assets/Fragrance.png';
import styles from '../index.less';

export default function Section1() {
  const intl = useIntl();
  useMount(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div
      id="page1"
      className={classnames(styles['content-wrapper'])}
      // playScale={0.3}
    >
      <div className={styles.images}>
        <h1>{intl.formatMessage({ id: 'THECHNOLOGIES' })}</h1>
        <ul>
          <li key="1">
            <Link to="/polyester">
              <div style={{background: `url(${anti_static_esd})`}}></div>
              <span>{intl.formatMessage({ id: 'ANTI_STATIC_ESD' })}</span>
            </Link>
          </li>
          <li key="2">
            <div style={{background: `url(${nanocool})`}}></div>
            <span>{intl.formatMessage({ id: 'NANOCOOL' })}</span>
          </li>
          <li key="3">
            <div style={{background: `url(${anti_microbial})`}}></div>
            <span>{intl.formatMessage({ id: 'ANTI_MICROBIAL' })}</span>
          </li>
          <li key="4">
            <div style={{background: `url(${silver})`}}></div>
            <span>{intl.formatMessage({ id: 'SILVER' })}</span>
          </li>
          <li key="5">
            <div style={{background: `url(${camellia})`}}></div>
            <span>{intl.formatMessage({ id: 'CAMELLIA' })}</span>
          </li>
          <li key="6">
            <div style={{background: `url(${moisture_wicking})`}}></div>
            <span>{intl.formatMessage({ id: 'MOISTURE_WICKING' })}</span>
          </li>
          <li key="7">
            <div style={{background: `url(${graphene})`}}></div>
            <span>{intl.formatMessage({ id: 'GRAPHERE' })}</span>
          </li>
          <li key="8">
            <div style={{background: `url(${cbd})`}}></div>
            <span>{intl.formatMessage({ id: 'CBD' })}</span>
          </li>
          <li key="9">
            <div style={{background: `url(${silver_ion_antibacterial})`}}></div>
            <span>{intl.formatMessage({ id: 'SILVER_ION_ANTIBACTERIAL' })}</span>
          </li>
          <li key="10">
            <div style={{background: `url(${sheabutter})`}}></div>
            <span>{intl.formatMessage({ id: 'SHEBUTTER' })}</span>
          </li>
          <li key="11">
            <div style={{background: `url(${waterproof})`}}></div>
            <span>{intl.formatMessage({ id: 'WATERPROOF' })}</span>
          </li>
          <li key="12">
            <div style={{background: `url(${sannitized})`}}></div>
            <span>{intl.formatMessage({ id: 'SANITIZED' })}</span>
          </li>
          <li key="13">
            <div style={{background: `url(${recycled_fibre})`}}></div>
            <span>{intl.formatMessage({ id: 'RECYCLED_FIBRE' })}</span>
          </li>
          <li key="14">
            <div style={{background: `url(${flame_retardant})`}}></div>
            <span>{intl.formatMessage({ id: 'FLAME_RETARDANT' })}</span>
          </li>
          <li key="15">
            <div style={{background: `url(${fragrance})`}}></div>
            <span>{intl.formatMessage({ id: 'FRAGRANCE' })}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
