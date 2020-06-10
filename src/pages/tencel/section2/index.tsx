import React from 'react';
import classnames from 'classnames';
import { useIntl } from 'umi';

import styles from '../index.less';
import styles2 from './index.less';

export default function Section1() {
  const intl = useIntl();

  return (
    <div id="page1" style={{height: 500}} className={classnames(styles['content-wrapper'], styles.page)}>
      <div className={styles.images}>
        <div
          key="image"
          className={classnames(styles['image-wrapper'], styles2.image1)}
          // animation={{ x: 0, opacity: 1, ease: 'easeOutQuad' }}
          // style={{ transform: 'translateX(-100px)', opacity: 0 }}
        ></div>
      </div>

      <div style={{flex: '0 0 40%'}} className={styles.images}>
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
