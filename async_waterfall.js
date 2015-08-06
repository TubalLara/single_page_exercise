var async = require('async');
var request = require('request');
var sumDebt = 0;
var result = 0;
var body = [];
var url = 'http://stats.mediasmart.es/bulk/test-2014/account-01.json';

function calcsumDebt() {

    for(i=1; i<=5; i++) {
        url = 'http://stats.mediasmart.es/bulk/test-2014/account-0' + i + '.json';
        request(url, function(err,res,body)
        {
            if (!err && res.statusCode==200)
            {
                body = JSON.parse(body);
                sumDebt += body.Debt;
                result += 1;
                if(result===5){
                    result = sumDebt;
                    console.log(result);
                }
                // console.log('Debt: %s', body.Debt);
            }
        });
    }
}

calcsumDebt();