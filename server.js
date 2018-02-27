const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser());

const listenPort = 3010;


app.post('/', (req, res) => {
    console.log("Request received:");
    console.log("\tcompany_id: " + req.body.company_id);
    console.log("\tcompany_name: " + req.body.company_name);
    console.log("\tcustomer_id: " + req.body.customer_id);
    console.log("\tcustomer_name: " + req.body.customer_name);
    console.log("\tphone: " + req.body.phone);
    console.log("\tphone_type: " + req.body.phone_type);
    console.log("\tcampaign: " + req.body.campaign);
    console.log("\tresult_code: " + req.body.result_code);
    console.log("\n\n\n");
    res.send("Request received.");

});


app.get('/', (req, res) => {
    console.log("entering default GET path");
});


// set listen port for webhook
http.createServer(app).listen(listenPort, () => {
    console.log('Express server listening on port ' + listenPort);
});
