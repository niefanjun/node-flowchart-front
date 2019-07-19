import React from "react";
import { withPropsAPI } from "gg-editor";
import { Tooltip,Icon } from 'antd';
import styles from './index.less';
class Save extends React.Component {
  handleClick = () => {
    const { propsAPI } = this.props;
    this.props.saveFunc(propsAPI.save());
    // 获取项目id
    /*let reg = /\/[^\/]*$/;
    let canvas_id = window.location.href.match(reg).slice(1);*/
    //console.log(propsAPI.save());
  };

  render() {
    return (
      <div style={{ padding: 8 ,cursor: 'pointer'}} onClick={this.handleClick}>
        {/*<button onClick={this.handleClick}>保存</button>*/}
        <Tooltip
          title="保存"
          placement="bottom"
          overlayClassName={styles.tooltip}
        >
          <Icon type="save" />
        </Tooltip>
      </div>
    );
  }
}

export default withPropsAPI(Save);
