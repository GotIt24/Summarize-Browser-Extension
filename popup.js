function summarize(){
  // Get the HTML content of the current webpage
  const html = document.documentElement.outerHTML;

  // Set the API endpoint and API key for the AI API
  const apiEndpoint = 'APILINK'; // Enter your API Link
  const apiKey = 'APIKEY'; // Enter your API Key

    // Construct the request payload with the prompt to summarize the license agreement
    text = "Summarize the license agreement on this webpage" + html;
    const apiRequestJson = {
      messages: [{ role: "user", content: text }],
      stream: false,
    };

}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('buttonsummarize').addEventListener('click', summarize);
});

