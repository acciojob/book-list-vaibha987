//your JS code here. If required.
let form=document.querySelector(".form-group")
form.addEventListener('submit', function(e) {
e.preventDefault();	
let titl=document.getElementById("title").value
let autho=document.getElementById("author").value
let isb=document.getElementById("isbn").value

// Create a new row and cells for the new book
  const row = document.createElement('tr');
  const titleCell = document.createElement('td');
  const authorCell = document.createElement('td');
  const isbnCell = document.createElement('td');	

 titleCell.textContent = titl;
  authorCell.textContent = autho;
  isbnCell.textContent = isb;

  // Append the cells to the row
  row.appendChild(titleCell);
  row.appendChild(authorCell);
  row.appendChild(isbnCell);

  const bookList = document.querySelector('#book-list');
  bookList.appendChild(row);

  // Clear the input fields
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#isbn').value = '';
});	
