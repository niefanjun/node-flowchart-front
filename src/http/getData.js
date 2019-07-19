import axios from 'axios';

const http = axios.create({
	baseURL: 'http://127.0.0.1:8888',
	timeout: 5000
})

http.interceptors.request.use(
	(config) => {
		return config
	},
	(error) => {
		throw new Error(error);
	}
);

http.interceptors.response.use(
	(res) => {
		if (res && res.data) {
			if (res.data.resultCode == '0000') {
				if (res.data.data) return res.data.data;
			}
			return false;
		}
	}
)

export default http;