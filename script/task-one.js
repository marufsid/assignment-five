document.getElementById("btn-one").addEventListener("click", function (event) {
  event.preventDefault();
  alert("Board updated Successfully");
  const totalNumber = getInnerTextById("total-number");
  const taskNumber = getInnerTextById("task-number");

  if (taskNumber < 1) {
    alert("bhai aida kono kotha positive number hoite hobe");
    return;
  }

  const sum = totalNumber + 1;
  setInnerTextByIDandValue("total-number", sum);

  const subtract = taskNumber - 1;
  setInnerTextByIDandValue("task-number", subtract);

  const container = document.getElementById("task-complete");

  const div = document.createElement("div");
  div.classList.add("bg-slate-100", "rounded-xl", "p-2");
  div.innerHTML = `
        <p class="">You have completed the task Fix Mobile Button issue at 1:26;53 AM</p>
        `;
  container.appendChild(div);
});
