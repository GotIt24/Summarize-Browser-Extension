// Saves options to chrome.storage
const saveOptions = () => {
    const option = document.getElementById('option').value;
    const apiKey = document.getElementById('apikey').value;

    chrome.storage.sync.set(
      { favouriteOption: option, apikey: apiKey},
      () => {
        // Update status to let user know options were saved.
        const status = document.getElementById('statuskey');
        status.textContent = 'Options saved.';
        setTimeout(() => {
          status.textContent = '';
        }, 750);
      }
    );
};
  
// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
  const restoreOptions = () => {
    chrome.storage.sync.get(
      { favouriteOption: 'Entire Website', apikey: ""},
      (items) => {
        document.getElementById('option').value = items.favouriteOption
        document.getElementById('apikey').value = items.apikey
      }
    );
};
  
  document.addEventListener('DOMContentLoaded', restoreOptions);
  document.getElementById('save').addEventListener('click', saveOptions);


  // document.getElementById("buttonKey").addEventListener("click", () => {alert("hi")});
  chrome.storage.local.set({apikey: "ApiKey"}).then(() => {console.log("api key entered")})
  chrome.storage.local.get(["apikey"]).then((result) => {
      console.log("Result")
  })