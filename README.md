# Kigali Private Chefs — React + TailwindCSS frontend

This is a frontend migration of the original PHP/Taaza UI into React + TailwindCSS. The original PHP project is preserved separately; this React project is intended to make UI work fast without Apache/XAMPP.

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Easy business updates

Edit **`src/config/site.js`** for the company information:

- company name
- CEO name/title
- email
- phone number
- logo path
- CEO image path

### Logo
Replace:

`public/assets/images/logo.png`

with the new logo using the same filename, or change `site.logo` in `src/config/site.js`.

### CEO photo
Replace:

`public/assets/images/ceo.jpg`

with Mugisha Cedric's real image. No component changes are required.

## Backend note

The original project contains PHP/MySQL authentication, orders, admin tools, email, payment and booking handlers. This migration focuses on preserving the **UI** in React + TailwindCSS first. The form/cart/dashboard actions are prepared as frontend surfaces and should be connected to the existing PHP backend through APIs before production use.
