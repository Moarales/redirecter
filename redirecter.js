const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const queryBing = urlParams.get("q");

if(queryBing){		
	const url = new URL("https://www.google.com/search");
	url.searchParams.set("q", queryBing)
	window.location.replace(url);
}
	
	
