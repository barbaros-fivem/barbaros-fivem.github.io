function barbaros_ui_sidebar_active(id) {
    document.addEventListener("DOMContentLoaded", function(){
        document.getElementById("sidebar-" + id).classList.add('active');
    });
}

document.addEventListener("DOMContentLoaded", function(){
    if (halfmoon.readCookie("barbarosui_theme")) {
        if (halfmoon.readCookie("barbarosui_theme") == "light-mode") {
            halfmoon.toggleDarkMode();
          return;
        }
        else if (halfmoon.readCookie("barbarosui_theme") == "dark-mode") {
            return;
        }
    }
});

