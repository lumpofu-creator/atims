---
name: setup-sakai
description: Integrates PrimeNG and the Sakai Admin Layout into an existing Angular project with predefined working routes.
triggers: [primeng, sakai, layout, angular]
always: false
---

# Instructions
1. Install PrimeNG and PrimeIcons via npm: `npm install primeng primeicons`
2. Update global stylesheet (`src/styles.scss` or `src/styles.css`) to append:
   ```scss
   @import "primeng/resources/themes/lara-light-blue/theme.css";
   @import "primeng/resources/primeng.min.css";
   @import "primeicons/primeicons.css";
   ```
3. Generate an AppLayout component at `src/app/layout/app.layout.ts`.
4. The template must feature a static top header (`.layout-topbar`), a navigation sidebar (`.layout-sidebar`), and a main text body enclosing an Angular `<router-outlet>`.
5. Group existing router paths inside `app.routes.ts` as children of this new layout, preserving route paths like `/dashboard` and `/assets`.
