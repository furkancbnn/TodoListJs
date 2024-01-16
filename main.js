let addToDoButton = document.getElementById("addTodo");
let clearToDoButton = document.getElementById("clearTodo");
let toDoContainer = document.getElementById("toDoContainer");

let inputText = document.getElementById("inputText");

addToDoButton.addEventListener("click", function () {
   // bir paregraf oluştur
   let paragraph = document.createElement("p");
   addToDoButton.style.cursor = "pointer";
   paragraph.style.cursor = "pointer";

   // Bu paragrafı ana container a aktar
   toDoContainer.appendChild(paragraph);

   // Bu değişkenin, input value değerine eriş
   paragraph.innerHTML = inputText.value;

   // inputu sıfırla
   inputText.value = "";
   console.log(paragraph);

   paragraph.addEventListener("click", function () {
      // paragraph ı stillendir
      paragraph.style.textDecoration = "line-through";
      paragraph.style.color = "red";
   });

   // paragrafa iki tıklanıldığında ortadan kaldır
   paragraph.addEventListener("dblclick", function () {
      toDoContainer.removeChild(paragraph);
   });

   // clearTodo ya tıklanıldığında ortadan kaldır
   clearToDoButton.addEventListener("click", function () {
      clearToDoButton.style.cursor = "pointer";

      // ? todoContainer daki paragraph değişkenini oatadan kaldır
      toDoContainer.removeChild(paragraph);
   });
});
