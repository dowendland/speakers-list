# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email or any other method with the owners of this repository before making a change.

## What do I need to know before I get started?

If you are looking to help with a code contribution, our project uses Scala, Play Framework and Vue.js. If you don't feel ready to make a code contribution yet, no problem. You can also check out the [documentation issues](https://github.com/CyberScouter/speakers-list/labels/documentation) that we have.

If you are interested in making a code contribution and would like to learn more about the technologies that we use, check out the links below.

- https://docs.scala-lang.org/getting-started/index.html
- https://www.playframework.com/getting-started
- https://vuejs.org/v2/guide/

## How can I contribute?

### Understand the basics

Not sure what a pull request is, or how to submit one? Take a look at GitHub's excellent [help documentation](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork) first.

### Submitting issues

1. Before creating a new issue, **perform a cursory search** to see if a similar issue has already been submitted. If it has **and the issue is still open**, add a comment to the existing issue instead of opening a new one.

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

2. When you are creating an issue, please **include as many details as possible**.
3. Explain the problem and include additional details to help maintainers reproduce the problem.
4. Include details about your configuration and environment.

### Pull requests

Please follow these steps to have your contribution considered by the maintainers:

1. Find an issue that you are interested in addressing or a feature that you would like to add.
2. Fork the repository to your GitHub account. This means that you will have a copy of the repository under `your-github-username/speakers-list`.
3. Clone your fork to a local folder using `git clone https://github.com/your-github-username/speakers-list.git`.
4. Create a new branch for your issue using `git checkout -b branch-name`.
5. Use `git add paths-to-changed-files` to add the file contents of the changed files to the "snapshot" git uses to manage the state of the project, also known as the index.
6. Use `git commit -m "Insert a short message of the changes made"` to store the contents of the index with a descriptive message.
7. Follow the [style guides](https://github.com/CyberScouter/speakers-list/blob/master/CONTRIBUTING.md#style-guides).
8. Increase the version numbers in any files to the new version that this pull request would represent. The versioning scheme this project uses is [SemVer](https://semver.org/).
9. Push the changes to the remote repository using `git push origin branch-name`.
10. Submit a pull request to the upstream repository. Do not squash or rebase commits when submitting a pull request. It makes it much harder to follow work and make incremental changes.
11. Title the pull request with a short description of the changes made and the issue or bug number associated with your change. For example, you can title an issue like so "Add more log output to resolve #4352".
12. In the description of the pull request, explain the changes that you made, reference any issues you think exist with the pull request you made, and any questions you have for the maintainers. If the pull request closes an issue, please reference its closing.
13. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing.
    <details><summary>What if the status checks are failing?</summary>If a status check is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will re-run the status check for you. If we conclude that the failure was a false positive, then we will open an issue to track that problem with our CI tools.</details>
14. Wait for the pull request to be reviewed by a maintainer.
15. Make changes to the pull request if the reviewing maintainer recommends them.
16. You may request one of the maintainers to merge the pull request for you.

## Committing responsibly

1. Provide and/or use tests to avoid committing bugs or broken builds.
2. Write clean code that meets style specifications.
3. Use descriptive commit messages that reference related discussion.
4. Make only one change per commit and avoid including unrelated changes.

## Style guides

### Create your branch from `master`

At any given time, the `master` branch represents the production-ready, up-to-date version currently under development. Therefore always create your branch to be submitted as a pull request from `master`.

### Use short branch names

Use concise, lower-case, dash (-) delimited names, such as `fix-warnings`, `fix-typo`, etc. This is important because branch names show up in the merge commits that result from accepting pull requests and should be as expressive and concise as possible.

#### Supporting branches

- Feature branches should be named `feature/*`
- Bugfix branches should be named `bugfix/*`
- Hotfix branches for fixing critical bugs should be named `hotfix/*`

### Run all tests prior to submission

See the [Getting started](https://github.com/CyberScouter/speakers-list#getting-started) section of the README.md for instructions. Make sure that all tests pass prior to submitting your pull request.

### Format commit messages

- Separate the subject from the body with a blank line
- Limit the subject line to 50 characters or less
- Capitalize the subject line
- Do not end the subject line with a period
- Use the present tense ("Add feature" instead of "Added feature")
- Use the imperative mood ("Move file to..." instead of "Moves file to...")
- Wrap the body at 72 characters
- Use the body to explain how things worked before, what has changed, why it is necessary and how things work now

### Specs style guide

- Include thoughtfully-worded, well-structured Jasmine specs in the `speakers-list/ui/tests/e2e/specs` folder.
- Treat `describe` as a noun or situation.
- Treat `it` as a statement about a state or how an operation changes a state.

#### Example

```javascript
describe("a cat", () => {
  it("mews", () => {
    // spec here
  });
  describe("when the cat is happy", () => {
    it("purrs", () => {
      // spec here
    });
  });
});
```
