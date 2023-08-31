let students = [
	["John Smith", "Task 02", "Option 1"],
    ["Emily Johnson", "Task 03", "Option 3"],
    ["David Thompson", "Task 04", "Option 2"],
    ["Sarah Davis", "Task 05", "Option 1"],
    ["Michael Wilson", "Task 06", "Option 3"],
    ["Jennifer Anderson", "Task 07", "Option 2"],
    ["Matthew Martinez", "Task 08", "Option 1"],
    ["Jessica Taylor", "Task 09", "Option 3"],
    ["Daniel Adams", "Task 10", "Option 2"],
    ["Sophia Brown", "Task 11", "Option 1"],
    ["William Lee", "Task 12", "Option 3"],
    ["Olivia Clark", "Task 13", "Option 2"],
    ["Joseph Wright", "Task 14", "Option 1"],
    ["Emma Rodriguez", "Task 15", "Option 3"],
    ["Andrew Green", "Task 16", "Option 2"],
    ["Ava Hall", "Task 17", "Option 1"],
  ];
  
  
  
  let arr = [];
  let ul = document.getElementById('show')
  
  const getStudents = function(){
    for(let i =0; i < students.length; i++){
        if(arr.indexOf(students[i][0]) == -1){ arr.push(students[i][0])}else console.log(`${i+1}- This Name was already added : ${students[i][0]}`);
    }
    render()
    return arr
}
const render = ()=>{
    ul.innerHTML = ""
    for(let i =0; i< arr.length; i++){
        ul.innerHTML += `<li>${arr[i]}</li> <span><button onClick="remove(${i})">Delete</button></span>`
    }
}
const remove = (i)=>{
arr.splice(i,1);
render()
}
