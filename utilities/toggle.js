document.getElementById("clear-history").addEventListener("click", function(event) {
    event.preventDefault();
    handleToggle("task-complete", "none")
})

function handleToggle(id, status) {
    document.getElementById(id).style.display = status;
}