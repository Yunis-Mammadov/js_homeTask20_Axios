// let cards = document.querySelector("#cards");
// let editModal = document.querySelector("#editModal");
// let modalsEdit = document.querySelector("#modalsEdit");

// document.addEventListener("DOMContentLoaded", async () => {
//   let response = await fetch("https://northwind.vercel.app/api/categories");
//   let data = await response.json();

//   data.forEach((item) => {
//     cards.innerHTML += `
//     <div class="card w-20" style="width:50%">
//     <div class="card-body" style="display:flex;justify-content:space-between">
//     <h5 class="card-title">${item.name}</h5>
//     <div>
//     <a href="#" class="btn btn-warning edit">Edit</a>
//     <a href="#" class="btn btn-danger delete">Delete</a>
//     </div>
//   </div>
// </div>
//     `
// });
//   let deleteBtn = document.querySelectorAll(".delete");
//   deleteBtn.forEach((btn) => {
//     btn.onclick = function (e) {
//       let id = e.target.getAttribute("data-id");   
//         fetch(`https://northwind.vercel.app/api/categories/${id}`, {
//           method: "DELETE",
//         });
//         e.target.parentElement.parentElement.remove();
//     };
//   });
//   let editButtons = document.querySelectorAll(".edit");
//   editButtons.forEach((editBtn) => {
//     editBtn.addEventListener("click", (e) => {
//         let selectedID = e.target.getAttribute("data-id");
//         editModal.setAttribute("data-id",selectedID);
//         editModal.style.display = "block";
//     });
//     function closeModal() {
//         editModal.style.display = "none";
//       }
//       let closeButton = document.querySelector(".close");
//       closeButton.addEventListener("click", closeModal);
    

//     });
//     let modalEdit = document.querySelectorAll("#modalsEdit");
//     modalEdit.forEach((modalsEdit) => {
//       modalsEdit.addEventListener("click", (e) => {
//         let selectedID = e.target.getAttribute("data-id");
//         modalsEdit.setAttribute("data-id",selectedID);
//         console.log(selectedID);
//         modalsEdit.style.display = "block";
//         let editingName = e.target.previousElementSibling.previousElementSibling.textContent;
//         let editingDesc = e.target.parentElement.getAttribute("data-desc");
//         let descInp = document.querySelector("#descInp");
//         let nameInp = document.querySelector("#nameInp");
//         descInp.value = editingDesc;
//         nameInp.value = editingName;
//     });
  
// })
// })


// let cards = document.querySelector("#cards");
// let editModal = document.querySelector("#editModal");
// let modalsEdit = document.querySelector("#modalsEdit");

document.addEventListener("DOMContentLoaded", async () => {
  let response = await fetch("https://northwind.vercel.app/api/categories");
  let data = await response.json();

  data.forEach((item) => {
    cards.innerHTML += `
    <div class="card w-20" style="width:50%">
    <div class="card-body" style="display:flex;justify-content:space-between">
    <h5 class="card-title">${item.name}</h5>
    <div>
    <a href="#" class="btn btn-warning edit" data-id="${item.id}">Edit</a>
    <a href="#" class="btn btn-danger delete" data-id="${item.id}">Delete</a>
    </div>
  </div>
</div>
    `
  });

  let deleteBtn = document.querySelectorAll(".delete");
  deleteBtn.forEach((btn) => {
    btn.onclick = function (e) {
      let id = e.target.getAttribute("data-id");   
        fetch(`https://northwind.vercel.app/api/categories/${id}`, {
          method: "DELETE",
        });
        e.target.parentElement.parentElement.remove();
    };
  });

  let editButtons = document.querySelectorAll(".edit");
  editButtons.forEach((editBtn) => {
    editBtn.addEventListener("click", (e) => {
        let selectedID = e.target.getAttribute("data-id");
        editModal.setAttribute("data-id",selectedID);
        editModal.style.display = "block";
    });

    function closeModal() {
        editModal.style.display = "none";
    }
    let closeButton = document.querySelector(".close");
    closeButton.addEventListener("click", closeModal);
  });

  let modalEdit = document.querySelectorAll("#modalsEdit");
  modalEdit.forEach((modalsEdit) => {
    modalsEdit.addEventListener("click", (e) => {
      let selectedID = e.target.getAttribute("data-id");
      modalsEdit.setAttribute("data-id",selectedID);
      console.log(selectedID);
      modalsEdit.style.display = "block";
    });
    })
  });


