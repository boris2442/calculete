const buttons=document.querySelectorAll(".btn");
const result=document.getElementById("result");
console.log(result)
buttons.forEach(button=>{
    button.addEventListener("click", (e)=>{
    console.log(e.target.id);
    result.textContent+=e.target.id
    })
})

const egal=document.getElementById("egal");


egal.addEventListener("click", ()=>{
  result.textContent=eval(result.textContent)
})
document.querySelector("#ac").addEventListener("click", ()=>{
    result.textContent=null; 
})
