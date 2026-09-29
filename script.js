// write js code here if required
const timer = document.getElementById("timer");
const PAD = false; // true => 05/09/2026, 09:05:07

const f = (n) => (PAD ? String(n).padStart(2, "0") : n);

function tick() {
  const d = new Date();
  timer.textContent =
    `${f(d.getDate())}/${f(d.getMonth() + 1)}/${d.getFullYear()}, ` +
    `${f(d.getHours())}:${f(d.getMinutes())}:${f(d.getSeconds())}`;
  setTimeout(tick, 1000 - d.getMilliseconds());
}

tick();