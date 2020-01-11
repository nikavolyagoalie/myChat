/* 

Нужно запрограммировать мессенджер. Как должна работать программа:

— Шаблон сообщения находится в теге template с идентификатором message-template.(++)

— В блоке сообщения (класс chat-message) должен быть текст сообщения, кнопка удаления и имя пользователя.(++)

— Новое сообщение добавляется в конец контейнера с классом chat-content.(++)

— Чтобы добавить новое сообщение, нужно ввести текст в поле ввода (элемент с классом chat-form-input) и нажать кнопку «Отправить» (отправляет данные из формы с классом chat-form).(++)
    
- Чтобы удалить сообщение, нужно кликнуть по кнопке с крестиком (элемент с классом chat-message-button). Эта кнопка появляется при наведении на сообщение.
*/
var chtCntnt = document.querySelector('.chat-content');
var form = document.querySelector('.chat-form');
var formInput = form.querySelector('.chat-form-input');
var items = chtCntnt.children;


var msgTemplate = document.querySelector('#message-template').content;
var chtMessage = msgTemplate.querySelector('.chat-message');
var msgName = chtMessage.querySelector('.chat-message-name');

form.addEventListener('submit', function(e){
  e.preventDefault();
  
  var text = formInput.value;
  var task = chtMessage.cloneNode(true);
  var taskDescription = task.querySelector('.chat-message-text');
  taskDescription.textContent = text;
  deleteMessage(task);
  
  chtCntnt.appendChild(task);
  formInput.value ='';
});

for (var i=0;i<items.length;i++){
  deleteMessage(items[i]);
}

var deleteMessage = function(item){
  var button = item.querySelector('.chat-message-button');
  button.addEventListener('click', function(){
    item.remove();
  });
}
