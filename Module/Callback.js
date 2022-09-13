const student=[{name:"abhi",job:"Majur"},{name:"Dhyan",job:"kacharavalo"}]

function enroll(students,callback){
    setTimeout(()=>{
        student.push(students);
        console.log("List is updated");
        callback();
    },2000);
}

function getStudent(){
    setTimeout(()=>{
        let str="";
        student.forEach((student)=>{
            str = `${student.name}`
            console.log(str);
        })
    },3000)
}

const newStudent={name:"Abhishek",job:"Vahivat"}
enroll(newStudent,getStudent);