chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.from === "content" && msg.subject === "showPageAction") {
    chrome.pageAction?.show(sender.tab.id);
  }
  if (msg === "get-ai") {
    // fetch(`https://api.openai.com/v1/completions`, {
    //   body: JSON.stringify({
    //     model: "text-davinci-003",
    //     prompt: "What is love?",
    //     temperature: 0,
    //     max_tokens: 7,
    //   }),
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //     Authorization:
    //       "Bearer ",
    //   },
    // })
    //   .then((res) => {
    //     if (res.ok) return res.json();
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
    // (async () => {
    //   const payload = await new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve(2);
    //     }, 100);
    //   });
    //   sendResponse({ payload });
    // })();
    // return true;
    // chrome.runtime.sendMessage(
    //   {
    //     data: "Hello popup, how are you",
    //   },
    //   function (response) {
    //     console.dir(response);
    //   }
    // );
  }
});
