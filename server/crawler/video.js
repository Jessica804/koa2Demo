const base = "https://movie.douban.com/subject/";
const doubanId = '24773958'
const videoBase = "https://movie.douban.com/trailer";
const puppeteer = require('puppeteer');

const sleep = time => new Promise(resolve => {
   setTimeout(resolve,time);
});

;(async () =>{
    console.log('Start visit the target page');
    const browser = await puppeteer.launch({
        args : ['--no-sandbox'],
        dumpio:false
        // headless:false
    });

    const page = await browser.newPage();
    await page.goto(base + doubanId,{
        waitUntil:'networkidle0'
    });

    await sleep(1000);

    // await page.waitForSelector('.more');

    const result = await page.evaluate(()=>{

        var $ = window.$;
        var it = $('.related-pic-video');

        if(it && it.length > 0){
            var link = it.attr('href');
            var cover = it.find('img').attr('src');
            return {
                cover,
                link 
            }
        }

        return {};
    })

    let video ;


    if(result.link){
        await page.goto(result.link,{
            waitUntil:'networkidle0'
        });

        await sleep(2000);

        video = await page.evaluate(() =>{
            var $ =window.$;
            var it = $('source');
            if(it && it.length >0){
                return it.attr('src');
            }
        });  

    }

    const data ={
      video,
      doubanId,
      cover: result.cover
    }

    browser.close();
    process.send(data);
    process.exit(0);
    
})();