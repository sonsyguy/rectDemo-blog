import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row,Col, Card,Input,Icon,Timeline,Anchor} from 'antd';

const { Meta } = Card;
const {Link} = Anchor;
@connect(({ home, loading }) => ({
  // 连接home.js文件
  home,
  loading: loading.models.home,
}))
class Home extends PureComponent {
  state = {
    testVal: 'test params',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    const { testVal } = this.state;
    dispatch({
      type: 'home/fetchCurrent', // action的类型，由home命名空间和其下面的fetch方法构成
      params: ""
    }); // 派发这个action就会调用home中的fetch函数，然后就会请求数据
  }

  showCard = (item) => {
    const cardArticle = (
      <Col span={8} key={item.id} style={{ padding: '10px' ,margin:'0 auto'}}>
        <Card
          hoverable
          style={{ width: 200 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title={item.datetime} description={item.title} />
        </Card>
      </Col>
    )
    return cardArticle
  }

  render() {
    const {
      home: { list },
    } = this.props;
    return(
      <div>
        <Card style={{width:'60%',float:'left',marginLeft:'3%'}}> 
          {
            list.map(item => this.showCard(item))
          }
        </Card>
        <div style={{width:'30%',float:'left',marginLeft:'3%'}}> 
          <Card title="文章" extra={<a href="#">More</a>}>
            <p>这里什么都没有，你也许可以使用搜索功能找到你需要的内容：</p>
            <Input
              prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="输入关键词搜索..."
            />
          </Card>

          <Card title="友情链接" style={{marginTop:'20px'}}>
            <Timeline>
              <Timeline.Item style={{cursor:'pointer'}}>Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
              <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
              <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
            </Timeline>
          </Card>
        </div>
        
        
      </div>
    )
  }
}

export default Home;
