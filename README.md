# Portfolio (React + Vite)

## Run it
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
```

## Put YOUR data in
Open **`src/data/portfolio.js`** — it is the only file you need to edit:

| Section        | Variable                         |
|----------------|----------------------------------|
| Name / role / resume / photo | `profile`          |
| About Me bullets             | `about`            |
| Skill tabs + chips           | `skillCategories`  |
| Circular % rings             | `skillRings`       |
| Projects                     | `projects`         |
| Education timeline           | `education`        |
| Certifications               | `certifications`   |
| Email, links, location, clock timezone | `contact` |

Images: copy them into `public/images/` and use `"/images/yourfile.jpg"`.
Resume: copy `resume.pdf` into `public/`.
Also change the `<title>` in `index.html`.

## Files
```
index.html
src/
  main.jsx            entry
  App.jsx             page layout
  index.css           all styling (colors are CSS variables at the top)
  data/portfolio.js   YOUR CONTENT
  hooks/              useInView, useActiveSection
  components/
    Starfield, CustomCursor, Navbar, Hero, About,
    Skills, CircularSkill, Projects, Education,
    Certifications, Contact, SectionTitle
```

Change the accent color by editing `--accent` in `src/index.css`.
