function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalBtnClose = document.querySelectorAll(".close");




// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  //mainModal.style.display = "block";
}

//close modal event
modalBtnClose.forEach((btn) => btn.addEventListener("click",closeModal));

function closeModal(){
  modalbg.style.display = "none";
  
}

//close modal

const confirmModal = document.querySelector(".btnClose");
confirmModal.addEventListener("click",function(){
  
  modalbg.style.display ="none";
 
});


//*********validation des champs formulaire*******/



 //***************VALIDATION PRENOM********/

 const validPrenom = function(inputPrenom){
  //REGEX POUR PRENOM
  
  let myRegex =/^[a-zA-Z-\s]{3,}$/;
  let testPrenom = myRegex.test(inputPrenom.value);
  let errorPrenom = document.querySelector("#errorPrenom");

  if(testPrenom){
  errorPrenom.innerHTML="";
  
  }else{
  errorPrenom.innerHTML="prénom non valide";
  errorPrenom.style.color="red";
  }
  return testPrenom;
  }
//******************VALIDATION DU NOM**********/

  const validNom = function(inputNom){
  //REGEX POUR PRENOM
  let myRegex =/^[a-zA-Z-\s]{3,}$/;
  let testNom = myRegex.test(inputNom.value);
  let errorNom = document.querySelector("#errorNom");
  
  if(testNom){
  errorNom.innerHTML="";
      
    
  }else{
  errorNom.innerHTML="prenom non valide";
  errorNom.style.color="red";
  }
  return testNom;
  }


//**********VALIDATION EMAIL*************/
const validEmail = function(inputEmail){
  //REGEX POUR EMAIL
 
  let myRegexEmail =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  let testEmail = myRegexEmail.test(inputEmail.value);
  let errorEmail = document.querySelector("#errorEmail");



  if(testEmail){
  errorEmail.innerHTML="";
  
  }else{
  errorEmail.innerHTML="email non valide";
  errorEmail.style.color="red";
  }
  return testEmail;
};

//******************VALIDATION DE LA DATE**********/
const validDate = function(inputDate){
  //REGEX POUR DATE
  let myRegexDate=/^(19[0-9][0-9]|2[0-1][0-9][0-9])\-(0[1-9]|1[0-2])\-(0[1-9]|[1-2][0-9]|3[0-1])$/;
  let testDate = myRegexDate.test(inputDate.value);
  let errorDate = document.querySelector("#errorDate");

  if(testDate){
  errorDate.innerHTML="";
    
  
  }else{
  errorDate.innerHTML="date non valide";
  errorDate.style.color="red";
  }
  return testDate;

  }


  //***************VALIDATION DU NOMBRE DE PARTICIPATIONS********/
  const validNombre = function(inputNombre){ 
  //REGEX POUR PRENOM
  let myRegexNombre = /^[0-9][0-9]?$/;
  let testNombre = myRegexNombre.test(inputNombre.value);
  let errorNombre = document.querySelector("#errorNombre");

  if(testNombre){
  errorNombre.innerHTML="";
   
  }else{
  errorNombre.innerHTML=" non valide";
  errorNombre.style.color="red";
  }
  return testNombre;
  }

  //***************VALIDATION INPUT RADIO********/
  const validInputRadio = function(){


  let inputsRadio = document.querySelectorAll(".checkbox-input");
  let errorChecked = document.querySelector("#errorChecked");
  let radioValid = false;
      
  for ( i = 0; i <inputsRadio.length; i++) {
  if (inputsRadio[i].checked) {
  errorChecked.innerHTML="ok";
  errorChecked.style.color="green"
  radioValid = true;
  }
       
  }
  return radioValid;
  }
     
  //***************VALIDATION INPUTS CHECKBOX********/
  const validCheckBox = function(){


  let inputCheckBox1= document.querySelector("#checkbox1");
      
  let errorChecked = document.querySelector("#errorCheckBox");
      
  if(!inputCheckBox1.checked){
      
  errorChecked.innerHTML="cochez la case";
  errorChecked.style.color="red";
  }
  
  return inputCheckBox1.checked;
  }


    
let form = document.querySelector("#loginform");

//ECOUTER LE MODIFICATION Du PRENOM
form.first.addEventListener("change",function(){

  validPrenom(this);
});

//ECOUTER LA MODIFICATION DU NOM
form.last.addEventListener("change",function(){

  validNom(this);
});

//ECOUTER LA VALIDATION DE L EMAIL
form.email.addEventListener("change",function(){
  validEmail(this);
});

//ECOUTER LA VALIDATION DE LA DATE
form.birthdate.addEventListener("change",function(){
  validDate(this);
});

//ECOUTER LA VALIDATION DU NOMBRE DE PARTICIPATION
form.quantity.addEventListener("change",function(){
  validNombre(this);
});
document.querySelector(".btn-submit").addEventListener("click",function(e){
    
  e.preventDefault();
  // const nonValid = document.querySelectorAll(".non-valid")
  const formValid = document.getElementById("loginform");
  const msgValid = document.querySelector(".msgValidation");
  const confirmModal = document.getElementById("confirmModal");
  const mainModal = document.getElementById("mainModal")
  const button = document.querySelector(".btnClose")

  if(validPrenom(form.first)&& validNom(form.last)&& validEmail(form.email) &&
  validDate(form.birthdate) && validNombre(form.quantity)&&
  validCheckBox()&& validInputRadio()){

  formValid.style.display ="none";
  mainModal.style.display = "none";
  confirmModal.style.display ="block";
  msgValid.style.display ="block";
  button.style.display ="block";
         

  }
      
  });








 

 