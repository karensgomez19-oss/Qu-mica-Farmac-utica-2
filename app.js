const estado = JSON.parse(localStorage.getItem("aprobadas")) || [];

const todas = {};
Object.values(malla).flat().forEach(m => todas[m.id] = m);

function puedeTomar(m) {
  return m.pr.every(p => estado.includes(p)) &&
         m.co.every(c => estado.includes(c));
}

const cont = document.getElementById("malla");

for (const nivel in malla) {
  const h = document.createElement("h2");
  h.textContent = nivel;
  cont.appendChild(h);

  const grid = document.createElement("div");
  grid.className = "grid";

  malla[nivel].forEach(m => {
    const div = document.createElement("div");
    div.className = "materia";
    div.textContent = `${m.id} – ${m.nombre}`;

    if (estado.includes(m.id)) div.classList.add("aprobada");
    else if (!puedeTomar(m)) div.classList.add("bloqueada");

    div.onclick = () => {
      if (div.classList.contains("bloqueada")) return;
      if (!estado.includes(m.id)) estado.push(m.id);
      localStorage.setItem("aprobadas", JSON.stringify(estado));
      location.reload();
    };

    grid.appendChild(div);
  });

  cont.appendChild(grid);
}
