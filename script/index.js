document.getElementById("complete-btn").addEventListener("click", function(event){
    alert("Board Updated successfully");
    event.preventDefault();
    const task = document.getElementById("task");
    const newTask = parseInt(task.textContent);
    if( newTask > 0) {
        const newTaskValue = newTask - 1;
        document.getElementById("task").innerHTML = newTaskValue;
    }
    else{
        alert("No more tasks to complete");
    }
})