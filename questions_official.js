// questions_official.js
// Banco oficial de preguntas para el Tema 1 del examen de laboratorio clínico.
// Este archivo define la constante OFFICIAL_QUESTIONS que incluye preguntas
// con sus respectivas opciones y explicaciones. Se agrupan en tres subtemas
// para posibilitar tests rápidos y exámenes aleatorios.

const OFFICIAL_QUESTIONS = [
  {
    id: 1,
    tema: "Tema 1",
    subtema: "Hematología y preanalítica",
    text:
      "En una recta de calibrado de concentraciones 1 – 2 – 5 – 10 – 25 – 50 ng/mL, los controles de calidad más adecuados serían:",
    answers: [
      { text: "3 – 20 – 40 ng/mL", correct: true },
      { text: "1 – 20 – 40 ng/mL", correct: false },
      { text: "1 – 5 – 45 ng/mL", correct: false },
      { text: "4 – 8 – 16 ng/mL", correct: false },
    ],
    explanation:
      "Se deben elegir controles que cubran equitativamente el rango de calibración, como 3, 20 y 40 ng/mL.",
  },
  {
    id: 2,
    tema: "Tema 1",
    subtema: "Hematología y preanalítica",
    text:
      "El objetivo de la calidad de un laboratorio es responsabilidad de:",
    answers: [
      { text: "El jefe del laboratorio", correct: false },
      { text: "Supervisor del laboratorio", correct: false },
      { text: "Todo el personal del laboratorio", correct: true },
      { text: "Unidad de calidad del Hospital", correct: false },
    ],
    explanation:
      "La responsabilidad de la calidad recae en todo el personal del laboratorio.",
  },
  {
    id: 3,
    tema: "Tema 1",
    subtema: "Hematología y preanalítica",
    text:
      "Al conjunto de operaciones que se realizan a un instrumento analítico o equipo de medida para que nos garantice la exactitud de sus especificaciones, se denomina:",
    answers: [
      { text: "Control de calidad", correct: false },
      { text: "Calibración", correct: true },
      { text: "Verificación", correct: false },
      { text: "Mantenimiento", correct: false },
    ],
    explanation:
      "La calibración ajusta un instrumento para que sus mediciones sean exactas.",
  },
  {
    id: 4,
    tema: "Tema 1",
    subtema: "Hematología y preanalítica",
    text:
      "¿Qué es lo primero que hay que hacer cuando llega la muestra al laboratorio?",
    answers: [
      {
        text:
          "Comprobar que la petición médica y el etiquetado de las muestras sean correctos",
        correct: true,
      },
      { text: "Centrifugar la muestra", correct: false },
      { text: "Registrar la muestra", correct: false },
      {
        text: "Procesar la muestra en los distintos servicios del laboratorio",
        correct: false,
      },
    ],
    explanation:
      "Antes de procesar una muestra hay que verificar la solicitud y la identificación.",
  },
  {
    id: 5,
    tema: "Tema 1",
    subtema: "Hematología y preanalítica",
    text:
      "Al conjunto de normas internacionales sobre calidad y su gestión, se le denomina:",
    answers: [
      { text: "Normas Políticas", correct: false },
      { text: "Normas ISO", correct: true },
      { text: "Normas de responsabilidades", correct: false },
      { text: "Normas Jurídicas", correct: false },
    ],
    explanation:
      "Las normas ISO son estándares internacionales de gestión de calidad.",
  },
  {
    id: 6,
    tema: "Tema 1",
    subtema: "Hematología y preanalítica",
    text: "El control de calidad externo consiste en:",
    answers: [
      {
        text: "Analizar unas muestras conociendo los resultados esperados",
        correct: false,
      },
      {
        text:
          "Analizar muestras de las cuales se desconocen los resultados que debemos obtener",
        correct: true,
      },
      {
        text: "Pasarlo cada día, antes de empezar la rutina de trabajo",
        correct: false,
      },
      {
        text: "No se emplean controles externos, salvo los internos",
        correct: false,
      },
    ],
    explanation:
      "En el control externo se evalúan muestras de resultados desconocidos para comparar con otros laboratorios.",
  },
  {
    id: 7,
    tema: "Tema 1",
    subtema: "Hematología y preanalítica",
    text:
      "Una vez implementado un sistema de seguridad y certificado, las revisiones mínimas que se tendrían que hacer de dicho sistema serían:",
    answers: [
      { text: "Cada 6 meses", correct: false },
      {
        text:
          "Una vez acreditado y certificado por ENAC, no haría falta",
        correct: false,
      },
      { text: "Al menos una vez al año", correct: true },
      { text: "Cada 3 años", correct: false },
    ],
    explanation:
      "Los sistemas certificados deben revisarse al menos una vez al año.",
  },
  {
    id: 8,
    tema: "Tema 1",
    subtema: "Hematología y preanalítica",
    text: "Se denominan Interferencias:",
    answers: [
      {
        text:
          "La aparición de errores no programados en la realización de una prueba",
        correct: false,
      },
      {
        text:
          "La presencia de sustancias que alteran la determinación de un analito específico",
        correct: true,
      },
      {
        text: "La disminución de la sensibilidad de una prueba",
        correct: false,
      },
      { text: "La mala utilización de un método", correct: false },
    ],
    explanation:
      "Las interferencias son sustancias ajenas al analito que alteran su medición.",
  },
  {
    id: 9,
    tema: "Tema 1",
    subtema: "Hematología y preanalítica",
    text:
      "¿Cuál sería el primer paso en la recepción de muestras recibidas?",
    answers: [
      {
        text: "Confirmación de solicitud, muestra e identificación",
        correct: true,
      },
      {
        text: "Repartir las muestras a distintas unidades",
        correct: false,
      },
      {
        text: "Pasar la solicitud al personal administrativo",
        correct: false,
      },
      { text: "Ninguno de los pasos anteriores", correct: false },
    ],
    explanation:
      "Al recibir muestras hay que confirmar que la solicitud y la identificación coinciden.",
  },
  {
    id: 10,
    tema: "Tema 1",
    subtema: "Hematología y preanalítica",
    text:
      "Atendiendo a los motivos de rechazo de muestras, ¿Cuál sería una causa?",
    answers: [
      {
        text: "Tubos sin etiquetas o mal identificados",
        correct: false,
      },
      { text: "Peticiones incompletas", correct: false },
      {
        text: "No correspondencia de tubo y petición",
        correct: false,
      },
      { text: "Todos serían motivos de rechazo", correct: true },
    ],
    explanation:
      "Todos esos supuestos son causas de rechazo de muestras.",
  },
  {
    id: 11,
    tema: "Tema 1",
    subtema: "Hematología y preanalítica",
    text:
      "En la organización en el trabajo de un laboratorio, ¿qué crees que sería beneficioso para un buen funcionamiento?",
    answers: [
      { text: "Optimización de recursos", correct: false },
      { text: "Coordinación de las actividades", correct: false },
      { text: "A y B son correctas", correct: true },
      { text: "Ninguna de las anteriores", correct: false },
    ],
    explanation:
      "Optimizar recursos y coordinar actividades son factores clave para un buen funcionamiento.",
  },
  {
    id: 12,
    tema: "Tema 1",
    subtema: "Hematología y preanalítica",
    text:
      "El servicio de recepción de muestras deberá rechazar una orina cuando:",
    answers: [
      {
        text: "Venga debidamente etiquetada e identificada",
        correct: false,
      },
      {
        text: "Que se haya recogido tras lavar los genitales",
        correct: false,
      },
      {
        text:
          "Que venga de un niño pequeño y haya sido recogida en bolsa de polietileno",
        correct: false,
      },
      {
        text:
          "Cuando venga en cualquier recipiente con tapadera",
        correct: true,
      },
    ],
    explanation:
      "Las muestras de orina deben recogerse en recipientes estériles; un recipiente cualquiera con tapa no es adecuado.",
  },
  {
    id: 13,
    tema: "Tema 1",
    subtema: "Hematología y preanalítica",
    text:
      "A la recepción llegan muestras de toda índole. ¿Qué tipo de muestras en tubo no debería de centrifugar Carlos?",
    answers: [
      { text: "Tubo para hemograma", correct: true },
      { text: "Tubo para bioquímica", correct: false },
      { text: "Tubo de coagulación", correct: false },
      { text: "Se centrifugan todos los tubos", correct: false },
    ],
    explanation:
      "Los tubos para hemograma con EDTA no deben centrifugarse.",
  },
  {
    id: 14,
    tema: "Tema 1",
    subtema: "Hematología y preanalítica",
    text:
      "Para realizar el estudio basal bioquímico de sangre, el paciente debe estar en ayunas durante:",
    answers: [
      { text: "6 horas", correct: false },
      { text: "4 horas", correct: false },
      { text: "10 horas", correct: true },
      { text: "No hace falta estar en ayunas", correct: false },
    ],
    explanation:
      "Para un perfil bioquímico basal se recomienda un ayuno de unas 10 horas.",
  },
  {
    id: 15,
    tema: "Tema 1",
    subtema: "Hematología y preanalítica",
    text: "Una solución al 10 % (p/v) contiene:",
    answers: [
      {
        text: "10 g del soluto + 100 ml del disolvente",
        correct: false,
      },
      {
        text: "10 ml del soluto + 100 ml del disolvente",
        correct: false,
      },
      {
        text: "10 g del soluto + 90 g del disolvente",
        correct: false,
      },
      {
        text: "10 g del soluto en un volumen final de 100 ml de solución",
        correct: true,
      },
    ],
    explanation:
      "El 10 % p/v indica 10 g de soluto en 100 ml de solución.",
  },
  {
    id: 16,
    tema: "Tema 1",
    subtema: "Hematología y preanalítica",
    text:
      "La desviación típica o desviación estándar es un parámetro que indica:",
    answers: [
      {
        text: "La precisión de una serie de resultados analíticos",
        correct: true,
      },
      {
        text: "La exactitud de una serie de resultados analíticos",
        correct: false,
      },
      {
        text:
          "La precisión y la exactitud de una serie de resultados analíticos",
        correct: false,
      },
      {
        text:
          "El intervalo total de variabilidad de una serie de resultados analíticos",
        correct: false,
      },
    ],
    explanation:
      "La desviación estándar mide la dispersión y se relaciona con la precisión de los resultados.",
  },

  // Grupo B – Microbiología y biología molecular (preguntas 17‑33)
  {
    id: 17,
    tema: "Tema 1",
    subtema: "Microbiología y biología molecular",
    text:
      "Las gráficas de control estadístico o gráficas de Levy‑Jenning para los resultados analíticos son imprescindibles en el laboratorio clínico para conocer:",
    answers: [
      {
        text:
          "La exactitud y precisión entre pruebas de los resultados analíticos obtenidos con un mismo suero control",
        correct: false,
      },
      {
        text:
          "La exactitud y precisión día a día de los resultados analíticos obtenidos con un mismo suero control",
        correct: true,
      },
      {
        text:
          "La precisión día a día de los resultados analíticos obtenidos con un mismo suero control",
        correct: false,
      },
      {
        text:
          "La exactitud día a día de los resultados analíticos obtenidos con un mismo suero control",
        correct: false,
      },
    ],
    explanation:
      "Las gráficas de Levy‑Jennings permiten verificar la exactitud y precisión diaria de los resultados.",
  },
  {
    id: 18,
    tema: "Tema 1",
    subtema: "Microbiología y biología molecular",
    text:
      "La forma más sencilla de registrar los datos de un control de calidad (QC) es a través de gráficos. Entre los no utilizados está:",
    answers: [
      { text: "Levy‑Jennings", correct: false },
      { text: "Bayes", correct: true },
      { text: "Youden", correct: false },
      { text: "CuSum", correct: false },
    ],
    explanation:
      "La regla de Bayes no corresponde a un gráfico de control.",
  },
  {
    id: 19,
    tema: "Tema 1",
    subtema: "Microbiología y biología molecular",
    text:
      "La probabilidad de la existencia de un tumor entre un grupo de control heterogéneo, ante un resultado positivo de la prueba analítica, se denomina:",
    answers: [
      { text: "Valor predictivo positivo", correct: true },
      { text: "Valor predictivo negativo", correct: false },
      { text: "Especificidad", correct: false },
      { text: "Sensibilidad", correct: false },
    ],
    explanation:
      "El valor predictivo positivo es la probabilidad de que el individuo tenga la enfermedad si la prueba es positiva.",
  },
  {
    id: 20,
    tema: "Tema 1",
    subtema: "Microbiología y biología molecular",
    text:
      "¿Qué gráfica está especialmente diseñada para el control externo de calidad?",
    answers: [
      { text: "Gráfica de CuSum", correct: false },
      { text: "Gráfica de Youden", correct: true },
      { text: "Gráfica de Levey‑Jennings", correct: false },
      { text: "Gráfica externa", correct: false },
    ],
    explanation:
      "La gráfica de Youden se utiliza en los programas de comparación interlaboratorios.",
  },
  {
    id: 21,
    tema: "Tema 1",
    subtema: "Microbiología y biología molecular",
    text:
      "¿Cuál de las siguientes determinaciones se ve más afectada por la hemólisis de la muestra?",
    answers: [
      { text: "Proteínas totales", correct: false },
      { text: "LDH", correct: true },
      { text: "Calcio", correct: false },
      { text: "Magnesio", correct: false },
    ],
    explanation:
      "La LDH se libera de los eritrocitos durante la hemólisis, aumentando su concentración.",
  },
  {
    id: 22,
    tema: "Tema 1",
    subtema: "Microbiología y biología molecular",
    text:
      "De los siguientes tubos ¿cuál es el más adecuado para recoger una muestra de sangre en la que queremos determinar lactato?",
    answers: [
      { text: "De tapón rojo", correct: false },
      { text: "De tapón azul", correct: false },
      { text: "De tapón gris", correct: true },
      { text: "De tapón amarillo", correct: false },
    ],
    explanation:
      "El tubo de tapón gris contiene fluoruro y oxalato para estabilizar el lactato.",
  },
  {
    id: 23,
    tema: "Tema 1",
    subtema: "Microbiología y biología molecular",
    text: "La existencia de una inexactitud constante se denomina:",
    answers: [
      { text: "Error aleatorio", correct: false },
      { text: "Sesgo", correct: true },
      { text: "Variabilidad", correct: false },
      { text: "Distribución normal", correct: false },
    ],
    explanation:
      "El sesgo es la diferencia sistemática entre el valor observado y el valor verdadero.",
  },
  {
    id: 24,
    tema: "Tema 1",
    subtema: "Microbiología y biología molecular",
    text:
      "El grado en que una medida obtenida se aproxima al valor real se denomina:",
    answers: [
      { text: "Especificidad", correct: false },
      { text: "Precisión", correct: false },
      { text: "Sensibilidad", correct: false },
      { text: "Exactitud", correct: true },
    ],
    explanation:
      "La exactitud expresa la cercanía al valor real.",
  },
  {
    id: 25,
    tema: "Tema 1",
    subtema: "Microbiología y biología molecular",
    text: "Acreditación es:",
    answers: [
      {
        text:
          "Procedimiento mediante el cual un organismo independiente y reconocido garantiza por escrito que un producto, proceso o servicio cumple los requisitos especificados",
        correct: false,
      },
      {
        text:
          "Procedimiento mediante el cual un organismo autorizado reconoce formalmente que una organización es competente para llevar a cabo unas tareas específicas",
        correct: true,
      },
      {
        text:
          "Actividad encaminada a adaptar los procesos de una organización a las directrices dadas en los documentos normativos pertinentes",
        correct: false,
      },
      {
        text:
          "Reconocimiento legal del laboratorio por parte de la administración, con el fin de asegurar que reúne las condiciones adecuadas y garantizar a los potenciales usuarios un nivel correcto de calidad asistencial",
        correct: false,
      },
    ],
    explanation:
      "La acreditación reconoce formalmente la competencia de una organización para realizar tareas específicas.",
  },
  {
    id: 26,
    tema: "Tema 1",
    subtema: "Microbiología y biología molecular",
    text:
      "Para cuantificar el tiempo de respuesta se pueden usar los parámetros estadísticos siguientes, EXCEPTO:",
    answers: [
      {
        text: "Percentiles (generalmente 90 o 95)",
        correct: false,
      },
      {
        text:
          "Proporción de resultados entregados en un tiempo inferior al marcado",
        correct: false,
      },
      { text: "Desviación típica", correct: true },
      { text: "Mediana", correct: false },
    ],
    explanation:
      "La desviación típica es una medida de dispersión, no de tiempo de respuesta.",
  },
  {
    id: 27,
    tema: "Tema 1",
    subtema: "Microbiología y biología molecular",
    text: "¿Cuál es la finalidad del control de calidad externo?",
    answers: [
      {
        text:
          "Es la misma que la del control de calidad interno, pero realizado por personal ajeno al laboratorio",
        correct: false,
      },
      {
        text: "Conseguir sueros control fiables para validar metodologías",
        correct: false,
      },
      {
        text:
          "Obtener factores de corrección aplicables a los resultados de pacientes, a partir de una evaluación de la inexactitud",
        correct: false,
      },
      {
        text:
          "Evaluar el programa de calidad interno, la dispersión de resultados entre laboratorios, así como ayudar a la selección de nuevas metodologías",
        correct: true,
      },
    ],
    explanation:
      "El control externo evalúa el desempeño del laboratorio frente a otros y ayuda a seleccionar nuevas metodologías.",
  },
  {
    id: 28,
    tema: "Tema 1",
    subtema: "Microbiología y biología molecular",
    text: "La especificidad de una prueba se calcula:",
    answers: [
      {
        text:
          "Verdaderos positivos divididos por total de pacientes con la enfermedad",
        correct: false,
      },
      {
        text:
          "Verdaderos negativos divididos por total de pacientes sin la enfermedad",
        correct: true,
      },
      {
        text:
          "Verdaderos positivos divididos por total de pacientes con o sin la enfermedad",
        correct: false,
      },
      {
        text:
          "Verdaderos negativos por total de pacientes con o sin enfermedad",
        correct: false,
      },
    ],
    explanation:
      "Especificidad = TN/(TN+FP) indica la capacidad de descartar la enfermedad.",
  },
  {
    id: 29,
    tema: "Tema 1",
    subtema: "Microbiología y biología molecular",
    text:
      "¿Cuál de las siguientes afirmaciones es FALSA? Las curvas de ROC expresan:",
    answers: [
      {
        text:
          "El rendimiento diagnóstico de una magnitud bioquímica",
        correct: false,
      },
      {
        text:
          "La relación entre la sensibilidad y la especificidad diagnóstica de una prueba bioquímica",
        correct: false,
      },
      {
        text:
          "La capacidad discriminante de una magnitud bioquímica",
        correct: false,
      },
      {
        text:
          "Rangos de referencia de una magnitud bioquímica",
        correct: true,
      },
    ],
    explanation:
      "Las curvas ROC no representan rangos de referencia.",
  },
  {
    id: 30,
    tema: "Tema 1",
    subtema: "Microbiología y biología molecular",
    text: "La validación técnica no incluye:",
    answers: [
      {
        text:
          "La comprobación de la realización del control de calidad interno",
        correct: false,
      },
      {
        text: "Comprobar las alarmas de los equipos",
        correct: false,
      },
      {
        text: "Decidir la ampliación de pruebas, si procede",
        correct: true,
      },
      { text: "Repetir todas las calibraciones", correct: false },
    ],
    explanation:
      "Decidir la ampliación de pruebas corresponde a la validación clínica, no a la técnica.",
  },

  // Grupo C – Bioquímica clínica (preguntas 31‑50)
  {
    id: 31,
    tema: "Tema 1",
    subtema: "Bioquímica clínica",
    text:
      "En un sistema de gestión de la calidad, el documento que especifica la política de calidad, los objetivos de la organización, la gestión del equipamiento, fungibles, política medio‑ambiental, etc. que debe hacerse en el laboratorio, se conoce como:",
    answers: [
      { text: "Plan de calidad", correct: false },
      { text: "Manual de calidad", correct: true },
      { text: "Guía de calidad", correct: false },
      { text: "Procedimientos de calidad", correct: false },
    ],
    explanation:
      "El manual de calidad recoge la política y objetivos del sistema de gestión.",
  },
  {
    id: 32,
    tema: "Tema 1",
    subtema: "Bioquímica clínica",
    text:
      "Según la norma ISO 9001, el principio fundamental que debe guiar la gestión de la calidad en una organización es:",
    answers: [
      { text: "El liderazgo de la Dirección", correct: false },
      { text: "La participación del personal", correct: false },
      { text: "El enfoque basado en procesos", correct: false },
      { text: "El enfoque al cliente", correct: true },
    ],
    explanation:
      "ISO 9001 pone al cliente en el centro de la gestión de la calidad.",
  },
  {
    id: 33,
    tema: "Tema 1",
    subtema: "Bioquímica clínica",
    text:
      "¿Cuál de las siguientes afirmaciones sobre pruebas diagnósticas es cierta?",
    answers: [
      {
        text:
          "La sensibilidad es la probabilidad de que un individuo sano presente la prueba positiva",
        correct: false,
      },
      {
        text:
          "El valor predictivo negativo es la probabilidad de que un individuo enfermo tenga la prueba negativa",
        correct: false,
      },
      {
        text:
          "La especificidad es una probabilidad post‑prueba",
        correct: false,
      },
      {
        text:
          "El valor predictivo positivo aumenta cuando la prevalencia de la enfermedad aumenta",
        correct: true,
      },
    ],
    explanation:
      "A mayor prevalencia, el valor predictivo positivo de una prueba aumenta.",
  },
  {
    id: 34,
    tema: "Tema 1",
    subtema: "Bioquímica clínica",
    text:
      "La desviación estándar de una distribución es una medida de:",
    answers: [
      { text: "Posición", correct: false },
      { text: "Tendencia central", correct: false },
      { text: "Dispersión", correct: true },
      { text: "Apuntamiento", correct: false },
    ],
    explanation:
      "La desviación estándar mide la dispersión de los datos.",
  },
  {
    id: 35,
    tema: "Tema 1",
    subtema: "Bioquímica clínica",
    text:
      "En relación con la calibración de equipos, ¿cuál de las siguientes afirmaciones es correcta?",
    answers: [
      {
        text:
          "Se entiende por calibración la comparación de un sistema de medición frente a estándares conocidos",
        correct: false,
      },
      {
        text:
          "Tiene que haber un plan de calibración de equipos que defina la actividad a realizar y su periodicidad",
        correct: false,
      },
      {
        text:
          "Deberán calibrarse los equipos de medición y ensayo que lo precisen antes de su puesta en servicio",
        correct: false,
      },
      { text: "Todas las respuestas son correctas", correct: true },
    ],
    explanation:
      "Todas las afirmaciones sobre la calibración de equipos son correctas.",
  },
  {
    id: 36,
    tema: "Tema 1",
    subtema: "Bioquímica clínica",
    text:
      "Una vez obtenidos los resultados del analizador, observamos que uno de los parámetros, a pesar de haber sido diluido automáticamente por el analizador, sigue estando fuera de rango. Procedemos a realizar una dilución manual de la muestra al 1/20 con suero fisiológico. ¿Cuál de las siguientes proporciones serían las correctas?",
    answers: [
      {
        text: "10 µL de muestra + 200 µL de suero fisiológico",
        correct: false,
      },
      {
        text: "100 µL de muestra + 100 µL de suero fisiológico",
        correct: false,
      },
      {
        text: "10 µL de muestra + 190 µL de suero fisiológico",
        correct: true,
      },
      {
        text: "190 µL de muestra + 10 µL de suero fisiológico",
        correct: false,
      },
    ],
    explanation:
      "Para una dilución 1/20 hay que mezclar 10 unidades de muestra con 190 de diluyente.",
  },
  {
    id: 37,
    tema: "Tema 1",
    subtema: "Bioquímica clínica",
    text:
      "Respecto al error sistemático, señale la RESPUESTA CORRECTA:",
    answers: [
      { text: "Afecta a la precisión", correct: false },
      { text: "Se corrige con la calibración", correct: true },
      { text: "Es impredecible", correct: false },
      {
        text:
          "Muestra la concordancia de nuestro resultado con el valor verdadero",
        correct: false,
      },
    ],
    explanation:
      "El error sistemático se puede corregir mediante la calibración del método.",
  },
  {
    id: 38,
    tema: "Tema 1",
    subtema: "Bioquímica clínica",
    text: "La precisión de un resultado analítico es:",
    answers: [
      { text: "Reproducibilidad", correct: true },
      { text: "Aproximación al valor verdadero", correct: false },
      {
        text:
          "Capacidad de un método de determinar únicamente el componente que se pretende medir",
        correct: false,
      },
      {
        text: "Resultado más pequeño que puede medirse", correct: false },
    ],
    explanation:
      "La precisión se asocia a la reproductibilidad de las medidas.",
  },
  {
    id: 39,
    tema: "Tema 1",
    subtema: "Bioquímica clínica",
    text:
      "Si se realizan 20 determinaciones de glucosa de una única muestra de plasma, los resultados no serán todos exactamente iguales debido a:",
    answers: [
      { text: "Error aleatorio", correct: true },
      { text: "Error sistemático", correct: false },
      { text: "Inexactitud", correct: false },
      { text: "Una variación sistemática", correct: false },
    ],
    explanation:
      "En medición repetida surgen pequeñas variaciones aleatorias.",
  },
  {
    id: 40,
    tema: "Tema 1",
    subtema: "Bioquímica clínica",
    text:
      "En relación con la calidad en el laboratorio clínico, todos los enunciados son ciertos EXCEPTO:",
    answers: [
      {
        text: "Se centra únicamente en la fase analítica",
        correct: true,
      },
      {
        text: "Se encuentra integrada con la gestión clínica",
        correct: false,
      },
      { text: "Implica a todos los profesionales", correct: false },
      { text: "Abarca todo el proceso", correct: false },
    ],
    explanation:
      "La calidad abarca todas las fases del proceso, no sólo la analítica.",
  },
  {
    id: 41,
    tema: "Tema 1",
    subtema: "Bioquímica clínica",
    text:
      "Según qué NORMA ISO se han acreditado o están en proceso de acreditación los laboratorios clínicos:",
    answers: [
      { text: "NORMA UNE‑EN ISO 17025:1999", correct: false },
      { text: "NORMA UNE‑EN ISO 15189:2022", correct: true },
      { text: "NORMA UNE‑EN ISO 9001:2000", correct: false },
      { text: "Todas las anteriores son correctas", correct: false },
    ],
    explanation:
      "La norma ISO 15189 es la específica para laboratorios clínicos.",
  },
  {
    id: 42,
    tema: "Tema 1",
    subtema: "Bioquímica clínica",
    text: "El transporte de muestras al laboratorio debe hacerse:",
    answers: [
      {
        text:
          "En un periodo de tiempo apropiado a la naturaleza de la petición",
        correct: false,
      },
      {
        text:
          "De una manera que asegure la seguridad para el personal que la transporta y para el público en general",
        correct: false,
      },
      {
        text:
          "Dentro de un rango de temperatura especificado y con los conservadores adecuados",
        correct: false,
      },
      {
        text: "Todas las anteriores son correctas", correct: true },
    ],
    explanation:
      "Estas tres condiciones deben cumplirse durante el transporte de muestras.",
  },
  {
    id: 43,
    tema: "Tema 1",
    subtema: "Bioquímica clínica",
    text:
      "La fase preanalítica es un subproceso del laboratorio que incluye, entre otros:",
    answers: [
      {
        text: "El transporte de las muestras hasta el laboratorio",
        correct: true,
      },
      { text: "La emisión del informe de laboratorio", correct: false },
      {
        text: "La validación técnica de los resultados",
        correct: false,
      },
      { text: "Todas son falsas", correct: false },
    ],
    explanation:
      "El transporte de muestras forma parte de la fase preanalítica; la emisión de informes pertenece a la fase postanalítica.",
  },
  {
    id: 44,
    tema: "Tema 1",
    subtema: "Bioquímica clínica",
    text: "Señale la respuesta correcta:",
    answers: [
      {
        text:
          "El EDTA constituye actualmente un anticoagulante de elección en hematología",
        correct: true,
      },
      {
        text:
          "Es aconsejable mantener a 4 °C las muestras de sangre durante su transporte, para preservar los niveles de potasio",
        correct: false,
      },
      {
        text:
          "La hemólisis es la salida de componentes de los eritrocitos al plasma o al suero, por lo que aumentan las concentraciones de sodio",
        correct: false,
      },
      { text: "Todas las respuestas son correctas", correct: false },
    ],
    explanation:
      "El EDTA es el anticoagulante más utilizado en los hemogramas.",
  },
  {
    id: 45,
    tema: "Tema 1",
    subtema: "Bioquímica clínica",
    text: "Es motivo de rechazo:",
    answers: [
      { text: "Una muestra mal rotulada", correct: false },
      { text: "Una muestra derramada", correct: false },
      { text: "Un volante no cumplimentado", correct: false },
      { text: "Todas las anteriores son correctas", correct: true },
    ],
    explanation:
      "Cualquiera de esas circunstancias obliga a rechazar la muestra.",
  },
  {
    id: 46,
    tema: "Tema 1",
    subtema: "Bioquímica clínica",
    text:
      "Indique cuál de las siguientes no es una medida de tendencia central:",
    answers: [
      { text: "Coeficiente de variación", correct: true },
      { text: "Moda", correct: false },
      { text: "Media", correct: false },
      { text: "Mediana", correct: false },
    ],
    explanation:
      "El coeficiente de variación es una medida de dispersión.",
  },
  {
    id: 47,
    tema: "Tema 1",
    subtema: "Bioquímica clínica",
    text:
      "En una distribución de variables cuantitativas el valor que se repite con mayor frecuencia se denomina:",
    answers: [
      { text: "Media", correct: false },
      { text: "Coeficiente de variación", correct: false },
      { text: "Mediana", correct: false },
      { text: "Moda", correct: true },
    ],
    explanation:
      "La moda es el valor que ocurre con mayor frecuencia.",
  },
  {
    id: 48,
    tema: "Tema 1",
    subtema: "Bioquímica clínica",
    text:
      "Obtenemos un resultado de glucosa en orina con una alarma de absorbancia; en el manual de la técnica nos indican que realicemos una dilución 1/20. ¿Cómo realizaríamos la dilución?",
    answers: [
      {
        text: "Con 19 volúmenes de orina más 1 volumen de agua destilada",
        correct: false,
      },
      {
        text: "Con volúmenes iguales de orina y agua destilada",
        correct: false,
      },
      {
        text:
          "Con 1 volumen de orina más 19 volúmenes de agua destilada",
        correct: true,
      },
      {
        text: "Con 1 volumen de orina y 20 volúmenes de agua destilada",
        correct: false,
      },
    ],
    explanation:
      "Para una dilución 1/20 se añade 1 parte de muestra a 19 partes de diluyente.",
  },
  {
    id: 49,
    tema: "Tema 1",
    subtema: "Bioquímica clínica",
    text:
      "El error que se debe a causas accidentales difíciles de determinar y que puede influir en cualquier resultado, se denomina:",
    answers: [
      { text: "Error aleatorio", correct: true },
      { text: "Error sistemático", correct: false },
      { text: "Error casual", correct: false },
      { text: "Error total", correct: false },
    ],
    explanation:
      "El error aleatorio se debe a causas impredecibles y afecta la precisión.",
  },
  {
    id: 50,
    tema: "Tema 1",
    subtema: "Bioquímica clínica",
    text:
      "Los gráficos de control que habitualmente se emplean en el laboratorio clínico para evaluar el control de calidad interno se conocen como:",
    answers: [
      { text: "Gráficas de Levey‑Jennings", correct: true },
      { text: "Gráficas de Youden", correct: false },
      { text: "Gráficas de Cusum", correct: false },
      { text: "Gráficas de control Z", correct: false },
    ],
    explanation:
      "Las gráficas de Levey‑Jennings se utilizan para representar los resultados de los controles internos.",
  },

  // Preguntas de ejemplo de los temas 2 y 3 para mantener la estructura del sistema.
  {
    id: 51,
    tema: "Tema 2",
    subtema: null,
    text:
      "¿Qué prueba se utiliza para diferenciar entre bacterias grampositivas y gramnegativas?",
    answers: [
      { text: "Tinción de Ziehl‑Neelsen", correct: false },
      { text: "Tinción de Gram", correct: true },
      { text: "Tinción de Wright", correct: false },
      { text: "Prueba de catalasa", correct: false },
    ],
    explanation:
      "La tinción de Gram clasifica las bacterias en grampositivas y gramnegativas según la composición de su pared celular.",
  },
  {
    id: 52,
    tema: "Tema 3",
    subtema: null,
    text:
      "¿Cuál de los siguientes analitos es un indicador sensible de lesión miocárdica aguda?",
    answers: [
      { text: "Glucosa", correct: false },
      { text: "Troponina I", correct: true },
      { text: "Urea", correct: false },
      { text: "Ácido úrico", correct: false },
    ],
    explanation:
      "Las troponinas son biomarcadores específicos de daño del músculo cardíaco.",
  },
  {
    id: 53,
    tema: "Tema 2",
    subtema: null,
    text:
      "¿Qué medio de cultivo es selectivo para el crecimiento de hongos y levaduras?",
    answers: [
      { text: "Agar MacConkey", correct: false },
      { text: "Agar Sabouraud", correct: true },
      { text: "Agar sangre", correct: false },
      { text: "Agar chocolate", correct: false },
    ],
    explanation:
      "El agar Sabouraud tiene un pH ácido que inhibe muchas bacterias y favorece el crecimiento de hongos y levaduras.",
  },
];