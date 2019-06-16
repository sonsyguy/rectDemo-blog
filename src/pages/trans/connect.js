import React,{PureComponent,Fragment} from 'react'
import {Card,Row,Col} from 'antd'

const data = [
  {
    id:1,
    field:'Host',
    name:'host'
  },
  {
    id:2,
    field:'Port',
    name:'port'
  }
]
class Connect extends PureComponent{

    showItem = item =>{ 
      const {onChildrenChange} = this.props;
      // console.log(this.state);
      // console.log(item);
      const publicShow = 
        <Row key={item.id}>
          <Col span={2}>
            <span>{item.field}:</span>
          </Col>
          <Col span={8}>
            <input type='text' defaultValue='' onChange={(e)=>onChildrenChange(e,item)} />
          </Col>
        </Row>

      return publicShow
    }

    render(){
        return(
          <Fragment>
            <p>Connect Info</p>
            <Card>
              {data.map(item =>this.showItem(item))}
            </Card>
          </Fragment>
        )
    }
}

export default Connect