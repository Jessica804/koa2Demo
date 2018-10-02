module.exports = `
doctype html
html
 head
  meta(charset="utf-8")
  meta(name="viewport" content="device-width,initial-scale=1")
  title Koa Server HTML
  link(href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet")
  script(src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/core.js")
  script(src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.1.0/js/bootstrap.bundle.js")  
 body
  .container
    .row
     .col-md-8
       h1 Hi #{you} 
       p  This  is #{me}
     .col-md-4
       p 动态的pug页面   
 `;
 
 