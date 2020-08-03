console.log('Notes App');
showNotes();
//if the user adds the note it should loaded in the localstorage

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function(e){
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(notes);
  }
  noteObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(noteObj));
  addTxt.value="";
  console.log(noteObj);
  showNotes();
});

//Function to show notes
function showNotes() {
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    noteObj = [];
  }else {
    noteObj = JSON.parse(notes);
  }
  let html="";
  noteObj.forEach(function(element,index){
    html += `
    <div class="notecard my-2 mx-2  card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Note ${index}</h5>
        <p class="card-text">${element}</p>
        <button id="${index}" onClick="deleteNote(this.id)" class="btn btn-primary">Delete Note</a=button>
      </div>
    </div>
    `
  });

  let noteElem = document.getElementById('notes');
  if (noteObj.length != 0) {
    noteElem.innerHTML = html;
  } else {
    noteElem.innerHTML= `<h4>Hey! Don't wanna write something !! </h4>`;
  }
}

//fucntion to delete the notes
function deleteNote(index) {
  console.log('Deleting ',index);
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    noteObj = [];
  }else {
    noteObj = JSON.parse(notes);
  }
  noteObj.splice(index,1);
  localStorage.setItem("notes", JSON.stringify(noteObj));
  showNotes();
}

//function to search the notes
let search = document.getElementById("searchTxt");
search.addEventListener("input", function(){
  let inputVal = search.value.toLowerCase();
  console.log('Listening ', inputVal);
  let noteCards = document.getElementsByClassName('notecard');
  Array.from(noteCards).forEach(function(element){
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
    console.log(cardTxt);
  })
})
