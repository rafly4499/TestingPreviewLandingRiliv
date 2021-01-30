const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const page = urlParams.get("page");

console.log(`riliv.page.link/${page}`);

var a = document.createElement("a");
a.target = "_blank";
a.href = `https://riliv.page.link/${page}`;
a.click();

if (page !== null) window.open(`https://riliv.page.link/${page}`, "_blank");
else window.location.replace(`https://riliv.co${queryString}`);
