# App Showcase Page Specification: "My Washing Is Out"

> **Hand-off Brief for Website Development Agent**  
> **App Name:** My Washing Is Out  
> **Studio / Developer:** Deviant Dev ([deviantdev.com](https://deviantdev.com) / [GitHub: mjsagar](https://github.com/mjsagar))  
> **Platform:** iOS 17.0+ (iPhone, Home & Lock Screen Widgets, Apple Watch companion alerts)  
> **Status:** Ready for App Store release  

---

## 1. Executive Summary & Brand Identity

### The Product
**My Washing Is Out** is a smart, hyper-local weather companion app designed specifically for people who line-dry their laundry outside. Users tap **"Hang Out"** when their wash goes on the line. The app monitors real-time meteorological conditions and sends proactive, customisable advance alerts (5 to 60 minutes beforehand) before rain falls, ensuring clean clothes never get soaked.

### Brand Tone & Aesthetic
- **Vibe:** Fresh, whimsical, reliable, crisp, eco-conscious, and friendly.
- **Visual Motif:** Clotheslines, wooden clothes pegs, fluffy dynamic clouds, sunny horizons, gentle raindrops, fresh laundry blowing in the breeze.
- **Color Palette Ideas:**
  - **Sky Blue / Day:** `#38BDF8` / `#0284C7` (Fresh sky, open air)
  - **Sun Gold:** `#FBBF24` / `#F59E0B` (Sunshine, warmth)
  - **Fresh Cotton White:** `#F8FAFC` / `#FFFFFF` (Clean sheets, clouds)
  - **Rain Indigo / Storm:** `#334155` / `#1E293B` (Incoming shower contrast)
  - **Peg Wood / Accent:** `#D97706` / `#B45309` (Warm wooden pegs)

---

## 2. Asset Catalog & File Locations

All visual assets are stored locally within the project repository. Below are both absolute and relative file paths for easy embedding or copying into your web project.

### App Icon
| Asset | Path | Description | Dimensions |
| :--- | :--- | :--- | :--- |
| **High-Res App Icon** | `file:///Volumes/Ex-Storage/Codeing/Mobile Apps/my-washing-is-out/MyWashingIsOut/Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png`<br>`MyWashingIsOut/Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png` | Official 1024x1024 master app icon. | 1024 × 1024 px |

---

### App Store-Ready Framed Screenshots (Marketing Mockups)
These images are professionally rendered with whimsical clothesline backgrounds, sky gradients, wooden pegs, and marketing headlines. Ideal for hero showcases, carousels, or device grids.

| Preview Name | Local File Path | Headline & Subtitle | Recommended Website Placement |
| :--- | :--- | :--- | :--- |
| **Screenshot 1**<br>*(Active Session)* | `file:///Volumes/Ex-Storage/Codeing/Mobile Apps/my-washing-is-out/screenshots/appstore_image0.png`<br>`screenshots/appstore_image0.png` | **"Hang Out Laundry"**<br>*Clean & Crisp* — Tap Hang Out when your wash goes on the line. Hyper-local tracking begins immediately. | **Hero Section** (Primary hero phone mockup or interactive preview) |
| **Screenshot 2**<br>*(Live Radar & Forecast)* | `file:///Volumes/Ex-Storage/Codeing/Mobile Apps/my-washing-is-out/screenshots/appstore_image1.png`<br>`screenshots/appstore_image1.png` | **"Live Weather Radar"**<br>*Sky & Rain Alerts* — Real-time rain forecasting, rain probability, hourly breakdown, and conditions. | **Feature Showcase 1** (Weather accuracy & radar monitoring section) |
| **Screenshot 3**<br>*(Custom Alert Timing)* | `file:///Volumes/Ex-Storage/Codeing/Mobile Apps/my-washing-is-out/screenshots/appstore_image2.png`<br>`screenshots/appstore_image2.png` | **"Custom Timing"**<br>*Tailored Alerts* — Set your warning buffer (5 to 60 mins) to bring laundry in before it rains. | **Feature Showcase 2** (Customisation & peace-of-mind section) |
| **Screenshot 4**<br>*(Widgets)* | `file:///Volumes/Ex-Storage/Codeing/Mobile Apps/my-washing-is-out/screenshots/appstore_widget.png`<br>`screenshots/appstore_widget.png` | **"Glanceable Widget"**<br>*Home & Lock Screen* — Check clothesline status and upcoming rain right from your iOS Home Screen. | **Widget & Platform Spotlight** (Integration & convenience section) |

---

### Raw In-App Screenshots (Unframed UI)
Use these if you want to frame them inside your own custom CSS 3D phone mockups, interactive device frames, or SVG containers:

| Raw Asset | Local File Path | Screen Content |
| :--- | :--- | :--- |
| **Raw UI 0** | `file:///Volumes/Ex-Storage/Codeing/Mobile Apps/my-washing-is-out/screenshots/image0.png`<br>`screenshots/image0.png` | Active drying session screen with animated clothesline, "Bring In" button, and current conditions. |
| **Raw UI 1** | `file:///Volumes/Ex-Storage/Codeing/Mobile Apps/my-washing-is-out/screenshots/image1.png`<br>`screenshots/image1.png` | Detailed weather view showing hourly forecast, rain chance graph, humidity, and wind speed. |
| **Raw UI 2** | `file:///Volumes/Ex-Storage/Codeing/Mobile Apps/my-washing-is-out/screenshots/image2.png`<br>`screenshots/image2.png` | Alert lead-time settings modal (5 min up to 60 min slider/selector). |
| **Raw Widget** | `file:///Volumes/Ex-Storage/Codeing/Mobile Apps/my-washing-is-out/screenshots/widget-image.png`<br>`screenshots/widget-image.png` | iOS Home Screen showcasing the medium and small "My Washing Is Out" widgets alongside weather alerts. |

---

## 3. Web Page Copy & Content Structure

### A. Meta & SEO Tags
- **Page Title:** `My Washing Is Out — Smart Rain Alerts for Outside Laundry`
- **Meta Description:** `Never let a sudden rain shower soak your laundry again. My Washing Is Out monitors hyper-local weather and gives you advance rain alerts before the first drop falls.`
- **OpenGraph Title:** `My Washing Is Out — Never Get Caught by Sudden Rain Again`
- **OpenGraph Description:** `Hang your washing out and relax. Hyper-local rain alerts, custom warning buffers, and iOS widgets for peace of mind.`

---

### B. Hero Section
- **Kicker / Badge:** `☀️ Smart Weather for Smart Air-Drying`
- **Headline (H1):** `Never let a sudden shower soak your fresh laundry again.`
- **Subheadline:** `Whether you dry on a balcony, rotary airer, or garden clothesline, My Washing Is Out tracks hyper-local skies and sends you advance rain warnings before the downpour begins.`
- **Call-To-Actions (CTAs):**
  - Primary: `Download on the App Store` (Black badge button with Apple logo, links to App Store URL placeholder: `https://apps.apple.com/app/id[APP_ID]`)
  - Secondary: `See How It Works ↓` (Smooth scroll to features)
- **Hero Visual:** Angled 3D mockup displaying `appstore_image0.png` or `image0.png` alongside floating widget badge `appstore_widget.png`.

---

### C. The Problem & Solution (Value Proposition)
- **The Frustration:**
  > *"You wash a big load of bedding and hang it in the sun. You head upstairs to work or pop out for coffee. An hour later, an unexpected drizzle drenches everything—forcing you to re-wash and waste hours."*
- **The Solution:**
  > *One tap on your phone or Apple Watch. Set your preferred alert window—say, 15 minutes before rain arrives. Go about your day with 100% confidence. If clouds gather, your phone warns you in plenty of time to bring your clothes inside.*

---

### D. Core Features Grid (3 or 4 Columns / Cards)

#### 1. One-Tap Session Tracking
- **Icon:** Clothes hanger / clothesline
- **Copy:** Tap "Hang Out" the moment your clothes hit the line. Tap "Bring In" when they're dry. No complicated setup, no fiddly menus.

#### 2. Custom Warning Buffer (5–60 Mins)
- **Icon:** Clock with rain droplet / alert bell
- **Copy:** Pick the lead time that fits your life. Upstairs in a meeting? Set 20 minutes. Just a quick step onto the patio? 5 minutes is plenty.

#### 3. Hyper-Local Precision
- **Icon:** Radar / satellite cloud
- **Copy:** Powered by high-resolution meteorological models tailored down to your exact garden coordinates, tracking rain intensity, probability, and wind.

#### 4. Glanceable Widgets
- **Icon:** iOS Widget layout / glance
- **Copy:** Keep an eye on your drying session, sky status, and rain countdown right from your iPhone Home Screen and Lock Screen without even opening the app.

#### 5. Dynamic Living Skies
- **Icon:** Sun behind cloud / animated gradient
- **Copy:** The app's illustrated sky seamlessly shifts in real time to match the sunlight, cloud coverage, dusk, and weather over your home.

#### 6. Save Energy & Money
- **Icon:** Leaf / piggy bank / energy saver
- **Copy:** Tumble dryers are among the most power-hungry appliances in the house. Confident outdoor drying cuts your energy bill and helps the planet.

---

### E. "How It Works" (3 Simple Steps)
1. **Step 1: Hang Out**  
   Hang your clothes on the line and tap "Hang Out" in the app or via the Home Screen widget.
2. **Step 2: Relax & Go About Your Day**  
   Our hyper-local radar keeps a continuous, battery-friendly eye on incoming precipitation fronts.
3. **Step 3: Beat the Rain**  
   Receive an advance notification on your iPhone and Apple Watch with ample time to bring your clothes inside dry and fresh.

---

### F. Technical Specifications & Privacy Section
- **iOS Compatibility:** Requires iOS 17.0 or later (optimised for iOS 17 & 18).
- **Widgets:** WidgetKit support for Small and Medium Home Screen widgets & Lock Screen complications.
- **Weather Source:** High-resolution hyper-local forecasts powered by Apple WeatherKit.
- **Privacy First:**
  - Zero third-party data tracking.
  - Location is used strictly to query hyper-local precipitation data.
  - Option to set a fixed home address override so you get alerts for your garden even when working from the office.

---

### G. Footer & Links
- **Copyright:** `© 2026 Deviant Dev. All rights reserved.`
- **Links to include:**
  - `Privacy Policy` (e.g. `/privacy` or anchor)
  - `Terms of Use` (e.g. `/terms` or anchor)
  - `Support & Contact` (`mailto:support@deviantdev.com` or link to developer contact form)
  - `More Apps by Deviant Dev` (link to main studio portfolio)

---

## 4. UI / UX Design Recommendations for the Website Agent

1. **Micro-Interactions:**
   - Add a subtle CSS clothesline animation at the top of the hero or section divider with gentle swing/sway effects.
   - Use soft glassmorphism (`backdrop-filter: blur()`) on cards to complement the clean modern iOS aesthetic.
2. **Image Presentation:**
   - When displaying the App Store framed screenshots (`appstore_image0.png` etc.), use responsive containers with subtle rounded corners (`border-radius: 28px; box-shadow: 0 20px 40px rgba(0,0,0,0.12);`).
   - If using the raw images (`image0.png`), place them inside realistic iPhone 15/16 Pro frames or CSS bezels.
3. **Responsive Layout:**
   - On desktop: Split hero (headline on left, floating mockups on right), 3-column feature grid.
   - On mobile: Centered hero, single column cards, horizontal swipeable carousel for screenshots.
4. **Fast Loading:**
   - The provided screenshots are high-resolution (1284×2778px). For web performance, convert or serve responsive `webp` formats or set `loading="lazy"`.
