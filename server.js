const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

//const accountSid = process.env.TWILIO_ACCOUNT_SID;
//const authToken = process.env.TWILIO_AUTH_TOKEN;
//const client = require('twilio')(accountSid, authToken);

const app = express();

app.use(bodyParser());

var listenPort = process.env.PORT || 3010;

app.post('/', (req, res) => {
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
