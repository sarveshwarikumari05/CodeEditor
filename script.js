const tabs = document.querySelectorAll(".tab");
const editors = document.querySelectorAll(".code");
const output = document.getElementById("output");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    editors.forEach(e => e.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

editors.forEach(editor => {
  editor.addEventListener("input", runCode);
});

function runCode() {
  const html = document.getElementById("html").value;
  const css = `<style>${document.getElementById("css").value}</style>`;
  const js = `<script>${document.getElementById("js").value}<\/script>`;

  output.srcdoc = html + css + js;
}

runCode(); // initial load
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("light");

  toggle.nextElementSibling.textContent =
    document.body.classList.contains("light") ? "☀️" : "🌙";
});
