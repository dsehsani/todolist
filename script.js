const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const filterTask = document.getElementById("filterTask");
const filterTasks = document.getElementById('filterTasks');

function addTask()
{
    if (inputBox.value === '')
    {
        alert("Please Enter an Item");
    }
    else
    {
        // creating scope variable li which is a li element in html
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = '';

    saveData();
}

listContainer.addEventListener("click", function(e)
{ 
    if (e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        
        // removing the task after 1 second
        setTimeout(() => {
            e.target.remove();
            saveData();
        }, 1000);

        // saving the data after removing the task
        saveData();
    }
    
    // removing the task after clicking the span region (X) 
    else if (e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();




