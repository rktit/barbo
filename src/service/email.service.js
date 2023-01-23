import axios from 'axios';

export const sendTrabalhe = async (data, file = false) => {
		let result = [];
		const config = {
				headers: {
						'Content-Type': !file ? 'application/x-www-form-urlencoded' : 'multipart/form-data',
						'Access-Control-Allow-Origin': '*'
				}
		}
		await axios
				.post(`https://emails.rktstation.com.br/api/terrazul-trabalhe-conosco`, data, config)
				.then((res) => {
						console.log("sendEmail result", res.data);
						result = {data: res.data, error: false};
				})
				.catch((error) => {
						console.log("sendEmail catch", error);
						result = {error: true};
				});
		return result;
};

export const sendCatalogo = async (data, file = false) => {
	let result = [];
	const config = {
			headers: {
					'Content-Type': !file ? 'application/x-www-form-urlencoded' : 'multipart/form-data',
					'Access-Control-Allow-Origin': '*'
			}
	}
	await axios
			.post(`https://emails.rktstation.com.br/api/terrazul-catalogo`, data, config)
			.then((res) => {
					console.log("sendCatalogo result", res.data);
					result = {data: res.data, error: false};
			})
			.catch((error) => {
					console.log("sendCatalogo catch", error);
					result = {error: true};
			});
	return result;
};

export const sendNewsletter = async (data, file = false) => {
	let result = [];
	const config = {
			headers: {
					'Content-Type': !file ? 'application/x-www-form-urlencoded' : 'multipart/form-data',
					'Access-Control-Allow-Origin': '*'
			}
	}
	await axios
			.post(`https://emails.rktstation.com.br/api/terrazul-newsletter`, data, config)
			.then((res) => {
					console.log("sendNewsletter result", res.data);
					result = {data: res.data, error: false};
			})
			.catch((error) => {
					console.log("sendNewsletter catch", error);
					result = {error: true};
			});
	return result;
};

export const sendOrcamento = async (data, file = false) => {
	let result = [];
	const config = {
			headers: {
					'Content-Type': !file ? 'application/x-www-form-urlencoded' : 'multipart/form-data',
					'Access-Control-Allow-Origin': '*'
			}
	}
	await axios
			.post(`https://emails.rktstation.com.br/api/terrazul-orcamento`, data, config)
			.then((res) => {
					console.log("sendOrcamento result", res.data);
					result = {data: res.data, error: false};
			})
			.catch((error) => {
					console.log("sendOrcamento catch", error);
					result = {error: true};
			});
	return result;
};