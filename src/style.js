function changeTheme() {
  let body = document.querySelector("body");

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}

let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", changeTheme);

function getChecklist() {
  let firstName = prompt("What is your first name?");
  let email = prompt("And lastly, what is your email address?");
  alert(
    "A brochure has been sent to " +
      email +
      ". Wishing you the best of luck with your future furry best friend, " +
      firstName +
      "! 🐈"
  );

  let disclaimerNote = document.querySelector(".disclaimer-note");
  {
    disclaimerNote.innerHTML =
      "<br />👉 Please note this is a test page and therefore no email has been sent to " +
      email +
      ".";
  }
}

let checklistButton = document.querySelector(".checklist-button");
checklistButton.addEventListener("click", getChecklist);
