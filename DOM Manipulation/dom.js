// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelector()
// document.querySelectorAll()

//console.dir(document);  // document.ชื่อproperty

// EXAMINE THE DOCUMENT OBJECT
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.onclick);
// console.log(document.defaultView);
// console.log(document.body);
// console.log(document.head);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent = "TEST textContent";
// console.log(document.createElement);
// console.log(document.createTextNode);
// console.log(document.forms[0]);
// console.log(document.links);
//console.log(document.images);

// GET ELEMENT BY ID
// console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
//  console.log(headerTitle.textContent);
//  console.log(headerTitle.innerText);

//  headerTitle.innerHTML = '<h3>HELLO</h3>'
// header.style.borderBottom = 'solid 3px #000';

// GET ELEMENT BY CLASS NAME
// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello index 2';
// items[1].style.backgroundColor = 'green';

// for(let i = 0;i < items.length;++i) {
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// GET ELEMENT BY TAG NAME
// let li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "HELLO tag name";
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'blue';
// for(let i = 0;i < li.length;++i) {
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERY SELECTOR
// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// let input = document.querySelector('input');
// input.value = 'Hello input world';

// let submit = document.querySelector('input[type="submit"]');
// submit.value = 'Send';

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERY SELECTOR ALL
// let titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello selector all';

// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');

// for(let i = 0;i < odd.length;++i) {
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }

// TRAVERSING THE DOM
let itemList = document.querySelector('#items');
// parentNode property
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//  parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//  childNodes
//console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// //  Firstchild
// console.log(itemList.firstChild);

// //  firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'test firstElementChild';

//  lastchild
// console.log(itemList.lastChild);

//  lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'test firstElementChild';

// //  nextSibling
// console.log(itemList.nextSibling);

// // nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);

// // previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// // createElement

// // create a div
// let newDiv = document.createElement('div');

// // Add class
// newDiv.className = 'hello';

// // Add id
// newDiv.id = 'hello1';

// // Add attribute
// newDiv.setAttribute('title', 'Hello Div');

// // Create text node
// let newDivText = document.createTextNode('Hello World');

// // Add text to div
// newDiv.appendChild(newDivText);

// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);

// let button = document.getElementById('button').addEventListener('click', () => {
//     console.log(123);
// })

// EVENT

// let button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e) {
//     // //console.log('Button Clicked');
//     // document.getElementById('header-title').textContent = 'Changed';
//     // document.querySelector('#main').style.backgroundColor = '#f4f4f4';

//     // console.log(e);
//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);
//     // let output = document.getElementById('output');
//     // output.innerHTML = '<h3>'+ e.target.id +'</h3>';

//     // console.log(e.type);
//     //console.log('X: ', e.clientX, 'Y: ', e.clientY);

//     // console.log(e.offsetX);
//     // console.log(e.offsetY);
//     // console.log(e.altKey);
//     // console.log(e.ctrlKey);
//     // console.log(e.shiftKey);
// }

// mouse event
let button = document.getElementById('button');
let box = document.getElementById('box');

//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup', runEvent);

//box.addEventListener('mouseenter', runEvent);
//box.addEventListener('mouseleave', runEvent);

//box.addEventListener('mouseover', runEvent);
//box.addEventListener('mouout', runEvent);

//box.addEventListener('mousemove', runEvent);

// Keyboard event
let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');
let select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);

// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

//itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);

function runEvent(e) {
  e.preventDefault();
  //console.log('Event type: ' + e.type);
  //output.innerHTML = '<h3>mouse X: ' + e.offsetX + '</h3><h3>mouse Y:' + e.offsetY + '</h3>';

  //box.style.backgroundColor = "rgb(" + e.offsetX +","+ e.offsetY + ",40)";

  //console.log(e.target.value);
  document.getElementById('output').innerHTML =
    '<h3>' + e.target.value + '</h3>';
}
