import React from 'react';
import { Divider } from 'antd';
import { PhoneOutlined, WechatOutlined, MailOutlined } from '@ant-design/icons';
import { useIntl } from 'umi';
import qrcode from './qrcode.png';
import styles from './index.less';

const Footer: React.SFC<any> = () => {
  const intl = useIntl();

  return (
    <div className={styles.container}>
      <div style={{ width: '10%', margin: '40px auto 0 auto' }}>
        <Divider />
      </div>

      <div style={{ margin: '40px auto 0 auto', textAlign: 'center' }}>
        <img src={qrcode} width={100} height={100} />
      </div>

      <div className={styles['contact-container']}>
        <ul>
          <li>
            <PhoneOutlined style={{ fontSize: 32 }} className={styles.icon} />
            <div style={{ height: 50, lineHeight: '50px' }}>
              {intl.formatMessage({ id: 'PHONE' })}
            </div>
            <div>Chinese: 0571-12345678</div>
            <div>English: 0571-12345678</div>
          </li>

          <li>
            <WechatOutlined style={{ fontSize: 32 }} className={styles.icon} />
            <div style={{ height: 50, lineHeight: '50px' }}>
              {intl.formatMessage({ id: 'WECHAT' })}
            </div>
            <div>XYDFABRIC</div>
          </li>

          <li>
            <MailOutlined style={{ fontSize: 32 }} className={styles.icon} />
            <div style={{ height: 50, lineHeight: '50px' }}>
              {intl.formatMessage({ id: 'EMAIL' })}
            </div>
            <div>info@xinyada.com.cn</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
