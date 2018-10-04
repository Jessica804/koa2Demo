const qiniu = require('qiniu');
const nanaoid = require('nanoid');
const config = require('../config');
 const bucket = config.qiniu.bucket;
 const mac = new qiniu.auth.digest.Mac(config.qiniu.AK,config.qiniu.SK);

 const cfg = new qiniu.conf.Config();
 const client = new qiniu.rs.BucketManager(mac,cfg);




 const uploadToQiniu = async (url,key) =>{
         return new Promise ((resolve,reject) => {
             client.fetch(url,bucket,key,(err,ret,info)=>{
                if(err){
                    reject(err)
                }else{
                    if(info.statusCode === 200){
                        resolve({key});
                    }else{
                        reject (info);
                    }
                }
             })
         })
 }

 ;(async () =>{
    let movies = [{
        video: 'http://vt1.doubanio.com/201712282244/a97c1e7cd9025478b43ebc222bab892e/view/movie/M/302190491.mp4',
        doubanId: '26739551',
        poster: 'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2506258944.jpg',
        cover: 'https://img1.doubanio.com/img/trailer/medium/2493603388.jpg?'
      }]
    movies.map(async movie => {
        if(movie.video && !movie.key){
            try{
              let videoData = await uploadToQiniu(movie.video,nanaoid()+'.mp4');
              let coverData = await uploadToQiniu(movie.cover,nanaoid()+'.png');
              let posteroData = await uploadToQiniu(movie.poster,nanaoid()+'.png');

              if(videoData.key){
                movie.videoKey = videoData.key;
            }

            if(coverData.key){
                movie.coverKey = coverData.key;
            }

            if(posteroData.key){
                movie.posterKey = posteroData.key;
            }

            console.log(movie);
            }catch(err){
               console.log(err)
            }


           
        }
    })
 })()
