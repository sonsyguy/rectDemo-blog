

import React,{PureComponent,Fragment} from 'react'
import {Row,Col,Card,Button} from 'antd'
import Connect from './connect'

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
class Trans extends PureComponent{


  state ={
    connectInfo:[]
  }

  showItem = item =>{ 
    const {connectInfo} = this.state;
    console.log(connectInfo);
    const publicShow = 
      <Row key={item.id}>
        <Col span={2} offset={4}>
          <span>{item.field}:</span>
        </Col>
        <Col span={2}>
          <span>{connectInfo[item.name]}</span>
        </Col>
      </Row>

    return publicShow
  }

  childrenChange = (e,item) =>{
    console.log(item);
    const Obj = {};
    Obj[item.name] = e.target.value;
    this.setState({
      connectInfo:Obj
    })
  }

  onClick =() =>{
    console.log(this.state);
  }
  

  

  render(){
    return(
      <Fragment>
        <p>Basic Info</p>
        <Card>
          <Row>
            <Col span={2}>
              <span>Name:</span>
            </Col>
            <Col span={8}>
              <input type='text' defaultValue='' />
            </Col>
          </Row>
          <Row style={{marginTop:20}}>
            <Col span={2}>
              <span>description:</span>
            </Col>
            <Col span={8}>
              <input type='text' defaultValue='' />
            </Col>
          </Row>
          {data.map(item =>this.showItem(item))}
          <Button onClick={this.onClick}>click</Button>
        </Card>

        <Connect onChildrenChange={(e,item)=>this.childrenChange(e,item)} />
      </Fragment>
      
    )
  }
}

export default Trans