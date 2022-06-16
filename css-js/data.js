function getInitialMenus() {
  return [
    {
      name: "France food",
      type: "Croissant",
      weight: 100,
    },
    {
      name: "Georgian food",
      type: "Khachapuri",
      weight: 250,
    },
    {
      name: "Turkish food",
      type: "Kofte",
      weight: 300,
    },
  ];
}
function saveMenus(menus) {
  localStorage.setItem("menus_data", JSON.stringify(menus));
}
function getSavedMenus() {
  let menus = localStorage.getItem("menus_data");
  if (menus != null) {
    menus = JSON.parse(menus);
  }
  return menus;
}
function getMenus() {
  let menus = getSavedMenus();
  if (menus == null) {
    menus = getInitialMenus();
    saveMenus(menus);
  }
  return menus;
}
