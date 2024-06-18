// let main=document.getElementById("mainDiv")
// let input=document.getElementById("input")
// let btn=document.getElementById("addBtn")
// let ul=document.getElementById("ul")
 
//  console.log(ul)
 

// console.log(btn.innerText)


// btn.addEventListener("click",adding)
// let todoArray=[]
// function adding(){
//     let list=document.createElement("li")
//     let inpt=input.value
//     todoArray.push(inpt)
    
//     todoArray.map((e)=>{
    
//         list.innerText=e
//         ul.append(list)
//     })
    
//     console.log(todoArray)
    
    
// todoArray.map((e)=>{
    
//     list.innerText=e
//     ul.append(list)
// })
// input.value=""

// }
 
 


 
  


 


// fetch("https://fakestoreapi.com/products")

// .then(res=>res.json())
// .then((json)=>{
//     let data=json
//     console.log(json)
 
//     data.forEach(element => {
    

//     const cardcontent=`<div class="card1" > 
             
//     <div style="display: flex; flex-direction: row;" >
//         <div><img id="image" src=${element.image} alt="" width="100px" height="100px" ></div>
//     <div style="margin-left: 20px;" ><h1>${element.title}</h1><p id="profileName">${element.price}</p>
//     </div>
// </div>


//     <div><p  style="margin-left: 5px;">${element.description}</p></div>
    

// </div>
// `
 
 

//  main.innerHTML+=cardcontent
// return

 
// });

 



// })






    
//// PARAGRAPH GENERATOR
// let title=prompt("please write a title ")
// let para=prompt("please write a paragraph about title")
// let paraLenght=prompt("please write a number to generate a paragraphs")
// console.log(paraLenght)

// for(let i=1;i<=paraLenght;i++){

//     const cardcontent=`<div class="card1" > 
             
//          <div style="display: flex; flex-direction: row;padding-top:9px" >
//               <h1 style="font-size:20px;padding-right:10px;" >${i}</h1>
//              <div><img id="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw4UeEjjERyEVTOIaXIKHlj7snPZAKulH5-z1Kau1lsw&s" alt="" width="100px" height="100px" ></div>
//          <div style="margin-left: 20px;" ><h1>${title}</h1><p id="profileName">${para}</p>
//          </div>
//      </div>`

//      main.innerHTML+=cardcontent
 
// }



 

// function getData(data=2,promise){

//     setTimeout(()=>{
// console.log(data)
// if(promise){
//     promise()
// }


//     },2000)
// }

// getData(1,getData)


// call back
// function sum(a,b){
//     console.log(a+b)
// }

// function minus(a,b,sum){
//     console.log(a-b)
//     sum()
// }

// minus(5,3,()=>{
//     sum(5,3)
// })





// let name=prompt("what is your name")
// let name1=name
// console.log(name1)
// let lenght=name1.length
// alert(`@${name1}${lenght}`)
// console.log(`@${name1}${lenght}`) 




// let array=['A','B','C','D','E','F','G','H']
// let num=[100,200,300,400,500]
// console.log("before 10% off",num)
// let add=0
// for(let val in num){
//     let process=num[val]*10/100
//     // console.log(process)
//     num[val]=num[val]-process
    
// }
// console.log("After 10% off",num)

// console.log("Average Marks:",add/num.length)
 

// let arr=["bat","bowl",'hello',"ball"]
// arr.push("ball")
// console.log(arr)
// let deleted=arr.pop()
// console.log(deleted)
// console.log(arr.toString())
// console.log(arr)
// console.log(arr.splice(1,2))
// console.log(arr)

// let count=0
// function vowels(str){
// let name=str;
// for (let val of name){
//     if(val==="a"){
//         count+=1
//     }else if(val==="e"){
//         count+=1
//     }else if(val==="i"){
//         count+=1
//     }else if(val==="o"){
//         count+=1
//     }else if(val==="u"){
//         count+=1
//     }
// }
// }

// vowels("llll")
// console.log(count)


// let numbers=[2,3,100,4,5]
 
// let num=numbers.filter((val)=>{

//     if(val>3){
//         return val
//     }


// })
// console.log(num)

// let num=numbers.reduce((pre,cur)=>{
//    return pre>cur?pre:cur

// })

// console.log(num)
 

// reduce method of array

// let userPrompt=prompt("Please write a number")
// let array=[]

// for(let i=1;i<=userPrompt;i++){
//     array.push(i)
// }

// console.log(array)

// let sum=array.reduce((res,cur)=>{
//     return res+cur
// })

// let multiply=array.reduce((res,cur)=>{
//     return res*cur
// })

// console.log(userPrompt)
// console.log("sum of array",sum)
// console.log("multiplication of an array",multiply)

// finding factorial 
// let promtNum=prompt("please write a number for factorial")
// let num=promtNum
// let multiple=1
// while(num>=1){
//      multiple*=num
//      num--
     
//     }
    
//     console.log(multiple)



////////////////////////////////////////////    paper scissor game ////////////////////////////////////////////////////////////////////////

let para=document.querySelector(".msg")
let uScore=document.querySelector("#user-score")
let cScore=document.querySelector("#comp-score")
let draw=document.querySelector("#draw")
let userScore=0;
let comScore=0;
let drawMatch=0;



let choices=document.querySelectorAll(".choice")
console.log(choices)


 

// random computer generate
function comGenerate(){
 const options=["rock","paper","scissor"]
 let num=Math.floor(Math.random()*3)
   return options[num]
}
 
// draw game function
function drawGame(){
    drawMatch++
    draw.innerText=userScore
    console.log("game was draw")
    para.innerText="Game Draw"
    para.setAttribute("class","blue")
}
// show winner

function shoWinner(userWin){
if(userWin){
    userScore++
    uScore.innerText=userScore
    console.log("you win")
    para.innerText="You Win"
    para.setAttribute("class","green")
}else{
    comScore++
    cScore.innerText=comScore
    console.log("you lose")
    para.innerText="You lose"
    para.setAttribute("class","red")
    
}
}

function playGame(userChoice){
    console.log("user choice=>",userChoice)
    let comChoice=comGenerate()
    console.log("comp choice=>",comChoice) 
if(userChoice===comChoice){
    drawGame()
}else{
    let userWin=true;
    if(userChoice==="rock"){
        userWin= comChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
        userWin= comChoice==="scissor"?false:true;
    }else{
        // paper,rock
        userWin=comChoice==="rock"?false:true; 	

    }
    shoWinner(userWin)
}

}

choices.forEach((e)=>{
    e.addEventListener("click",()=>{
        const id=e.getAttribute("id")
       playGame(id)
    })

})



// class carDetails{
//     constructor(brand,mileage){
//         this.brand="honda"
//         this.mileage=3545
//     }
//     start(brand){
//         console.log("start working")
//         this.brand=brand
//     }
//     end(){
//         console.log("ending")
//     }
// }
// class about extends carDetails{
//     top(){
//         console.log("very beautiful")
//     }
// }

// let object=new about()
// console.log(object)
//  object.start("unique")
//  console.log(object)
//  let honda=new carDetails
// //  honda.start("honda")

// const func=()=>{return 10}
// console.log(func)