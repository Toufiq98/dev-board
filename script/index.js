document.getElementById("complete-btn").addEventListener("click", function(event){
    alert("Board Updated successfully");
    event.preventDefault();
    const task = document.getElementById("task").value;
    const newTask = parseInt(task);
    const newTaskValue = newTask - 1;
    document.getElementById("task").innerHTML = newTaskValue;

})