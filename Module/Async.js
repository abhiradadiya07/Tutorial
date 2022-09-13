const data=[{name:"Abhishek",Profession:"Eng"},{name:"Harshad",Profession:""}];
function getdata(){
    setTimeout(() =>{

        data.forEach((data,index)=>{
            console.log(data);
            console.log(data.Profession);
        })
    },5000);
}

function createdata(newdata){
    setTimeout(()=>{
        data.push(newdata);
        console.log("data.name")
    },3000 )

}

getdata();
const sh = [{name:"kenil",Profession:"Garib"},{name:"kenil",Profession:"Garib"},{name:"kenil",Profession:"Garib"},{name:"kenil",Profession:"Garib"}]
sh.map((item)=>{
    createdata(item);
})

