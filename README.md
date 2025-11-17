# Right-Wing Misconduct Database

A comprehensive, searchable database of documented allegations and convictions of misconduct involving right-wing individuals.

## Features

- **Advanced Search**: Real-time search with 300ms debouncing across names, descriptions, crimes, positions, and tags
- **Multi-dimensional Filtering**: Filter by crime type, position, tag, and year
- **Flexible Sorting**: Sort by ID, name, or year in ascending or descending order
- **Pagination**: View 10, 25, 50, 100 entries per page, or view all 1,507 entries at once
- **Search Highlighting**: Search terms are highlighted in yellow in results
- **CSV Export**: Export filtered results to CSV format
- **Mobile Responsive**: Optimized for all screen sizes

## Database Statistics

- **Total Entries**: 1,507 documented cases
- **Data Size**: 855KB JSON database
- **Fields**: ID, Name, Position(s), Crime(s), Tags, Year, Description, Sources

## How to Use

### Option 1: Using Python (Recommended)

```bash
# Run the server script
chmod +x serve.sh
./serve.sh

# Or run Python directly
python3 -m http.server 8000
```

Then open your browser to: `http://127.0.0.1:8000/`

### Option 2: Using Node.js

```bash
# Install http-server globally
npm install -g http-server

# Run the server
http-server -p 8000
```

Then open your browser to: `http://127.0.0.1:8000/`

### Option 3: Using PHP

```bash
php -S 127.0.0.1:8000
```

Then open your browser to: `http://127.0.0.1:8000/`

## Why Do I Need a Web Server?

Modern browsers block JavaScript from loading local files (like `data.json`) when you open HTML files directly using the `file://` protocol. This is a security feature called CORS (Cross-Origin Resource Sharing). A local web server serves the files over HTTP, which allows the application to work properly.

## Data Structure

Each entry in `data.json` contains:

```json
{
  "id": 1,
  "name": "Person Name",
  "position": ["position1", "position2"],
  "crime": ["crime1", "crime2"],
  "description": "Detailed description of the misconduct",
  "sources": ["https://source1.com", "https://source2.com"],
  "tags": ["tag1", "tag2"],
  "year": 2023
}
```

## Using the Interface

1. **Search**: Type in the search bar to filter entries by any text
2. **Filter**: Use dropdown menus to filter by specific criteria
3. **Sort**: Choose what to sort by and the order
4. **Navigate**: Use pagination controls to browse through results
5. **Export**: Click "Export to CSV" to download filtered results
6. **Clear**: Click "Clear Filters" to reset all filters and sorting

## Data Sources

All data is sourced from publicly available information and court records. Each entry includes links to original sources for verification.

## Contributing

To add new entries to the database, edit `data.json` following the existing structure. Ensure all entries include:
- Unique ID (increment from the last entry)
- Name
- At least one source link
- Accurate description

## Technical Details

- **Frontend**: Vanilla JavaScript (no dependencies)
- **Styling**: CSS3 with gradient backgrounds and smooth transitions
- **Performance**: Debounced search, pagination for optimal performance
- **Security**: XSS protection via HTML escaping
- **Compatibility**: Works on all modern browsers

## License

This database is provided for informational and research purposes.

---

Last updated: 2025-11-17
