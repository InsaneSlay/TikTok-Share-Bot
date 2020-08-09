const qs = require('querystring');
const { default: Axios } = require('axios');
var reqs = 0;
var keepGoing = true;
makeRequest();
function makeRequest() {
    reqs++;
    console.log(reqs + ' shares sent');
    Axios.post('https://api16-core-c-useast1a.tiktokv.com/aweme/v1/aweme/stats/?ac=WIFI&op_region=US&app_skin=white&',
        qs.stringify({
            action_time: Date.now(),
            item_id: '6858638340451781894',
            item_type: '1',
            share_delta: '1',
            stats_channel: 'copy'
        }),
        {
            headers: {
                'ContentType': 'x-www-form-urlencoded',
                'x-common-params-v2': 'version_code=16.6.5&app_name=musical_ly&channel=App%20Store&device_id=' + Math.random() * 10000000000000000000 + '&aid=1233&os_version=13.5.1&device_platform=iphone&device_type=iPhone12,5',
				'User-Agent': 'TikTok 16.6.5 rv:166515 (iPhone; iOS 13.2.3; en_CA) Cronet',
				'Cookie': 'sid_tt=bd435670bac48046a1b763c00bd984f6;'
            }
        }
    ).then(res => {
    }).catch(err => {
        console.log('Error: ' + err);
    });
    setTimeout(() => makeRequest(), 8);
}
