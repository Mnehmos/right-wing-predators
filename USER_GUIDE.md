# User Guide - Misconduct Documentation Database

## Table of Contents
1. [Getting Started](#getting-started)
2. [Using the Application](#using-the-application)
3. [Populating Your Data](#populating-your-data)
4. [Features Guide](#features-guide)
5. [Keyboard Shortcuts](#keyboard-shortcuts)
6. [Troubleshooting](#troubleshooting)

---

## Getting Started

### Opening the Application

1. **Local File**: Simply double-click `index.html` to open in your default browser
2. **Local Server**: Run a local web server and navigate to `http://localhost:8000`
3. **Deployed**: Visit your deployed URL (GitHub Pages, Netlify, etc.)

### First-Time Setup

The application comes with 15 sample entries to demonstrate functionality. To use your own data:

1. Open `data.js` in a text editor
2. Replace the sample `DATA` array with your entries
3. Save the file
4. Refresh your browser

---

## Using the Application

### Search Bar

The search bar filters entries in real-time as you type:

- **Searches**: Name, description, and tags
- **Case-insensitive**: Finds matches regardless of capitalization
- **Partial matching**: Finds entries containing your search term
- **Debounced**: Updates after you stop typing (300ms delay)

**Example**: Typing "assault" will show all entries with "assault" in the name, description, or tags.

### Filter Dropdowns

Apply filters to narrow down results:

#### Position Filter
Filter by the role or position held:
- Shows only unique positions from your dataset
- Example: "State Representative", "Pastor", "Judge"

#### Crime Filter
Filter by type of allegation:
- Shows only unique crime types from your dataset
- Example: "Sexual Assault", "Harassment", "Child Abuse"

#### Tag Filter
Filter by custom tags:
- Shows only unique tags from your dataset
- Example: "Convicted", "Resigned", "Multiple Victims"

#### Year Filter
Filter by year of incident:
- Shows only years present in your dataset
- Entries with `year: null` are excluded from year filter

### Stacking Filters

All filters work together:

**Example**:
- Search: "church"
- Position: "Pastor"
- Crime: "Child Abuse"
- Year: "2017"

This shows only pastors involved in child abuse cases in 2017 with "church" mentioned.

### Sorting

Sort results using the "Sort by" dropdown:

- **Name (A-Z)**: Alphabetical by last name
- **Name (Z-A)**: Reverse alphabetical
- **Year (Newest First)**: Most recent cases first
- **Year (Oldest First)**: Oldest cases first

*Note: Entries with unknown years appear last in year-based sorting.*

### Reset Filters

Click the **Reset Filters** button to:
- Clear the search bar
- Reset all dropdown filters to "All"
- Reset sorting to "Name (A-Z)"
- Show all entries

### Viewing Entry Details

#### Card View (Main Page)
Each card displays:
- Name and year
- Position(s) badges
- Crime/allegation badges
- Tags (if any)
- Truncated description (first 200 characters)
- Source links

#### Modal View (Detail Page)
Click any card to open a modal with:
- Full name and year
- Complete position list
- Complete crime/allegation list
- All tags
- Full untruncated description
- All source links

**Close the modal** by:
- Clicking the X button
- Clicking outside the modal
- Pressing the Escape key

### Dark Mode

Toggle between light and dark themes:

1. Click the moon/sun icon in the header
2. Your preference is saved automatically
3. The setting persists across browser sessions

**Icons**:
- 🌙 Moon = Light mode active (click to enable dark mode)
- ☀️ Sun = Dark mode active (click to enable light mode)

---

## Populating Your Data

### Data Structure

Each entry must follow this exact structure:

```javascript
{
    id: 1,                                    // Required: Unique number
    name: "Full Name",                        // Required: String
    position: ["Position 1", "Position 2"],   // Required: Array of strings
    crime: ["Crime 1", "Crime 2"],            // Required: Array of strings
    description: "Full description...",       // Required: String
    sources: ["https://url1.com", "..."],     // Required: Array of URLs
    tags: ["Tag1", "Tag2"],                   // Required: Array of strings (can be empty)
    year: 2020                                // Required: Number or null
}
```

### Field Guidelines

#### `id` (number)
- Must be unique across all entries
- Use sequential numbering: 1, 2, 3, etc.
- Never duplicate IDs

#### `name` (string)
- Full legal name of the individual
- Use consistent formatting
- Example: "John Michael Smith"

#### `position` (array of strings)
- All positions/titles held by the individual
- Can include current and former positions
- Examples: `["State Senator", "Attorney"]`

#### `crime` (array of strings)
- Type(s) of allegations or crimes
- Use consistent terminology across entries
- Examples: `["Sexual Assault", "Harassment"]`

#### `description` (string)
- Factual, neutral description of the case
- Include key details: what happened, outcome, etc.
- Avoid editorializing or opinion
- Cite specific documentation when possible
- Length: Aim for 100-500 characters

#### `sources` (array of URLs)
- Links to verifiable sources
- Prefer: Court documents, news articles, official records
- Use full URLs starting with https://
- Multiple sources strengthen credibility

#### `tags` (array of strings)
- Additional categorization
- Useful for: Status, outcome, special circumstances
- Examples: `["Convicted", "Resigned", "Civil Lawsuit", "Multiple Victims"]`
- Can be empty: `[]`

#### `year` (number or null)
- Year the incident occurred or was reported
- Use `null` if year is unknown
- Use 4-digit year: `2020`, not `20`

### Example Entry

```javascript
{
    id: 16,
    name: "Robert Johnson",
    position: ["City Council Member", "Business Owner"],
    crime: ["Sexual Harassment", "Workplace Misconduct"],
    description: "Multiple employees filed complaints alleging workplace sexual harassment spanning 2015-2018. Internal investigation confirmed violations of company policy. Resulted in resignation from city council and settlement agreements with three complainants.",
    sources: [
        "https://localnews.com/article/city-council-harassment-2018",
        "https://courtnews.com/settlement-reached-johnson-case",
        "https://localnews.com/resignation-announcement"
    ],
    tags: ["Resigned", "Settlement", "Workplace", "Multiple Victims"],
    year: 2018
}
```

### Adding Multiple Entries

1. Open `data.js`
2. Each entry is a JavaScript object within the `DATA` array
3. Separate entries with commas
4. Ensure proper syntax (brackets, quotes, commas)

```javascript
const DATA = [
    {
        id: 1,
        name: "First Person",
        // ... rest of entry
    },
    {
        id: 2,
        name: "Second Person",
        // ... rest of entry
    },
    // ... add more entries
];
```

### Validation Checklist

Before deploying, verify:

- ✅ All `id` values are unique
- ✅ All required fields are present
- ✅ All arrays use `[]` brackets
- ✅ All strings use quotes `""`
- ✅ Commas separate entries (except the last one)
- ✅ No trailing comma after the last entry
- ✅ All URLs are valid and accessible
- ✅ Descriptions are factual and neutral
- ✅ Year values are 4-digit numbers or `null`

### Importing from Spreadsheet

If you have data in Google Sheets or Excel:

1. **Export to CSV**
2. **Convert CSV to JSON** using a tool like:
   - [CSV to JSON Converter](https://csvjson.com/csv2json)
   - Or write a script in Python/JavaScript
3. **Format the JSON** to match the required structure
4. **Paste into `data.js`** replacing the sample data

---

## Features Guide

### Performance Features

The application is optimized for large datasets:

- **Efficient Filtering**: Handles 1500+ entries smoothly
- **Debounced Search**: Reduces unnecessary re-renders
- **Batch DOM Updates**: Uses DocumentFragment for optimal performance
- **Responsive Design**: Adapts to any screen size

### Accessibility Features

Built with accessibility in mind:

- **Keyboard Navigation**: Tab through cards, Enter to open
- **Screen Reader Support**: ARIA labels and semantic HTML
- **Focus Indicators**: Clear visual focus states
- **High Contrast**: Respects prefers-contrast settings
- **Reduced Motion**: Respects prefers-reduced-motion

### Browser Compatibility

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Keyboard Shortcuts

### Global
- **Tab**: Navigate between interactive elements
- **Shift + Tab**: Navigate backwards
- **Escape**: Close modal (when open)

### Search Bar
- **Type to search**: Real-time filtering
- **Ctrl/Cmd + F**: Focus search bar (browser default)

### Cards
- **Tab**: Navigate to card
- **Enter or Space**: Open modal for selected card

### Modal
- **Escape**: Close modal
- **Tab**: Navigate within modal

---

## Troubleshooting

### No Entries Appear

**Symptoms**: Page loads but shows "Loading entries..." or 0 entries

**Solutions**:
1. Open browser console (F12)
2. Check for JavaScript errors
3. Verify `data.js` is loaded (check Network tab)
4. Ensure `DATA` array is defined correctly
5. Check for syntax errors in `data.js` (missing comma, bracket, quote)

### Filters Not Working

**Symptoms**: Selecting filters doesn't change results

**Solutions**:
1. Check browser console for errors
2. Verify filter values match your data exactly (case-sensitive)
3. Clear filters and try again
4. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Search Not Working

**Symptoms**: Typing in search bar doesn't filter results

**Solutions**:
1. Check that JavaScript is enabled
2. Try clearing browser cache
3. Ensure `script.js` is loaded correctly
4. Check browser console for errors

### Dark Mode Not Saving

**Symptoms**: Dark mode resets on page reload

**Solutions**:
1. Ensure localStorage is enabled in browser
2. Check if running in private/incognito mode (localStorage may be disabled)
3. Clear browser data and try again

### Cards Not Clickable

**Symptoms**: Clicking cards doesn't open modal

**Solutions**:
1. Check browser console for errors
2. Verify modal HTML elements exist
3. Ensure `script.js` loaded correctly
4. Try clicking directly on the card (not on links)

### Styling Issues

**Symptoms**: Page looks broken or unstyled

**Solutions**:
1. Verify `styles.css` is loaded (check Network tab)
2. Clear browser cache
3. Hard refresh the page
4. Check for CSS file path errors in `index.html`

### Source Links Not Working

**Symptoms**: Clicking source links doesn't open URLs

**Solutions**:
1. Verify URLs start with `http://` or `https://`
2. Check for typos in URLs
3. Ensure URLs are properly formatted in `data.js`
4. Test URLs directly in browser address bar

---

## Tips and Best Practices

### Data Management
- Keep a backup of your original data
- Use version control (Git) to track changes
- Document your sources thoroughly
- Update the "Last updated" date in the footer

### Content Guidelines
- Maintain neutral, factual tone
- Use multiple reliable sources
- Include context in descriptions
- Be consistent with terminology
- Respect privacy and legal boundaries

### Maintenance
- Regularly check that source links are still active
- Update entries if new information emerges
- Add new cases as they are publicly documented
- Archive or mark resolved cases appropriately

### Performance
- For 2000+ entries, consider implementing pagination
- Monitor page load times
- Optimize images if you add any
- Consider using a CDN for deployment

---

## Getting Help

### Resources
- **Documentation**: See README.md for technical details
- **Code**: All code is well-commented for easy understanding
- **Browser Console**: Press F12 to check for errors

### Common Questions

**Q: Can I add images to entries?**
A: The current version doesn't support images, but you can modify the code to add image URLs to each entry and display them in cards/modals.

**Q: Can I export filtered results?**
A: Not currently. You could add an export feature by capturing the `filteredData` array and converting to CSV/JSON.

**Q: Can I have multiple databases?**
A: Yes, you can create separate `data.js` files and swap them out, or create a dropdown to switch between datasets.

**Q: How do I password-protect the site?**
A: Static sites can't have true authentication. Consider deploying on platforms that support basic auth (Netlify, Vercel) or use a serverless function.

**Q: Can I integrate this with a backend?**
A: Yes! Replace the `DATA` constant with an API call using `fetch()` to load data from your backend.

---

**Document Version**: 1.0
**Last Updated**: 2025-11-17
