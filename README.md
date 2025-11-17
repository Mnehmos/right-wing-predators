# Misconduct Documentation Database

A professional, responsive web application for displaying a comprehensive database of publicly-documented sexual misconduct cases involving right-wing politicians, activists, clergy, and operatives.

## Features

### Core Functionality
- **Client-side filtering and search** - All operations happen in the browser, no backend required
- **Real-time search** - Search by name, description, or tags with debounced input
- **Multi-dimensional filtering** - Filter by position, crime type, tags, and year
- **Stacking filters** - Apply multiple filters simultaneously for precise results
- **Sorting options** - Sort by name (A-Z or Z-A) or year (newest/oldest first)

### User Interface
- **Responsive design** - Works seamlessly on mobile, tablet, and desktop
- **Card-based layout** - Clean, scannable presentation of information
- **Modal detail view** - Click any card to see full details
- **Dark mode** - Toggle between light and dark themes (preference saved to localStorage)
- **Accessibility** - ARIA labels, keyboard navigation, high contrast support

### Performance
- **Optimized rendering** - Efficiently handles 1500+ entries
- **Batch DOM updates** - Uses DocumentFragment for minimal reflows
- **Debounced search** - Reduces unnecessary filtering operations

## Project Structure

```
misconduct-database/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # Application logic and functionality
├── data.js             # Database entries (replace with your data)
└── README.md           # This file
```

## Setup and Usage

### Local Development

1. **Clone or download this repository**
   ```bash
   git clone <your-repo-url>
   cd misconduct-database
   ```

2. **Replace sample data with your actual dataset**
   - Open `data.js`
   - Replace the sample `DATA` array with your complete dataset
   - Ensure each entry follows this structure:
   ```javascript
   {
       id: number,              // Unique identifier
       name: string,            // Full name
       position: string[],      // Array of positions held
       crime: string[],         // Array of allegations/crimes
       description: string,     // Detailed description
       sources: string[],       // Array of source URLs
       tags: string[],          // Array of tags
       year: number | null      // Year of incident (or null if unknown)
   }
   ```

3. **Open in browser**
   - Simply open `index.html` in any modern web browser
   - Or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js
   npx serve

   # Using PHP
   php -S localhost:8000
   ```
   - Navigate to `http://localhost:8000`

### Deployment

#### GitHub Pages

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "main" branch as source
   - Click "Save"
   - Your site will be available at `https://<username>.github.io/<repo-name>/`

#### Netlify

1. **Via Netlify Drop**
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag and drop your project folder
   - Your site is live instantly

2. **Via Git (Continuous Deployment)**
   - Sign up at [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your repository
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: (leave empty or use `.`)
   - Click "Deploy site"

#### Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Your site will be live instantly

#### Other Hosting Options
- **Cloudflare Pages** - Similar to GitHub Pages with faster global CDN
- **Firebase Hosting** - Google's hosting solution
- **Surge.sh** - Simple static site hosting
- **AWS S3** - Host as a static website on S3

## Data Management

### Adding New Entries

1. Open `data.js`
2. Add a new object to the `DATA` array following the structure
3. Ensure the `id` is unique
4. Save the file
5. Redeploy or refresh your browser

### Importing from External Sources

If you have data in CSV or JSON format:

1. **From JSON**
   - Replace the entire `DATA` array in `data.js`
   - Ensure the JSON structure matches the required format

2. **From CSV**
   - Use a converter tool or script to transform CSV to JSON
   - Example using JavaScript:
   ```javascript
   // Use a library like PapaParse or write a custom converter
   ```

## Customization

### Changing Colors and Theme

Edit `styles.css` and modify the CSS custom properties in `:root`:

```css
:root {
    --accent-color: #0d6efd;  /* Change primary accent color */
    --danger: #dc3545;         /* Change crime badge color */
    /* etc. */
}
```

### Modifying Card Layout

Edit the `.card` class and related styles in `styles.css` to adjust spacing, sizing, or layout.

### Adding New Filter Categories

1. Add a new select element in `index.html`
2. Add the filter logic in `script.js` in the `filterData()` function
3. Update the `currentFilters` state object

### Changing Search Behavior

Modify the search logic in the `filterData()` function in `script.js`:

```javascript
// Add additional fields to search
const customFieldMatch = entry.customField.toLowerCase().includes(searchTerm);
return nameMatch || descMatch || tagMatch || customFieldMatch;
```

## Browser Compatibility

- Chrome/Edge: 90+
- Firefox: 88+
- Safari: 14+
- Opera: 76+

Requires JavaScript enabled.

## Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support (Tab, Enter, Escape)
- High contrast mode support
- Screen reader friendly
- Focus indicators
- Reduced motion support

## Performance Considerations

For datasets larger than 2000 entries, consider:

1. **Virtual scrolling** - Only render visible cards
2. **Pagination** - Break results into pages
3. **Lazy loading** - Load data incrementally
4. **Web Workers** - Offload filtering to a background thread

## Security

- All user input is escaped to prevent XSS attacks
- External links open with `rel="noopener noreferrer"`
- No eval() or innerHTML with unescaped data
- Content Security Policy recommended for production

## License

This project structure is provided as-is for public documentation purposes. Ensure all data sources are properly attributed and comply with applicable laws and regulations.

## Disclaimer

This application displays publicly-documented information from verifiable sources. All entries should be thoroughly fact-checked and sourced from reliable media outlets, court documents, or official records.

## Support and Contributions

For issues, suggestions, or contributions, please open an issue or pull request in the repository.

## Changelog

### Version 1.0.0 (Initial Release)
- Client-side search and filtering
- Responsive card-based layout
- Dark mode with localStorage persistence
- Modal detail views
- Sorting functionality
- Accessibility features
- Performance optimizations for large datasets

---

**Last Updated:** 2025

**Built with:** Vanilla JavaScript, CSS3, HTML5
