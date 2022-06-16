$("document").ready(function () {
  let searchParams = new URLSearchParams(window.location.search);
  let name = 0;
  if (searchParams.has("name")) {
    name = searchParams.get("name");
    const menus = getMenus();
    let menu = menus.find((m) => m.name == name);
    $("#name").val(menu.name);
    $("#type").val(menu.type);
    $("#weight").val(menu.weight);
  }

  $("#save").click(function () {
    const menus = getMenus();
    if (name === "") {
      menus.push({
        name: $("#name").val(),
        weight: $("#weight").val(),
        type: $("#type").val(),
      });
    } else {
      let menu = menus.find((m) => m.name == name);
      menu.name = $("#name").val();
      menu.weight = $("#weight").val();
      menu.type = $("#type").val();
    }
    saveMenus(menus);
    $(location).attr("href", "index.html");
  });
});
