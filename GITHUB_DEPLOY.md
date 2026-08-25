# Deploy this portfolio to GitHub Pages

## 1. Install Git and Node.js

Install Git and Node.js LTS on your Windows PC.

Check in Command Prompt:

```bash
git --version
node --version
npm --version
```

## 2. Extract the portfolio

Extract the ZIP. Open the folder that contains `package.json` in VS Code.

## 3. Test it locally

Open the VS Code terminal and run:

```bash
npm install
npm run dev
```

Open the local address printed by Vite, normally:

```text
http://localhost:3000
```

Stop the server with `Ctrl + C`.

## 4. Create a GitHub repository

1. Sign in to GitHub.
2. Click **New repository**.
3. Give it a name such as `midhun-portfolio`.
4. Keep it public if you want a normal public portfolio.
5. Do **not** add a README, `.gitignore`, or license during repository creation because this project already has those files.
6. Create the repository.

## 5. Push the portfolio to GitHub

From the portfolio folder in VS Code:

```bash
git init
git add .
git commit -m "Create professional portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/midhun-portfolio.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

If Git says the remote already exists, use:

```bash
git remote set-url origin https://github.com/YOUR-USERNAME/midhun-portfolio.git
git push -u origin main
```

## 6. Turn on GitHub Pages

In your GitHub repository:

1. Open **Settings**.
2. Open **Pages** in the left sidebar.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. You do not need to upload the `dist` folder manually.
5. The included `.github/workflows/deploy.yml` file automatically builds the Vite project and publishes `dist` whenever you push to `main`.

## 7. Wait for deployment

Open the repository's **Actions** tab.

You should see **Deploy portfolio to GitHub Pages** running. When both the build and deploy jobs show a green check mark, return to **Settings → Pages**. GitHub will show your published website URL.

It will normally look like:

```text
https://YOUR-USERNAME.github.io/midhun-portfolio/
```

## 8. Updating the website later

After changing the code:

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Actions will automatically rebuild and redeploy the website.

## 9. Your MB + Guitar favicon

The portfolio now includes the MB + guitar logo in multiple favicon formats:

- `public/favicon.ico`
- `public/mb-logo.svg`
- `public/icons/favicon-16x16.png`
- `public/icons/favicon-32x32.png`
- `public/icons/apple-touch-icon.png`
- `public/icons/android-chrome-192x192.png`
- `public/icons/android-chrome-512x512.png`

The HTML references these files, so the MB + guitar logo appears in the browser tab and on supported mobile shortcuts.

## 10. If the favicon does not change immediately

Browsers cache favicons aggressively. Try:

- Hard refresh: `Ctrl + Shift + R`
- Open the site in an Incognito/InPrivate window.
- Clear the site's cached data if necessary.

## 11. Important: do not upload secrets

Do not put API keys or passwords into GitHub. The current portfolio does not need a Gemini API key just to display the portfolio pages.
