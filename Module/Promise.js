const student=[{name:"abhi",job:"Majur"},{name:"Dhyan",job:"kacharavalo"}]

function enroll(students){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            student.push(students);
            console.log("List is updated");
            const error=false;
            if(!error){
                resolve();
            }
            else{
                reject();
            }
        },3000);
    }) 
}

function getStudent(){
    setTimeout(()=>{
        let str="";
        student.forEach((student)=>{
            str = `${student.name}`
            console.log(str);
        })
    },1000)
}

const newStudent={name:"Abhishek",job:"Vahivat"}
enroll(newStudent).then(()=>{
    getStudent();
}).catch(()=>{console.log("Error occured")})