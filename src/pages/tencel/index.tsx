import React from 'react';
import { useMount } from '@umijs/hooks';

import Header from '../components/header';
import { menu } from '../consts';
import Banner from './banner';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';


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
      <Section4/>
    </>
  );
}
