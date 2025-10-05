# BetweenSystems

BetweenSystems is a personal tech blog and profile site built with React, Next.js, and Material UI, designed for easy deployment to GitHub Pages. It features a modern, minimal design with a deep blue theme (`#01212e`), and includes a blog, story-driven "About Me" page, and a detailed resume/profile page powered by a JSON data source.

## Features

- **Blog Page**: Browse articles by tags, search by title/content, and view posts in a clean, responsive layout.
- **About Me Page**: Story-style summary of personal and professional journey.
- **Profile/Resume Page**: Automatically generated from a JSON file, showing skills, certifications, and work experience.
- **Material Design**: Uses Material UI for a modern, accessible look.
- **Easy Deployment**: Ready for GitHub Pages or any static hosting.

## Quick Start

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run locally**

   ```bash
   npm run dev
   ```

3. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

## Deployment

- **GitHub Pages**: Build the static site and push the output to your `gh-pages` branch.
- **Other Static Hosts**: Use the build output from `npm run build`.

## Customization

- **Profile Data**: Update `pages/mehdiresume.json` to change resume/profile.
- **Blog Posts**: Add or edit articles in `posts/...` directory.

## Troubleshooting

- If you see errors about missing dependencies, run `npm install`.
- For Node.js v17+, use:

  ```bash
  npm run start:legacy
  ```

  (see package.json for details)

## License

MIT License
