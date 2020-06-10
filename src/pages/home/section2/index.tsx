import React from 'react';
import { Button } from 'antd';
import { useIntl, Link } from 'umi';
import { history } from 'umi';

import anti_static_esd from './assets/Anti_static_ESD.png';
import anti_microbial from './assets/Anti-microbial.png';
import camellia from './assets/camellia.png';
import waterproof from './assets/waterproof.png';
import flame_retardant from './assets/Flame_retardant.png';
import recycled_fibre from './assets/Recycled_fibre.png';

import styles from '../index.less';

export default function Section2() {
  const intl = useIntl();
  const onClick = () => history.push('/technologies');

  return (
    <div
      id="page1"
      style={{ height: 600 }}
      className={styles['content-wrapper']}
    >
      <div
        style={{ paddingRight: 80, textAlign: 'right' }}
        className={styles['text-wrapper']}
        key="text"
      >
        <h2 key="h2">{intl.formatMessage({ id: 'THECHNOLOGIES' })}</h2>
        <p key="p">{intl.formatMessage({ id: 'THECHNOLOGIES_DESC' })}</p>
      </div>

      <div style={{ paddingLeft: 80 }} className={styles.images}>
      <ul>
        <li key="1">
          <Link to="/polyester">
            <div style={{background: `url(${anti_static_esd})`}}></div>
            <span>{intl.formatMessage({ id: 'POLYESTER' })}</span>
          </Link>
        </li>
        <li key="2">
          <div style={{background: `url(${anti_microbial})`}}></div>
          <span>{intl.formatMessage({ id: 'ANTI_STATIC_ESD' })}</span>
        </li>
        <li key="3">
          <div style={{background: `url(${camellia})`}}></div>
          <span>{intl.formatMessage({ id: 'CAMELLIA' })}</span>
        </li>
        <li key="4">
          <div style={{background: `url(${waterproof})`}}></div>
          <span>{intl.formatMessage({ id: 'WATERPROOF' })}</span>
        </li>
        <li key="5">
          <div style={{background: `url(${flame_retardant})`}}></div>
          <span>{intl.formatMessage({ id: 'FLAME_RETARDANT' })}</span>
        </li>
        <li key="6">
          <div style={{background: `url(${recycled_fibre})`}}></div>
          <span>{intl.formatMessage({ id: 'RECYCLED_FIBRE' })}</span>
        </li>
      </ul>

        <div style={{ textAlign: 'left' }} className={styles['btn-wrapper']}>
          <Button onClick={onClick}>{intl.formatMessage({ id: 'MORE' })}</Button>
        </div>
      </div>
    </div>
  );
}
