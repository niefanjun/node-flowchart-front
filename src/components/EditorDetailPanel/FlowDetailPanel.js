import React from 'react';
import { Card, Form, Input, Select } from 'antd';
import { NodePanel, EdgePanel, GroupPanel, MultiPanel, CanvasPanel, DetailPanel } from 'gg-editor';
import DetailForm from './DetailForm';
import styles from './index.less';
import EditorInfo from '../EditorInfo';

const { Item } = Form;
class FlowDetailPanel extends React.Component {
  render() {
    let {editorInfoImportFunc} = this.props;
    return (
      <DetailPanel className={styles.detailPanel}>
        <NodePanel className="node-container">
          <DetailForm type="node"/>
          <DetailForm type="plan"/>
          <EditorInfo importFunc={editorInfoImportFunc}/>
        </NodePanel>
        <EdgePanel>
          <DetailForm type="edge" />
        </EdgePanel>
        <GroupPanel>
          <DetailForm type="group" />
        </GroupPanel>
        <MultiPanel>
          <Card type="inner" size="small" title="Multi Select" bordered={false} />
        </MultiPanel>
        <CanvasPanel>
          <DetailForm type="canvas" projectData={{
            projectName: '测试项目'
          }}/>
        </CanvasPanel>
      </DetailPanel>
    );
  }
};

export default FlowDetailPanel;
