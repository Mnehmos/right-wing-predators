# Deployment Checklist

Use this checklist before deploying your misconduct database to production.

## Pre-Deployment

### Data Preparation
- [ ] Replace sample data in `data.js` with your actual dataset
- [ ] Verify all entries have unique IDs
- [ ] Ensure all required fields are present in every entry
- [ ] Validate all source URLs are accessible
- [ ] Confirm all descriptions are factual and neutral
- [ ] Double-check spelling of all names
- [ ] Verify years are accurate or set to `null` if unknown
- [ ] Test that all tags use consistent terminology

### Data Validation
- [ ] Open `data.js` in a JSON validator ([jsonlint.com](https://jsonlint.com))
- [ ] Check for syntax errors (missing commas, brackets, quotes)
- [ ] Ensure no duplicate IDs exist
- [ ] Verify all arrays use `[]` brackets
- [ ] Verify all strings use double quotes `""`
- [ ] Check for proper comma placement between entries

### Testing
- [ ] Open `index.html` in a browser
- [ ] Verify all entries load correctly
- [ ] Test search functionality with various terms
- [ ] Test all filter dropdowns
- [ ] Test filter combinations (stacking)
- [ ] Test all sorting options
- [ ] Test dark mode toggle
- [ ] Test modal opening and closing
- [ ] Click all source links to verify they work
- [ ] Test on mobile device or responsive mode
- [ ] Check browser console for errors (F12)
- [ ] Test keyboard navigation (Tab, Enter, Escape)
- [ ] Test with screen reader if possible

### Content Review
- [ ] Review all descriptions for neutral tone
- [ ] Ensure no editorial comments or opinions
- [ ] Verify factual accuracy of all entries
- [ ] Check that sources are from reputable outlets
- [ ] Confirm legal compliance (libel, privacy laws)
- [ ] Update "Last updated" date in footer

### File Optimization
- [ ] Minify CSS if needed (optional for small sites)
- [ ] Minify JavaScript if needed (optional for small sites)
- [ ] Ensure all file paths are relative (not absolute)
- [ ] Remove any test data or comments
- [ ] Verify .gitignore is properly configured

## Deployment Steps

### Option 1: GitHub Pages

- [ ] Ensure your repository is public (or have GitHub Pro for private repos)
- [ ] Go to repository Settings → Pages
- [ ] Select branch (main or your feature branch)
- [ ] Select root folder as source
- [ ] Click Save
- [ ] Wait 1-2 minutes for deployment
- [ ] Visit `https://[username].github.io/[repo-name]/`
- [ ] Test all functionality on live site
- [ ] Share the URL

### Option 2: Netlify

**Via Netlify Drop:**
- [ ] Go to [app.netlify.com/drop](https://app.netlify.com/drop)
- [ ] Drag and drop your project folder
- [ ] Wait for deployment
- [ ] Test the preview URL
- [ ] Claim the site to customize the URL
- [ ] Share the URL

**Via Git:**
- [ ] Sign up at [netlify.com](https://netlify.com)
- [ ] Click "New site from Git"
- [ ] Connect your repository
- [ ] Configure build settings (leave empty for static site)
- [ ] Click "Deploy site"
- [ ] Test the deployment
- [ ] Optional: Set up custom domain
- [ ] Share the URL

### Option 3: Vercel

- [ ] Install Vercel CLI: `npm i -g vercel`
- [ ] Run `vercel` in project directory
- [ ] Follow prompts
- [ ] Test deployment URL
- [ ] Optional: Set up custom domain
- [ ] Share the URL

### Option 4: Custom Hosting

- [ ] Upload all files to your web server
- [ ] Ensure proper file permissions (644 for files, 755 for directories)
- [ ] Test the URL
- [ ] Configure HTTPS if not automatic
- [ ] Share the URL

## Post-Deployment

### Verification
- [ ] Visit the live URL
- [ ] Test all features on the live site
- [ ] Test on multiple browsers (Chrome, Firefox, Safari)
- [ ] Test on mobile devices
- [ ] Verify all source links work
- [ ] Check page load speed
- [ ] Test dark mode
- [ ] Verify all filters and search work correctly

### SEO and Sharing
- [ ] Update meta description in `index.html` if needed
- [ ] Consider adding Open Graph tags for social sharing
- [ ] Submit to search engines if desired
- [ ] Create a shortened URL if needed

### Security
- [ ] Ensure HTTPS is enabled
- [ ] Check for any exposed sensitive information
- [ ] Verify external links use `rel="noopener noreferrer"`
- [ ] Consider Content Security Policy headers

### Documentation
- [ ] Update README.md with live URL
- [ ] Document any customizations made
- [ ] Create maintenance schedule
- [ ] Assign someone to monitor for broken links

## Maintenance Plan

### Regular Tasks (Monthly)
- [ ] Check for broken source links
- [ ] Add new documented cases
- [ ] Update existing entries with new information
- [ ] Verify site is still accessible
- [ ] Check analytics (if implemented)

### Quarterly Tasks
- [ ] Review all entries for accuracy
- [ ] Update browser compatibility
- [ ] Check for security updates
- [ ] Review and update tags for consistency

### As Needed
- [ ] Respond to corrections or additions
- [ ] Update deployment if hosting changes
- [ ] Archive or remove outdated entries
- [ ] Implement feature requests

## Rollback Plan

If issues are discovered after deployment:

1. **GitHub Pages**: Revert commit or switch to previous branch
2. **Netlify**: Use "Deploys" tab to roll back to previous deploy
3. **Vercel**: Use dashboard to promote previous deployment
4. **Custom**: Replace files with backup copy

## Support Contacts

- **Technical Issues**: [Your contact]
- **Content Questions**: [Your contact]
- **Legal Concerns**: [Your contact]

## Legal Disclaimer Template

Consider adding this to your site footer or about page:

> This database compiles publicly-documented information from verifiable sources including court records, news reports, and official documents. All allegations are presented as documented and do not constitute determinations of guilt. Inclusion in this database does not imply guilt, and all individuals are presumed innocent until proven guilty in a court of law. This database is maintained for informational and research purposes.

## Crisis Management

If you receive legal threats or takedown requests:

1. Do not panic or immediately remove content
2. Verify the legitimacy of the request
3. Consult with legal counsel
4. Document all communications
5. Review the specific entry in question
6. Verify all sources are still valid
7. Respond appropriately based on legal advice

## Success Metrics

Track these metrics to measure impact:

- Number of visitors (use analytics)
- Most searched terms
- Most filtered positions/crimes
- User feedback received
- Media coverage or citations
- New entries added per month

---

**Checklist Version**: 1.0
**Last Updated**: 2025-11-17
**Deployment Ready**: When all boxes are checked ✅
