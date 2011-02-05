memorize.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e){ memorize.showFirefoxContextMenu(e); }, false);
};

memorize.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  document.getElementById("context-memorize").hidden = gContextMenu.onImage;
};

window.addEventListener("load", function () { memorize.onFirefoxLoad(); }, false);
