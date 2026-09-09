# AGENTS.md

Shared React component library (`@spillover/frontend-shared`), consumed as a git dependency by
`accounts/src/frontend`, `engage/src/front_end_v6` and `senalysis/src/app`. `dist/` is committed:
a change reaches consumers only after `npm run build`, a commit of `dist/`, and a lockfile bump in
each consumer.

`src/ui/` bar its `index.js`, plus `src/utils.jsx`, is forked into
`engage/src/front_end_v6/src/components/ui/` (`utils.jsx` sits at the top of `src/` here and inside
`components/ui/` there). The copy is meant to be byte-for-byte, so `diff` between the two
directories is the entire drift check, and a fix to a shared component is made here and copied
across rather than written twice. Only two kinds of difference are expected in that diff: the
import specifier for `utils`, which has a different path on each side, and a component engage has
deliberately diverged. Anything else is drift.

## Scripts

- `npm start` runs Storybook on :1234.
- `npm run build` builds `dist/`.
- Every JS package in the monorepo verifies with the same two scripts, `npm run check` (read-only
  Biome, `--error-on-warnings`) and `npm test` (Vitest, single run); `npm run fix` is the writing
  variant and is never used to verify. Biome is configured in `biome.jsonc`, the filename the rest
  of the monorepo uses, and `check` skips `dist/` because that is committed build output rather
  than source. `check` also runs knip, which is why it can fail with nothing wrong in any file.

## Linting

The rule set is the platform's, with three things specific to this package.

**The size ceilings come from this package's own distribution, not from an application's.** A
component library is small by construction; the numbers in `biome.jsonc` sit a step above the
longest function, longest file and highest complexity that exist here, and the comment beside them
records what was measured. Re-measure before raising one.

**No rule that rewrites a forked file is enabled.** Sorting imports and sorting Tailwind classes
would both reorder the upstream half of a fork pair and put it out of step with engage, where
nobody is diffing. Engage switches the same rules off for its copy and says so. They come back on
in both repos in one coordinated change or in neither, so do not turn one on here alone, and do not
"fix" a finding in `src/ui/` that only engage's config is currently hiding.

**Before reaching for a suppression, check the rule's options.** Every `useUniqueElementIds`
finding in this package was a React Aria collection key rather than a DOM id, and the rule has an
`excludedComponents` option that says so precisely. Naming the components cleared 52 findings
without editing a byte, where a baseline would have hidden them and a fix would have broken the
fork.

`tsconfig.json` exists so Biome can resolve the `@/` aliases; it is the only place Biome reads them
from, and it mirrors `vite.config.js`. No TypeScript is introduced: `allowJs` on, `checkJs` off.
Add an alias to both files or to neither.

## Testing

Vitest + jsdom (pinned exactly at the one version every frontend package in the monorepo runs) +
Testing Library, tests under `test/` mirroring `src/`. This is the **only** place shared components
are tested: a component gets its test here, and the engage fork mirrors the test alongside the
component. A component with no test here is not forked further. Stories under `src/**/*.stories.*`
are visual documentation, not tests.

**A test of a forked component is written to be copied, not adapted.** It imports the component as
`@/components/ui/<Name>`, the path that component has in engage, which `vite.config.js` aliases back
onto `src/ui` here. Everything else it touches has to exist on both sides too: third-party packages
both `package.json` files carry, and the test setup file, never a helper that only lives in one
repo. A test that needs an edit to cross the boundary stops being the same test.

The test document has to stand in for the consumer's host page. Both host pages carry
`<div id="sfs-portal">`, and `Popover` renders its content into it and nothing at all without it, so
`test/setup.js` creates that element.

**What a test may fake.** Mock only at real boundaries: the network (`fetch`, Apollo through
`MockedProvider` with the real query documents), `@/config`, timers and the clock, `window.location`,
and third-party SDKs and UI libraries. Never `vi.mock` a module under `src/components/**`,
`src/hooks/**`, `src/store/**` or a sibling of the file under test. Render the real component tree;
if a page cannot be tested without stubbing its children, test the children and the page's wiring
through the real tree. One shared render helper provides router, Apollo/query client, auth and store
wrappers; no per-file `renderWith*` and no per-file inline fakes of shared components or hooks.

**What a test asserts.** What the user sees or what left the app: rendered text and roles, the
outbound request payload, persisted state. `toHaveBeenCalledWith` is allowed only when the mocked
collaborator is the boundary under test (the HTTP layer, a third-party SDK), never on a hook or
component of this app. Not assertions on their own: `expect(getBy...()).toBeDefined()`, bare
`not.toThrow()`, `toBeInTheDocument()` on a stub's `data-testid`, "renders without crashing".

**Query by role, label or text.** `getByTestId`, `container.querySelector` and class selectors
(`.fa-*`, Tailwind) only when no accessible handle exists, with a one-line comment saying why.
Never assert Tailwind or icon class names; assert the state the class stands for (disabled,
checked, `aria-busy`, visible text). Prefer `userEvent` over `fireEvent`.

**One behavior per test.** A test name that needs "and" or a comma is two tests.

**No sleeps, no wall clock.** No `setTimeout` in tests: `findBy*`/`waitFor` for async,
`vi.useFakeTimers()` + `advanceTimersByTime` for debounces and `Date`. Code that fires and forgets
must return a promise the test can `await`.

**Suites run silent.** Any `console.error`/`console.warn`, `act()` warning or jsdom "not
implemented" message on a run is a failure to fix at the source. `vi.spyOn(console, "error")` is
allowed only in a test that asserts the logged message.

**Coverage follows risk, not the coverage number.** A file with a single "renders ..." test adds
nothing; either assert a behavior (props to visible outcome, interaction to effect) or do not add
the file. Auth, permissions, money and routing gates come before another render test.
