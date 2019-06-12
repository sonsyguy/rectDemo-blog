import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import { GlobalFooter } from 'ant-design-pro';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        {
          key: 'helife',
          title: 'Helife',
          href: 'https://ubuff.cn',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <Icon type="github" />,
          href: 'https://github.com/sonsyguy',
          blankTarget: true,
        },
        {
          key: 'Whtever',
          title: 'Whtever',
          href: 'https://helife.net',
          blankTarget: true,
        },
      ]}
      copyright={
        <Fragment>
          Copyright <Icon type="copyright" /> 2019 啦啦啦，我是卖报小航家
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
