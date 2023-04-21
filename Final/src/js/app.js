/**
 * WEB222 – Final Assessment
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       <Ka Yun William Yeung>
 *      Student ID: <181724212>
 *      Date:       <SUBMISSION_DATE>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const {info} = window;

// For debugging, display all of our data in the console
console.log({info}, "Personal Data");

//create profile card
window.addEventListener("load", createCard);

function createCard() {
  var picArea = document.getElementById("pic");
  
  //Create areas for card
  var container = document.createElement("div");
  container.classList.add("card");

  //Add profile pic
  var profilePic= document.createElement("img");
  profilePic.src = info[0].imageUrl;
  profilePic.classList.add("profile-pic");
  container.appendChild(profilePic);

  //Add name
  var nickname = document.createElement("h1");
  nickname.classList.add("nickname");
  nickname.textContent = info[0].nickname;
  container.appendChild(nickname);

  //Add title
  var title = document.createElement("p");
  title.classList.add("title");
  title.textContent = info[0].title;
  container.appendChild(title);

//   //Add email  
//   var icon = document.createElement("div");
//   icon.classList.add("icon");

//   var emailArea = document.createElement("a");
//   emailArea.href="mailto:kyeung28@myseneca.ca";
//   emailArea.classList.add("a-icon");
//   var email = document.createElement("i");
//   email.classList.add("fa", "fa-envelope");
//   emailArea.appendChild(email);
//   icon.appendChild(emailArea);

//   //Add linkedIn
// //   var linkedInArea = document.createElement("a");
// //   linkedInArea.href="mailto:kyeung28@myseneca.ca";
// //   linkedInArea.classList.add("a-icon");
// //   var linkedIn = document.createElement("i");
// //   linkedIn.classList.add("fa", "fa-linkedin");
// //   linkedInArea.appendChild(linkedIn);
// //   icon.appendChild(linkedInArea);

//   container.appendChild(icon);

  picArea .appendChild(container);

}

//Add button for CV download and contact me
window.addEventListener("load", createButton);

function createButton() {
    var cvAndEmail = document.getElementById("links");
    var cvArea = document.createElement("a");
    cvArea.classList.add("a-cvArea");
    cvArea.href= info[0].attachment;
    cvArea.setAttribute("download", info[0].attachment);

    var cvButton = document.createElement("button");
    cvButton.innerHTML = "Resume";
    cvButton.classList.add("resumeDL","downloadArea");
    cvArea.appendChild(cvButton);

    cvAndEmail.appendChild(cvArea);

    var emailArea = document.createElement("a");
    emailArea .classList.add("a-cvArea");
    emailArea.href= "mailto:kyeung28@myseneca.ca";

    var emailButton = document.createElement("button");
    emailButton.innerHTML = "Contact Me";
    emailButton.classList.add("sendEmail", "downloadArea");
    emailArea.appendChild(emailButton);

    cvAndEmail.appendChild(emailArea);

}
  
//Create About Me

window.addEventListener("load", createMe);

function createMe() {
  var intro = document.getElementById("background");
  
  //Create areas for About Me
  var aboutMe = document.createElement("div");
  aboutMe.classList.add("grid");

  //Add header
  var topic= document.createElement("div");
  var topicText= document.createElement("h2");
  topic.classList.add("aboutMe1");
  topicText.textContent = "About Me - Software Developer - To Be";
  topic.appendChild(topicText);
  aboutMe.appendChild(topic);

  //Add content
  var des = document.createElement("p");
  des.classList.add("aboutMe2");
  des.textContent = info[0].aboutme;
  aboutMe.appendChild(des);

  var academicTopic= document.createElement("div");
  var academic = document.createElement("h2");
  academicTopic.classList.add("aboutMe3");
  academic.textContent = "Academic Honesty";
  academicTopic.appendChild(academic);
  aboutMe.appendChild(academicTopic);

  var honesty = document.createElement("p");
  honesty.classList.add("aboutMe4");
  honesty.textContent = info[0].honesty;
  aboutMe.appendChild(honesty);

  var date = document.createElement("p");
  date.classList.add("aboutMe5");
  date.textContent = info[0].currentDate;
  aboutMe.appendChild(date);

   intro.appendChild(aboutMe);

  //Create areas for personal data table
  
  var baseInfo = document.createElement("div");
  baseInfo.classList.add("aboutMe6");
  var i;
  
  //table body related variables
  var infoTable = document.createElement("table");
  var tableBody = document.createElement("tbody");
  infoTable.classList.add("table-about");
  //tableBody.classList.add("table-about");
  infoTable.appendChild(tableBody);
  var tableRow;

  //Add title
  tableRow = document.createElement("tr");
  var title = document.createElement("h2");
  title.textContent = "Basic Information";
  tableRow.appendChild(title);
  tableBody.appendChild(tableRow);

  //Add full name
    tableRow = document.createElement("tr");
    var nameCell = document.createElement("td");
    nameCell.textContent = "Name:";
    var desCell = document.createElement("td");
    desCell.textContent = info[0].fullname;
    tableRow.appendChild(nameCell);
    tableRow.appendChild(desCell);
    tableBody.appendChild(tableRow);

    //add language
    tableRow = document.createElement("tr");
    var nameCell = document.createElement("td");
    nameCell.textContent = "Language:";
    var desCell = document.createElement("td");
    desCell.textContent = info[0].language;
    tableRow.appendChild(nameCell);
    tableRow.appendChild(desCell);
    tableBody.appendChild(tableRow);

    //add contact
    tableRow = document.createElement("tr");
    var nameCell = document.createElement("td");
    nameCell.textContent = "Email:";
    var desCell = document.createElement("td");
    desCell.textContent = info[0].contact;
    tableRow.appendChild(nameCell);
    tableRow.appendChild(desCell);
    tableBody.appendChild(tableRow);

    //add course
    tableRow = document.createElement("tr");
    var nameCell = document.createElement("td");
    nameCell.textContent = "Course:";
    var desCell = document.createElement("td");
    desCell.textContent = info[0].course;
    tableRow.appendChild(nameCell);
    tableRow.appendChild(desCell);
    tableBody.appendChild(tableRow);

    //add section
    tableRow = document.createElement("tr");
    var nameCell = document.createElement("td");
    nameCell.textContent = "Section:";
    var desCell = document.createElement("td");
    desCell.textContent = info[0].section;
    tableRow.appendChild(nameCell);
    tableRow.appendChild(desCell);
    tableBody.appendChild(tableRow);

    //add instructor
    tableRow = document.createElement("tr");
    var nameCell = document.createElement("td");
    nameCell.textContent = "Instructor:";
    var desCell = document.createElement("td");
    desCell.textContent = info[0].instructor;
    tableRow.appendChild(nameCell);
    tableRow.appendChild(desCell);
    tableBody.appendChild(tableRow);

    intro.appendChild(infoTable);
}   

window.addEventListener("load", createAcademic);

function createAcademic() {
    var academic = document.getElementById("academic");
    var cat = "education";

    var list = window.info.filter(
        (data) => data.type == cat
      );

  list.forEach((data) => {

    var container = document.createElement("table");
    container.classList.add("table-academic");
    var tableBody = document.createElement("tbody");
    tableBody.classList.add("table-academic");
    container.appendChild(tableBody);
    var tableRow;

    tableRow = document.createElement("tr");
    var leftCell = document.createElement("td");
    leftCell.classList.add("credential-area");
    var combineContent = `<span class ="credential">${data.credential}</span><br><span class="period">${data.period}</span>`;

    leftCell.innerHTML = combineContent;
    var rightCell = document.createElement("td");
    rightCell.classList.add("program-area");
    combineContent = `<span class ="program">${data.program}</span><br><span class="institution">${data.institution}</span>`;
    rightCell.innerHTML = combineContent;
    tableRow.appendChild(leftCell);
    tableRow.appendChild(rightCell);
    tableBody.appendChild(tableRow);

    academic.appendChild(container);

  });

}

//Showing the hourly rate
var hiringRadio = document.querySelector('input[value="Hiring"]');
var hourlyRateInput = document.getElementById('hourly-rate-container');

hiringRadio.addEventListener('change', (event) => {
  if (event.target.checked) {
    hourlyRateInput.style.display = 'block';
  } else {
    hourlyRateInput.style.display = 'none';
  }
});

var commentRadio = document.querySelector('input[value="Comment"]');
var questionRadio = document.querySelector('input[value="Question"]');

commentRadio.addEventListener('change', (event) => {
    if (event.target.checked) {
      hourlyRateInput.style.display = 'none';
    } 
});

questionRadio.addEventListener('change', (event) => {
    if (event.target.checked) {
      hourlyRateInput.style.display = 'none';
    } 
});

//Validation
var contactForm = document.getElementById("contact-me");
var postalCodeInput = document.getElementById("postal-code");
var emailInput = document.getElementById("email");

contactForm.onsubmit = function(){

    
    if(validateEmail() && validatePostalCode()) {
        hideErrorMessage();
        return true;
    }
    
    if(!validateEmail()) {
        showErrorMessage('Please enter a valid email address.');
        return false;
    }

    if(!validatePostalCode()) {
        showErrorMessage('Please enter a valid Canadian postal code.');
        return false;
    }
}

function showErrorMessage(msg) {
    var errMessage = document.getElementById('#error-msg');
    
    errMessage.classList.remove('hidden');
    errMessage.innerHTML = msg;
}

function hideErrorMessage(msg) {
    var errMessage = document.getElementById('#error-msg');
    errMessage.classList.add('hidden');
}

function validatePostalCode(){
    var regex = /^[A-Za-z]\d[A-Za-z]\s?\d[A-Za-z]\d$/;
    var inputValue = postalCodeInput.value;

    if (regex.test(inputValue)) {
        return true;
      } else {
        return false;
      }
}

function validateEmail(){
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var inputValue = emailInput.value;

    if (regex.test(inputValue)) {
        return true;
      } else {
        return false;
      }
}
