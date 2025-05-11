document.getElementById("btn-one").addEventListener("click", function (event) {
  alert("Board updated Successfully");
  const totalNumber = getInnerTextById("total-number");
  const taskNumber = getInnerTextById("task-number");

  if (taskNumber === 1) {
    alert("congrats!!! You have completed all the current task");
  }

  const sum = totalNumber + 1;
  setInnerTextByIDandValue("total-number", sum);

  const subtract = taskNumber - 1;
  setInnerTextByIDandValue("task-number", subtract);

  const container = document.getElementById("task-complete");
  const timeString = getCurrentTimeString();

  const div = document.createElement("div");
  div.classList.add("bg-slate-100", "rounded-xl", "p-2");
  div.innerHTML = `
        <p class="">You have completed the task Fix Mobile Button Issue at ${timeString}</p>
        `;
  container.appendChild(div);
});

// button-two
document.getElementById("btn-two").addEventListener("click", function (event) {
  alert("Board updated Successfully");
  const totalNumber = getInnerTextById("total-number");
  const taskNumber = getInnerTextById("task-number");

  if (taskNumber === 1) {
    alert("congrats!!! You have completed all the current task");
  }

  const sum = totalNumber + 1;
  setInnerTextByIDandValue("total-number", sum);

  const subtract = taskNumber - 1;
  setInnerTextByIDandValue("task-number", subtract);

  const container = document.getElementById("task-complete");
  const timeString = getCurrentTimeString();

  const div = document.createElement("div");
  div.classList.add("bg-slate-100", "rounded-xl", "p-2");
  div.innerHTML = `
        <p class="">You have completed the task Add Dark Mode at ${timeString}</p>
        `;
  container.appendChild(div);
});

// button three
document
  .getElementById("btn-three")
  .addEventListener("click", function (event) {
    alert("Board updated Successfully");
    const totalNumber = getInnerTextById("total-number");
    const taskNumber = getInnerTextById("task-number");

    if (taskNumber === 1) {
      alert("congrats!!! You have completed all the current task");
    }

    const sum = totalNumber + 1;
    setInnerTextByIDandValue("total-number", sum);

    const subtract = taskNumber - 1;
    setInnerTextByIDandValue("task-number", subtract);

    const container = document.getElementById("task-complete");
    const timeString = getCurrentTimeString();

    const div = document.createElement("div");
    div.classList.add("bg-slate-100", "rounded-xl", "p-2");
    div.innerHTML = `
        <p class="">You have completed the task Optimize Home page at ${timeString}</p>
        `;
    container.appendChild(div);
  });

// button four
document.getElementById("btn-four").addEventListener("click", function (event) {
  alert("Board updated Successfully");
  const totalNumber = getInnerTextById("total-number");
  const taskNumber = getInnerTextById("task-number");

  if (taskNumber === 1) {
    alert("congrats!!! You have completed all the current task");
  }

  const sum = totalNumber + 1;
  setInnerTextByIDandValue("total-number", sum);

  const subtract = taskNumber - 1;
  setInnerTextByIDandValue("task-number", subtract);

  const container = document.getElementById("task-complete");
  const timeString = getCurrentTimeString();

  const div = document.createElement("div");
  div.classList.add("bg-slate-100", "rounded-xl", "p-2");
  div.innerHTML = `
        <p class="">You have completed the task Add new emoji 🤲 at ${timeString}</p>
        `;
  container.appendChild(div);
});

// button five
document.getElementById("btn-five").addEventListener("click", function (event) {
  alert("Board updated Successfully");
  const totalNumber = getInnerTextById("total-number");
  const taskNumber = getInnerTextById("task-number");

  if (taskNumber === 1) {
    alert("congrats!!! You have completed all the current task");
  }

  const sum = totalNumber + 1;
  setInnerTextByIDandValue("total-number", sum);

  const subtract = taskNumber - 1;
  setInnerTextByIDandValue("task-number", subtract);

  const container = document.getElementById("task-complete");
  const timeString = getCurrentTimeString();

  const div = document.createElement("div");
  div.classList.add("bg-slate-100", "rounded-xl", "p-2");
  div.innerHTML = `
        <p class="">You have completed the task Integrate OpenAI API at ${timeString}</p>
        `;
  container.appendChild(div);
});

// button six
document.getElementById("btn-six").addEventListener("click", function (event) {
  alert("Board updated Successfully");
  const totalNumber = getInnerTextById("total-number");
  const taskNumber = getInnerTextById("task-number");

  if (taskNumber === 1) {
    alert("congrats!!! You have completed all the current task");
  }

  const sum = totalNumber + 1;
  setInnerTextByIDandValue("total-number", sum);

  const subtract = taskNumber - 1;
  setInnerTextByIDandValue("task-number", subtract);

  const container = document.getElementById("task-complete");
  const timeString = getCurrentTimeString();

  const div = document.createElement("div");
  div.classList.add("bg-slate-100", "rounded-xl", "p-2");
  div.innerHTML = `
        <p class="">You have completed the task Improve Job searching at ${timeString}</p>
        `;
  container.appendChild(div);
});