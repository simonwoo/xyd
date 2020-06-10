import React from 'react';
import { menu } from '../consts';
import Header from '../components/header';
import Footer from '../components/footer';

import Section1 from './section1';

export default () => {
  return (
    <>
      <Header menu={menu}/>
      <Section1/>
      <Footer/>
    </>
  );
}
