import getData from './getData';

const getTestData = () => {
	const url = '/api/test';
	return getData.get(url);
}

const getTreeData = (params) => {
	const url = '/api/getTree';
	return getData.post(url,params);
}

const updateTreeData = (params) => {
	const url = '/api/updateTree';
	return getData.post(url,params);
}

export default {
	getTestData,
	getTreeData,
	updateTreeData
}