
let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

// Filter event
filter.addEventListener('keyup', filterItems);


// Add item
function addItem(e) {
    e.preventDefault();


    // Get input value
    let newItem = document.getElementById('item').value;

    // Create new li elemnt
    let li = document.createElement('li');

    // Add class
    li.className = 'list-group-item';
    //console.log(li);

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create Delete button element
    let deleteBtn = document.createElement('button');

    // Add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //  Append button to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);
}

function removeItem(e) {
    //console.log(1);
    if(e.target.classList.contains('delete')) {
        //console.log(1);
        if(confirm('Are you sure?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e) {
    //  Convert text to lowercase
    let text = e.target.value.toLowerCase();
    //console.log(text);
    
    //  Get list
    let items = itemList.getElementsByTagName('li');
    //console.log(items);

    // Convert a HTMLCollection to array
    Array.from(items).forEach((item) => {
        let itemName = item.firstChild.textContent;
        //console.log(itemName);
        if(itemName.toLocaleLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}

















