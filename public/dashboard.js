// Function to toggle the dropdown menu
function toggleMenu() {
    const menu = document.getElementById("dropdown-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }
  
  // Function to open the overlay
  function openOverlay() {
    document.getElementById("overlay").style.display = "flex";
  }
  
  // Function to close the overlay
  function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
  }
  
  // Function to add a project to the projects list
  function addProject() {
    const name = document.getElementById("project-name").value;
    const notes = document.getElementById("project-notes").value;
  
    if (name && notes) {
      const projectList = document.getElementById("projects-list");
      const projectItem = document.createElement("div");
      projectItem.classList.add("project-item");
      projectItem.innerHTML = `<strong>${name}</strong><p>${notes}</p>`;
      projectList.appendChild(projectItem);
  
      // Clear inputs and close overlay
      document.getElementById("project-name").value = "";
      document.getElementById("project-notes").value = "";
      closeOverlay();
    } else {
      alert("Please fill in all fields.");
    }
  }

  // Function to toggle the dropdown menu
function toggleMenu() {
    const menu = document.getElementById("dropdown-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }
  
  // Function to open the overlay
  function openOverlay() {
    document.getElementById("overlay").style.display = "flex";
  }
  
  // Function to close the overlay
  function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
  }
  
  // Function to add a project to the projects list
  function addProject() {
    const name = document.getElementById("project-name").value;
    const notes = document.getElementById("project-notes").value;
  
    if (name && notes) {
      const projectList = document.getElementById("projects-list");
      const projectItem = document.createElement("div");
      projectItem.classList.add("project-item");
      projectItem.innerHTML = `<strong>${name}</strong>`;
      projectItem.addEventListener("click", () => openProjectPage(name));
      projectList.appendChild(projectItem);
  
      // Clear inputs and close overlay
      document.getElementById("project-name").value = "";
      document.getElementById("project-notes").value = "";
      closeOverlay();
    } else {
      alert("Please fill in all fields.");
    }
  }
  
  // Function to open the project page
  function openProjectPage(name) {
    localStorage.setItem("projectName", name);
    window.location.href = "projectpage.html";
  }
  
  // Function to load the project data in project.html
  function loadProjectPage() {
    const projectName = localStorage.getItem("projectName");
    if (projectName) {
      document.getElementById("project-title").textContent = projectName;
    }
  }
  
  // Example function to add a task to the sidebar
  function addTaskToSidebar(taskName) {
    const taskList = document.getElementById("tasks-list");
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `<input type="checkbox" /> ${taskName}`;
    taskList.appendChild(taskItem);
  }
  
  // Load the project data when project.html is loaded
  if (window.location.pathname.includes("projectpage.html")) {
    loadProjectPage();
  }
  
  document.addEventListener('DOMContentLoaded', async () => {
    try {
      const response = await fetch('/api/users/login'); // Atualize com a rota correta para obter o usuário atual
      const user = await response.json();
      document.querySelector('#profile-info').textContent = user.name;
    } catch (error) {
      console.error('Erro ao carregar usuário:', error);
    }
  });

  document.querySelector('#create-project-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.querySelector('#project-name').value;
    const description = document.querySelector('#project-description').value;
  
    try {
      const response = await fetch('/api/projects/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: 'USER_ID_HERE', name, description }), // Substitua 'USER_ID_HERE' dinamicamente
      });
      const data = await response.json();
      if (data.success) {
        alert('Projeto criado com sucesso!');
        loadProjects(); // Recarregar os projetos após criação
      } else {
        alert('Erro ao criar projeto');
      }
    } catch (error) {
      console.error('Erro ao criar projeto:', error);
    }
  });
  