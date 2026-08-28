# AGENTS.md

Shared React component library (`@spillover/frontend-shared`), consumed as a git dependency by
`accounts/src/frontend`, `engage/src/front_end_v6` and `senalysis/src/app`. `dist/` is committed:
a change reaches consumers only after `npm run build`, a commit of `dist/`, and a lockfile bump in
each consumer. About two dozen components are also forked byte-identically into
`engage/src/front_end_v6/src/components/ui/`; a fix there is applied in both places.

## Scripts

- `npm start` runs Storybook on :1234.
- `npm run build` builds `dist/`.
- Every JS package in the monorepo verifies with the same two scripts, `npm run check` (read-only
  Biome, `--error-on-warnings`) and `npm test` (Vitest, single run); `npm run fix` is the writing
  variant and is never used to verify. This package gets `check` and `test` with its first test, and
  its Biome config is renamed to `biome.jsonc` at the same time, the filename the rest of the
  monorepo uses.

## Testing

Vitest + jsdom (pinned exactly at the one version every frontend package in the monorepo runs) +
Testing Library, tests under `test/` mirroring `src/`. This is the **only** place shared components
are tested: a component gets its test here, and the engage fork mirrors the test alongside the
component. A component with no test here is not forked further. Stories under `src/**/*.stories.*`
are visual documentation, not tests.

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
