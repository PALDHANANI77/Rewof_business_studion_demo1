# Rewof Business Studio Website

A responsive, premium dark portfolio website for Rewof Business Studio, with:
- Services and business positioning
- Three starter pricing packages
- A separate sample storefront (`demo.html`)
- FAQ section
- Contact form that prepares an enquiry for WhatsApp
- Responsive mobile navigation and subtle scroll reveals
- Plain HTML, CSS and JavaScript; no build tools required

## Project structure

```text
rewof-business-studio/
├── index.html
├── demo.html
├── styles.css
├── script.js
├── README.md
└── assets/
    └── favicon.svg
```

## Before publishing — important

Open `script.js` and edit the configuration near the top:

```js
const REWOF_WHATSAPP_NUMBER = "91XXXXXXXXXX";
const REWOF_EMAIL = "rewof.business@gmail.com";
```

1. Replace `91XXXXXXXXXX` with your WhatsApp number in international format, digits only. Example format: `919876543210` (use your own number).
2. Confirm the email address is correct and update it if necessary.
3. Review the prices, package scope, location and service claims in `index.html`.
4. Make sure you can deliver every item listed in each package.
5. Replace any illustrative copy/images or concept details if you adapt the demo for a real client.
6. Test the form on mobile and desktop before sharing the site.

### How the enquiry form works

This is a static website. The form collects the fields in the browser and opens WhatsApp with a prefilled message. The visitor must press Send in WhatsApp. **It does not save submissions to a database and does not send a message automatically.**

If you need submissions stored or delivered without WhatsApp, add a backend or a trusted form service and update the privacy notice accordingly.

## Run locally

### Option A — open directly
Double-click `index.html` to preview the site. Some browser features may work more consistently when served locally.

### Option B — VS Code Live Server
1. Open this folder in VS Code.
2. Install the **Live Server** extension if you don't already have it.
3. Right-click `index.html`.
4. Choose **Open with Live Server**.

### Option C — Python local server
From this folder, run:

```bash
python -m http.server 8000
```

Open `http://localhost:8000`.

## Deploy to GitHub Pages

1. Create a GitHub repository, for example `rewof-business-studio`.
2. Upload all files and the `assets` folder to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under Build and deployment, select **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. Wait for GitHub Pages to publish the site.

Because this is a static site, no backend or build command is required.

## Deploy to Netlify or Vercel

- **Netlify:** Import the repository or drag the project folder into Netlify's manual deploy area. No build command is needed; publish directory is the project root.
- **Vercel:** Import the repository and choose the appropriate static/no-framework setup. No build command is needed; use the project root as the output directory if prompted.

## Customization

- Colours, spacing and responsive layouts: `styles.css`
- Page content, service packages, pricing, FAQs: `index.html`
- Sample storefront: `demo.html`
- WhatsApp/email configuration and form behavior: `script.js`
- Browser icon: `assets/favicon.svg`

## Notes

- Google Fonts are loaded from Google Fonts; a network connection is needed for those fonts. System fallbacks are included.
- The sample storefront is fictional and clearly labelled as a concept.
- Pricing and delivery timelines are examples. Confirm final scope, payment terms, hosting and domain costs with each client.
- Add a privacy policy if you later collect or store personal information through a backend or analytics service.
