import React,{ Fragment } from 'react';
import { Row, Col } from 'antd';
import { Flow,withPropsAPI } from 'gg-editor';
import EditorMinimap from '../components/EditorMinimap';
import { FlowContextMenu } from '../components/EditorContextMenu';
import { FlowToolbar } from '../components/EditorToolbar';
import { FlowItemPanel } from '../components/EditorItemPanel';
import { FlowDetailPanel } from '../components/EditorDetailPanel';
import EditorInfo from '../components/EditorInfo';
import beautify from 'js-beautify';
import styles from './index.less';



class FlowPageInner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //flowData: {"nodes":[{"type":"node","size":"72*72","shape":"flow-circle","color":"#FA8C16","label":"Start","x":459.3374938964844,"y":254.20000076293945,"id":"6a8e345b","index":0}]},
      flowData: {},
      showDetailEditor: false
    }
  }
  componentDidMount(){
    // 根据不同的flowID来读取对应的数据，如果为new则表示新建
    this.loadFlow(this.props.match.params.flowId);
  }
  saveFunction(value) {
    //console.log(value);
    const editorinfovalue = beautify(JSON.stringify(value));
    console.log('上传桌布数据:',editorinfovalue);
    /*this.setState({
      editorinfovalue: editorinfovalue
    })*/
  }
  importFunction(value) {
    console.log('上传编辑数据',value);
    /*this.setState({
      flowData: value
    })*/
  }
  selectNode(e) {
    console.log(e);
    if (e.item&&e.item.model.type == 'node') {
      let model = e.item.model;
      this.setState({
        showDetailEditor: true
      })
    } else {
      this.setState({
        showDetailEditor: false
      })
    }
  }
  loadFlow(flowId) {
    const { propsAPI } = this.props;
    if (flowId == 'new') {
      propsAPI.read({});
    } else {
      propsAPI.read({"nodes":[{"type":"node","size":"72*72","shape":"flow-circle","color":"#FA8C16","label":"Start","x":459.3374938964844,"y":254.20000076293945,"id":"6a8e345b","index":0}]});
    }
  }
  render() {
    return (
      <Fragment>
        <Row type="flex" className={styles.editorHd}>
          <Col span={24}>
            <FlowToolbar saveFunc={(value) => this.saveFunction(value)}/>
          </Col>
        </Row>
        <Row type="flex" className={styles.editorBd}>
          <Col span={4} className={styles.editorSidebar}>
            <FlowItemPanel />
            <EditorMinimap />
          </Col>
          <Col span={14} className={styles.editorContent}>
            <Flow className={styles.flow} data={this.state.flowData} onClick={
              (e) => {this.selectNode(e)}
            } onDrop={
              (e) => {console.log(e)}
            }/>
          </Col>
          <Col span={6} className={styles.editorSidebar}>
            <FlowDetailPanel editorInfoImportFunc={(value) => this.importFunction(value)} />
          </Col>
        </Row>
        <FlowContextMenu />
      </Fragment>
    );
  }
};

export default withPropsAPI(FlowPageInner);
