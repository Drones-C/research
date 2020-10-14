var a = $("body > chrome > div > mat-sidenav-container > mat-sidenav-content > div > discover > page-layout > div > div > div.advanced-search-container.layout-row > section.results-container > results > div > div > div.flex.layout-fill.cb-relative.cb-background-white > sheet-grid > div > div > grid-body > div")

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

download("a.html",a.innerHTML);