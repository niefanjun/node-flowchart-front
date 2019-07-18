import React, { Fragment } from 'react';
import { Card, Form, Input, Select } from 'antd';
import { withPropsAPI } from 'gg-editor';
import upperFirst from 'lodash/upperFirst';

const { Item } = Form;
const { Option } = Select;

const inlineFormItemLayout = {
  labelCol: {
    sm: { span: 8 },
  },
  wrapperCol: {
    sm: { span: 16 },
  },
};

// 节点id与汉字名称对应关系
const nameMap = {
  node: '节点',
  edge: '连线',
  group: '分组',
  canvas: '项目信息',
  plan: '执行计划'
}

class DetailForm extends React.Component {
  get item() {
    const { propsAPI } = this.props;

    return propsAPI.getSelected()[0];
  }

  handleSubmit = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    const { form, propsAPI } = this.props;
    const { getSelected, executeCommand, update } = propsAPI;

    setTimeout(() => {
      form.validateFieldsAndScroll((err, values) => {
        if (err) {
          return;
        }

        const item = getSelected()[0];

        if (!item) {
          return;
        }

        executeCommand(() => {
          update(item, {
            ...values,
          });
        });
      });
    }, 0);
  };

  renderEdgeShapeSelect = () => {
    return (
      <Select onChange={this.handleSubmit}>
        <Option value="flow-smooth">柔和线条</Option>
        <Option value="flow-polyline">硬直线条</Option>
        <Option value="flow-polyline-round">圆角线条</Option>
      </Select>
    );
  };

  renderNodeDetail = () => {
    const { form } = this.props;
    const { label,test } = this.item.getModel();
    let item = this.item;
    let labelName = null;
    switch(item.model.nodeName_self) {
      case 'theme':
        labelName = '主题';
      case 'mission':
        labelName = '任务'
    }
    return (
      <Fragment>
        <Item colon={false} label="名称" {...inlineFormItemLayout}>
          {form.getFieldDecorator('label', {
            initialValue: label,
          })(<Input onBlur={this.handleSubmit} />)}
        </Item>
      </Fragment>
    );
  };

  renderEdgeDetail = () => {
    const { form } = this.props;
    const { label = '', shape = 'flow-smooth' } = this.item.getModel();

    return (
      <Fragment>
        <Item colon={false} label="名称" {...inlineFormItemLayout}>
          {form.getFieldDecorator('label', {
            initialValue: label,
          })(<Input onBlur={this.handleSubmit} />)}
        </Item>
        <Item colon={false} label="线条类型" {...inlineFormItemLayout}>
          {form.getFieldDecorator('shape', {
            initialValue: shape,
          })(this.renderEdgeShapeSelect())}
        </Item>
      </Fragment>
    );
  };

  renderGroupDetail = () => {
    const { form } = this.props;
    const { label = '新建分组' } = this.item.getModel();

    return (
      <Item colon={false} label="名称" {...inlineFormItemLayout}>
        {form.getFieldDecorator('label', {
          initialValue: label,
        })(<Input onBlur={this.handleSubmit} />)}
      </Item>
    );
  };

  renderCanvasDetail = () => {
    const { form,projectData } = this.props;
    const { projectName } = projectData;

    return (
      <Item colon={false} label="项目名称" {...inlineFormItemLayout}>
        {form.getFieldDecorator('label', {
          initialValue: projectName,
        })(<Input onBlur={this.handleSubmit} />)}
      </Item>
    );
  };

  renderPlanDetail = () => {
    const { form } = this.props;
    const { timeSetter } = this.item.getModel();

    return (
      <Item colon={false} label="定时器" {...inlineFormItemLayout}>
        {form.getFieldDecorator('timeSetter', {
          initialValue: timeSetter,
        })(<Input onBlur={this.handleSubmit} />)}
      </Item>
    );
  };

  render() {
    const { type } = this.props;
    let title = null;
    let id = null;
    if (this.item) {
      //return null;
      title = this.item.getModel().nodeName_name;
      id = this.item.getModel().nodeName_id;
    }
    // 选择主题是，如果不是node面板则不显示
    if (id == 'mission' && type != 'node') {
      return '';
    }
    return (
      <Card type="inner" size="small" title={nameMap[type]} bordered={false}>
        <Form onSubmit={this.handleSubmit}>
          {type === 'node' && this.renderNodeDetail()}
          {type === 'edge' && this.renderEdgeDetail()}
          {type === 'group' && this.renderGroupDetail()}
          {type === 'canvas' && this.renderCanvasDetail()}
          {type === 'plan' && this.renderPlanDetail()}
        </Form>
      </Card>
    );
  }
}

export default Form.create()(withPropsAPI(DetailForm));
