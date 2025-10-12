// --- Improved Oracle Cloud ARM Instance Creator Script ---

console.log("--- Starting Improved Script ---");

// 1. SESSION KEEPER: Open a new tab to keep the session active.
// This tab will reload periodically to prevent timeouts.
const sessionTab = window.open("https://cloud.oracle.com/");
console.log("Session-keeper tab opened. It will reload in the background.");

// Function to keep the session-keeper tab reloading.
const sessionReloader = setInterval(() => {
    if (sessionTab &&!sessionTab.closed) {
        sessionTab.location.reload();
        console.log("Session-keeper tab reloaded to prevent timeout.");
    } else {
        console.error("Session-keeper tab was closed. Please restart the script.");
        clearInterval(sessionReloader);
        clearTimeout(mainLoop);
    }
}, 60000); // Reloads every 60 seconds.

// 2. MAIN CLICKER LOGIC: An adaptive loop to find and click the "Create" button.
const tryToClick = async () => {
    // Always find the most current version of the button.
    const createButton = document.querySelector('button[aria-label="Create"]');

    if (createButton &&!createButton.disabled) {
        // If the button is found and is clickable:
        console.log("!!! Button FOUND. Clicking now!");
        createButton.click();
        
        // After clicking, wait a bit longer for the API response and page reset.
        // This reduces the chance of seeing "button not found" immediately after a click.
        mainLoop = setTimeout(tryToClick, 15000); // Wait 15 seconds after a click attempt.

    } else {
        // If the button is NOT found or is disabled:
        console.log("Button not found or disabled. Page is likely busy after a click attempt. Checking again soon...");
        
        // Check again more quickly, because the button might reappear any second.
        mainLoop = setTimeout(tryToClick, 5000); // Wait only 5 seconds and retry.
    }
};

// 3. START THE SCRIPT
let mainLoop = setTimeout(tryToClick, 1000); // Start the first attempt after 1 second.

console.log("Script is running. It will now adaptively try to click the 'Create' button.");
console.log("To stop this script, type 'clearInterval(sessionReloader); clearTimeout(mainLoop);' into the console and press Enter.");