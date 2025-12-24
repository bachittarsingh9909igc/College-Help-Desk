/* Section show/hide */
function showSection(id) {
  let sections = document.querySelectorAll(".box");
  sections.forEach(section => {
    section.classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
}

/* Submit Help Query */
function submitQuery() {
  let q = document.getElementById("query").value;
  if (q === "") {
    alert("Please enter your query");
  } else {
    document.getElementById("msg").innerText =
      "Your query has been submitted. We will contact you soon.";
    document.getElementById("query").value = "";
  }
}

/* Dynamic Notice Search */
function searchNotice() {
  let input = document.getElementById("search").value.toLowerCase();
  let items = document.querySelectorAll("#notice-list li");

  items.forEach(function(i) {
    if (i.innerText.toLowerCase().includes(input)) {
      i.style.display = "list-item";
    } else {
      i.style.display = "none";
    }
  });
}function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
