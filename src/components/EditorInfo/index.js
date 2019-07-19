import React, { Fragment } from 'react';
import { withPropsAPI } from "gg-editor";
import {UnControlled as CodeMirror} from 'react-codemirror2';
import { Card, Form, Input, Select,Icon } from 'antd';
import beautify from 'js-beautify';
require('codemirror/mode/javascript/javascript');
import style from './index.less';

class EditorInfo extends React.Component {
	constructor(props) {
		super(props);
		this.codeMirrorOption = {
			mode: 'javascript',
			theme: 'material',
			lineNumbers: true,
			smartIndent: false,
			indentUnit: 4
		}
		this.value = '';
		//this.codeMirrorValue = 'test';
	}
	componentDidMount(){
		let height = this.refs.containerBox.clientHeight;
		this.refs.containerBox.style.height = height +'px';
	}
	importFunc() {
		const { propsAPI } = this.props;
		try {
			let model = JSON.parse(this.value);
			propsAPI.update(model.id,model);
			this.props.importFunc(model);
		} catch(e) {
			alert('json格式化错误');
		}
	}
	render() {
		/*const { propsAPI } = this.props;
		const { getSelected } = propsAPI;
		let selectModel = getSelected()[0].getModel();
		if (selectModel.nodeName_id == 'theme') {
			return '';
		}
		const editorinfovalue = beautify(JSON.stringify(selectModel));*/
		const editorinfovalue = '';
		return (
			<div className={style.editorInfo}>
				<Card type="inner" size="small" title="脚本编辑" bordered={false}>
					<div className="containerBox" ref="containerBox">
					<CodeMirror
						value={editorinfovalue}
						options={this.codeMirrorOption}
						onChange={(editor,data, value) => {
							this.value = value;
						}}
					/>
					</div>
				</Card>
			</div>
		)
	}
}

export default withPropsAPI(EditorInfo);