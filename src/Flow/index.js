import React from 'react';
import GGEditor from 'gg-editor';
import FlowInner from './flow.js';
import styles from './index.less';


class FlowPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <GGEditor className={styles.editor}>
        <FlowInner {...this.props}/>
      </GGEditor>
    );
  }
};

export default FlowPage;
