const applicationsList = document.querySelectorAll(".limit-buttons");
applicationsList.forEach(function (button) {
  button.addEventListener('click', displayLimitInterface);
});

function handleButtonClick(event) {
  const clickedButton = event.target;
  const websiteName = clickedButton.id;
  return websiteName;
}


//TODO:Create a class for this limitInterface
//Clean up variable Names
function displayLimitInterface(event) {
  const websiteName = handleButtonClick(event);
  modalElement = document.createElement("div");
  modalElement.id = "modal-element";
  modalElement.style.display = "block";
  modalElement.style.position = "fixed";
  modalElement.style.zIndex = "1";
  modalElement.style.left = "0";
  modalElement.style.top = "0";
  modalElement.style.width = "100%";
  modalElement.style.height = "100%";
  modalElement.style.overflow = "auto";
  modalElement.style.backgroundColor = "rgb(0,0,0)";
  modalElement.style.backgroundColor = "rgba(0,0,0,0.4)";

  modalContentDiv = document.createElement("div");
  modalContentDiv.style.backgroundColor = "#fefefe";
  modalContentDiv.style.margin = "15% auto";
  modalContentDiv.style.padding = "20px";
  modalContentDiv.style.paddingTop = "0px";
  modalContentDiv.style.width = "28%";
  modalContentDiv.style.height = "22%";

  websiteNameDiv = document.createElement("div");
  websiteNameDiv.style.display = "flex";
  websiteNameDiv.style.justifyContent = "center";
  websiteNameDiv.style.alignItems = "center";
  websiteNameText = document.createElement("p");
  websiteNameText.textContent = websiteName;
  closeButton = document.createElement("button");
  closeButton.textContent = "X";
  closeButton.onclick = function () {
    const modal = document.getElementById("modal-element");
    modal.remove();
  };
  websiteNameDiv.appendChild(websiteNameText);
  websiteNameDiv.appendChild(closeButton);

  dailyTimeLimitDiv = document.createElement("div");
  dailyTimeLimitDiv.style.display = "flex";
  dailyTimeLimitDiv.style.justifyContent = "center";
  dailyTimeLimitDiv.style.alignItems = "center";
  dailyTimeLimitMessage = document.createElement("p");
  dailyTimeLimitMessage.textContent = "Prescribed Daily Limit: ";
  dailyTimeLimitDiv.appendChild(dailyTimeLimitMessage);

  userInputDiv = document.createElement("div");
  userInputDiv.style.display = "flex";
  userInputDiv.style.justifyContent = "center";
  userInputDiv.style.alignItems = "center";
  timeLimitInput = document.createElement("input");
  timeLimitInput.id = "time-limit-input";
  timeMessage = document.createElement("p");
  timeMessage.style.display = "inline-block";
  timeMessage.textContent = "min";
  userInputDiv.appendChild(timeLimitInput);
  userInputDiv.appendChild(timeMessage);

  doneButtonDiv = document.createElement("div");
  doneButtonDiv.style.display = "flex";
  doneButtonDiv.style.justifyContent = "center";
  doneButtonDiv.style.alignItems = "center";
  doneButton = document.createElement("button");
  doneButton.onclick = function () {
    const userTimeLimit = document.getElementById("time-limit-input").value;
    printToConsole(userTimeLimit);
  }
  doneButton.textContent = "Set Limit";
  doneButtonDiv.appendChild(doneButton);

  modalContentDiv.appendChild(websiteNameDiv);
  modalContentDiv.appendChild(dailyTimeLimitDiv);
  modalContentDiv.appendChild(userInputDiv);
  modalContentDiv.appendChild(doneButtonDiv);

  modalElement.appendChild(modalContentDiv);

  document.body.appendChild(modalElement);

}

function printToConsole(something) {
  console.log(something);
}