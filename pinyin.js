const {request} = require('https');
const prompts = require('prompts');

(async () => {

const answer = await prompts({
  type: 'text',
  name: 'hanjas',
  message: 'word'
});

const hanjas = answer.hanjas;

const options = {
  hostname: 'dictionary.writtenchinese.com',
  port: 443,
  path: '/ajaxsearch/simsearch.action',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }
}
const req = request(options, (response) => {
  let data = '';
  response.on('data', (chunk) => data += chunk);
  response.on('end', () => {
    data = JSON.parse(data);
    try {
      console.log(data.bothChShort[0].tone);
      // require('child_process').execSync(`echo "${data.bothChShort[0].tone}" | CLIP`);
    } catch (e) {
      console.log(e);
    }
  });
});

req.write(`searchKey=${encodeURIComponent(hanjas)}`);
req.end();

})();