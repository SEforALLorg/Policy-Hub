const https = require("https");
const fs = require("fs");

function DownloadLocale(language) {
  let data = "";
  let url = `https://api.locize.app/ea44f842-2da0-4c31-a835-9b0fb1a66695/latest/${language}/VKH`;

  let dir1 = `./local`;
  let dir2 = `./local/${language}`;

  if (!fs.existsSync(dir1)) fs.mkdirSync(dir1);
  if (!fs.existsSync(dir2)) fs.mkdirSync(dir2);

  https.get(url, (res) => {
    res.on("data", (append) => (data += append));
    res.on("end", () => {
      try {
        let json = JSON.parse(data);
        let content = JSON.stringify(json);
        fs.writeFileSync(`./local/${language}.json`, content);
      } catch (error) {
        console.error(error.message);
      }
    });
  });
}

DownloadLocale("en");
DownloadLocale("fr");
