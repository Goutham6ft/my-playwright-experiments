## My Execution Flow

1. First Create a test using playwright cogen.
2. Create functions.
3. Create fixtures.

## 🛠️ Playwright Functions

- Use **functions** to wrap common **locators and actions** — it improves **reusability** and **readability**
- Helps separate test logic from UI behavior
- Keeps test files clean and focused on flow, not low-level DOM operations
- https://www.youtube.com/watch?v=wXHiq9H3MB0&list=PLMZDRUOi3a8N067UNvkxXEThKlTII_OJ-


## 🧩 Playwright Custom Fixtures

- Fixtures can be used for:
  - **Function invocation**
  - **Configuration setup**
  - Common setup/teardown logic (like launching pages, cleaning sessions)
  - **Listening for JavaScript exceptions during test execution**
- Fixtures are executed per test unless scoped differently (like `worker` scope)
- They help reduce duplicate `page.goto()` or setup boilerplate in every test file

