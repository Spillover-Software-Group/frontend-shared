// Loaded before every test file (see the `test.setupFiles` entry in vite.config.js).
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Every consumer's host page carries this element (see the `index.html` of
// `accounts/src/frontend` and of `engage/src/front_end_v6`), and Popover portals
// its content into it. Without it a popover renders nothing at all, so the test
// document has to provide it the same way the host page does.
const portal = document.createElement("div");
portal.id = "sfs-portal";
document.body.append(portal);

// Testing Library only unmounts by itself when it can see a global afterEach at
// import time, so tear the DOM down explicitly and keep tests isolated.
afterEach(() => {
  cleanup();
});
