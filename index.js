const applicationsList = document.querySelectorAll(".limit-buttons");
applicationsList.forEach(function (button) {
  button.addEventListener('click', displayLimitInterface);
});

function handleButtonClick(event) {
  const clickedButton = event.target;
  const websiteName = clickedButton.id;
  return websiteName;
}

function displayLimitInterface(event) {
  const websiteName = handleButtonClick(event);
  modalElement = document.createElement("div");
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
  modalContentDiv.style.width = "80%";

  dailyTimeLimitDiv = document.createElement("div");

  dailyTimeLimitMessage = document.createElement("p");
  dailyTimeLimitMessage.textContent = "Set Daily Time Limit for " + websiteName;


  dailyTimeLimitDiv.appendChild(dailyTimeLimitMessage);

  modalContentDiv.appendChild(dailyTimeLimitDiv);
  modalElement.appendChild(modalContentDiv);

  document.body.appendChild(modalElement);

}