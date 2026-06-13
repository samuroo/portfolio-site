# portfolio-site
Sam Leveau Engineering Portfolio Website

[View the live website](https://samuroo.github.io/portfolio-site/)

## Structure

- `index.html` contains the homepage.
- `work.html` is the project directory.
- Project detail pages use `css/shared.css` and `css/project.css`.
- Page-specific styles are kept in `css/home.css`, `css/work.css`, and `css/CV.css`.
- Retired pages that should not appear in the portfolio are stored in `archive/`.
- Shared branding lives in `res/site/`, homepage media in `res/home/`, and PDFs in `res/documents/`.
- Project media is grouped under `res/projects/<project-name>/`.

## Adding a project

1. Copy one of the existing project template pages.
2. Update its title, description, status, sections, and image placeholders.
3. Add a card to `work.html`.
4. Store media in `res/projects/<project-name>/` using lowercase descriptive filenames.
5. Use optimized display images, descriptive alt text, and `preload="metadata"` for videos.
