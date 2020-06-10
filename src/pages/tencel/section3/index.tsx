import React from 'react';
import classnames from 'classnames';
import { useIntl } from 'umi';

import styles from '../index.less';
import styles2 from './index.less';

export default function Section1() {
  const intl = useIntl();

  return (
    <div id="page1" className={classnames(styles['content-wrapper'], styles.page)}>
      <div
        style={{paddingLeft: 80}}
        className={styles['text-wrapper']}
        key="text"
        // leaveReverse
      >
        <h2 key="h2">{intl.formatMessage({id: 'TENCEL.CHARACTER'})}</h2>
        <h3 key="t1">{intl.formatMessage({id: 'TENCEL.CHARACTER.T1'})}</h3>
        <p key="p1" >{intl.formatMessage({id: 'TENCEL.CHARACTER.P1'})}</p>
        <h3 key="t2">{intl.formatMessage({id: 'TENCEL.CHARACTER.T2'})}</h3>
        <p key="p2" >{intl.formatMessage({id: 'TENCEL.CHARACTER.P2'})}</p>
        <h3 key="t3">{intl.formatMessage({id: 'TENCEL.CHARACTER.T3'})}</h3>
        <p key="p3" >{intl.formatMessage({id: 'TENCEL.CHARACTER.P3'})}</p>
        <h3 key="t4">{intl.formatMessage({id: 'TENCEL.CHARACTER.T4'})}</h3>
        <p key="p4" >{intl.formatMessage({id: 'TENCEL.CHARACTER.P4'})}</p>
        <h3 key="t5">{intl.formatMessage({id: 'TENCEL.CHARACTER.T5'})}</h3>
        <p key="p5" >{intl.formatMessage({id: 'TENCEL.CHARACTER.P5'})}</p>
        <h3 key="t6">{intl.formatMessage({id: 'TENCEL.CHARACTER.T6'})}</h3>
        <p key="p6" >{intl.formatMessage({id: 'TENCEL.CHARACTER.P6'})}</p>
      </div>

      <div className={styles.images}>
        <div
          key="image"
          className={classnames(styles['image-wrapper'], styles2.image2)}
          // animation={{ x: 0, opacity: 1, ease: 'easeOutQuad' }}
          // style={{ transform: 'translateX(100px)', opacity: 0 }}
        ></div>
      </div>
    </div>
  );
}
