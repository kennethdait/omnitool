function sayHello() {
  SpreadsheetApp.getUi().alert("Hello, World!");
}

function onOpen(e) {
  const ui = SpreadsheetApp.getUi(),
    menu = ui.createMenu("omnitool");
  menu.addItem("Say Hello!", "sayHello");
  menu.addToUi();
}
