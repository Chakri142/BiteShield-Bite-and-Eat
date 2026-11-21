FOODQA FOOD DELIVERY APP
========================

Start here: double-click food-app/index.html. No server, build step, or internet connection is needed.

Pages included:
- index.html — restaurant discovery, search, categories and 3D hover/tilt
- restaurant.html — restaurant menu and item pricing
- cart.html — quantities, coupon codes and delivery fee calculation
- login.html / register.html / profile.html — demo account flows
- checkout.html — address and simulated payment selection
- tracking.html / orders.html — animated rider tracking and order history
- app.js + style.css — shared app logic and theme

Data is stored locally in this browser using localStorage. Registration/login, cart and orders are demonstrations only: passwords are not securely stored, payments are simulated, and there is no real restaurant, delivery, payment, or backend service. Use only sample data; do not enter real payment details or sensitive passwords.

BiteShield connection:
The main site's Home and navigation buttons open this app using a relative file link. The main page also reads FoodQA's localStorage keys when the browser exposes the same file origin. Browser handling of localStorage for file:// URLs varies; all FoodQA app pages in this folder share the same app keys, but cross-folder synchronization with the main site cannot be guaranteed by every browser without a local server/backend. For guaranteed cross-folder sync, launch through the included website's local server (optional); the app itself is still designed to open by double-click.

Suggested: keep the whole foodqa-3d-website folder together after extracting the ZIP, then double-click the HTML files. Moving one HTML file away from its folder will break the relative links to shared CSS/JS and other pages.
