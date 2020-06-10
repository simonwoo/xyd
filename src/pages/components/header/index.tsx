import React, { useState } from 'react';
import { Menu, Select } from 'antd';
import { getLocale, setLocale, useIntl, Link,useLocation } from 'umi';

import styled from 'styled-components';
import classnames from 'classnames';

import logo from './logo.png';
import styles from './index.less';

const { SubMenu } = Menu;

const Left = styled.div`
  display: flex;
`;

const Right = styled.div``;

const StyledMenu = styled(Menu)`
  margin-left: 30px;
  border-bottom: none;
  
  .ant-menu-submenu-selected,
  .ant-menu-submenu:hover,
  .ant-menu-submenu-open.ant-menu-submenu-active,
  .ant-menu-item.ant-menu-item-active {
    color: #911d21 !important;
    border-bottom: 2px solid #911d21 !important;
  }

  .ant-menu-item-selected {
    color: #911d21 !important;
    border-bottom: 2px solid #911d21 !important;
  }

  .ant-menu-item-selected a {
    color: #911d21 !important;
  }

  .ant-menu-item a:hover {
    color: #911d21 !important;
  }

  .ant-menu-submenu-title:hover {
    color: #911d21 !important;
  }
`;
type Lang = 'zh-CN' | 'en-US';

interface MenuItem {
  key: string;
  name: string;
  path?: string;
  children?: MenuItem[];
}

interface IProps {
  menu: {
    'zh-CN': MenuItem[];
    'en-US': MenuItem[];
  };
}

const Header: React.SFC<IProps> = props => {
  const location = useLocation()
  const [selectedKeys, setSelectedKeys] = useState<any>([location.pathname.slice(1)]);
  const [lang, setLang] = useState<Lang>(getLocale() === 'en-US' ? 'en-US':'zh-CN');
  const intl = useIntl();

  const onSelectLang = (lang: Lang) => {
    setLang(lang);
    setLocale(lang, false);
  };

  const onClick = (e: any) => {
    setSelectedKeys([e.key])
  }

  return (
    <div className={styles.header}>
      <Left>
        <img
          src={logo}
          style={{ background: '#911d21', padding: 12 }}
          width={135}
          height={50}
        />
        <StyledMenu mode="horizontal" selectedKeys={selectedKeys} onClick={onClick}>
          {props.menu[lang].map(item => {
            if (item.children && item.children.length) {
              return (
                <SubMenu
                  key={item.key}
                  title={item.name}
                  popupClassName={styles.submenu}
                >
                  {item.children.map(child => (
                    <Menu.Item key={child.key}>
                      <Link to={item.path ? item.path : '/tencel'}>
                        {child.name}
                      </Link>
                    </Menu.Item>
                  ))}
                </SubMenu>
              );
            }

            return (
              <Menu.Item key={item.key}>
                <Link to={item.path ? item.path : '/home'}>{item.name}</Link>
              </Menu.Item>
            );
          })}
        </StyledMenu>
      </Left>

      <Right>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder={intl.formatMessage({ id: 'SEARCH' })}
          defaultActiveFirstOption={false}
          showArrow={false}
          filterOption={false}
          notFoundContent={null}
        ></Select>
        <div className={styles['language-container']}>
          <div
            className={classnames(styles['language-item'], {
              [styles['header-active']]: lang === 'en-US',
            })}
            onClick={() => onSelectLang('en-US')}
          >
            English
          </div>
          <div className={styles.seperart}></div>
          <div
            className={classnames(styles['language-item'], {
              [styles['header-active']]: lang === 'zh-CN',
            })}
            onClick={() => onSelectLang('zh-CN')}
          >
            简体中文
          </div>
        </div>
      </Right>
    </div>
  );
};

export default Header;
