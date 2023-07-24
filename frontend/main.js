window. addEventListener( ' DOMContentLoaded ' ,
getVisitCount())
const functionApi = ""
const getVisitCount = ()=>{
    let count = 30
    fetch(functionApi).then(response=>{
        return response.json()
    }).then(response=>{
        console.log("this website called the api function");
        count = response.count
        document.getElementById("counter").innerText = count
    }).catch(function(error){
        console.log(error);
    })

}