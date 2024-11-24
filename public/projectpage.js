// Function to toggle the dropdown menu
function toggleMenu() {
    const menu = document.getElementById("dropdown-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }
  
  // Function to open the task overlay
  function openTaskOverlay() {
    document.getElementById("task-overlay").style.display = "flex";
  }
  
  // Function to close the task overlay
  function closeTaskOverlay() {
    document.getElementById("task-overlay").style.display = "none";
  }
  
  // Function to add a task to the sidebar
  function addTask() {
    const taskName = document.getElementById("task-name").value;
  
    if (taskName) {
      const taskList = document.getElementById("tasks-list");
      const taskItem = document.createElement("li");
      taskItem.innerHTML = `
        <input type="checkbox" />
        <span>${taskName}</span>
      `;
      taskList.appendChild(taskItem);
  
      // Clear input and close overlay
      document.getElementById("task-name").value = "";
      closeTaskOverlay();
    } else {
      alert("Please enter a task name.");
    }
  }
  
  // Load the project data in project.html
  function loadProjectPage() {
    const projectName = localStorage.getItem("projectName");
    if (projectName) {
      document.getElementById("project-title").textContent = projectName;
    }
  }
  
  // Run loadProjectPage if on project.html
  if (window.location.pathname.includes("project.html")) {
    loadProjectPage();
  }
  