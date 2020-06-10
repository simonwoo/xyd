import React from 'react';
import classnames from 'classnames';
import { Button } from 'antd';
import { useIntl } from 'umi';

import styles from '../index.less';
import styles2 from './index.less';

export default function Section3() {
  const intl = useIntl();

  return (
    <div id="page1" style={{height: 800}} className={classnames(styles['content-wrapper'], styles.page)}>
      <div className={styles.images}>
        <div
          key="image"
          className={classnames(styles['image-wrapper'], styles2.image1)}
        />
        <div style={{textAlign: 'right'}} className={styles['btn-wrapper']}>
          <Button>{intl.formatMessage({id: 'MORE'})}</Button>
        </div>
      </div>

      <div
        style={{paddingLeft: 80, flex: '0 0 40%'}}
        className={styles['text-wrapper']}
        key="text"
      >
        <h2 key="h2">{intl.formatMessage({id: 'BORDER_PILLOW_COVER'})}</h2>
        <p key="p" >{intl.formatMessage({id: 'BORDER_PILLOW_COVER_DESC'})}</p>
      </div>
    </div>
  );
}
