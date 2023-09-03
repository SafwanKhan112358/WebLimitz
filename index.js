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
  modalElement.style.backgroundColor = "rgba(0,0,0,0.9)";

  modalContentDiv = document.createElement("div");
  modalContentDiv.style.backgroundColor = "white";
  modalContentDiv.style.margin = "12% auto";
  modalContentDiv.style.padding = "15px";
  modalContentDiv.style.width = "24%";
  modalContentDiv.style.height = "40%";
  modalContentDiv.style.borderRadius = "10px";

  closeButtonDiv = document.createElement("div");
  closeButtonDiv.style.display = "flex";
  closeButtonDiv.style.flexDirection = "row";
  closeButtonDiv.style.justifyContent = "end";

  closeButton = document.createElement("button");
  closeButton.textContent = "X";
  closeButton.onclick = function () {
    const modal = document.getElementById("modal-element");
    modal.remove();
  }
  closeButtonDiv.appendChild(closeButton);

  websiteNameDiv = document.createElement("div");
  websiteNameDiv.style.display = "flex";
  websiteNameDiv.style.flexDirection = "row";
  websiteNameDiv.style.justifyContent = "center";
  websiteNameDiv.style.alignItems = "center";
  websiteNameDiv.textContent = websiteName;

  dailyTimeLimitDiv = document.createElement("div");
  dailyTimeLimitDiv.style.display = "flex";
  dailyTimeLimitDiv.style.justifyContent = "center";
  dailyTimeLimitDiv.style.alignItems = "center";
  dailyTimeLimitDiv.style.marginTop = "40px";
  dailyTimeLimitDiv.textContent = "Prescribed Daily Limit";

  userInputDiv = document.createElement("div");
  userInputDiv.style.display = "flex";
  userInputDiv.style.flexDirection = "row";
  userInputDiv.style.justifyContent = "center";
  userInputDiv.style.alignItems = "center";
  userInputDiv.style.marginTop = "30px";

  timeLimitInputDiv = document.createElement("div");
  timeLimitInputDiv.style.width = "150px";
  timeLimitInputDiv.style.display = "flex";
  timeLimitInputDiv.style.flexDirection = "row";
  timeLimitInputDiv.style.justifyContent = "end";
  timeLimitInputDiv.style.alignItems = "center";

  timeLimitInput = document.createElement("input");
  timeLimitInput.style.width = "35px";
  timeLimitInput.id = "time-limit-input";
  timeLimitInputDiv.appendChild(timeLimitInput);

  timeTextDiv = document.createElement("div");
  timeTextDiv.style.width = "100px";
  timeTextDiv.style.display = "flex";
  timeTextDiv.style.flexDirection = "row";
  timeTextDiv.style.marginLeft = "10px";

  timeTextElement = document.createElement("div");
  timeTextElement.textContent = "min";
  timeTextDiv.appendChild(timeTextElement);

  userInputDiv.appendChild(timeLimitInputDiv);
  userInputDiv.appendChild(timeTextDiv);

  doneButtonDiv = document.createElement("div");
  doneButtonDiv.style.display = "flex";
  doneButtonDiv.style.justifyContent = "center";
  doneButtonDiv.style.alignItems = "center";
  doneButtonDiv.style.marginTop = "30px";

  doneButton = document.createElement("button");
  doneButton.style.width = "100px";
  doneButton.onclick = function () {
    const userTimeLimit = document.getElementById("time-limit-input").value;
    printToConsole(userTimeLimit);
  }
  doneButton.textContent = "Set Limit";
  doneButtonDiv.appendChild(doneButton);

  modalContentDiv.appendChild(closeButtonDiv);
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