const title=document.getElementById("title")
const author=document.getElementById("author")
const isbn=document.getElementById("isbn")
const table=document.getElementById("book-list-body")
const button=document.getElementById("submit")
button.addEventListener('click',(event)=>{
event.preventDefault();
const row=document.createElement("tr")
const cell1=document.createElement("td")
const cell2=document.createElement("td")
const cell3=document.createElement("td")
cell1.innerText=title.value
cell2.innerText=author.value
cell3.innerText=isbn.value
row.appendChild(cell1)
row.appendChild(cell2)
row.appendChild(cell3)
table.appendChild(row)
})