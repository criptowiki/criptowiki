// Show/hide results when user types in search input
document.getElementById("site-search-input").addEventListener("keyup", displayResults);
function displayResults() {

	let input = document.getElementById("site-search-input").value;
    if (!input) {
    	// No search
    	document.getElementById("site-search-results-box").style.display = "none";
    	document.getElementById("page-content").style.display = "block";
    } else {
    	// Searching
    	document.getElementById("site-search-results-box").style.display = "block";
    	document.getElementById("page-content").style.display = "none";
    }

}

SimpleJekyllSearch({
	searchInput: document.getElementById('site-search-input'),
	resultsContainer: document.getElementById('site-search-results'),
	json: sitebaseURL + '/search.json',
	searchResultTemplate: '<div><a href="{url}">{title}</a><span>{date}</span></div>'
})