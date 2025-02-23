# Portfolio Website

This is my personal portfolio website, built with **Next.js** and deployed using **GitHub Pages**. The site showcases my work as a **Data Engineer** and **Software Engineer**.

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (latest LTS version recommended)
- **npm**
- **Git**

### 📦 Install Dependencies
```bash
npm install

```

### 🏃 Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see the site in the browser.

## 🔨 Build for Production
```bash
npm run build
```
This generates a `.next` folder with optimized production assets.

## 🚀 Deploying to GitHub Pages

### Step 1: Update `next.config.js`
Since GitHub Pages serves static sites, we need to configure **Next.js** for static export. Add the following to `next.config.js`:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export'
};

module.exports = nextConfig;
```

### Step 2: Generate Static Files
Run the following command:
```bash
npm run build && npm run export
```
This will create an `out` folder with all the static files needed.

### Step 3: Deploy to GitHub Pages
1. Initialize a new branch `gh-pages` for deployment:
   ```bash
   git checkout --orphan gh-pages
   git reset --hard
   git commit --allow-empty -m "Initializing gh-pages branch"
   git push origin gh-pages
   git checkout main
   ```

2. Install `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```

3. Add a deployment script in `package.json`:
   ```json
   "scripts": {
     "deploy": "gh-pages -d out"
   }
   ```

4. Deploy with:
   ```bash
   npm run deploy
   ```

### Step 4: Configure GitHub Pages
1. Go to **Settings > Pages** in the GitHub repository.
2. Set the **Branch** to `gh-pages` and the directory to `/ (root)`.
3. Save the settings, and the site should be live at: `https://lucaseichhorn.com.ar/`.

## 🎯 Notes
- Every time you update the portfolio, run `npm run deploy` to redeploy.
- Ensure the repository is public for GitHub Pages to work.

---

📢 **Feel free to customize this README as needed!** Happy coding! 🚀

