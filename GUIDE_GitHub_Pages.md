# GitHub Pages

## Modify angular.json

Modify angular.json:

- Under projects > portfolio > architect > build > configurations > production, add or modify "outputPath":

```json
"outputPath": {
    "base": "docs",
    "browser": ""
}
```

Explanations:

- Setting the "browser" field to an empty value ensures the built production app is not stored inside a subdirectory "browser", but directly in the "docs" directory. Not having the main files (index.html, ...) inside either the root folder or the docs folder will lead to issues with hosting on GitHub pages.
- By default, the production build goes in a folder "dist", but GitHub Pages expects a folder "docs".

## GitHub Action

### Personal Access Token

- Under Account > Settings > Developer Settings > Personal Access Tokens, create a classic token with "repo" permissions.
- Copy the generated token.
- In both your private and public repositories, go to Settings > Secrets and variables > Actions.
- Create a new repository secret "ACCESS_TOKEN" and use the generated token as its value.

### GitHub Action (.yml)

- Copy the provided deploy.yml file to .github/workflows/ in your private repository's root directory.
- Modify the file to adjust the "user.name" and "email" for the two "git config" commands.

## Public Repository

- Create a new public repository.
- Go to its Settings > Pages > Branch, then select "main" and the directory "/docs. Hit save.
- Add it as a second remote repository in VSC.
- Create a new branch "production" on your original repository.

## Publish Updates

Whenever you want to release an updated version of the web app, perform the following:

- Merge the changes from main to production.
- Switch to the production branch.
- Build the app for production, with the value for the property "--base-href" being the name of the public repository:

```bash
ng build -c production --base-href "/aryobarzan/"
```

- Commit and push the updated docs folder.

Subsequently, GitHub will automatically run the action set up in our "deploy.yml" file to copy the new build to our public repository.
