import React from 'react';
import classnames from 'classnames';
import { useIntl } from 'umi';

import styles from '../index.less';
import styles2 from './index.less';

export default function Section3() {
  const intl = useIntl();

  return (
    <div id="page1" style={{height: 500}} className={classnames(styles['content-wrapper'], styles.page)}>
      <div style={{paddingRight: 80}} className={styles.images}>
        <div
          key="image"
          className={classnames(styles['image-wrapper'], styles2.image1)}
          // animation={{ x: 0, opacity: 1, ease: 'easeOutQuad' }}
          // style={{ transform: 'translateX(-100px)', opacity: 0 }}
        ></div>
      </div>

      <div
        style={{paddingLeft: 80}}
        className={styles['text-wrapper']}
        key="text"
        // leaveReverse
      >
        <h2 key="h2">{intl.formatMessage({id: 'TENCEL.TITLE'})}</h2>
        <p key="p1" >{intl.formatMessage({id: 'TENCEL.DESC1'})}</p>
        <p key="p2" >{intl.formatMessage({id: 'TENCEL.DESC2'})}</p>
      </div>
    </div>
  );
}
