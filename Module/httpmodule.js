const http=require('http');
const server=http.createServer((req,res)=>{
    // console.log(req)
    // res.write("Welcome")
    // res.end()
    if(req.url==='/'){
        res.end('Welcome to home page')
    }
    if(req.url==='/about'){
        res.end('Here is our short history')     
    }
    res.end(`<h1>Oops!</h1>
    <p>We cant seem to find page you are looking for</p>
    <a href="/">back home</a>`)
})

server.listen(5000) 