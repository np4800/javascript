console.log('---LIBRARY APPLICATION---');

// Prototype way of declaring the class and functions
function Book(bname,bauthor,btype) {
  this.name = bname;
  this.author = bauthor;
  this.type = btype;
}

//Display contructor
function Display() {

}

//Add methods to display prototype

//Add method to add the content to UI after clicking the submit button
Display.prototype.add = function(book) {
  console.log('Adding to UI');
  let tablebody = document.getElementById('tablebody');
  let uiString = `<tr>
                  <th scope="row">1</th>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                  </tr>`
  tablebody.innerHTML += uiString;

}

// Add method to clear the content of form after clicking the submit button
Display.prototype.clear = function() {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

// Function ot validate the field
Display.prototype.validate = function(book) {
  if (book.name.length < 2 || book.author.lenght < 2) {
    return false;
  } else {
    return true;
  }
}



// Function to show the type of message after action (success,error)
Display.prototype.show = function(type,displayMsg) {
  let message = document.getElementById('message');
  message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                          <strong>Message:</strong> ${displayMsg}
                          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>`;

                        //function to clear the message bar after sometime
                        setTimeout(function(){
                          message.innerHTML = ''
                        },2000);
}


//Add method to listen the events from the submit button
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit',libraryFormSubmit);

function libraryFormSubmit(e) {
  e.preventDefault();
  let name = document.getElementById('bookname').value;
  let author = document.getElementById('author').value;
  let type

  let fiction = document.getElementById('fiction');
  let programming = document.getElementById('programming');
  let cooking = document.getElementById('cooking');

  if (fiction.checked) {
    type = fiction.value;
  }
  else if (programming.checked) {
    type = programming.value;
  }
  else if (cooking.checked) {
    type = cooking.value;
  }

  console.log('Application is listening')
  book = new Book(name,author,type);
  console.log(book);

  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show('success',"Book has been added to the list");
  } else {
    display.show('danger',"You have not entered anything");
  }


}
