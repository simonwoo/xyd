import React from 'react';
import classnames from 'classnames';
import { useIntl, Link } from 'umi';
import { useMount } from '@umijs/hooks';

import polyester from './assets/Polyester_small.png';
import tencel from './assets/tencel_small.png';
import bamboo from './assets/Bamboo.png';
import bamboo_charocoal from './assets/Bamboo_Charcoal_small.png';
import cashmere from './assets/Cashmere_small.png';
import modal from './assets/modal_small.png';
import silk from './assets/Silk.png';
import linen from './assets/linen.png';
import conton from './assets/Organic_Cotton.png';
import aloe from './assets/Aloe_Vera.png';

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
        <h1>{intl.formatMessage({ id: 'MATERIALS' })}</h1>
        <ul>
          <li key="1">
            <Link to="/polyester">
              <div style={{background: `url(${polyester})`}}></div>
              <span>{intl.formatMessage({ id: 'POLYESTER' })}</span>
            </Link>
          </li>
          <li key="2">
            <div style={{background: `url(${tencel})`}}></div>
            <span>{intl.formatMessage({ id: 'TENCEL' })}</span>
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
          <li key="7">
            <div style={{background: `url(${silk})`}}></div>
            <span>{intl.formatMessage({ id: 'SILK' })}</span>
          </li>
          <li key="8">
            <div style={{background: `url(${linen})`}}></div>
            <span>{intl.formatMessage({ id: 'LINEN' })}</span>
          </li>
          <li key="9">
            <div style={{background: `url(${conton})`}}></div>
            <span>{intl.formatMessage({ id: 'ORGANIC_COTON' })}</span>
          </li>
          <li key="10">
            <div style={{background: `url(${aloe})`}}></div>
            <span>{intl.formatMessage({ id: 'ALOE_VERA' })}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
