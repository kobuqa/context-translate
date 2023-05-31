// Update the relevant fields with the new data.
const setDOMInfo = (info) => {
  if (info) document.getElementById("context").value = info;
};

window.addEventListener("DOMContentLoaded", () => {
  chrome.runtime.onMessage.addListener(function (
    message,
    sender,
    sendResponse
  ) {
    alert(sender);
    document
      .getElementById("submit")
      .addEventListener("click", () => sendResponse("get-ai"));
  });
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    (tabs) => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { from: "popup", subject: "DOMInfo" },
        setDOMInfo
      );
    }
  );
});
