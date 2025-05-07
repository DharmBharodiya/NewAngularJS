function getTodos(){
    let xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

//method, URL to get data from, true if async.

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        let data = JSON.parse(xhr.responseText);

        document.getElementById("container").innerText = `Title: ${data.title} \n Completed: ${data.completed}`
    }else{
        document.getElementById("container").innerText = `Error: Cannot fetch data. ${xhr.status}`
    }
};

xhr.send()
}