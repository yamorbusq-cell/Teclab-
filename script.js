/*
 * script.js
 *
 * Este archivo contiene la lógica de la aplicación de test para oposiciones.
 * Define un conjunto de preguntas de ejemplo y gestiona la interacción
 * con la interfaz del usuario para iniciar test por temática o aleatorios,
 * proporcionar corrección inmediata o al final del examen, y mostrar
 * resultados de una forma sencilla.
 *
 * Para añadir tus propias preguntas, edita la constante `QUESTIONS` de abajo.
 * Cada pregunta es un objeto con las siguientes propiedades:
 *  - category: cadena que indica la temática de la pregunta.
 *  - text: el enunciado de la pregunta.
 *  - answers: un array de objetos con campos `text` y `correct` (true/false).
 *  - explanation: una cadena opcional que se mostrará en la retroalimentación.
 */

// =====================
// Banco de preguntas
// =====================

// Definimos aquí un conjunto de preguntas de ejemplo agrupadas por temas y subtemas.
// En versiones anteriores estas preguntas ficticias servían como demostración.  Para
// permitir el uso de un banco oficial de preguntas (por ejemplo, las preguntas
// extraídas del PDF "Tema1_Preguntas_1_50_CORREGIDO.pdf"), se introduce una
// constante alternativa `OFFICIAL_QUESTIONS` en el archivo `questions_official.js`.
// Si dicha constante está definida en el ámbito global, la aplicación la usará en
// lugar de estas preguntas de ejemplo.  De lo contrario, se utilizarán las
// preguntas definidas aquí como `DEFAULT_QUESTIONS`.

// Banco de preguntas estructurado por temas y subtemas. Cada objeto contiene
// las propiedades `tema` (Tema 1, Tema 2, etc.), `subtema` (Subtema 1, Subtema 2... o
// null/undefined para temas sin subtemas), `text`, `answers` y `explanation`.
const DEFAULT_QUESTIONS = [
  // Tema 1 - Subtema 1 (5 preguntas)
  {
    id: 1,
    tema: "Tema 1",
    subtema: "Hematología y preanalítica",
    text: "¿Qué instrumento se utiliza para calibrar un equipo de medición?",
    answers: [
      { text: "Control interno", correct: false },
      { text: "Calibrador", correct: true },
      { text: "Muestra problema", correct: false },
      { text: "Blanco", correct: false },
    ],
    explanation:
      "El calibrador es un material de referencia que se emplea para ajustar y comprobar la medición del equipo.",
  },
  {
    id: 2,
    tema: "Tema 1",
    subtema: "Hematología y preanalítica",
    text: "¿Cuál de estos no pertenece al linaje mieloide?",
    answers: [
      { text: "Eritrocito", correct: false },
      { text: "Neutrófilo", correct: false },
      { text: "Linfocito T", correct: true },
      { text: "Megacariocito", correct: false },
    ],
    explanation:
      "Los linfocitos pertenecen al linaje linfoide; las otras células derivan del linaje mieloide.",
  },
  {
    id: 3,
    tema: "Tema 1",
    subtema: "Hematología y preanalítica",
    text: "¿Qué parámetro del hemograma indica el tamaño medio de los glóbulos rojos?",
    answers: [
      { text: "Hematocrito", correct: false },
      { text: "Hemoglobina", correct: false },
      { text: "VCM (volumen corpuscular medio)", correct: true },
      { text: "RDW (amplitud de distribución eritrocitaria)", correct: false },
    ],
    explanation:
      "El VCM describe el tamaño medio de los eritrocitos; valores altos sugieren macrocitosis y valores bajos microcitosis.",
  },
  {
    id: 4,
    tema: "Tema 1",
    subtema: "Hematología y preanalítica",
    text: "¿Qué anticoagulante se utiliza en los tubos para hemograma?",
    answers: [
      { text: "EDTA", correct: true },
      { text: "Heparina", correct: false },
      { text: "Citrato", correct: false },
      { text: "Ninguno", correct: false },
    ],
    explanation:
      "El EDTA se utiliza para evitar la coagulación en las determinaciones hematológicas.",
  },
  {
    id: 5,
    tema: "Tema 1",
    subtema: "Hematología y preanalítica",
    text: "¿Qué color se asocia a los tubos con EDTA según la normativa?",
    answers: [
      { text: "Morado", correct: true },
      { text: "Verde", correct: false },
      { text: "Amarillo", correct: false },
      { text: "Azul", correct: false },
    ],
    explanation:
      "Los tubos de EDTA están identificados con tapón morado según la normativa ISO de codificación de tapones.",
  },

  // Tema 1 - Subtema 2 (5 preguntas)
  {
    id: 6,
    tema: "Tema 1",
    subtema: "Microbiología y biología molecular",
    text: "¿Qué técnica permite diferenciar bacterias grampositivas y gramnegativas?",
    answers: [
      { text: "Tinción de Gram", correct: true },
      { text: "Tinción de Ziehl-Neelsen", correct: false },
      { text: "Inmunofluorescencia", correct: false },
      { text: "ELISA", correct: false },
    ],
    explanation:
      "La tinción de Gram tiñe de diferente color la pared de las bacterias según su estructura, permitiendo diferenciar grampositivas y gramnegativas.",
  },
  {
    id: 7,
    tema: "Tema 1",
    subtema: "Microbiología y biología molecular",
    text: "¿Qué medio de cultivo es selectivo para hongos y levaduras?",
    answers: [
      { text: "Agar Sabouraud", correct: true },
      { text: "Agar sangre", correct: false },
      { text: "Agar chocolate", correct: false },
      { text: "Agar MacConkey", correct: false },
    ],
    explanation:
      "El agar Sabouraud posee un pH ácido que inhibe muchas bacterias y favorece el crecimiento de hongos y levaduras.",
  },
  {
    id: 8,
    tema: "Tema 1",
    subtema: "Microbiología y biología molecular",
    text: "¿Qué técnica se utiliza para amplificar fragmentos específicos de ADN?",
    answers: [
      { text: "PCR", correct: true },
      { text: "ELISA", correct: false },
      { text: "Hemaglutinación", correct: false },
      { text: "Western blot", correct: false },
    ],
    explanation:
      "La reacción en cadena de la polimerasa (PCR) permite obtener múltiples copias de un fragmento de ADN de interés.",
  },
  {
    id: 9,
    tema: "Tema 1",
    subtema: "Microbiología y biología molecular",
    text: "¿Cuál de los siguientes es un hongo patógeno?",
    answers: [
      { text: "Candida albicans", correct: true },
      { text: "Escherichia coli", correct: false },
      { text: "Staphylococcus aureus", correct: false },
      { text: "Bacillus cereus", correct: false },
    ],
    explanation:
      "Candida albicans es una levadura patógena; las otras opciones son bacterias.",
  },
  {
    id: 10,
    tema: "Tema 1",
    subtema: "Microbiología y biología molecular",
    text: "Tras la tinción de Gram, ¿qué color adoptan las bacterias grampositivas?",
    answers: [
      { text: "Violeta", correct: true },
      { text: "Rosa", correct: false },
      { text: "Verde", correct: false },
      { text: "Incoloras", correct: false },
    ],
    explanation:
      "La pared gruesa de peptidoglucano de las bacterias grampositivas retiene el cristal violeta, dándoles un color violeta intenso tras la tinción.",
  },

  // Tema 1 - Subtema 3 (5 preguntas)
  {
    id: 11,
    tema: "Tema 1",
    subtema: "Bioquímica clínica",
    text: "¿Cuál de los siguientes analitos es más sensible para detectar una lesión miocárdica aguda?",
    answers: [
      { text: "Troponina I", correct: true },
      { text: "Glucosa", correct: false },
      { text: "Urea", correct: false },
      { text: "Colesterol", correct: false },
    ],
    explanation:
      "Las troponinas cardíacas (especialmente la fracción I) se elevan de manera específica en las lesiones miocárdicas agudas.",
  },
  {
    id: 12,
    tema: "Tema 1",
    subtema: "Bioquímica clínica",
    text: "¿Qué analito se utiliza para evaluar la función renal?",
    answers: [
      { text: "Creatinina", correct: true },
      { text: "Bilirrubina", correct: false },
      { text: "Alanina aminotransferasa", correct: false },
      { text: "Troponina T", correct: false },
    ],
    explanation:
      "La creatinina plasmática es un indicador del filtrado glomerular y, por tanto, de la función renal.",
  },
  {
    id: 13,
    tema: "Tema 1",
    subtema: "Bioquímica clínica",
    text: "¿Cuál de estos enzimas es indicativo de daño hepático?",
    answers: [
      { text: "ALT (alanina aminotransferasa)", correct: true },
      { text: "CK-MB", correct: false },
      { text: "Amilasa", correct: false },
      { text: "LDH", correct: false },
    ],
    explanation:
      "Las transaminasas ALT y AST aumentan en el suero en presencia de lesiones hepáticas.",
  },
  {
    id: 14,
    tema: "Tema 1",
    subtema: "Bioquímica clínica",
    text: "¿Qué biomarcador refleja el control glucémico a largo plazo?",
    answers: [
      { text: "Hemoglobina A1c", correct: true },
      { text: "Glucosa capilar", correct: false },
      { text: "Insulina plasmática", correct: false },
      { text: "Fructosamina", correct: false },
    ],
    explanation:
      "La hemoglobina A1c se forma por unión no enzimática de glucosa a la hemoglobina y refleja la media de las concentraciones de glucosa durante los últimos 2-3 meses.",
  },
  {
    id: 15,
    tema: "Tema 1",
    subtema: "Bioquímica clínica",
    text: "¿Qué ion es importante para la transmisión nerviosa y la contracción muscular?",
    answers: [
      { text: "Potasio", correct: true },
      { text: "Calcio", correct: false },
      { text: "Sodio", correct: false },
      { text: "Cloro", correct: false },
    ],
    explanation:
      "El potasio participa en la generación del potencial de membrana y en la contracción muscular; sus cambios pueden afectar la excitabilidad de las células.",
  },

  // Tema 2 (sin subtemas) - se mantienen preguntas de ejemplo para completar la estructura
  {
    id: 16,
    tema: "Tema 2",
    subtema: null,
    text: "¿Qué prueba se utiliza para diferenciar entre bacterias grampositivas y gramnegativas?",
    answers: [
      { text: "Tinción de Ziehl-Neelsen", correct: false },
      { text: "Tinción de Gram", correct: true },
      { text: "Tinción de Wright", correct: false },
      { text: "Prueba de catalasa", correct: false },
    ],
    explanation:
      "La tinción de Gram clasifica las bacterias en grampositivas y gramnegativas según la composición de su pared celular.",
  },
  {
    id: 17,
    tema: "Tema 3",
    subtema: null,
    text: "¿Cuál de los siguientes analitos es un indicador sensible de lesión miocárdica aguda?",
    answers: [
      { text: "Glucosa", correct: false },
      { text: "Troponina I", correct: true },
      { text: "Urea", correct: false },
      { text: "Ácido úrico", correct: false },
    ],
    explanation:
      "Las troponinas son biomarcadores específicos de daño del músculo cardíaco.",
  },
  {
    id: 18,
    tema: "Tema 2",
    subtema: null,
    text: "¿Qué medio de cultivo es selectivo para el crecimiento de hongos y levaduras?",
    answers: [
      { text: "Agar MacConkey", correct: false },
      { text: "Agar Sabouraud", correct: true },
      { text: "Agar sangre", correct: false },
      { text: "Agar chocolate", correct: false },
    ],
    explanation:
      "El agar Sabouraud tiene un pH ácido que inhibe muchas bacterias y favorece el crecimiento de hongos y levaduras.",
  },

  // Preguntas adicionales para Tema 1 - Subtema 1
  {
    id: 19,
    tema: "Tema 1",
    subtema: "Hematología y preanalítica",
    text:
      "¿Qué parámetro del hemograma refleja la variabilidad del tamaño de los glóbulos rojos?",
    answers: [
      { text: "VCM (volumen corpuscular medio)", correct: false },
      { text: "HCM (hemoglobina corpuscular media)", correct: false },
      { text: "RDW (amplitud de distribución eritrocitaria)", correct: true },
      { text: "Índice de plaquetas", correct: false },
    ],
    explanation:
      "El RDW expresa la dispersión de tamaños de los eritrocitos y ayuda a detectar anisocitosis.",
  },
  {
    id: 20,
    tema: "Tema 1",
    subtema: "Hematología y preanalítica",
    text: "¿Qué célula es precursora directa de los neutrófilos maduros?",
    answers: [
      { text: "Mieloblasto", correct: true },
      { text: "Eritroblasto", correct: false },
      { text: "Linfoblasto", correct: false },
      { text: "Megacarioblasto", correct: false },
    ],
    explanation:
      "El mieloblasto evoluciona a promielocito, mielocito y metamielocito hasta diferenciarse en neutrófilo.",
  },
  {
    id: 21,
    tema: "Tema 1",
    subtema: "Hematología y preanalítica",
    text:
      "¿Qué anticoagulante se recomienda utilizar para la determinación de pruebas de coagulación (tiempo de protrombina o tiempo de tromboplastina)?",
    answers: [
      { text: "Citrato", correct: true },
      { text: "EDTA", correct: false },
      { text: "Heparina", correct: false },
      { text: "Ninguno", correct: false },
    ],
    explanation:
      "El citrato sódico al 3,2 % o 3,8 % secuestra el calcio y se utiliza en pruebas de coagulación para preservar los factores plasmáticos.",
  },
  {
    id: 22,
    tema: "Tema 1",
    subtema: "Hematología y preanalítica",
    text: "¿Qué prueba mide el porcentaje de células sanguíneas respecto al volumen total de la sangre?",
    answers: [
      { text: "Hemoglobina", correct: false },
      { text: "Hematocrito", correct: true },
      { text: "Recuento leucocitario", correct: false },
      { text: "VCM", correct: false },
    ],
    explanation:
      "El hematocrito representa el volumen de glóbulos rojos con relación al volumen total de sangre, expresado habitualmente en porcentaje.",
  },
  {
    id: 23,
    tema: "Tema 1",
    subtema: "Hematología y preanalítica",
    text:
      "¿Cuál de los siguientes leucocitos suele aumentar en sangre en respuesta a una infección parasitaria o a una reacción alérgica?",
    answers: [
      { text: "Neutrófilo", correct: false },
      { text: "Eosinófilo", correct: true },
      { text: "Basófilo", correct: false },
      { text: "Linfocito B", correct: false },
    ],
    explanation:
      "Los eosinófilos se elevan habitualmente en parasitosis y procesos alérgicos, participando en las reacciones de hipersensibilidad.",
  },

  // Preguntas adicionales para Tema 1 - Subtema 2
  {
    id: 24,
    tema: "Tema 1",
    subtema: "Microbiología y biología molecular",
    text: "¿Qué técnica utiliza anticuerpos marcados con fluorocromos para detectar antígenos en una muestra?",
    answers: [
      { text: "Inmunofluorescencia", correct: true },
      { text: "Western blot", correct: false },
      { text: "ELISA", correct: false },
      { text: "Radioinmunoensayo", correct: false },
    ],
    explanation:
      "La inmunofluorescencia directa o indirecta permite visualizar antígenos mediante anticuerpos conjugados con fluorocromos.",
  },
  {
    id: 25,
    tema: "Tema 1",
    subtema: "Microbiología y biología molecular",
    text:
      "¿Qué medio de cultivo es selectivo para el crecimiento de bacilos gramnegativos de la familia Enterobacteriaceae?",
    answers: [
      { text: "Agar MacConkey", correct: true },
      { text: "Agar Sabouraud", correct: false },
      { text: "Agar sangre", correct: false },
      { text: "Agar chocolate", correct: false },
    ],
    explanation:
      "El agar MacConkey contiene sales biliares y cristal violeta que inhiben bacterias grampositivas, permitiendo el crecimiento de enterobacterias y diferenciando las fermentadoras de lactosa.",
  },
  {
    id: 26,
    tema: "Tema 1",
    subtema: "Microbiología y biología molecular",
    text: "¿A qué temperatura se incuban habitualmente los cultivos bacterianos clínicos?",
    answers: [
      { text: "37 °C", correct: true },
      { text: "4 °C", correct: false },
      { text: "25 °C", correct: false },
      { text: "60 °C", correct: false },
    ],
    explanation:
      "La mayoría de las bacterias patógenas humanas crecen óptimamente a 37 °C, que coincide con la temperatura corporal.",
  },
  {
    id: 27,
    tema: "Tema 1",
    subtema: "Microbiología y biología molecular",
    text: "¿Cuál de los siguientes virus posee un genoma de ARN?",
    answers: [
      { text: "Virus de la gripe", correct: true },
      { text: "Virus de la varicela", correct: false },
      { text: "Virus del papiloma humano", correct: false },
      { text: "Virus de la hepatitis B", correct: false },
    ],
    explanation:
      "Los virus de la gripe pertenecen al género Orthomyxovirus y presentan genoma de ARN segmentado, a diferencia de los virus de la varicela (ADN), papiloma (ADN) y hepatitis B (ADN parcialmente bicatenario).",
  },
  {
    id: 28,
    tema: "Tema 1",
    subtema: "Microbiología y biología molecular",
    text:
      "¿Qué técnica se emplea para determinar la secuencia completa de bases de un genoma bacteriano?",
    answers: [
      { text: "Secuenciación", correct: true },
      { text: "PCR", correct: false },
      { text: "ELISA", correct: false },
      { text: "Aglutinación", correct: false },
    ],
    explanation:
      "Las técnicas de secuenciación de nueva generación permiten obtener la secuencia de nucleótidos de genomas completos, proporcionando información sobre la composición genética de los microorganismos.",
  },

  // Preguntas adicionales para Tema 1 - Subtema 3
  {
    id: 29,
    tema: "Tema 1",
    subtema: "Bioquímica clínica",
    text:
      "¿Qué enzima es un marcador específico de colestasis hepática?",
    answers: [
      { text: "Fosfatasa alcalina", correct: true },
      { text: "ALT (alanina aminotransferasa)", correct: false },
      { text: "CK-MB", correct: false },
      { text: "Amilasa", correct: false },
    ],
    explanation:
      "En la colestasis, la fosfatasa alcalina y la gamma-glutamiltransferasa aumentan debido a la obstrucción del flujo biliar.",
  },
  {
    id: 30,
    tema: "Tema 1",
    subtema: "Bioquímica clínica",
    text:
      "¿Qué electrolito conviene monitorizar especialmente en pacientes que reciben diuréticos?",
    answers: [
      { text: "Potasio", correct: true },
      { text: "Glucosa", correct: false },
      { text: "Urea", correct: false },
      { text: "Calcio", correct: false },
    ],
    explanation:
      "Los diuréticos pueden provocar pérdidas renales de potasio que causen hipopotasemia, por lo que se recomienda controlar su concentración plasmática.",
  },
  {
    id: 31,
    tema: "Tema 1",
    subtema: "Bioquímica clínica",
    text:
      "¿Qué parámetro se utiliza como marcador para evaluar el control del metabolismo lipídico y el riesgo cardiovascular?",
    answers: [
      { text: "LDL-c (colesterol de baja densidad)", correct: true },
      { text: "Creatinina", correct: false },
      { text: "Transferrina", correct: false },
      { text: "Albúmina", correct: false },
    ],
    explanation:
      "El colesterol LDL alto se asocia a aterosclerosis y es un objetivo terapéutico en el control del metabolismo lipídico.",
  },
  {
    id: 32,
    tema: "Tema 1",
    subtema: "Bioquímica clínica",
    text: "¿Qué hormona regula principalmente los niveles plasmáticos de calcio?",
    answers: [
      { text: "Parathormona (PTH)", correct: true },
      { text: "Insulina", correct: false },
      { text: "Glucagón", correct: false },
      { text: "Adrenalina", correct: false },
    ],
    explanation:
      "La PTH incrementa la reabsorción renal de calcio y la liberación ósea para mantener la concentración sanguínea, y actúa en conjunción con la vitamina D y la calcitonina.",
  },
  {
    id: 33,
    tema: "Tema 1",
    subtema: "Bioquímica clínica",
    text: "¿Qué prueba de laboratorio es útil para diagnosticar hipotiroidismo?",
    answers: [
      { text: "TSH (hormona estimulante del tiroides)", correct: true },
      { text: "Cortisol", correct: false },
      { text: "ACTH", correct: false },
      { text: "Insulina", correct: false },
    ],
    explanation:
      "En el hipotiroidismo primario la TSH suele estar elevada debido a la retroalimentación negativa sobre la hipófisis, por lo que su determinación es clave para el diagnóstico.",
  },
];

// Selecciona la fuente de preguntas.  Si el script `questions_official.js`
// define la constante `OFFICIAL_QUESTIONS`, la aplicación usará ese banco de
// preguntas (por ejemplo, preguntas oficiales extraídas del PDF Tema 1).  De lo
// contrario, empleará las preguntas ficticias definidas en `DEFAULT_QUESTIONS`.
const QUESTIONS = typeof OFFICIAL_QUESTIONS !== "undefined" && Array.isArray(OFFICIAL_QUESTIONS)
  ? OFFICIAL_QUESTIONS
  : DEFAULT_QUESTIONS;

// ======================================================================
// Ajuste de subtemas para el Tema 1
//
// El material del Tema 1 señala con una estrella los contenidos más
// preguntados en exámenes. Para alinear el banco oficial de preguntas con
// esos contenidos, reagrupamos las preguntas en los cinco subtemas
// definidos en el archivo temario_tema1.html. Este mapeo asigna a cada
// pregunta del Tema 1 un subtema descriptivo de acuerdo con su temática.
// Las preguntas de otros temas (Tema 2, Tema 3, etc.) conservan su
// clasificación original.
(function () {
  if (!Array.isArray(QUESTIONS)) return;
  const idToSubtema = {
    // Calibración y control de calidad
    1: "Calibración y control de calidad",
    2: "Calibración y control de calidad",
    3: "Calibración y control de calidad",
    5: "Calibración y control de calidad",
    6: "Calibración y control de calidad",
    7: "Calibración y control de calidad",
    11: "Calibración y control de calidad",
    17: "Calibración y control de calidad",
    18: "Calibración y control de calidad",
    20: "Calibración y control de calidad",
    23: "Calibración y control de calidad",
    25: "Calibración y control de calidad",
    26: "Calibración y control de calidad",
    27: "Calibración y control de calidad",
    30: "Calibración y control de calidad",
    31: "Calibración y control de calidad",
    32: "Calibración y control de calidad",
    35: "Calibración y control de calidad",
    37: "Calibración y control de calidad",
    40: "Calibración y control de calidad",
    41: "Calibración y control de calidad",
    50: "Calibración y control de calidad",
    // Estadística diagnóstica y rendimiento de pruebas
    19: "Estadística diagnóstica y rendimiento",
    28: "Estadística diagnóstica y rendimiento",
    29: "Estadística diagnóstica y rendimiento",
    33: "Estadística diagnóstica y rendimiento",
    // Intervalos de referencia y variabilidad
    16: "Intervalos de referencia y variabilidad",
    24: "Intervalos de referencia y variabilidad",
    34: "Intervalos de referencia y variabilidad",
    38: "Intervalos de referencia y variabilidad",
    39: "Intervalos de referencia y variabilidad",
    46: "Intervalos de referencia y variabilidad",
    47: "Intervalos de referencia y variabilidad",
    49: "Intervalos de referencia y variabilidad",
    // Unidades, concentraciones y diluciones
    15: "Unidades, concentraciones y diluciones",
    36: "Unidades, concentraciones y diluciones",
    48: "Unidades, concentraciones y diluciones",
    // Preanalítica (muestras, suero y plasma)
    4: "Preanalítica (muestras y suero/plasma)",
    8: "Preanalítica (muestras y suero/plasma)",
    9: "Preanalítica (muestras y suero/plasma)",
    10: "Preanalítica (muestras y suero/plasma)",
    12: "Preanalítica (muestras y suero/plasma)",
    13: "Preanalítica (muestras y suero/plasma)",
    14: "Preanalítica (muestras y suero/plasma)",
    21: "Preanalítica (muestras y suero/plasma)",
    22: "Preanalítica (muestras y suero/plasma)",
    42: "Preanalítica (muestras y suero/plasma)",
    43: "Preanalítica (muestras y suero/plasma)",
    44: "Preanalítica (muestras y suero/plasma)",
    45: "Preanalítica (muestras y suero/plasma)",
  };
  // Asignar nuevo subtema a las preguntas del Tema 1
  for (const q of QUESTIONS) {
    if (q.tema === "Tema 1" && idToSubtema[q.id]) {
      q.subtema = idToSubtema[q.id];
    }
  }
})();

// =====================
// Variables de estado
// =====================
let currentTest = [];
let currentIndex = 0;
let correctCount = 0;
let userAnswers = [];
let mode = "immediate";

// =====================
// Seguimiento de preguntas utilizadas
// =====================
// Para los exámenes de cada tema guardamos los IDs de preguntas ya usadas de
// modo que los siguientes exámenes empleen preguntas diferentes hasta
// agotar el banco. Cuando no quedan suficientes preguntas, se reinicia.
const examUsed = {};

// Para los tests rápidos por subtema guardamos los IDs ya utilizados
// para que las siguientes tandas cambien de preguntas siempre que sea
// posible. Cada clave del objeto es el nombre del subtema.
const subUsed = {};

// Para garantizar que los tests rápidos y exámenes muestren preguntas distintas en sesiones sucesivas
// guardamos las identificaciones de las preguntas ya utilizadas. 'examUsed' almacena por tema
// (por ejemplo, Tema 1) los IDs de preguntas ya seleccionadas en exámenes de 10 preguntas.
// 'subUsed' almacena por subtema los IDs de preguntas ya seleccionadas en tests rápidos de 5 preguntas.
// Nota: 'examUsed' y 'subUsed' se declaran más arriba y no se deben redeclarar aquí.

// =====================
// Funciones de utilidad
// =====================

/**
 * Devuelve un array con todos los temas únicos presentes en las preguntas.
 * Se antepone la opción "Aleatorio" para seleccionar preguntas de cualquier tema.
 */
function getThemes() {
  const themes = new Set(QUESTIONS.map((q) => q.tema));
  return ["Aleatorio", ...themes];
}

/**
 * Devuelve un array con todos los subtemas de un tema dado. Para el Tema 1
 * incluye además la opción de examen (10 preguntas aleatorias del tema).
 * @param {string} tema
 */
function getSubtopics(tema) {
  const set = new Set();
  QUESTIONS.forEach((q) => {
    if (q.tema === tema && q.subtema) {
      set.add(q.subtema);
    }
  });
  const subs = Array.from(set);
  // Añadir opción de examen solamente para el Tema 1
  if (tema === "Tema 1") {
    subs.push("Examen Tema 1");
  }
  return subs;
}

/**
 * Mezcla aleatoriamente los elementos de un array (algoritmo de Fisher-Yates).
 * @param {Array} array
 */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

/**
 * Selecciona n preguntas según el tema y el subtema indicados. Si el tema es
 * "Aleatorio", mezcla todo el conjunto de preguntas y devuelve las primeras n.
 * Si se proporciona un subtema, filtra por tema y subtema; si el subtema es
 * un examen (contiene la palabra "Examen"), ignora el filtro de subtema y usa
 * todas las preguntas del tema.
 * Si hay menos preguntas de las solicitadas, devuelve todas las disponibles.
 * @param {string} tema
 * @param {string|null} subtema
 * @param {number} n
 */
function selectQuestions(tema, subtema, n) {
  // Construimos el conjunto de preguntas según el tema y subtema
  let pool;
  if (tema === "Aleatorio") {
    // Si el usuario elige Aleatorio, mezclar todas las preguntas
    pool = [...QUESTIONS];
    shuffle(pool);
    return pool.slice(0, n);
  }

  // Filtrar por tema
  pool = QUESTIONS.filter((q) => q.tema === tema);
  // Si hay subtema y no es un examen, filtramos por subtema
  if (subtema && !subtema.startsWith("Examen")) {
    pool = pool.filter((q) => q.subtema === subtema);
    // Recuperamos las preguntas no usadas para ese subtema
    const usedIds = subUsed[subtema] || [];
    const available = pool.filter((q) => !usedIds.includes(q.id));
    shuffle(available);
    let selected = available.slice(0, n);
    // Si no hay suficientes disponibles, reiniciamos el registro de usadas y seleccionamos de nuevo
    if (selected.length < n) {
      subUsed[subtema] = [];
      shuffle(pool);
      selected = pool.slice(0, n);
    }
    // Guardamos las IDs seleccionadas
    subUsed[subtema] = (subUsed[subtema] || []).concat(
      selected.map((q) => q.id)
    );
    return selected;
  }

  // Si el subtema indica examen (p. ej., "Examen Tema 1"), seleccionamos preguntas aleatorias del tema
  if (subtema && subtema.startsWith("Examen")) {
    const usedIds = examUsed[tema] || [];
    const available = pool.filter((q) => !usedIds.includes(q.id));
    shuffle(available);
    let selected = available.slice(0, n);
    if (selected.length < n) {
      // No hay suficientes preguntas disponibles, reiniciar registro y seleccionar de nuevo
      examUsed[tema] = [];
      shuffle(pool);
      selected = pool.slice(0, n);
    }
    examUsed[tema] = (examUsed[tema] || []).concat(
      selected.map((q) => q.id)
    );
    return selected;
  }

  // Para temas sin subtemas (Tema 2, Tema 3, etc.)
  shuffle(pool);
  return pool.slice(0, n);
}

/**
 * Renderiza la pregunta actual y sus respuestas en la interfaz.
 */
function renderQuestion() {
  const question = currentTest[currentIndex];
  document.getElementById("question-text").textContent =
    currentIndex + 1 + ". " + question.text;

  const answersList = document.getElementById("answers-list");
  answersList.innerHTML = "";
  question.answers.forEach((answer, idx) => {
    const id = `answer-${currentIndex}-${idx}`;
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = idx;
    input.id = id;
    label.appendChild(input);
    const span = document.createElement("span");
    span.textContent = answer.text;
    label.appendChild(span);
    answersList.appendChild(label);
  });

  // Limpiar retroalimentación y controles
  document.getElementById("feedback").textContent = "";
  document.getElementById("feedback").className = "feedback";
  const controls = document.getElementById("controls");
  controls.innerHTML = "";

  if (mode === "immediate") {
    // Botón para comprobar respuesta
    const checkBtn = document.createElement("button");
    checkBtn.textContent = "Comprobar";
    checkBtn.addEventListener("click", handleCheckAnswer);
    controls.appendChild(checkBtn);
  } else {
    // Botón para ir a la siguiente sin corrección inmediata
    const nextBtn = document.createElement("button");
    nextBtn.textContent =
      currentIndex === currentTest.length - 1 ? "Finalizar" : "Siguiente";
    nextBtn.addEventListener("click", handleNextDeferred);
    controls.appendChild(nextBtn);
  }
}

/**
 * Maneja la corrección inmediata de una respuesta. Muestra si es correcta e
 * incluye una explicación si existe. Luego permite pasar a la siguiente pregunta.
 */
function handleCheckAnswer() {
  const selected = document.querySelector("input[name='answer']:checked");
  if (!selected) return;
  const question = currentTest[currentIndex];
  const answerIndex = parseInt(selected.value, 10);
  const isCorrect = question.answers[answerIndex].correct;
  userAnswers.push({ question, answerIndex });

  const feedbackEl = document.getElementById("feedback");
  if (isCorrect) {
    feedbackEl.textContent = "¡Correcto!";
    feedbackEl.classList.add("correct");
    correctCount++;
  } else {
    feedbackEl.textContent = "Incorrecto.";
    feedbackEl.classList.add("incorrect");
  }
  if (question.explanation) {
    const explanation = document.createElement("p");
    explanation.textContent = question.explanation;
    feedbackEl.appendChild(explanation);
  }

  // Deshabilitar opciones para evitar cambios
  document.querySelectorAll("input[name='answer']").forEach((el) => {
    el.disabled = true;
  });

  // Reemplazar botón con "Siguiente" o "Finalizar"
  const controls = document.getElementById("controls");
  controls.innerHTML = "";
  const nextBtn = document.createElement("button");
  nextBtn.textContent =
    currentIndex === currentTest.length - 1 ? "Finalizar" : "Siguiente";
  nextBtn.addEventListener("click", handleNext);
  controls.appendChild(nextBtn);
}

/**
 * Avanza a la siguiente pregunta en el modo inmediato.
 */
function handleNext() {
  currentIndex++;
  if (currentIndex < currentTest.length) {
    renderQuestion();
  } else {
    showResults();
  }
}

/**
 * Guarda la respuesta seleccionada sin mostrar corrección y avanza al
 * siguiente en modo diferido.
 */
function handleNextDeferred() {
  const selected = document.querySelector("input[name='answer']:checked");
  // Guardar -1 si no selecciona nada
  const answerIndex = selected ? parseInt(selected.value, 10) : -1;
  userAnswers.push({ question: currentTest[currentIndex], answerIndex });
  if (currentIndex === currentTest.length - 1) {
    // Finalizar y mostrar resultados diferidos
    showResults();
  } else {
    currentIndex++;
    renderQuestion();
  }
}

/**
 * Calcula y muestra los resultados finales del test.
 */
function showResults() {
  // Calcular número de respuestas correctas
  correctCount = 0;
  userAnswers.forEach(({ question, answerIndex }) => {
    if (
      answerIndex >= 0 &&
      question.answers[answerIndex] &&
      question.answers[answerIndex].correct
    ) {
      correctCount++;
    }
  });

  const total = currentTest.length;
  const percentage = Math.round((correctCount / total) * 100);

  const resultsContent = document.getElementById("results-content");
  resultsContent.innerHTML = ``;
  const summary = document.createElement("p");
  summary.innerHTML = `Has acertado <strong>${correctCount}</strong> de <strong>${total}</strong> preguntas (<strong>${percentage}%</strong>).`;
  resultsContent.appendChild(summary);

  // Mostrar lista de preguntas con correcciones si el modo es diferido
  if (mode === "deferred") {
    const list = document.createElement("ol");
    userAnswers.forEach(({ question, answerIndex }, idx) => {
      const li = document.createElement("li");
      const qText = document.createElement("p");
      qText.textContent = question.text;
      li.appendChild(qText);

      const your = document.createElement("p");
      if (answerIndex >= 0) {
        const ansObj = question.answers[answerIndex];
        your.innerHTML = `<em>Tu respuesta:</em> ${ansObj.text}`;
      } else {
        your.innerHTML = `<em>Tu respuesta:</em> (sin responder)`;
      }
      li.appendChild(your);

      const correct = question.answers.find((a) => a.correct);
      const correctP = document.createElement("p");
      correctP.innerHTML = `<em>Respuesta correcta:</em> ${correct.text}`;
      li.appendChild(correctP);

      if (question.explanation) {
        const expl = document.createElement("p");
        expl.innerHTML = `<em>Explicación:</em> ${question.explanation}`;
        li.appendChild(expl);
      }

      list.appendChild(li);
    });
    resultsContent.appendChild(list);
  }

  // Ocultar secciones y mostrar resultados
  document.getElementById("quiz-section").hidden = true;
  document.getElementById("config-section").hidden = true;
  document.getElementById("results-section").hidden = false;

  // Ocultar el botón de finalizar prueba cuando se muestran los resultados
  const finishBtn = document.getElementById("finish-btn");
  if (finishBtn) finishBtn.hidden = true;
}

/**
 * Reinicia la aplicación para iniciar un nuevo test.
 */
function resetApp() {
  currentTest = [];
  currentIndex = 0;
  correctCount = 0;
  userAnswers = [];
  document.getElementById("config-section").hidden = false;
  document.getElementById("quiz-section").hidden = true;
  document.getElementById("results-section").hidden = true;

  // Ocultar el botón de finalizar prueba al reiniciar
  const finishBtn = document.getElementById("finish-btn");
  if (finishBtn) finishBtn.hidden = true;
}

/**
 * Finaliza el test de forma anticipada. Registra la respuesta actual (si existe)
 * y marca el resto de preguntas como no contestadas. A continuación muestra
 * los resultados. Este método permite al usuario salir del test en cualquier
 * momento.
 */
function finishTestEarly() {
  // No hay test en curso
  if (!currentTest || currentTest.length === 0) return;

  // Sólo proceder si aún no se han mostrado los resultados
  if (document.getElementById("results-section").hidden === false) return;

  // Registrar la respuesta de la pregunta actual si no se ha registrado aún
  if (currentIndex < currentTest.length) {
    const question = currentTest[currentIndex];
    let answerIndex = -1;
    const selected = document.querySelector("input[name='answer']:checked");
    if (selected) {
      answerIndex = parseInt(selected.value, 10);
    }
    if (mode === "immediate") {
      userAnswers.push({ question, answerIndex });
      if (answerIndex >= 0 && question.answers[answerIndex] && question.answers[answerIndex].correct) {
        correctCount++;
      }
    } else if (mode === "deferred") {
      userAnswers.push({ question, answerIndex });
    }

    // Añadir como no respondidas las preguntas restantes
    for (let i = currentIndex + 1; i < currentTest.length; i++) {
      userAnswers.push({ question: currentTest[i], answerIndex: -1 });
    }
  }

  // Ajustar el índice para evitar que renderQuestion avance
  currentIndex = currentTest.length;
  showResults();
}

/**
 * Inicializa la aplicación: rellena las categorías y configura eventos.
 */
function init() {
  const themeSelect = document.getElementById("theme-select");
  const subtopicGroup = document.getElementById("subtopic-group");
  const subtopicSelect = document.getElementById("subtopic-select");
  const numQuestionsInput = document.getElementById("num-questions");

  // Poblar el selector de temas (incluye Aleatorio)
  const themes = getThemes();
  themes.forEach((tema) => {
    const opt = document.createElement("option");
    opt.value = tema;
    opt.textContent = tema;
    themeSelect.appendChild(opt);
  });

  // Actualizar subtemas y número de preguntas cuando cambia el tema
  themeSelect.addEventListener("change", () => {
    const tema = themeSelect.value;
    // Resetear subtemas
    subtopicSelect.innerHTML = "";
    // Si es Tema 1, mostrar subtemas y examenes
    if (tema === "Tema 1") {
      const subs = getSubtopics(tema);
      subs.forEach((sub) => {
        const opt = document.createElement("option");
        opt.value = sub;
        opt.textContent = sub;
        subtopicSelect.appendChild(opt);
      });
      subtopicGroup.hidden = false;
      // Ajustar número de preguntas según el primer subtema
      if (subtopicSelect.value && subtopicSelect.value.startsWith("Examen")) {
        numQuestionsInput.value = 10;
      } else {
        numQuestionsInput.value = 5;
      }
      // Deshabilitar el input para que el usuario no cambie las preguntas en Tema 1
      numQuestionsInput.disabled = true;
    } else {
      // Otros temas: ocultar subtemas y permitir que el usuario elija el número de preguntas
      subtopicGroup.hidden = true;
      numQuestionsInput.value = 5;
      numQuestionsInput.disabled = false;
    }
  });

  // Ajustar número de preguntas cuando cambia el subtema en Tema 1
  subtopicSelect.addEventListener("change", () => {
    const sub = subtopicSelect.value;
    if (sub && sub.startsWith("Examen")) {
      numQuestionsInput.value = 10;
    } else {
      numQuestionsInput.value = 5;
    }
  });

  // Manejar envío del formulario de configuración
  const form = document.getElementById("config-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const selectedTheme = themeSelect.value;
    // Determinar subtema si corresponde (solo para Tema 1)
    let selectedSubtopic = null;
    if (selectedTheme === "Tema 1") {
      selectedSubtopic = subtopicSelect.value;
    }
    let numQuestions = parseInt(numQuestionsInput.value, 10);

    // Obtener modo de corrección
    const modeSelected = document.querySelector(
      "input[name='mode']:checked"
    ).value;
    mode = modeSelected;

    // Seleccionar preguntas y preparar estado
    currentTest = selectQuestions(selectedTheme, selectedSubtopic, numQuestions);
    currentIndex = 0;
    correctCount = 0;
    userAnswers = [];

    // Determinar título del test según el tema y subtema
    let title;
    if (selectedTheme === "Aleatorio") {
      title = "Test aleatorio";
    } else if (selectedTheme === "Tema 1") {
      if (selectedSubtopic && selectedSubtopic.startsWith("Examen")) {
        title = "Examen Tema 1";
      } else if (selectedSubtopic) {
        title = `Test Tema 1 - ${selectedSubtopic}`;
      } else {
        title = "Test Tema 1";
      }
    } else {
      title = `Test de ${selectedTheme}`;
    }

    // Mostrar secciones correspondientes
    document.getElementById("config-section").hidden = true;
    document.getElementById("results-section").hidden = true;
    document.getElementById("quiz-section").hidden = false;
    document.getElementById("quiz-title").textContent = title;

    renderQuestion();

    // Mostrar el botón para finalizar el test anticipadamente
    const finishBtn = document.getElementById("finish-btn");
    if (finishBtn) {
      finishBtn.hidden = false;
    }
  });

  // Manejar botón de reinicio
  document.getElementById("restart-btn").addEventListener("click", resetApp);

  // Controlar la navegación desde el encabezado
  // Botón 'Inicio' devuelve a la configuración inicial borrando cualquier test en curso
  const inicioBtn = document.getElementById("nav-inicio-btn");
  if (inicioBtn) {
    inicioBtn.addEventListener("click", () => {
      resetApp();
    });
  }

  // Botón 'Tema 1' lleva al usuario al temario del Tema 1
  const tema1Btn = document.getElementById("nav-tema1-btn");
  if (tema1Btn) {
    tema1Btn.addEventListener("click", () => {
      window.location.href = "temario_tema1.html";
    });
  }

  // Botón para finalizar el test de forma anticipada
  const finishBtn = document.getElementById("finish-btn");
  if (finishBtn) {
    finishBtn.addEventListener("click", finishTestEarly);
  }
}

// Ejecutar init cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", init);
