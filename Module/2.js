let i=0
let j=0
let s=""
for(i=0;i<7;i++){
    for(j=0;j<7;j++){
        if (((j == 1 || j == 5) && i != 0 && i != 6) || ((i == 0 || i == 6) && j > 1 && j < 5)){
            s = s +"*"
        }
        else{
            s = s + " "
        }
    }
    s=s+"\n"
}
console.log(s)