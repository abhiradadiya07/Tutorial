const {readFile,writeFile} = require('fs')
readFile('./Module/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    console.log(first)
    console.log(result)
    readFile('./Module/second.txt','utf8',(err,result)=>
    {
        if(err)
        {
            console.log(err)
            return
        }
        const second=result
        console.log(second)
        console.log(result)
        writeFile('./Module/new.txt',`Here is the result : ${first},${second}`,(err,result)=>
        {
            if (err)
            {
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})