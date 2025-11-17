/**
 * Misconduct Database - Main Application Script
 *
 * This script handles all client-side functionality including:
 * - Data filtering and searching
 * - DOM rendering with performance optimizations
 * - Dark mode
 * - Sorting
 * - Modal interactions
 */

// ===================================
// State Management
// ===================================

const appState = {
    allData: [],
    filteredData: [],
    currentFilters: {
        search: '',
        position: '',
        crime: '',
        tag: '',
        year: ''
    },
    currentSort: 'name-asc',
    darkMode: false
};

// ===================================
// DOM Elements
// ===================================

const elements = {
    searchInput: document.getElementById('searchInput'),
    positionFilter: document.getElementById('positionFilter'),
    crimeFilter: document.getElementById('crimeFilter'),
    tagFilter: document.getElementById('tagFilter'),
    yearFilter: document.getElementById('yearFilter'),
    sortSelect: document.getElementById('sortSelect'),
    resetButton: document.getElementById('resetFilters'),
    resultsContainer: document.getElementById('resultsContainer'),
    resultsCount: document.getElementById('resultsCount'),
    loadingState: document.getElementById('loadingState'),
    emptyState: document.getElementById('emptyState'),
    emptyStateReset: document.getElementById('emptyStateReset'),
    darkModeToggle: document.getElementById('darkModeToggle'),
    modal: document.getElementById('entryModal'),
    modalBody: document.getElementById('modalBody'),
    modalClose: document.getElementById('modalClose')
};

// ===================================
// Utility Functions
// ===================================

/**
 * Debounce function to limit how often a function is called
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Extract unique values from data for filter dropdowns
 */
function getUniqueValues(data, key) {
    const values = new Set();
    data.forEach(entry => {
        if (Array.isArray(entry[key])) {
            entry[key].forEach(val => values.add(val));
        } else if (entry[key] !== null && entry[key] !== undefined) {
            values.add(entry[key]);
        }
    });
    return Array.from(values).sort();
}

/**
 * Populate filter dropdowns with unique values
 */
function populateFilters(data) {
    // Populate position filter
    const positions = getUniqueValues(data, 'position');
    populateSelect(elements.positionFilter, positions);

    // Populate crime filter
    const crimes = getUniqueValues(data, 'crime');
    populateSelect(elements.crimeFilter, crimes);

    // Populate tag filter
    const tags = getUniqueValues(data, 'tags');
    populateSelect(elements.tagFilter, tags);

    // Populate year filter
    const years = getUniqueValues(data, 'year').filter(year => year !== null);
    populateSelect(elements.yearFilter, years, true);
}

/**
 * Populate a select element with options
 */
function populateSelect(selectElement, values, isNumeric = false) {
    // Keep the default "All" option
    const defaultOption = selectElement.querySelector('option[value=""]');
    selectElement.innerHTML = '';
    selectElement.appendChild(defaultOption);

    values.forEach(value => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        selectElement.appendChild(option);
    });
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===================================
// Filtering and Searching Logic
// ===================================

/**
 * Filter data based on current filter state
 */
function filterData() {
    let filtered = [...appState.allData];

    // Apply search filter
    if (appState.currentFilters.search) {
        const searchTerm = appState.currentFilters.search.toLowerCase();
        filtered = filtered.filter(entry => {
            const nameMatch = entry.name.toLowerCase().includes(searchTerm);
            const descMatch = entry.description.toLowerCase().includes(searchTerm);
            const tagMatch = entry.tags.some(tag => tag.toLowerCase().includes(searchTerm));
            return nameMatch || descMatch || tagMatch;
        });
    }

    // Apply position filter
    if (appState.currentFilters.position) {
        filtered = filtered.filter(entry =>
            entry.position.includes(appState.currentFilters.position)
        );
    }

    // Apply crime filter
    if (appState.currentFilters.crime) {
        filtered = filtered.filter(entry =>
            entry.crime.includes(appState.currentFilters.crime)
        );
    }

    // Apply tag filter
    if (appState.currentFilters.tag) {
        filtered = filtered.filter(entry =>
            entry.tags.includes(appState.currentFilters.tag)
        );
    }

    // Apply year filter
    if (appState.currentFilters.year) {
        filtered = filtered.filter(entry =>
            entry.year === parseInt(appState.currentFilters.year)
        );
    }

    appState.filteredData = filtered;
    sortData();
}

/**
 * Sort filtered data based on current sort option
 */
function sortData() {
    const sorted = [...appState.filteredData];

    switch (appState.currentSort) {
        case 'name-asc':
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            sorted.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'year-desc':
            sorted.sort((a, b) => {
                if (a.year === null) return 1;
                if (b.year === null) return -1;
                return b.year - a.year;
            });
            break;
        case 'year-asc':
            sorted.sort((a, b) => {
                if (a.year === null) return 1;
                if (b.year === null) return -1;
                return a.year - b.year;
            });
            break;
    }

    appState.filteredData = sorted;
    renderResults();
}

// ===================================
// DOM Rendering
// ===================================

/**
 * Create HTML for a single card
 */
function createCardHTML(entry) {
    const positions = entry.position.map(p =>
        `<span class="badge position">${escapeHtml(p)}</span>`
    ).join('');

    const crimes = entry.crime.map(c =>
        `<span class="badge crime">${escapeHtml(c)}</span>`
    ).join('');

    const tags = entry.tags.map(t =>
        `<span class="badge tag">${escapeHtml(t)}</span>`
    ).join('');

    const sources = entry.sources.map((url, index) =>
        `<a href="${escapeHtml(url)}" class="source-link" target="_blank" rel="noopener noreferrer">Source ${index + 1}</a>`
    ).join('');

    const yearDisplay = entry.year ? entry.year : 'Year Unknown';

    // Truncate description for card view
    const maxDescLength = 200;
    const truncatedDesc = entry.description.length > maxDescLength
        ? entry.description.substring(0, maxDescLength) + '...'
        : entry.description;

    return `
        <article class="card" data-id="${entry.id}" role="button" tabindex="0" aria-label="View details for ${escapeHtml(entry.name)}">
            <div class="card-header">
                <h2 class="card-name">${escapeHtml(entry.name)}</h2>
                <span class="card-year">${yearDisplay}</span>
            </div>

            <div class="card-section">
                <div class="card-label">Position(s)</div>
                <div class="card-positions">${positions}</div>
            </div>

            <div class="card-section">
                <div class="card-label">Allegation(s)</div>
                <div class="card-crimes">${crimes}</div>
            </div>

            ${tags ? `
            <div class="card-section">
                <div class="card-label">Tags</div>
                <div class="card-tags">${tags}</div>
            </div>
            ` : ''}

            <div class="card-section">
                <div class="card-label">Description</div>
                <p class="card-description">${escapeHtml(truncatedDesc)}</p>
            </div>

            <div class="card-sources">
                <div class="card-label">Sources</div>
                ${sources}
            </div>
        </article>
    `;
}

/**
 * Render results to DOM with performance optimization
 */
function renderResults() {
    const container = elements.resultsContainer;
    const count = appState.filteredData.length;

    // Update results count
    elements.resultsCount.textContent = `Showing ${count} ${count === 1 ? 'entry' : 'entries'}`;

    // Hide loading state
    elements.loadingState.style.display = 'none';

    // Show/hide empty state
    if (count === 0) {
        elements.emptyState.style.display = 'block';
        container.style.display = 'none';
        return;
    } else {
        elements.emptyState.style.display = 'none';
        container.style.display = 'grid';
    }

    // Use DocumentFragment for better performance
    const fragment = document.createDocumentFragment();
    const tempDiv = document.createElement('div');

    // Batch create cards
    const cardsHTML = appState.filteredData.map(entry => createCardHTML(entry)).join('');
    tempDiv.innerHTML = cardsHTML;

    // Move all cards to fragment
    while (tempDiv.firstChild) {
        fragment.appendChild(tempDiv.firstChild);
    }

    // Single DOM update
    container.innerHTML = '';
    container.appendChild(fragment);

    // Add click handlers to cards
    attachCardEventListeners();
}

/**
 * Attach event listeners to cards for modal opening
 */
function attachCardEventListeners() {
    const cards = elements.resultsContainer.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', handleCardClick);
        card.addEventListener('keypress', handleCardKeyPress);
    });
}

// ===================================
// Modal Functionality
// ===================================

/**
 * Handle card click to open modal
 */
function handleCardClick(event) {
    // Don't open modal if clicking on a link
    if (event.target.tagName === 'A') {
        return;
    }

    const cardId = parseInt(this.dataset.id);
    openModal(cardId);
}

/**
 * Handle keyboard navigation for cards
 */
function handleCardKeyPress(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        const cardId = parseInt(this.dataset.id);
        openModal(cardId);
    }
}

/**
 * Open modal with entry details
 */
function openModal(entryId) {
    const entry = appState.allData.find(e => e.id === entryId);
    if (!entry) return;

    const positions = entry.position.map(p =>
        `<span class="badge position">${escapeHtml(p)}</span>`
    ).join('');

    const crimes = entry.crime.map(c =>
        `<span class="badge crime">${escapeHtml(c)}</span>`
    ).join('');

    const tags = entry.tags.map(t =>
        `<span class="badge tag">${escapeHtml(t)}</span>`
    ).join('');

    const sources = entry.sources.map((url, index) =>
        `<a href="${escapeHtml(url)}" class="source-link" target="_blank" rel="noopener noreferrer">Source ${index + 1}</a>`
    ).join('');

    const yearDisplay = entry.year ? entry.year : 'Year Unknown';

    elements.modalBody.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title" id="modalTitle">${escapeHtml(entry.name)}</h2>
            <span class="modal-year">${yearDisplay}</span>
        </div>

        <div class="modal-section">
            <div class="card-label">Position(s)</div>
            <div class="card-positions">${positions}</div>
        </div>

        <div class="modal-section">
            <div class="card-label">Allegation(s)</div>
            <div class="card-crimes">${crimes}</div>
        </div>

        ${tags ? `
        <div class="modal-section">
            <div class="card-label">Tags</div>
            <div class="card-tags">${tags}</div>
        </div>
        ` : ''}

        <div class="modal-section">
            <div class="card-label">Description</div>
            <p class="modal-description">${escapeHtml(entry.description)}</p>
        </div>

        <div class="modal-section">
            <div class="card-label">Sources</div>
            ${sources}
        </div>
    `;

    elements.modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Focus on close button for accessibility
    elements.modalClose.focus();
}

/**
 * Close modal
 */
function closeModal() {
    elements.modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ===================================
// Dark Mode
// ===================================

/**
 * Toggle dark mode
 */
function toggleDarkMode() {
    appState.darkMode = !appState.darkMode;
    document.body.classList.toggle('dark-mode', appState.darkMode);

    // Update button icon
    const icon = elements.darkModeToggle.querySelector('.icon');
    icon.textContent = appState.darkMode ? '☀️' : '🌙';

    // Save preference to localStorage
    localStorage.setItem('darkMode', appState.darkMode);
}

/**
 * Load dark mode preference from localStorage
 */
function loadDarkModePreference() {
    const savedPreference = localStorage.getItem('darkMode');
    if (savedPreference === 'true') {
        appState.darkMode = true;
        document.body.classList.add('dark-mode');
        const icon = elements.darkModeToggle.querySelector('.icon');
        icon.textContent = '☀️';
    }
}

// ===================================
// Event Handlers
// ===================================

/**
 * Handle search input
 */
const handleSearch = debounce(() => {
    appState.currentFilters.search = elements.searchInput.value;
    filterData();
}, 300);

/**
 * Handle filter changes
 */
function handleFilterChange() {
    appState.currentFilters.position = elements.positionFilter.value;
    appState.currentFilters.crime = elements.crimeFilter.value;
    appState.currentFilters.tag = elements.tagFilter.value;
    appState.currentFilters.year = elements.yearFilter.value;
    filterData();
}

/**
 * Handle sort change
 */
function handleSortChange() {
    appState.currentSort = elements.sortSelect.value;
    sortData();
}

/**
 * Reset all filters
 */
function resetFilters() {
    elements.searchInput.value = '';
    elements.positionFilter.value = '';
    elements.crimeFilter.value = '';
    elements.tagFilter.value = '';
    elements.yearFilter.value = '';
    elements.sortSelect.value = 'name-asc';

    appState.currentFilters = {
        search: '',
        position: '',
        crime: '',
        tag: '',
        year: ''
    };
    appState.currentSort = 'name-asc';

    filterData();
}

// ===================================
// Event Listeners
// ===================================

function attachEventListeners() {
    // Search
    elements.searchInput.addEventListener('input', handleSearch);

    // Filters
    elements.positionFilter.addEventListener('change', handleFilterChange);
    elements.crimeFilter.addEventListener('change', handleFilterChange);
    elements.tagFilter.addEventListener('change', handleFilterChange);
    elements.yearFilter.addEventListener('change', handleFilterChange);

    // Sort
    elements.sortSelect.addEventListener('change', handleSortChange);

    // Reset buttons
    elements.resetButton.addEventListener('click', resetFilters);
    elements.emptyStateReset.addEventListener('click', resetFilters);

    // Dark mode
    elements.darkModeToggle.addEventListener('click', toggleDarkMode);

    // Modal
    elements.modalClose.addEventListener('click', closeModal);
    elements.modal.addEventListener('click', (e) => {
        if (e.target === elements.modal) {
            closeModal();
        }
    });

    // Keyboard navigation for modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && elements.modal.style.display === 'flex') {
            closeModal();
        }
    });
}

// ===================================
// Initialization
// ===================================

/**
 * Initialize the application
 */
function init() {
    // Check if DATA is available
    if (typeof DATA === 'undefined') {
        console.error('DATA is not defined. Make sure data.js is loaded before script.js');
        elements.loadingState.innerHTML = '<p>Error: Database not found.</p>';
        return;
    }

    // Store data in state
    appState.allData = DATA;
    appState.filteredData = DATA;

    // Load dark mode preference
    loadDarkModePreference();

    // Populate filter dropdowns
    populateFilters(DATA);

    // Attach event listeners
    attachEventListeners();

    // Initial render
    filterData();

    console.log(`Loaded ${DATA.length} entries`);
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
