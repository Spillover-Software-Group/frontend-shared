// Loaded before every test file (see the `test.setupFiles` entry in vite.config.js).
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Testing Library only unmounts by itself when it can see a global afterEach at
// import time, so tear the DOM down explicitly and keep tests isolated.
afterEach(() => {
  cleanup();
});
