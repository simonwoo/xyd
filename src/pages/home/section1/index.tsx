import React from 'react';
import classnames from 'classnames';
import { Button } from 'antd';
import { useIntl, Link } from 'umi';
import { history } from 'umi';


import polyester from './assets/Polyester_small.png';
import tencel from './assets/tencel_small.png';
import bamboo from './assets/Bamboo.png';
import bamboo_charocoal from './assets/Bamboo_Charcoal_small.png';
import cashmere from './assets/Cashmere_small.png';
import modal from './assets/modal_small.png';

import styles from '../index.less';

export default function Section1() {
  const intl = useIntl();
  const onClick = () => history.push('/materials');

  return (
    <div
      id="page1"
      style={{ height: 700 }}
      className={styles['content-wrapper']}
    >
      <div style={{ paddingRight: 80 }} className={styles.images}>
        <ul>
          <li key="1">
            <Link to="/polyester">
              <div style={{background: `url(${polyester})`}}></div>
              <span>{intl.formatMessage({ id: 'POLYESTER' })}</span>
            </Link>
          </li>
          <li key="2">
            <Link to="/tencel">
              <div style={{background: `url(${tencel})`}}></div>
              <span>{intl.formatMessage({ id: 'TENCEL' })}</span>
            </Link>
          </li>
          <li key="3">
            <div style={{background: `url(${modal})`}}></div>
            <span>{intl.formatMessage({ id: 'MODAL' })}</span>
          </li>
          <li key="4">
            <div style={{background: `url(${bamboo})`}}></div>
            <span>{intl.formatMessage({ id: 'BAMBOO' })}</span>
          </li>
          <li key="5">
            <div style={{background: `url(${bamboo_charocoal})`}}></div>
            <span>{intl.formatMessage({ id: 'BAMBOO_CHARCOAL' })}</span>
          </li>
          <li key="6">
            <div style={{background: `url(${cashmere})`}}></div>
            <span>{intl.formatMessage({ id: 'CASHMERE' })}</span>
          </li>
        </ul>
        <div style={{ textAlign: 'right' }} className={styles['btn-wrapper']}>
          <Button onClick={onClick}>
            {intl.formatMessage({ id: 'MORE' })}
          </Button>
        </div>
      </div>

      <div
        style={{ paddingLeft: 80 }}
        className={styles['text-wrapper']}
        key="text"
      >
        <h2 key="h2">{intl.formatMessage({ id: 'MATERIALS' })}</h2>
        <p key="p">{intl.formatMessage({ id: 'MATERIALS_DESC' })}</p>
      </div>
    </div>
  );
}
