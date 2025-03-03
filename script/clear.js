document.getElementById("clear").addEventListener("click", function(){
    const task = document.getElementById("task");
    const newTask = parseInt(task.textContent);
    if( newTask > 0) {
        document.getElementById("clear-text").style.display = "none";
    }
    else{
        document.getElementById("clear-text").style.display = "block";
    }
});