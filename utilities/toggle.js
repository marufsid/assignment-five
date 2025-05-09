document.getElementById("clear-history").addEventListener("click", function() {
    handleToggle("task-complete", "none")
})

function handleToggle(id, status) {
    document.getElementById(id).style.display = status;
}