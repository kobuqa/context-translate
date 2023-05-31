chrome.runtime.sendMessage({
  from: "content",
  subject: "showPageAction",
});

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.from === "popup" && msg.subject === "DOMInfo") {
    const selection = window.getSelection().toString();
    if (selection) {
      response(selection);
    }
  }
});
