# Data Entry Template

Use this template when adding new entries to the database. Copy the template below, fill in the information, and add it to the `DATA` array in `data.js`.

## Template

```javascript
{
    id: 0,                          // REQUIRED: Unique number (use next available ID)
    name: "",                       // REQUIRED: Full legal name
    position: [],                   // REQUIRED: Array of positions/titles held
    crime: [],                      // REQUIRED: Array of allegations/crimes
    description: "",                // REQUIRED: Factual description (100-500 chars recommended)
    sources: [],                    // REQUIRED: Array of source URLs (minimum 1)
    tags: [],                       // REQUIRED: Array of tags (can be empty [])
    year: null                      // REQUIRED: 4-digit year or null if unknown
}
```

## Field-by-Field Instructions

### `id`
- **Type**: Number
- **Required**: Yes
- **Rules**: Must be unique, sequential
- **Example**: `123`
- **Tips**: Use the next available number in sequence

### `name`
- **Type**: String
- **Required**: Yes
- **Rules**: Full legal name
- **Example**: `"John Michael Smith"`
- **Tips**: Use consistent formatting across all entries

### `position`
- **Type**: Array of strings
- **Required**: Yes (minimum 1 entry)
- **Rules**: All positions/roles held (current or former)
- **Example**: `["State Senator", "Attorney", "Business Owner"]`
- **Tips**:
  - Be specific: "State Senator" not just "Senator"
  - Include all relevant positions
  - Use title case

### `crime`
- **Type**: Array of strings
- **Required**: Yes (minimum 1 entry)
- **Rules**: Type(s) of allegations or documented crimes
- **Example**: `["Sexual Assault", "Sexual Harassment"]`
- **Tips**:
  - Use consistent terminology
  - Be specific but concise
  - Common values: "Sexual Assault", "Sexual Harassment", "Child Abuse", "Inappropriate Conduct", "Solicitation"

### `description`
- **Type**: String
- **Required**: Yes
- **Rules**: Factual, neutral description of the case
- **Example**: `"Multiple staffers filed complaints of workplace harassment between 2015-2017. Independent investigation confirmed violations. Resulted in resignation and $250,000 settlement with three complainants."`
- **Tips**:
  - Keep factual and neutral (no opinions)
  - Include: What happened, when, outcome
  - Mention investigation/legal findings
  - 100-500 characters recommended
  - Avoid sensationalism

### `sources`
- **Type**: Array of strings (URLs)
- **Required**: Yes (minimum 1)
- **Rules**: Links to verifiable documentation
- **Example**:
```javascript
[
    "https://newspaper.com/article-title",
    "https://courtnews.com/case-name",
    "https://agency.gov/official-report"
]
```
- **Tips**:
  - Use reputable sources: Major news outlets, court documents, government records
  - Prefer archived versions for permanence
  - Include multiple sources when possible
  - Ensure URLs are complete and accessible

### `tags`
- **Type**: Array of strings
- **Required**: Yes (can be empty `[]`)
- **Rules**: Additional categorization/metadata
- **Example**: `["Convicted", "Prison Sentence", "Multiple Victims", "GOP"]`
- **Common Tags**:
  - **Status**: "Arrested", "Charged", "Convicted", "Acquitted"
  - **Outcome**: "Resigned", "Terminated", "Removed from Office"
  - **Legal**: "Settlement", "Civil Lawsuit", "Prison Sentence", "Restraining Order"
  - **Context**: "Multiple Victims", "Multiple Complaints", "Workplace"
  - **Affiliation**: "GOP", "Clergy", "Law Enforcement", "Media"
  - **Ongoing**: "Under Investigation", "Pending Trial"

### `year`
- **Type**: Number or null
- **Required**: Yes
- **Rules**: 4-digit year of incident/report
- **Example**: `2018` or `null`
- **Tips**:
  - Use the year the incident occurred (if known)
  - If incident spanned years, use first year
  - If year unknown, use `null` (not a string "null", the actual null value)

## Complete Example

```javascript
{
    id: 16,
    name: "Michael Robert Thompson",
    position: ["County Commissioner", "School Board Member"],
    crime: ["Sexual Harassment", "Abuse of Power"],
    description: "Accused by five former staff members of creating hostile work environment through unwanted sexual advances and retaliation against those who refused. County investigation substantiated claims. Resigned in 2019 following public pressure. Settlement reached with three complainants totaling $180,000.",
    sources: [
        "https://localnews.com/county-commissioner-harassment-investigation",
        "https://courtnews.com/thompson-settlement-details",
        "https://localnews.com/thompson-resignation"
    ],
    tags: ["Resigned", "Settlement", "Multiple Victims", "Workplace", "Investigation"],
    year: 2019
}
```

## Validation Checklist

Before adding your entry, verify:

- [ ] `id` is unique (not used by any other entry)
- [ ] `name` is complete and accurate
- [ ] `position` has at least one entry
- [ ] `crime` has at least one entry
- [ ] `description` is factual and neutral (no opinions)
- [ ] `description` includes outcome/status
- [ ] `sources` has at least one working URL
- [ ] All source URLs are from reputable outlets
- [ ] `tags` uses consistent terminology
- [ ] `year` is a 4-digit number or `null`
- [ ] All strings use double quotes `""`
- [ ] All arrays use square brackets `[]`
- [ ] Proper comma placement (between entries)
- [ ] No syntax errors (test in JSON validator if unsure)

## Common Pitfalls to Avoid

### ❌ Don't:
```javascript
{
    id: "16",                       // ❌ ID should be number, not string
    name: "Thompson",               // ❌ Use full name
    position: "Commissioner",       // ❌ Should be array, not string
    crime: ["bad stuff"],           // ❌ Be specific
    description: "He's guilty!",    // ❌ Not neutral/factual
    sources: ["news.com"],          // ❌ Incomplete URL
    tags: "convicted",              // ❌ Should be array
    year: "2019"                    // ❌ Should be number or null
}
```

### ✅ Do:
```javascript
{
    id: 16,
    name: "Michael Robert Thompson",
    position: ["County Commissioner"],
    crime: ["Sexual Harassment"],
    description: "County investigation substantiated harassment claims by five staff members. Resigned 2019.",
    sources: ["https://news.com/full-article-url"],
    tags: ["Resigned", "Multiple Victims"],
    year: 2019
}
```

## Adding Your Entry to data.js

1. Open `data.js` in your editor
2. Find the `DATA` array
3. Add your entry at the end (before the closing `]`)
4. Add a comma after the previous entry
5. Paste your new entry
6. **Do not** add a comma after the last entry
7. Save the file

```javascript
const DATA = [
    {
        id: 1,
        // ... existing entry
    },
    {
        id: 2,
        // ... existing entry
    },
    {
        id: 3,
        // ... your new entry (no comma after this one)
    }
];
```

## Testing Your Entry

After adding:

1. Open `index.html` in a browser
2. Check browser console (F12) for errors
3. Verify your entry appears in the results
4. Test that all filters work with your entry
5. Click your entry's card to open the modal
6. Verify all information displays correctly
7. Test all source links

## Need Help?

- Review the sample entries in `data.js`
- Check the USER_GUIDE.md for more details
- Use a JSON validator to check syntax: [jsonlint.com](https://jsonlint.com)
- Test in the browser and check console for specific error messages

---

**Template Version**: 1.0
**Last Updated**: 2025-11-17
