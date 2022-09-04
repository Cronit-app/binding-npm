let axios = require('axios'); 

class Cronit {
	constructor(apiKey){
		this.apiKey = apiKey; 
	}

	async listCrons(){
		return (await axios.get('https://api.cronit.app/v1/crons', {headers: {authorization: this.apiKey}})).data; 
	}

	async runCron(cronId){
		return (await axios.post('https://api.cronit.app/v1/crons/' + cronId + '/run', '', {headers: {authorization: this.apiKey}})).data; 
	}

	async toggleCron(cronId){
		return (await axios.post('https://api.cronit.app/v1/crons/' + cronId + '/toggle', '', {headers: {authorization: this.apiKey}})).data; 
	}
}
module.exports = {Cronit}