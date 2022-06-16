let editType = "";
let text = "";
document.addEventListener("DOMContentLoaded", (event) => {
  let list = document.getElementById("list");
  menus = getMenus();
  for (const menu of menus) {
    let rowText = document.createElement("ion-item");
    rowText.innerHTML = `<ion-label>${menu.name}</ion-label>
        <ion-button class="edit" color="primary" size="medium" rowid="${menu.name}">
            <ion-icon name="create"></ion-icon>
        </ion-button>
        <ion-button class="delete" color="danger" size="medium" rowid="${menu.name}">
            <ion-icon name="trash"></ion-icon>
        </ion-button>`;
    list.appendChild(rowText);
  }

  document.querySelector("#main").style.display = "";
  document.querySelector("#edit").style.display = "none";

  document.querySelectorAll(".edit").forEach((element) => {
    element.addEventListener("click", ({ target }) => {
      editType = "edit";
      text = target.getAttribute("rowid");
      let menu = menus.find((m) => m.name === text);

      document.getElementById("name").value = menu.name;
      document.getElementById("type").value = menu.type;
      document.getElementById("weight").value = menu.weight;

      document.querySelector("#main").style.display = "none";
      document.querySelector("#edit").style.display = "";
    });
  });

  document.querySelectorAll(".delete").forEach((element) => {
    element.addEventListener("click", ({ target }) => {
      text = target.getAttribute("rowid");
      saveMenus(menus.filter((m) => m.name != text));
      location.reload();
    });
  });

  document.querySelector("#save")?.addEventListener("click", () => {
    if (editType == "add") {
      menus.push({
        name: document.getElementById("name").value,
        type: document.getElementById("type").value,
        weight: document.getElementById("weight").value,
      });
    } else {
      let menu = menus.find((g) => g.name == text);
      menu.name = document.getElementById("name").value;
      menu.type = document.getElementById("type").value;
      menu.weight = document.getElementById("weight").value;
    }
    saveMenus(menus);
    location.reload();
  });

  document.querySelector("#add").addEventListener("click", () => {
    document.querySelector("#main").style.display = "none";
    document.querySelector("#edit").style.display = "";
    document.getElementById("name").value = "";
    document.getElementById("weight").value = "";
    editType = "add";
  });
});
