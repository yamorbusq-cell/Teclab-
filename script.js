// === Banco de preguntas ===
// Si existe OFFICIAL_QUESTIONS (inyectado por otro archivo), lo usamos;
// si no, mostramos un pequeño ejemplo de muestra.
const DEFAULT_QUESTIONS = [
  { id: 1, theme: "Tema 1", subtheme: "1 – Calibración y control de calidad", text: "El error aleatorio se evalúa con:", answers: ["Sesgo", "Desviación estándar/CV", "Ajuste de calibración", "Controles externos"], correct: 1, explanation: "La imprecisión (error aleatorio) se mide mediante la dispersión: DE o CV." },
  { id: 2, theme: "Tema 1", subtheme: "2 – Estadística diagnóstica y rendimiento de las pruebas", text: "Si aumenta la prevalencia, el VPP tiende a:", answers: ["Bajar", "Subir", "Quedar igual", "No se ve afectado"], correct: 1, explanation: "Con mayor prevalencia, el VPP aumenta y el VPN disminuye." },
  { id: 3, theme: "Tema 1", subtheme: "4 – Unidades, concentraciones y diluciones", text: "Para preparar una dilución 1/5, ¿qué opción es correcta?", answers: ["1 parte de soluto + 4 de disolvente", "1 de soluto + 5 de disolvente", "4 de soluto + 1 disolvente", "5 de soluto + 1 disolvente"], correct: 0, explanation: "1/5 equivale a 1 parte de soluto y 4 de disolvente (total 5 partes)." },
];
const QUESTIONS = (typeof OFFICIAL_QUESTIONS !== "undefined" && Array.isArray(OFFICIAL_QUESTIONS) && OFFICIAL_QUESTIONS.length>0)
  ? OFFICIAL_QUESTIONS : DEFAULT_QUESTIONS;

// === Estado ===
let currentTest = [];
let currentIndex = 0;
let correctCount = 0;
let userAnswers = [];
const PASS_THRESHOLD = 0.5;

// === Temas y subtemas visibles en portada (para el selector dinámico) ===
const SUBTHEMES = {
  "Tema 1": [
    "Todos",
    "1 ★ Calibración y control de calidad",
    "2 ★ Estadística diagnóstica y rendimiento de las pruebas",
    "3 ★ Intervalos de referencia y variabilidad biológica",
    "4 ★ Unidades, concentraciones y diluciones",
    "5 ★ Preanalítica (muestras, suero y plasma)"
  ],
  "Tema 2": [
    "Todos",
    "1 ★ Líquido cefalorraquídeo (LCR)",
    "2 ★ Líquidos serosos (pleural, pericárdico, peritoneal)",
    "3 ★ Líquido sinovial"
  ],
  "Tema 3": [
    "Todos",
    "1 ★ Función renal y sistemático de orina",
    "2 ★ Proteinuria y métodos",
    "3 ★ Sedimento urinario (atlas)"
  ],
  "Tema 4": [
    "Todos",
    "1 ★ Digestión y macronutrientes",
    "2 ★ Fisiología digestiva esencial",
    "3 ★ Heces: preanalítica y pruebas"
  ]
};


// === Utilidades ===
function shuffle(arr){ return arr.map(v=>[Math.random(),v]).sort((a,b)=>a[0]-b[0]).map(p=>p[1]); }
function showFeedback(msg, cls){
  const box = document.getElementById("feedback");
  box.className = "feedback " + (cls||"");
  box.textContent = msg || "";
}

// === Render ===
function renderQuestion(){
  const q = currentTest[currentIndex];
  const qText = document.getElementById("question-text");
  const answers = document.getElementById("answers-list");
  qText.textContent = `${currentIndex+1}. ${q.text}`;
  answers.innerHTML = "";
  q.answers.forEach((ans, i)=>{
    const id = `ans_${currentIndex}_${i}`;
    const label = document.createElement("label");
    label.innerHTML = `<input type="radio" name="answer" value="${i}" id="${id}"> ${ans}`;
    answers.appendChild(label);
  });
  showFeedback("");
}

function renderImmediateControls(){
  const controls = document.getElementById("controls");
  controls.innerHTML = "";
  const nextLink = document.createElement("a");
  nextLink.id = "next-link";
  nextLink.href = "#";
  nextLink.className = "link-next";
  nextLink.textContent = "Siguiente →";
  controls.appendChild(nextLink);

  nextLink.addEventListener("click", (e)=>{
    e.preventDefault();
    const selected = document.querySelector('input[name="answer"]:checked');
    if(!selected){ showFeedback("Selecciona una opción antes de continuar.", "warn"); return; }

    const chosen = parseInt(selected.value,10);
    userAnswers[currentIndex] = chosen;
    const q = currentTest[currentIndex];
    const ok = chosen === q.correct;
    if(ok) correctCount++;
    const exp = q.explanation || "Revisa el temario para más detalles.";
    showFeedback((ok ? "✅ Correcto. " : "❌ Incorrecto. ")+exp, ok ? "ok" : "bad");

    setTimeout(()=>{
      currentIndex++;
      if(currentIndex >= currentTest.length){ showResults(); }
      else { renderQuestion(); renderImmediateControls(); }
    }, 900);
  });
}

function renderExamControls(){
  const controls = document.getElementById("controls");
  controls.innerHTML = "";
  const nextBtn = document.createElement("button");
  nextBtn.type = "button";
  nextBtn.textContent = "Siguiente →";
  controls.appendChild(nextBtn);

  nextBtn.addEventListener("click", ()=>{
    const selected = document.querySelector('input[name="answer"]:checked');
    userAnswers[currentIndex] = selected ? parseInt(selected.value,10) : -1;
    currentIndex++;
    if(currentIndex >= currentTest.length){ showResults(); }
    else { renderQuestion(); }
  });
}

function showResults(){
  document.getElementById("quiz-section").hidden = true;
  document.getElementById("config-section").hidden = true;
  document.getElementById("results-section").hidden = false;
  const pct = (correctCount / currentTest.length) * 100;
  const final = document.getElementById("final-score");
  final.textContent = `Has acertado ${correctCount} de ${currentTest.length} (${pct.toFixed(1)}%).`;
  final.classList.remove("result-pass","result-fail");
  if ((pct/100) >= PASS_THRESHOLD) final.classList.add("result-pass"); else final.classList.add("result-fail");

  const review = document.getElementById("review");
  review.innerHTML = "";
  currentTest.forEach((q, i)=>{
    const your = userAnswers[i];
    const ok = your === q.correct;
    const div = document.createElement("div");
    div.className = "card";
    const exp = q.explanation || "";
    div.innerHTML = `<p><strong>${i+1}. ${q.text}</strong></p>
      <p>Tu respuesta: ${your>=0 ? q.answers[your] : "—"}</p>
      <p>Correcta: ${q.answers[q.correct]}</p>
      ${exp ? `<p class="${ok?'feedback ok':'feedback bad'}">${ok?'✔':'✖'} ${exp}</p>` : ""}`;
    review.appendChild(div);
  });
}

function resetApp(){
  currentTest = []; currentIndex = 0; correctCount = 0; userAnswers = [];
  document.getElementById("config-section").hidden = false;
  document.getElementById("quiz-section").hidden = true;
  document.getElementById("results-section").hidden = true;
  const finishBtn = document.getElementById("finish-btn");
  if (finishBtn) finishBtn.hidden = true;
}

function finishTestEarly(){
  if (!currentTest.length) return;
  const selected = document.querySelector('input[name="answer"]:checked');
  if (selected) userAnswers[currentIndex] = parseInt(selected.value,10);
  for(let i=currentIndex+1;i<currentTest.length;i++){ if(typeof userAnswers[i]==='undefined') userAnswers[i] = -1; }
  showResults();
}

// === Inicio ===

function populateThemesAndSubthemes(){
  const themeSel = document.getElementById("theme");
  const subSel = document.getElementById("subtheme");
  if (!themeSel || !subSel) return;

  themeSel.innerHTML = "";
  Object.keys(SUBTHEMES).forEach(t=>{
    const opt = document.createElement("option");
    opt.value = t; opt.textContent = t;
    themeSel.appendChild(opt);
  });

  const loadSubs = ()=>{
    const t = themeSel.value;
    subSel.innerHTML = "";
    (SUBTHEMES[t] || ["Todos"]).forEach(s=>{
      const opt = document.createElement("option");
      opt.value = s; opt.textContent = s;
      subSel.appendChild(opt);
    });
    const orderFs = document.getElementById("order-fieldset");
    if (orderFs) orderFs.style.display = (subSel.value === "Todos") ? "" : "none";
  };

  themeSel.addEventListener("change", loadSubs);
  subSel.addEventListener("change", loadSubs);
  loadSubs(); // inicial
}

function init(){
  document.getElementById("restart-btn").addEventListener("click", resetApp);
  const inicioBtn = document.getElementById("nav-inicio-btn");
  if (inicioBtn) inicioBtn.addEventListener("click", resetApp);
  const finishBtn = document.getElementById("finish-btn");
  if (finishBtn) finishBtn.addEventListener("click", finishTestEarly);

  const form = document.getElementById("config-form");
  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    // recoger config
    const subSel = document.getElementById("subtheme").value;
    const mode = document.querySelector('input[name="mode"]:checked').value;
    const n = Math.max(1, Math.min(100, parseInt(document.getElementById("num-questions").value || "10", 10)));

    // filtrar preguntas
    let pool = QUESTIONS.filter(q=>q.theme==="Tema 1");
    if (subSel && subSel !== "Todos"){ pool = pool.filter(q=>q.subtheme===subSel); }
    pool = shuffle(pool).slice(0, n);

    currentTest = pool; currentIndex = 0; correctCount = 0; userAnswers = [];
    document.getElementById("config-section").hidden = true;
    document.getElementById("quiz-section").hidden = true; // evita parpadeo
    document.getElementById("results-section").hidden = true;

    // Preparar UI
    document.getElementById("quiz-title").textContent = `${mode === "immediate" ? "Test (modo inmediato)" : "Test (modo examen)"}`;
    document.getElementById("quiz-section").hidden = false;
    const fbtn = document.getElementById("finish-btn"); if (fbtn) fbtn.hidden = false;

    // Pintar primera pregunta + controles adecuados
    renderQuestion();
    if (mode === "immediate") renderImmediateControls(); else renderExamControls();
  });
}
document.addEventListener("DOMContentLoaded", function init(){
  populateThemesAndSubthemes();
});
