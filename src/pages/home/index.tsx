import React from 'react';
import { useMount } from '@umijs/hooks';

import { BackTop } from 'antd';
import { VerticalAlignTopOutlined } from '@ant-design/icons';

import { menu } from '../consts';
import Header from '../components/header';
import Banner from './banner';

import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import AboutUS from './aboutUs';
import ContactUS from './contactUs';

import styles from './index.less';

export default () => {
  useMount(() => {
    window.scrollTo(0, 0);
  })

  return (
    <>
      <Header menu={menu}/>
      <Banner/>
      <Section1/>
      <Section2/>
      <Section3/>
      <AboutUS/>
      <ContactUS/>
      <BackTop>
      <div><VerticalAlignTopOutlined className={styles.icon} /></div>
    </BackTop>
    </>
  );
}
