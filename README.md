# paralaxing-clinic

**Short description**
paralaxing-clinic is a lightweight, responsive landing site focused on mental wellness. The design uses subtle parallax effects to add depth and motion while keeping performance and accessibility in mind.

---

## Quick start

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

---

## Parallax effects — what & where

This project uses small, layered parallax effects on hero and feature sections to create a sense of depth. The effect is implemented with a tiny, dependency-free script that reads `data-speed` attributes on elements and updates their `transform` on scroll using `requestAnimationFrame` for smooth, jank-free motion.

**Where to look**

* Main hero and feature components in `index.html` (or `src/` components) — elements with `data-parallax` / `data-speed` attributes.
* `public/` contains the site favicon and static assets.

---

## How the parallax works (brief)

* Each parallax layer has a `data-speed` (e.g. `0.2`, `1.2`) controlling relative movement.
* On scroll, a lightweight loop computes a translateY value proportional to scrollY × speed and applies it with `transform: translate3d(0, y, 0)`.
* `requestAnimationFrame` batches updates to stay in sync with the browser paint.

**Example HTML**

```html
<section class="hero">
  <div class="layer" data-parallax data-speed="0.4">Background shape</div>
  <div class="layer" data-parallax data-speed="1">Foreground content</div>
</section>
```

**Example JS (conceptual)**

```js
const layers = document.querySelectorAll('[data-parallax]');
function onScroll(){
  const y = window.scrollY;
  layers.forEach(el => {
    const speed = parseFloat(el.dataset.speed) || 1;
    el.style.transform = `translate3d(0, ${y * speed * -0.1}px, 0)`;
  });
}
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => { onScroll(); ticking = false; });
    ticking = true;
  }
}, { passive: true });
```

---

## Performance & accessibility tips

* Use `transform` (translate3d) instead of `top/left` for GPU-accelerated animation.
* Limit the number of moving layers and prefer subtle speeds (< ±1.5) to avoid motion sickness.
* Provide a prefers-reduced-motion override to disable parallax for users who request reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  [data-parallax] { transform: none !important; transition: none !important; }
}
```

---

## Customization

* Tweak `data-speed` values to increase/decrease parallax intensity.
* Replace or add layers in the hero section to change depth composition.
* Use `will-change: transform` sparingly on frequently-animated elements.

---

## Contributing

PRs and issues welcome. Keep parallax changes small and test on mobile.

---

## License

MIT

---

*Created for the paralaxing-clinic project — highlights parallax usage, performance and how to customize the effect.*
