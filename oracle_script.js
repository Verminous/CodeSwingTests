// This is the updated and corrected script.

// 1. Open a new tab to keep your session from expiring.
const sessionTab = window.open("https://cloud.oracle.com/");

console.log("Script started. A new tab has been opened to keep your session active.");
console.log("This script will now try to click the 'Create' button every 30 seconds.");
console.log("Leave this tab and the new tab open in the background.");

// 2. Start a timer that will try to click the "Create" button every 30 seconds.
const clicker = setInterval(() => {
    // Reload the new tab to keep the session active.
    if (sessionTab) {
        sessionTab.location.reload();
        console.log("Refreshed session tab.");
    }

    // Find the "Create" button on THIS page using its stable aria-label.
    const createButton = document.querySelector('button[aria-label="Create"]');

    // If the button is found, click it.
    if (createButton) {
        console.log("!!! Found the 'Create' button. Clicking now!");
        createButton.click();
    } else {
        // If not found, log it and the script will try again in 30 seconds.
        console.log("!!! 'Create' button not found. Trying again in 30 seconds...");
    }
}, 30000); // 30000 milliseconds = 30 seconds

// To stop this script later, type the following command into the console and press Enter:
// clearInterval(clicker);