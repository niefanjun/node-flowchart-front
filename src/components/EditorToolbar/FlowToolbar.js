import React from 'react';
import { Divider } from 'antd';
import { Toolbar } from 'gg-editor';
import ToolbarButton from './ToolbarButton';
import styles from './index.less';
import Save from './save.js';

const FlowToolbar = (props) => {
  return (
    <Toolbar className={styles.toolbar}>
      <ToolbarButton command="undo" text="撤销" />
      <ToolbarButton command="redo" text="重做" />
      <Divider type="vertical" />
      <ToolbarButton command="copy" text="复制" />
      <ToolbarButton command="paste" text="粘贴" />
      <ToolbarButton command="delete" text="删除" />
      <Divider type="vertical" />
      <ToolbarButton command="zoomIn" icon="zoom-in" text="放大" />
      <ToolbarButton command="zoomOut" icon="zoom-out" text="缩小" />
      <ToolbarButton command="autoZoom" icon="fit-map" text="适应屏幕" />
      <ToolbarButton command="resetZoom" icon="actual-size" text="实际尺寸" />
      <Divider type="vertical" />
      <ToolbarButton command="toBack" icon="to-back" text="下移一层" />
      <ToolbarButton command="toFront" icon="to-front" text="上移一层" />
      <Divider type="vertical" />
      <ToolbarButton command="multiSelect" icon="multi-select" text="多选模式" />
      <ToolbarButton command="addGroup" icon="group" text="成组" />
      <ToolbarButton command="unGroup" icon="ungroup" text="取消组" />
      <Save saveFunc={props.saveFunc}/>
    </Toolbar>
  );
};

export default FlowToolbar;
