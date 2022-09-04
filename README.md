JS bindings for [https://cronit.app]([https://cronit.app]) API 

# How to use 

Initialize by creating an instance of the Cronit object, with your API Key 
```js 
let {Cronit} = require('./index'); 
let cronit = new Cronit('12341234-1234-1234-1234-123412341234');
``` 

Use the following functions to interact with the API: 
```js
let crons =await cronit.listCrons(); 	// list cron jobs 
await cronit.runCron(crons[0].id); 		// run a cron 
await cronit.toggleCron(crons[0].id); 	// enable/disable a cron 
``` 