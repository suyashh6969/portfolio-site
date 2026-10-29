// Typing effect in the hero tagline
const phrases = ["Python & Java developer", "AI + hardware tinkerer", "Arduino beginner"];
const typingEl = document.getElementById("typing");
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const current = phrases[phraseIndex];
  typingEl.textContent = current.slice(0, charIndex);

  if (!deleting && charIndex < current.length) {
    charIndex++;
    setTimeout(type, 90);
  } else if (!deleting) {
    deleting = true;
    setTimeout(type, 1400);
  } else if (charIndex > 0) {
    charIndex--;
    setTimeout(type, 45);
  } else {
    deleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 300);
  }
}
type();

// Dark mode toggle, remembered between visits
const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");

try {
  const saved = localStorage.getItem("theme");
  if (saved) root.setAttribute("data-theme", saved);
} catch (e) { /* storage unavailable, ignore */ }

toggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("theme", next); } catch (e) {}
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Live GitHub repositories
const GITHUB_USER = "suyashh6969";
const repoList = document.getElementById("repo-list");

function showRepoMessage(text) {
  repoList.textContent = "";
  const p = document.createElement("p");
  p.className = "muted";
  p.textContent = text;
  repoList.appendChild(p);
}

function repoCard(repo) {
  const card = document.createElement("article");
  card.className = "card";

  const title = document.createElement("h3");
  title.textContent = repo.name;

  const desc = document.createElement("p");
  desc.textContent = repo.description || "No description yet.";

  const meta = document.createElement("p");
  meta.className = "repo-line";
  const parts = [];
  if (repo.language) parts.push(repo.language);
  parts.push("Updated " + new Date(repo.pushed_at || repo.updated_at)
    .toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }));
  meta.textContent = parts.join(" · ");

  const link = document.createElement("a");
  link.href = repo.html_url;
  link.textContent = "View on GitHub →";

  card.append(title, desc, meta, link);
  return card;
}

async function loadRepos() {
  try {
    const res = await fetch(
      "https://api.github.com/users/" + GITHUB_USER + "/repos?sort=pushed&per_page=6"
    );
    if (!res.ok) throw new Error("GitHub returned " + res.status);
    const repos = (await res.json()).filter((r) => !r.fork).slice(0, 4);
    if (!repos.length) {
      showRepoMessage("No public repositories yet.");
      return;
    }
    repoList.textContent = "";
    repos.forEach((r) => repoList.appendChild(repoCard(r)));
  } catch (e) {
    showRepoMessage("Couldn't load repositories right now. See them on GitHub below.");
  }
}
loadRepos();
