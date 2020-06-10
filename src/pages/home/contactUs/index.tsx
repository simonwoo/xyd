import React from 'react';
import { useIntl } from 'umi';
import { Form, Divider, Input, Button } from 'antd';
import { HomeOutlined} from '@ant-design/icons';
import Footer from '../../components/footer';

import styles from './index.less';

export default function() {
  const intl = useIntl();
  const onFinish = (values:any) => {console.log('Received values of form: ', values);}

  return (
    <div className={styles.container}>
      <h1>{intl.formatMessage({id: 'CONTACT_US'})}</h1>
      <h2>{intl.formatMessage({id: 'CONTACT_US_DESC'})}</h2>
      <div style={{ width: '10%', margin: '0 auto 0 auto' }}>
        <Divider />
      </div>

      <div style={{ margin: '0 auto 80px auto', maxWidth: 500 }}>
        <Form onFinish={onFinish}>
            <Form.Item name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
                <Input placeholder={intl.formatMessage({id: 'NAME'})} />
            </Form.Item>

            <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                <Input placeholder={intl.formatMessage({id: 'EMAIL'})} />
            </Form.Item>

            <Form.Item name="message">
                <Input.TextArea placeholder={intl.formatMessage({id: 'MESSAGE'})} rows={10} />
            </Form.Item>

            <Form.Item>
                <div className={styles['btn-wrapper']}>
                    <Button htmlType="submit">{intl.formatMessage({id: 'SEND'})}</Button>
                </div>
            </Form.Item>
            </Form>
        </div>
      <div style={{ width: 600, margin: 'auto', textAlign: 'center' }}>
        <HomeOutlined style={{ fontSize: 36 }} className={styles.icon} />
        <h2>{intl.formatMessage({id: 'ADDRESS'})}</h2>
        <ul style={{ textAlign: 'left', marginTop: 12 }}>
          <li style={{ marginBottom: 16 }}>
            <span style={{ textDecoration: 'underline' }}>{intl.formatMessage({id: 'ADRESS1_P'})}</span>
            <span>{intl.formatMessage({id: 'ADRESS1_D'})}</span>
          </li>
          <li>
            <span style={{ textDecoration: 'underline' }}>{intl.formatMessage({id: 'ADRESS2_P'})}</span>
            <span>{intl.formatMessage({id: 'ADRESS2_D'})}</span>
          </li>
        </ul>
      </div>
      <Footer/>

    </div>
  );
}
