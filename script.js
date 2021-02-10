(function () {
  const insertName = document.querySelector("#inputName");
  const addBtn = document.querySelector("#addBtn");
  const clearAllBtn = document.querySelector("#clearAllBtn");
  const taskList = document.querySelector("#taskList");
  const feedback = document.querySelector(".feedback");

  let isSaved = true;
  addBtn.addEventListener("click", function () {
    if (insertName.value != "") {
      feedback.style.display = "none";

      const taskContainer = document.createElement("div");
      taskContainer.className = "task-container";
      taskList.appendChild(taskContainer);

      const task = document.createElement("div");
      task.className = "task";
      taskContainer.appendChild(task);

      const saveBtn = document.createElement("span");
      saveBtn.className = "save btn";
      saveBtn.id = "saveBtn";
      saveBtn.innerHTML = "Save";
      taskContainer.appendChild(saveBtn);
      saveBtn.addEventListener("click", function () {
        if (taskName.readOnly === false) {
          taskName.readOnly = true;
          saveBtn.style.display = "none";
          isSaved = true;
        }
      });

      const taskName = document.createElement("input");
      taskName.id = "taskName";
      taskName.className = "taskName";
      taskName.value = insertName.value;
      taskName.readOnly = true;
      task.appendChild(taskName);

      const icons = document.createElement("div");
      icons.className = "icons";
      task.appendChild(icons);

      const taskDone = document.createElement("span");
      taskDone.id = "taskDone";
      taskDone.className = "taskBtn";
      taskDone.innerHTML = "&#10004";
      icons.appendChild(taskDone);
      let lineTrough = false;
      taskDone.addEventListener("click", function () {
        if (isSaved) {
          if (lineTrough === false) {
            taskName.style.textDecoration = "line-through";
            taskDone.innerHTML = "&#8634;";
            lineTrough = true;
          } else {
            taskName.style.textDecoration = "none";
            taskDone.innerHTML = "&#10004";
            lineTrough = false;
          }
        }
      });

      const taskEdit = document.createElement("span");
      taskEdit.id = "taskEdit";
      taskEdit.className = "taskBtn";
      taskEdit.innerHTML = "&#9998";
      icons.appendChild(taskEdit);
      taskEdit.addEventListener("click", function () {
        if (taskName.readOnly === true) {
          taskName.readOnly = false;
          saveBtn.style.display = "inline-block";
          isSaved = false;
        }
      });

      const taskRemove = document.createElement("span");
      taskRemove.id = "taskRemove";
      taskRemove.className = "taskBtn";
      taskRemove.innerHTML = "&#10008";
      icons.appendChild(taskRemove);
      taskRemove.addEventListener("click", function () {
        if (isSaved) task.remove();
      });

      insertName.value = "";
    } else {
      feedback.style.display = "flex";
    }
  });

  clearAllBtn.addEventListener("click", function () {
    const taskContainer = document.querySelectorAll(".task-container");
    taskContainer.forEach(function (container) {
      container.remove();
    });
  });
})();
