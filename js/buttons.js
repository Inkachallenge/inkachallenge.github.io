

//menu hamburguesa
  // Función global para el menú
  function toggleMenu() {
    const menu = document.getElementById("mobileMenuContent");
    if (menu) {
      menu.classList.toggle("hidden");
      console.log("Menu state:", menu.classList.contains("hidden") ? "hidden" : "visible");
    }
  }



function openModalFromKey(buttonId, contentId) {
  const modalContent = document.getElementById(contentId);  
  const buttonText = document.getElementById(buttonId)?.innerText || "Información";

  if (modalContent) {
    const modalWrapper = document.getElementById("modal");
    const modalBody = document.getElementById("modalContent");
    const modalTitle = document.getElementById("modalTitle");

    modalTitle.innerText = buttonText;
    modalBody.innerHTML = modalContent.innerHTML;
    modalWrapper.classList.remove("hidden");
    modalBody.scrollTop = 0;
    
  }
}
// 1. Función para cerrar el modal
function closeModal() {
  const modal = document.getElementById("modal");
  if (!modal) return;
  
  modal.classList.add("hidden");
  console.log("Modal cerrado");
}

// 2. Configurarlos métodos de cierre
function setupModal() {
  const modal = document.getElementById("modal");
  if (!modal) return;

  // --- Cierre con la X ---
  const closeButtons = document.querySelectorAll(".close-modal");
  closeButtons.forEach(btn => {
    btn.addEventListener("click", closeModal);
  });


  // --- Cierre con ESC ---
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
}

// 3. Inicialización
document.addEventListener("DOMContentLoaded", setupModal); // Para páginas estáticas
// setupModal(); // Para contenido dinámico