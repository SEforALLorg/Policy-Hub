const https = require('https');
const fs = require('fs');

function DownloadLocale(language) {
  var data = "";
  var url = `https://api.locize.app/79f906de-91a2-487d-ac55-0c79133b5676/latest/${language}/VKH`;
  
  var dir1 = `./temp`;
  var dir2 = `./temp/${language}`;

  if(!fs.existsSync(dir1)) fs.mkdirSync(dir1);
  if(!fs.existsSync(dir2)) fs.mkdirSync(dir2);

  var request = https.get(url, (res) => 
  {
    res.on("data", append => data += append);
    res.on("end", () => {
        try {
            let json = JSON.parse(data);
            let content = JSON.stringify(json);
            fs.writeFileSync(`./temp/${language}/common.json`, content);
        } catch (error) {
            console.error(error.message);
        };
    });
  });

}

DownloadLocale('en');
DownloadLocale('fr');
