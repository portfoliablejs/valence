# Contributing to Valence

Thank you for your interest in contributing to Valence! As an open-source project, we welcome contributions from the community to help us build a robust, accessible, and powerful design system.

Whether you're fixing a bug, proposing a new feature, or improving documentation, your help is valuable.

## How to Contribute

We use a standard GitHub-based workflow. If you're new to open-source, here's a general overview of the process:

1.  **Find an Issue:** Look for open issues on our [GitHub repository](https://github.com/schimanko/valence). Issues labeled `good first issue` are a great place to start.
2.  **Fork the Repository:** Create your own copy of the project to work on.
3.  **Create a Branch:** Create a new branch for your changes, named descriptively (e.g., `feat/add-toast-component` or `fix/header-focus-bug`).
4.  **Develop Locally:** Make your changes. Be sure to run Storybook locally to test your components in isolation.
    ```bash
    npm install
    npm run storybook
    ```
5.  **Commit Your Changes:** Follow our commit message conventions (see below).
6.  **Submit a Pull Request (PR):** Push your branch to your fork and open a PR against the `main` branch of the Valence repository. Provide a clear description of the changes you've made.

## Development Guidelines

To ensure consistency and quality, please adhere to the following guidelines:

### Code Style

-   We follow standard JavaScript and CSS conventions, enforced by Prettier and ESLint (configuration to be added).
-   All components must be native Web Components with encapsulated styles (Shadow DOM).
-   Prioritize clarity and maintainability. Add comments for complex or non-obvious logic.

### Component Structure

-   Follow the **Atomic Design** principles established in the project.
-   Every new component must have its own directory within `src/stories/` under the appropriate category (atoms, molecules, organisms).
-   Each component directory must include:
    -   `Component.js`: The component class definition.
    -   `component.css`: The component's encapsulated styles.
    -   `Component.stories.js`: Storybook stories covering all variants and states.

### Accessibility

-   All contributions must meet **WCAG 2.1 AA** standards.
-   Interactive components must be fully keyboard-navigable.
-   Use semantic HTML and appropriate WAI-ARIA roles.
-   Test your changes with a screen reader (e.g., VoiceOver, NVDA) where applicable.

### Commit Messages

We use the [Conventional Commits](https://www.conventionalcommits.org/) specification. This helps us automate changelogs and makes the project history easy to read. Your commit messages should be structured as follows:

`<type>[optional scope]: <description>`

**Common types:**
-   `feat`: A new feature.
-   `fix`: A bug fix.
-   `docs`: Documentation only changes.
-   `style`: Changes that do not affect the meaning of the code.
-   `refactor`: A code change that neither fixes a bug nor adds a feature.
-   `chore`: Changes to the build process or auxiliary tools.

**Example:**
`feat(button): add new 'floating' variant`

## Connect

If you have questions, ideas, or just want to connect, you can find the project's founder here:

-   **GitHub:** [schimanko](https://github.com/schimanko)
-   **LinkedIn:** [Lio Schimanko](https://linkedin.com/in/lioschimanko)

We look forward to your contributions!