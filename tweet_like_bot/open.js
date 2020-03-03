/*
reference: https://www.npmjs.com/package/open
*/

let open = require("opn");

// specify the app to open in
// open("https://google.com", { app: "google chrome" });

// incognito mode
// open("https://google.com", { app: "google chorme --incognito" });

// Open the brower of twitter
open("https://twitter.com", { app: ["google chrome", "--incognito"] });
