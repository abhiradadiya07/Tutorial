const os=require('os')
//info acout current user
const user=os.userInfo()
console.log(user)
console.log(`Uptime is ${os.uptime()} sconds`)
const current = {
    name : os.type(),release : os.release(),totalMem : os.totalmem(),freeMem : os.freemem()
}
console.log(current)