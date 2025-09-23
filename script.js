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
// === Explicación breve automática (si no hay q.explanation) ===
function getAutoExplanation(q){
  const txt = (q.text || "").toLowerCase() + " " + (q.answers||[]).join(" ").toLowerCase();
  const st = (q.subtheme || "").toLowerCase();

  // Utilidades
  const has = (re)=> re.test(txt);

  // Por subtema principal
  if (st.includes("calibración") || st.includes("control de calidad")){
    if (has(/\b(cv|desviaci[oó]n est[aá]ndar|precisi[oó]n|imprecisi[oó]n|sesgo)\b/)){
      return "La corrección se basa en conceptos de calidad: la imprecisión se mide con DE/CV y el sesgo refleja error sistemático; el control de calidad detecta desviaciones.";
    }
    return "En control/calibración importan precisión (DE/CV), sesgo y verificación con controles y trazabilidad a patrones.";
  }
  if (st.includes("estadística") || st.includes("rendimiento")){
    if (has(/\b(sensibilidad|especificidad|vpp|vpn|roc|prevalenc|fals[oa]s?|vp|vn)\b/)){
      return "Recuerda: SE = VP/(VP+FN), SP = VN/(VN+FP); al subir la prevalencia aumenta el VPP y disminuye el VPN. La ROC compara SE frente a 1−SP.";
    }
    return "Rendimiento diagnóstico: sensibilidad y especificidad definen la capacidad del test; los valores predictivos dependen de la prevalencia.";
  }
  if (st.includes("intervalos de referencia") || st.includes("variabilidad")){
    return "Intervalos de referencia: suelen derivar de población sana (percentiles); el VRC combina variabilidad analítica y biológica para detectar cambios reales.";
  }
  if (st.includes("unidades") || st.includes("diluciones")){
    if (has(/\bc1.*v1.*c2.*v2\b/)){
      return "Usa la relación C1·V1 = C2·V2 para calcular diluciones y preparar soluciones con la concentración deseada.";
    }
    if (has(/\bmol|molar|molal|normalidad|equivalente|osmolar|osmolal\b/)){
      return "Repasa unidades: molaridad (mol/L), molalidad (mol/kg), normalidad (equivalentes/L) y relaciones de equivalentes según la reacción.";
    }
    return "En cálculos de soluciones aplicar proporciones y C1·V1=C2·V2; cuidado con unidades y factores de dilución.";
  }
  if (st.includes("preanalítica") || st.includes("muestras")){
    if (has(/\bedta|heparina|citrato|tubo|rechazo|hem[oó]lisis|lipemia|ictericia|ayuno|transporte\b/)){
      return "Preanalítica: identifica y prepara correctamente la muestra (tubo/anticoagulante adecuado), evita interferencias (hemólisis, lipemia) y sigue criterios de rechazo.";
    }
    return "La fase preanalítica (identificación, contenedor, transporte y estabilidad) condiciona la validez del resultado analítico.";
  }

  // Por palabras clave si subtema no ayuda
  if (has(/\b(roc|vpp|vpn|sensibilidad|especificidad)\b/)){
    return "SE/SP miden capacidad intrínseca; VPP/VPN dependen de la prevalencia. La ROC muestra el rendimiento global.";
  }
  if (has(/\bc1.*v1.*c2.*v2|diluci[oó]n|molar|normalidad|equivalente\b/)){
    return "Para diluciones y concentraciones aplica C1·V1=C2·V2 y cuida las unidades.";
  }
  if (has(/\b(edta|heparina|citrato|tubo|rechazo|hem[oó]lisis|preanal[ií]tica)\b/)){
    return "Selecciona el tubo/anticoagulante correcto y respeta la preanalítica para evitar errores de resultado.";
  }
  if (has(/\b(de|cv|precisi[oó]n|sesgo|calibr)\b/)){
    return "Imprecisión → DE/CV; sesgo → diferencia sistemática; controles y calibración aseguran calidad.";
  }

  // Fallback neutro
  return "";
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
  nextLink.textContent = "Corregir →";
  controls.appendChild(nextLink);

  let graded = false;

  nextLink.addEventListener("click", (e)=>{
    e.preventDefault();
    const selected = document.querySelector('input[name="answer"]:checked');
    if(!selected){ showFeedback("Selecciona una opción antes de continuar.", "warn"); return; }

    const q = currentTest[currentIndex];
    const chosen = parseInt(selected.value,10);

    if (!graded){
      userAnswers[currentIndex] = chosen;
      const ok = chosen === q.correct;
      if (ok) correctCount++;

      const correctText = (typeof q.correct === "number" && q.correct >= 0 && q.answers[q.correct])
        ? q.answers[q.correct]
        : "";
      let exp = (q.explanation && q.explanation.trim()) ? q.explanation.trim() : "";
      if (!exp && typeof getAutoExplanation === "function"){ exp = getAutoExplanation(q); }

      let msg = ok ? "✅ Correcto." : "❌ Incorrecto.";
      if (correctText) msg += " Correcta: " + correctText;
      if (exp) msg += " · " + exp;
      showFeedback(msg, ok ? "ok" : "bad");

      document.querySelectorAll('input[name="answer"]').forEach(inp => inp.disabled = true);

      graded = true;
      nextLink.textContent = "Siguiente →";
      return;
    }

    currentIndex++;
    if(currentIndex >= currentTest.length){ showResults(); }
    else { renderQuestion(); renderImmediateControls(); }
  });
}

function renderExamControls(){
{
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
      ${(exp || getAutoExplanation(q)) ? `<p class="${ok?'feedback ok':'feedback bad'}">${ok?'✔':'✖'} ${(exp || getAutoExplanation(q))}</p>` : ""}`;
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


document.addEventListener("DOMContentLoaded", init);
