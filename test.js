let {Cronit} = require('./index'); 
let cronit = new Cronit('12341234-1234-1234-1234-123412341234');
async function main(){
	console.log(await cronit.listCrons())
} 
main()