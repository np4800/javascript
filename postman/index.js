console.log('---POSTMAN---');
//Utility function to get the element from the DOM string
function getElementFromString(string) {
  let div = document.createElement('div');
  div.innerHTML = string;
  return div.firstElementChild;
}

let addParamElement = 0;
// Hide the parameter box when the sceen is loaded
let parametersBox = document.getElementById('parameterBox');
parametersBox.style.display = 'none';

//if the user select the paramsRadio button then show the parameter text box
let paramsRadio = document.getElementById('paramRadio');
paramsRadio.addEventListener('click', ()=>{
  document.getElementById('requestJsonBox').style.display = 'none';
  document.getElementById('parameterBox').style.display = 'block';
});

// if the user select the jasonRadio button then disable the parameter text box
let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', ()=>{
  document.getElementById('parameterBox').style.display = 'none'
  document.getElementById('requestJsonBox').style.display = 'block';
});

//If the user clicks on the + button the parameters should create more such parameter in the list
let addParam = document.getElementById('addParam');
addParam.addEventListener('click', ()=> {
  let params = document.getElementById('params');
  let string = `<div class="form-row my-2">
    <label for="url" class="col-sm-2 col-form-label">Parameters</label>
    <div class="col-md-4">
      <input type="text" class="form-control" id="parameterKey${addParamElement+2}" placeholder="Parameter Key ${addParamElement+2}">
    </div>
    <div class="col-md-4">
      <input type="text" class="form-control" id="parameterValue${addParamElement+2}" placeholder="Parameter Value ${addParamElement+2}">
    </div>
    <button class="btn btn-primary deleteParam">-</button>
  </div>`;

  // convert the element string to DOM node
  let paramElement = getElementFromString(string);
  params.appendChild(paramElement);

  // Add an envent listener to remove the parameter from the list
  let deleteParam = document.getElementsByClassName('deleteParam');
  for (item of deleteParam) {
    item.addEventListener('click', (e)=>{
      e.target.parentElement.remove();
    })
  }
  addParamElement++;
})

let submit = document.getElementById('submit');
submit.addEventListener('click',()=>{
  // Show Please wait in the response box to request patience from the user
  document.getElementById('responseJsonText').value = "Please wait ... Fetching the response ... ";

  // Fetch all the values that user has requested
  let url = document.getElementById('urlField').value;
  let requestType = document.querySelector("input[name='requestType']:checked").value;
  let contentType = document.querySelector("input[name='contentType']:checked").value;


  // If user has used params option instead of json, collect all the parameters in an object
  if (contentType == 'params') {
    data = {};
    for (i=0; i<addParamElement+1; i++) {
      if (document.getElementById('parameterKey'+(i+1)) != undefined ) {
        let key = document.getElementById('parameterKey' + (i+1)).value;
        let value = document.getElementById('parameterValue' + (i+1)).value;
        data[key] = value;
      }
    }
    data = JSON.stringify(data);
  } else {
    data = document.getElementById('requestJsonText').value;
  }
  console.log('URL: ',url);
  console.log('RequestType: ', requestType);
  console.log('contentType: ', contentType);
  console.log('data:  ', data);
})
