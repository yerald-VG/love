/* ============================================================
   REGALO DE CUMPLEAÑOS — LÓGICA PRINCIPAL
   ============================================================ */

/* ---------- 1. CONFIGURACIÓN GENERAL ---------- */
const CONFIG = {
  NOMBRE_TUYO: 'yerald',
  NOMBRE_NOVIO: 'gera',
  EMAIL: 'yeralvegagarcia17@gmail.com',
  LETTER_TEXT:
`Mi buu 🤎,

Sabes, antes de conocerte me parecía un asco el amor y vivía siempre con desconfianza. Tenía muchos pensamientos; uno de ellos era: ¿cómo es posible que un desconocido te ame? ¿Y cómo podía alguien estar tan seguro de que realmente amaba a otra persona? Pero lo que más miedo me daba era confiar en alguien y que después terminara traicionándome.

Y entonces llegaste tú.

Al principio también tuve miedo contigo, porque no sabía qué iba a pasar ni cuánto iba a durar esto. Pero poco a poco me fuiste demostrando que podía confiar en ti, que podía sentirme tranquila a tu lado y que no todo tenía que terminar mal. Me diste algo que antes pensaba que era imposible: sentirme segura queriendo a alguien.

Y ahora, después de 3 años y medio contigo, pienso en todo lo que hemos vivido y me parece increíble. Cuando nos conocimos éramos prácticamente unos niños, inmaduros, con muchas cosas por aprender y sin saber realmente todo lo que la vida nos tenía preparado. Éramos dos personas que apenas estaban descubriendo quiénes eran y, sin darnos cuenta, terminamos creciendo juntos.

Hemos cambiado muchísimo desde entonces. Hemos aprendido de nuestros errores, de nuestras discusiones, de nuestros momentos buenos y de los difíciles. Hemos aprendido el uno del otro, y creo que eso es una de las cosas más bonitas de nuestra relación. Tú me has enseñado muchas cosas y yo también espero haberte dejado un poquito de mí en el camino. Hemos crecido, no solo individualmente, sino también como pareja.

A veces pienso en cómo éramos al principio y me da ternura ver cuánto hemos cambiado. Hemos pasado de ser esos niños inmaduros que estaban aprendiendo a quererse, a ser dos personas que siguen aprendiendo cada día cómo acompañarse, entenderse y amarse mejor.

Y no me arrepiento de haber crecido contigo. Al contrario, me hace feliz saber que muchas de mis etapas las he vivido a tu lado y que tú también has vivido las tuyas conmigo. Hemos visto cómo cambiamos, cómo maduramos y cómo vamos construyendo poco a poco nuestras vidas.

Te amo más que ayer, más que cuando te conocí y muchísimo más de lo que pensé que algún día podría amar a alguien. Pero si hay algo que siento incluso más fuerte que todo eso, es la confianza que tengo en ti. Porque después de todas mis dudas y mis miedos, tú lograste hacerme creer en nosotros.

Espero tener una vida contigo. Espero que podamos seguir creciendo juntos, cumpliendo nuestras metas, acompañándonos en cada etapa y caminando por el mismo camino, sin importar cuántas vueltas dé la vida. Quiero que cuando miremos atrás podamos decir: “mira todo lo que hemos vivido juntos”.

Desde que te conocí siento que veo todo un poquito más colorido. Los momentos simples se volvieron significativos solo porque estás tú. Un día normal puede convertirse en un día bonito si estoy contigo. Cada vez que vienes a visitarme me haces feliz, incluso si simplemente estamos juntos sin hacer nada especial.

Y me encanta pensar que, después de todo este tiempo, seguimos siendo nosotros: mi chocolate y yo, tu leche. 🤎🤍 Quizás somos diferentes en muchas cosas, pero de alguna manera hacemos una combinación bonita. Y no cambiaría nuestra historia por ninguna otra.

Gracias por estos 3 años y medio, por cada abrazo, cada beso, cada risa, cada momento y también por cada dificultad que hemos logrado superar. Gracias por crecer conmigo, por enseñarme, por aprender de mí, por quedarte y por quererme incluso mientras los dos aprendíamos a ser mejores.

No sé exactamente qué nos espera en el futuro, pero sí sé que quiero seguir descubriéndolo contigo. Quiero seguir conociendo las nuevas versiones de ti, mientras tú conoces las nuevas versiones de mí. Porque si algo me gusta de nuestra historia es que no nos quedamos siendo aquellos niños que se conocieron; hemos crecido juntos y todavía nos queda muchísimo por vivir.

Te amo, mi buu. Muchísimo. 🤎🤍.`
};

/* ---------- 2. DATOS DE SECCIONES ---------- */

const TIMELINE_EVENTS = [
  {
    date: '27/28 de noviembre — El día que nos conocimos',
    title: 'Donde todo empezó',
    icon: '✨',
    description: 'Yo estaba pasando por uno de esos años que parecen no terminar nunca. Estaba triste por muchas cosas y no esperaba que aquel día fuera a cambiar algo en mi vida. Entonces llegaste tú, a aquel restaurante donde yo trabajaba los fines de semana, acompañado de tu familia. Recuerdo que llevabas una corbata porque acababas de graduarte de bachillerato. Te paraste frente a mí y comenzaste a hacerme charla. Yo pensaba que eras menor que yo. Jamás imaginé que ese muchacho de corbata terminaría convirtiéndose en una de las personas más importantes de mi vida. Después me pediste mi número y yo te dije que no tenía celular. Tu cara de "chale" todavía me da risa. 😂 Pero luego te dije que podía anotarme el tuyo. Después de salir del trabajo te escribí y, sin saberlo, acababa de comenzar nuestra historia.',
    feeling: 'Ese día yo estaba triste y no sabía que una conversación tan sencilla podía terminar significando tanto. No sentí que estaba conociendo al amor de mi vida; simplemente conocí a un muchacho que decidió hablarme. Ahora, mirando hacia atrás, me parece increíble pensar que todo comenzó con una charla, una corbata y un número de teléfono.'
  },
  {
    date: 'Al día siguiente — El primer chocolate',
    title: 'El pequeño detalle que todavía recuerdo',
    icon: '🍫',
    description: 'Después de conocernos, llegaste a mi trabajo con un chocolate. Puede parecer un detalle pequeño, pero yo todavía lo recuerdo. Era una de esas cosas sencillas que empezaban a demostrarme que habías pensado en mí después de aquel primer encuentro.',
    feeling: 'Me sentí especial. Tal vez para ti era solo un chocolate, pero para mí significaba que habías pensado en mí. Y creo que desde ahí comenzaste poquito a poquito a ganarte un espacio en mi corazón.'
  },
  {
    date: 'Unas semanas después — ¿Puedo ser tu novio?',
    title: 'El primer intento',
    icon: '💌',
    description: 'Después de hablar y conocernos un poquito más, llegó el momento en que me preguntaste: "¿Puedo ser tu novio?". Y mi respuesta fue no. 😂 No porque no me gustaras, sino porque yo siempre he sido muy reservada y necesitaba tiempo. Pasaron unas semanas y finalmente fui yo quien decidió decirte que sí, que lo intentáramos y que fuéramos pareja.',
    feeling: 'Tenía nervios, dudas y muchísimas cosas en la cabeza. Pero también tenía curiosidad por descubrir qué podía pasar entre nosotros. Desde el principio fui lenta para abrir mi corazón, pero tú tuviste la paciencia de quedarte.'
  },
  {
    date: 'Nuestro primer tropiezo — El secreto que no duró',
    title: 'Cuando el chisme nos ganó',
    icon: '🤭',
    description: 'Nuestra primera etapa juntos duró poquito porque yo había puesto una condición: nadie podía enterarse. Todavía no le había contado a mi mamá y, como tu hermana estudiaba con mis primas chismosas, aquello era prácticamente una misión imposible. Y efectivamente… lo contaste, tu hermana regó el chisme y todo terminó saliendo a la luz. Terminamos por eso, aunque nuestra historia claramente no estaba destinada a quedarse ahí.',
    feeling: 'En ese momento me sentí confundida y triste. Yo quería estar contigo, pero también tenía miedo de que todo se complicara. Aunque terminamos, todavía quedaba algo entre nosotros.'
  },
  {
    date: 'Un día después — Volvimos',
    title: 'Porque todavía nos faltábamos',
    icon: '🫶',
    description: 'Después de un día volvimos. A pesar de todo lo que había pasado, todavía existía algo entre nosotros que no había desaparecido. Decidimos darnos otra oportunidad. Esta vez ya no éramos simplemente dos personas que se habían conocido en un restaurante; éramos dos personas que ya habían experimentado lo que era estar separadas y habían decidido volver a intentarlo.',
    feeling: 'Volver contigo se sintió diferente. Ya sabía un poquito más de ti, ya sabía lo que era extrañarte y también sabía que quería descubrir hasta dónde podía llegar nuestra historia.'
  },
  {
    date: 'Después de volver — Nuestro primer beso',
    title: 'Un beso que esperó su momento',
    icon: '💋',
    description: 'Pasaron aproximadamente tres meses desde que volvimos hasta que llegó nuestro primer beso. Yo siempre he sido muy reservada y lenta para esas cosas, así que para mí significó muchísimo. No fue simplemente un beso; fue otro pequeño paso dentro de una relación que estaba aprendiendo a construir a nuestro propio ritmo.',
    feeling: 'Tenía muchísimos nervios. 🥹 Para mí ese momento significó abrir un poquito más mi corazón y confiar en ti. Quizás tú no sabías todo lo que significaba para mí, pero yo sí lo guardé como uno de nuestros momentos especiales.'
  },
  {
    date: 'Tres años y medio después — Nosotros',
    title: 'Crecimos juntos',
    icon: '🤍',
    description: 'Cuando pienso en nosotros ahora, me cuesta creer que todo comenzó con una conversación en un restaurante. Nos conocimos siendo unos niños inmaduros, sin saber realmente qué queríamos de la vida ni cuánto íbamos a cambiar. Y aquí estamos, después de tres años y medio, habiendo crecido juntos, aprendido el uno del otro, peleado, reído, reconciliado y aprendido cada vez más sobre cómo amarnos. Ya no somos exactamente las personas que se conocieron aquel noviembre, y creo que eso es una de las cosas más bonitas: hemos cambiado, pero hemos seguido eligiéndonos.',
    feeling: 'Hoy siento una mezcla de nostalgia, amor y agradecimiento. Me da ternura pensar en aquellos dos niños que no tenían idea de todo lo que iban a vivir juntos. Y me hace feliz saber que, entre tantas personas y tantos caminos posibles, la vida hizo que tú entraras a aquel restaurante, te pusieras a hablar conmigo y terminaras convirtiéndote en mi persona favorita.'
  }
];

const PHOTOS = [
  { caption:'Foto en el carro directo a nuestro primer viaje', memory:'El día que estábamos cansados de todo.', note:'Aunque estaba cansada estaba muy emocionada de estar contigo.', icon:'📷', img:'imagenes/IMG_3294.JPEG', rot:'-3deg' },
  { caption:'Foto antes de ir a la playa', memory:'Recuerdo que fue al rodadero mamados de la existencia pero no de la playa.', note:'También estaba Anderson.', icon:'😄', img:'imagenes/IMG_3339.JPEG', rot:'2deg' },
  { caption:'Nosotros', memory:'Mi foto favorita.', note:'Amo tus ojos, me encantan.', icon:'🧳', img:'imagenes/IMG_3391.JPEG', rot:'-2deg' },
  { caption:'La mejor foto en el espejo en Santa Marta', memory:'Nuestra primera foto en el espejo xd.', note:'Perdón por los errores, estoy cansada, te amo.', icon:'🌇', img:'imagenes/IMG_3399.JPEG', rot:'3deg' },
  { caption:'Esa noche de estrellas y de blanco..', memory:'Detesto esta foto pero a ti te gusta, por eso la pongo.', note:'El álbum es íntimo ¿capisci?.', icon:'✨', img:'imagenes/n.JPEG', rot:'-1deg' },
  { caption:'Foto metiendo vicio', memory:'Del cansancio echando pereza.', note:'Mi lugar seguro siempre serás tú, te amo....', icon:'🤍', img:'imagenes/v.JPEG', rot:'2deg' },
  { caption:'Viaje a Pueblo Nuevo', memory:'Una foto que nos tomamos en tu moto sucia 🤍.', note:'A veces las mejores fotos llegan sin avisar.', icon:'💬', img:'imagenes/pn.jpeg', rot:'-2deg' }
];

const COMIC_PANELS = [
  {
    narration: 'Sin esperar nada, te fijaste en mí. Es algo que mi mente no logra entender... ¿Por qué en mí, si somos polos opuestos?',
    dialogue: '"¿Por qué en mí?"',
    image: 'imagenes/1.jpg'
  },
  {
    narration: 'El amor tardó en llegar. Mi miedo siempre ha sido más grande que yo y es mi mayor defecto, pero aunque avance lento, cada día me suelto más y te amo un poco más.',
    dialogue: '"Te amo más de lo que mi miedo demuestra."',
    image: 'imagenes/2.jpg'
  },
  {
    narration: 'Me has demostrado cosas que nunca en la vida había experimentado: caricias, entendimiento, enseñanzas... ¡y nuestra propia psicopatía juntas!',
    dialogue: '"Conocí un mundo entero contigo."',
    image: 'imagenes/3.jpg'
  },
  {
    narration: 'Llegó ese rayito de luz a formar parte de nuestra vida para salir adelante juntos, amarnos y hacer absolutamente todo en equipo.',
    dialogue: '"Siempre juntos."',
    image: 'imagenes/4.jpg'
  },
  {
    narration: 'Me siento amada y protegida a tu lado. Mirar atrás me da nostalgia; para mí era imposible durar más de un mes y míranos hoy, casi cuatro años juntas.',
    dialogue: '"Casi cuatro años a tu lado..."',
    image: 'imagenes/5.jpg'
  },
  {
    narration: 'Espero seguir a tu lado, amanecer, anochecer y experimentar mil cosas más: cantar, bailar, entrenar y vivir la vida juntas.',
    dialogue: '"Quiero experimentarlo todo contigo."',
    image: 'imagenes/6.jpg'
  },
  {
    narration: 'No es que no pueda vivir sin ti... es que ni siquiera lo quiero intentar.',
    dialogue: '"Y no lo quiero intentar."',
    image: 'imagenes/7.jpg'
  }
];

/* ESTRUCTURA Y EDICIÓN DE LOS 21 REGALOS CON DESAFÍOS Y PISTAS */
const GIFTS_CONTENT = {
  1: { 
    type: 'Carta', 
    text: 'Una pequeña carta para abrir tus 21 regalos: gracias por dejarme amarte cada día.',
    challengeType: 'riddle',
    question: 'Tengo hojas pero no soy árbol, te cuento historias sin hablar. ¿Qué soy?',
    answer: 'libro',
    hint: '📍 Pista física: Busca debajo del cojín principal del sofá.'
  },
  2: {
    type: 'Cupón romántico',
    text: 'Cupón válido por una cita sorpresa elegida por mí.',
    challengeType: 'quiz',
    question: '¿Dónde fue nuestra primera cita oficial?',
    options: ['A) En el parque', 'B) En un restaurante', 'C) En el cine'],
    correctIndex: 1,
    hint: '📍 Pista física: Revisa dentro de la taza de café que más uso.'
  },
  3: {
    type: 'Detalle dulce',
    text: '¡Un vale por tu postre o chocolate favorito cuando quieras!',
    challengeType: 'riddle',
    question: 'Soy dulce, frío y me derrito si no me comes rápido. ¿Qué soy?',
    answer: 'helado',
    hint: '📍 Pista física: Revisa cerca del congelador.'
  },
  4: { 
    type: 'Promesa', 
    text: 'Prometo acompañarte en cada meta que decidas perseguir, sin soltar tu mano.',
    challengeType: 'quiz',
    question: '¿Qué canción me recuerda a ti siempre?',
    options: ['A) Una balada romántica', 'B) Nuestra canción especial', 'C) Un pop pegajoso'],
    correctIndex: 1,
    hint: '📍 Pista física: Mira detrás del espejo del baño.'
  },
  5: {
    type: 'Mensaje especial',
    text: 'Amo la forma en la que sonríes cuando me cuentas algo que te apasiona.',
    challengeType: 'riddle',
    question: 'Me usas para mirar pero no para tocar, me enciendes de noche y de día me apagas. ¿Qué soy?',
    answer: 'lampara',
    hint: '📍 Pista física: Busca al lado de la lámpara de noche.'
  },
  6: {
    type: 'Sorpresa divertida',
    text: 'Vale por una noche de películas a tu elección con papitas y snacks.',
    challengeType: 'quiz',
    question: '¿Quién es más propenso a quedarse dormido viendo una película?',
    options: ['A) Tú', 'B) Yo', 'C) Los dos por igual'],
    correctIndex: 0,
    hint: '📍 Pista física: Revisa bajo los cojines de la sala.'
  },
  7: {
    type: 'Recordatorio',
    text: 'Nunca olvides lo increíble, fuerte y capaz que eres.',
    challengeType: 'riddle',
    question: 'Tengo dientes pero no puedo morder, peino tu cabello al amanecer. ¿Qué soy?',
    answer: 'peine',
    hint: '📍 Pista física: Busca cerca de los cepillos en el baño.'
  },
  8: {
    type: 'Cupón romántico',
    text: 'Vale por un desayuno preparado en la cama.',
    challengeType: 'quiz',
    question: '¿Cuál es la comida que más me gusta preparar contigo?',
    options: ['A) Desayunos', 'B) Cenitas rápidas', 'C) Postres'],
    correctIndex: 0,
    hint: '📍 Pista física: Revisa dentro del horno o microondas.'
  },
  9: { 
    type: 'Cupón de relax', 
    text: 'Cupón válido por un masaje relajante de 20 minutos.',
    challengeType: 'riddle',
    question: 'Si me miras sonrío, si me guiñas el ojo lo hago contigo. ¿Qué soy?',
    answer: 'espejo',
    hint: '📍 Pista física: Busca dentro del cajón de las medias.'
  },
  10: {
    type: 'Mini reto',
    text: '¡Tienes derecho a pedirme un favor que no me pueda negar!',
    challengeType: 'quiz',
    question: '¿En qué año nos conocimos?',
    options: ['A) Opción 1', 'B) Opción 2', 'C) Opción 3'],
    correctIndex: 1,
    hint: '📍 Pista física: Revisa detrás de la puerta principal.'
  },
  11: {
    type: 'Frase de amor',
    text: 'Contigo el mundo se siente un poquito más suave y bonito.',
    challengeType: 'riddle',
    question: 'Llevo tiempo pero no me muevo, tengo agujas pero no coso. ¿Qué soy?',
    answer: 'reloj',
    hint: '📍 Pista física: Busca muy cerca del reloj de la casa.'
  },
  12: {
    type: 'Detalle especial',
    text: 'Vale por un paseo a caminar sin prisa agarrados de la mano.',
    challengeType: 'quiz',
    question: '¿Cuál de estos lugares es nuestro lugar feliz?',
    options: ['A) El parque', 'B) Tu casa / Mi casa', 'C) Cualquier lugar juntos'],
    correctIndex: 2,
    hint: '📍 Pista física: Busca cerca de donde guardamos los zapatos.'
  },
  13: { 
    type: 'Recuerdo', 
    text: '¿Recuerdas esa noche que nos quedamos hablando hasta la madrugada? Ahí supe que quería todo contigo.',
    challengeType: 'quiz',
    question: '¿Quién dijo "te amo" primero?',
    options: ['A) Tú', 'B) Yo', 'C) Fue mutuo'],
    correctIndex: 1,
    hint: '📍 Pista física: Busca debajo de tu almohada.'
  },
  14: {
    type: 'Abrazo acumulable',
    text: 'Vale por 10 abrazos apretados acumulables para cuando los necesites.',
    challengeType: 'riddle',
    question: 'Guardo llaves pero no abro puertas, tengo bolsillos pero no me pongo pantalón. ¿Qué soy?',
    answer: 'chaqueta',
    hint: '📍 Pista física: Busca en el bolsillo de tu chaqueta favorita.'
  },
  15: {
    type: 'Carta corta',
    text: 'Me encanta la persona en la que te estás convirtiendo. Estoy muy orgulloso/a de ti.',
    challengeType: 'quiz',
    question: '¿Qué es lo que más me hace sonreír de ti?',
    options: ['A) Tus chistes', 'B) Tu risa', 'C) Tu forma de cuidar'],
    correctIndex: 1,
    hint: '📍 Pista física: Busca detrás de un portarretratos o cuadro.'
  },
  16: {
    type: 'Música para ti',
    text: 'Pídeme que reproduzca cualquier canción en este momento y la bailamos juntos.',
    challengeType: 'riddle',
    question: 'Tengo teclas pero no soy piano, controlo la música o la pantalla con mi mano. ¿Qué soy?',
    answer: 'control',
    hint: '📍 Pista física: Revisa cerca del control del televisor.'
  },
  17: { 
    type: 'Mensaje oculto', 
    text: 'Pase lo que pase, mi lugar favorito en el mundo sigue siendo a tu lado.',
    challengeType: 'riddle',
    question: 'Guardo ropa pero no la uso, me abres y me cierras cada día. ¿Qué soy?',
    answer: 'armario',
    hint: '📍 Pista física: Revisa dentro del armario.'
  },
  18: {
    type: 'Pase libre',
    text: '¡Pase libre para elegir qué cenamos hoy sin discusiones!',
    challengeType: 'quiz',
    question: '¿Cuál es la comida que nunca rechazamos?',
    options: ['A) Pizza', 'B) Hamburguesas', 'C) Sushi'],
    correctIndex: 0,
    hint: '📍 Pista física: Busca en la mesa de la cocina.'
  },
  19: {
    type: 'Pensamiento',
    text: 'Gracias por cada risa compartida, son mi medicina favorita.',
    challengeType: 'riddle',
    question: 'Vuelo sin alas, lloro sin ojos. ¿Qué soy?',
    answer: 'nube',
    hint: '📍 Pista física: Revisa cerca de la ventana.'
  },
  20: {
    type: 'Penúltimo regalo',
    text: 'Estás a solo un paso del regalo final... ¡Prepárate!',
    challengeType: 'quiz',
    question: '¿Estás listo/a para el regalo número 21?',
    options: ['A) ¡Sí, ya quiero!', 'B) Un poco nervioso/a', 'C) Nací listo/a'],
    correctIndex: 0,
    hint: '📍 Pista física: Busca cerca del lugar donde guardas tus llaves.'
  },
  21: { 
    type: 'Regalo físico', 
    text: 'Este número es especial: tu regalo físico te está esperando en mis manos 🎁',
    challengeType: 'quiz',
    question: '¿Cuál es la regla principal de este cumpleaños?',
    options: ['A) Pasar un día hermoso', 'B) Dejarte consentir', 'C) Ambas son correctas'],
    correctIndex: 2,
    hint: '📍 Pista física: ¡Ven a darme un abrazo para entregarte tu regalo real!'
  }
};

const GIFTS = Array.from({ length: 21 }, (_, idx) => {
  const n = idx + 1;
  const defaultGift = {
    type: 'Sorpresa',
    text: 'Próximamente ❤️',
    challengeType: 'quiz',
    question: '¿Cuánto te quiero?',
    options: ['A) Mucho', 'B) Demasiado', 'C) Infinito'],
    correctIndex: 2,
    hint: '📍 Pista física: Busca cerca de la televisión.'
  };
  return { id: n, ...(GIFTS_CONTENT[n] || defaultGift) };
});

const REASONS = [
  'Porque me encanta que vengas a visitarme.', 'Porque me encanta saber que voy a verte.',
  'Porque me consientes incluso cuando digo que no necesito que lo hagas.', 'Porque sabes hacerme sentir amada en los detalles más pequeños.',
  'Porque me haces reír incluso cuando estoy de mal genio contigo.', 'Porque sí, a veces me emputas muchísimo, pero aun así termino queriendo abrazarte.',
  'Porque sabes leer mis gestos incluso cuando no digo nada.', 'Porque muchas veces sabes lo que me pasa solo con mirarme.',
  'Porque tus ojos tienen algo que después de tanto tiempo todavía me sigue enamorando.', 'Porque amo tu cabello rizado y podría quedarme mirándolo por horas.',
  'Porque eres un consentido y me encanta consentirte.', 'Porque me encanta cuando tú también quieres que te mimen.',
  'Porque contigo puedo ser completamente yo.', 'Porque conoces mis mañas y aun así decidiste quedarte.',
  'Porque has aprendido a conocerme con el tiempo.', 'Porque hemos crecido juntos y eso hace que nuestro amor sea aún más especial.',
  'Porque me conociste cuando éramos unos niños inmaduros que no tenían idea de todo lo que nos esperaba.', 'Porque hemos aprendido juntos, equivocándonos y volviendo a intentarlo.',
  'Porque has conocido muchas versiones de mí y sigues queriendo conocer las que faltan.', 'Porque me has visto llorar, enojarme, reír y hacer bobadas, y aun así sigues mirándome con amor.',
  'Porque contigo hasta no hacer nada puede convertirse en mi plan favorito.', 'Porque me encanta cuando simplemente estamos juntos sin necesidad de hacer algo especial.',
  'Porque tu abrazo tiene una forma muy extraña de hacer que todo parezca estar bien.', 'Porque cuando me abrazas siento que por un momento no existe nada más.',
  'Porque tu risa es una de esas cosas que podría escuchar mil veces.', 'Porque me encanta molestarte solo para verte reaccionar.',
  'Porque tú también sabes cómo molestarme hasta sacarme de quicio.', 'Porque incluso nuestras pequeñas peleas terminan enseñándonos algo el uno del otro.',
  'Porque sabes cuándo necesito que me abraces y cuándo simplemente necesito que me escuches.', 'Porque no siempre necesito explicarte lo que siento para que entiendas que algo me pasa.',
  'Porque me haces sentir segura cuando estoy contigo.', 'Porque me encanta sentir que tengo a alguien a quien puedo contarle cualquier cosa.',
  'Porque celebras mis pequeñas victorias como si fueran enormes.', 'Porque me apoyas incluso cuando yo misma dudo de mí.',
  'Porque me recuerdas que puedo hacer más de lo que creo.', 'Porque tienes una manera muy tuya de hacerme sentir especial.',
  'Porque me encanta cuando haces cosas por mí sin que tenga que pedirlas.', 'Porque recuerdas detalles que yo ni siquiera pensaba que habías notado.',
  'Porque me gusta cómo me miras cuando crees que no me estoy dando cuenta.', 'Porque amo esos momentos en los que nuestras miradas dicen cosas que nuestras palabras no pueden.',
  'Porque puedo ser cursi contigo sin sentir vergüenza.', 'Porque puedo hacer el ridículo contigo y en vez de juzgarme, probablemente te ríes conmigo.',
  'Porque conoces mi lado más sensible y nunca has dejado de cuidarlo.', 'Porque me encanta que seas mi novio, pero también mi compañero, mi cómplice y mi mejor amigo.',
  'Porque después de tres años todavía hay momentos en los que pienso: ¿cómo tuve tanta suerte de encontrarte?', 'Porque hemos cambiado muchísimo desde que nos conocimos, pero seguimos encontrándonos el uno al otro.',
  'Porque nuestro amor no se quedó en quienes éramos de niños; creció con nosotros.', 'Porque después de todo este tiempo todavía me emociono cuando sé que voy a verte.',
  'Porque podría escribir cien razones más y aun así sentiría que ninguna explica completamente por qué te amo tanto.', 'Porque simplemente eres tú, y eso ya es suficiente razón.'
];

/* ---------- 3. FONDO Y PARTÍCULAS ---------- */
function buildStarfield(){
  const field = document.getElementById('starfield');
  if(!field) return;
  const isSmall = window.innerWidth < 640;
  const count = isSmall ? 70 : 150;
  let html = '';
  for(let i = 0; i < count; i++){
    const size = (Math.random()*2.3 + 1).toFixed(1);
    const top = (Math.random()*100).toFixed(2);
    const left = (Math.random()*100).toFixed(2);
    const duration = (Math.random()*3 + 2).toFixed(2);
    const delay = (Math.random()*4).toFixed(2);
    html += `<span class="star" style="width:${size}px;height:${size}px;top:${top}%;left:${left}%;animation-duration:${duration}s;animation-delay:${delay}s;"></span>`;
  }
  field.innerHTML = html;

  for(let i = 0; i < 4; i++){
    const s = document.createElement('div');
    s.className = 'shooting-star';
    s.style.top = (Math.random()*35).toFixed(2) + '%';
    s.style.left = (Math.random()*55).toFixed(2) + '%';
    s.style.animationDelay = (i*3.4 + Math.random()*2).toFixed(2) + 's';
    field.appendChild(s);
  }
}

function spawnParticle(){
  const layer = document.getElementById('particles');
  if(!layer) return;
  const p = document.createElement('span');
  p.className = 'particle';
  p.textContent = Math.random() > 0.5 ? '❤' : '✦';
  p.style.left = (Math.random()*100) + '%';
  const duration = Math.random()*6 + 8;
  p.style.animationDuration = duration + 's';
  p.style.fontSize = (Math.random()*0.7 + 0.8) + 'rem';
  layer.appendChild(p);
  setTimeout(() => p.remove(), duration*1000 + 500);
}

/* ---------- 4. NAVEGACIÓN Y TRANSICIONES ---------- */
const PAGE_TRANSITION_MS = 1000;
let finaleStarted = false;

function goToPage(key){
  const target = document.getElementById(`page-${key}`) || document.querySelector(`[data-page="${key}"]`);
  if(!target) return;
  
  const current = document.querySelector('.page.active');
  if(current === target) return;

  if(current){
    current.classList.remove('active');
    current.classList.add('leaving');
    setTimeout(() => {
      current.classList.remove('leaving');
      current.style.display = 'none';
    }, PAGE_TRANSITION_MS);
  }

  setTimeout(() => {
    target.style.display = 'flex';
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onPageEnter(key);
  }, 200);
}

function onPageEnter(key){
  if(key === 'letter') startLetterOnce();
  if(key === 'comic') observeComicPanels();
  if(key === 'reasons') revealReasonsOnce();
  if(key === 'finale') startFinaleOnce();
}

/* ---------- 5. SECCIÓN 1: LÍNEA DE TIEMPO ---------- */
function renderTimeline(){
  const container = document.getElementById('timeline-container');
  if(!container) return;
  container.innerHTML = TIMELINE_EVENTS.map((ev, i) => `
    <div class="timeline-item">
      <div class="timeline-card glass" data-index="${i}" tabindex="0" role="button" aria-label="Ver recuerdo: ${ev.title}">
        <span class="timeline-date">${ev.date}</span>
        <h3 class="timeline-title">${ev.title}</h3>
        <p class="timeline-hint">Toca para revivir este momento →</p>
      </div>
    </div>`).join('');

  container.querySelectorAll('.timeline-card').forEach(card => {
    const open = () => openTimelineModal(Number(card.dataset.index));
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => { if(e.key === 'Enter') open(); });
  });
}

function openTimelineModal(i){
  const ev = TIMELINE_EVENTS[i];
  document.getElementById('modal-timeline-body').innerHTML = `
    <div class="modal-photo">${ev.icon}</div>
    <span class="modal-date">${ev.date}</span>
    <h3 class="modal-title">${ev.title}</h3>
    <p>${ev.description}</p>
    <p class="modal-feeling">💭 Qué sentí: ${ev.feeling}</p>`;
  openModal('modal-timeline-detail');
}

/* ---------- 6. SECCIÓN 2: CARTA ---------- */
let letterTyped = false;
function startLetterOnce(){
  if(letterTyped) return;
  letterTyped = true;
  const el = document.getElementById('letter-text');
  if(!el) return;
  el.innerHTML = '<span class="typed"></span><span class="cursor-blink">&nbsp;</span>';
  const typed = el.querySelector('.typed');
  const cursor = el.querySelector('.cursor-blink');
  const text = CONFIG.LETTER_TEXT;
  let i = 0;
  (function step(){
    if(i < text.length){
      typed.textContent += text[i];
      i++;
      setTimeout(step, 24);
    } else if (cursor) {
      cursor.remove();
    }
  })();
}

/* ---------- 7. SECCIÓN 3: ÁLBUM DE RECUERDOS ---------- */
function renderAlbum(){
  const container = document.getElementById('album-container');
  if(!container) return;
  container.innerHTML = PHOTOS.map((p, i) => `
    <div class="polaroid" style="--rot:${p.rot}" data-index="${i}" tabindex="0" role="button" aria-label="Ver recuerdo: ${p.caption}">
      <div class="polaroid-photo">${p.img ? `<img src="${p.img}" alt="${p.caption}" loading="lazy">` : p.icon}</div>
      <p class="polaroid-caption">${p.caption}</p>
    </div>`).join('');

  container.querySelectorAll('.polaroid').forEach(card => {
    const open = () => openAlbumModal(Number(card.dataset.index));
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => { if(e.key === 'Enter') open(); });
  });
}

function openAlbumModal(i){
  const p = PHOTOS[i];
  document.getElementById('modal-album-body').innerHTML = `
    <div class="modal-photo">${p.img ? `<img src="${p.img}" alt="${p.caption}">` : p.icon}</div>
    <h3 class="modal-title">${p.caption}</h3>
    <p>${p.memory}</p>
    <p class="modal-feeling">🤍 ${p.note}</p>`;
  openModal('modal-album-detail');
}

/* ---------- 8. SECCIÓN 4: CÓMIC ---------- */
function renderComic(){
  const container = document.getElementById('comic-container');
  if(!container) return;
  container.innerHTML = COMIC_PANELS.map(p => `
    <div class="comic-panel visible">
      <div class="comic-illustration">
        <img src="${p.image}" alt="Viñeta" class="comic-img" />
      </div>
      <div class="comic-caption">
        <p class="comic-narration">${p.narration}</p>
        <p class="comic-dialogue">${p.dialogue}</p>
      </div>
    </div>`).join('');
}

let comicObserved = false;
function observeComicPanels(){
  if(comicObserved) return;
  comicObserved = true;
  const panels = document.querySelectorAll('.comic-panel');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold:.2 });
  panels.forEach(p => obs.observe(p));
}

/* ---------- 9. SECCIÓN 5: 21 REGALOS INTERACTIVOS ---------- */
function renderGifts(){
  const container = document.getElementById('gifts-container');
  if(!container) return;
  container.innerHTML = GIFTS.map((g, i) => `
    <div class="gift-box glass" data-id="${g.id}" tabindex="0" role="button" aria-label="Abrir regalo número ${g.id}">${g.id}</div>`
  ).join('');

  container.querySelectorAll('.gift-box').forEach(box => {
    const open = () => {
      box.classList.add('opened');
      openGiftModal(Number(box.dataset.id));
    };
    box.addEventListener('click', open);
    box.addEventListener('keydown', e => { if(e.key === 'Enter') open(); });
  });
}

function openGiftModal(giftId){
  const gift = GIFTS.find(g => g.id === giftId);
  const modalBody = document.getElementById('modal-gift-body');

  if (!gift || !modalBody) return;

  let challengeHTML = '';

  if (gift.challengeType === 'riddle') {
    challengeHTML = `
      <p class="modal-title">🔓 Desafío #${gift.id}: Adivinanza</p>
      <p style="margin: 0.8rem 0; font-size: 1rem;">${gift.question}</p>
      <input type="text" id="riddle-input" placeholder="Escribe tu respuesta..." class="glass-input" style="width: 100%; padding: 0.8rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.2); background: rgba(255,255,255,0.1); color: #fff; margin-bottom: 1rem; text-align: center; outline: none;" />
      <button class="btn" onclick="checkRiddle(${gift.id})" style="width: 100%; padding: 0.7rem; border-radius: 20px; border: none; background: var(--pink, #ff8fd6); color: #fff; font-weight: bold; cursor: pointer;">Adivinar ✨</button>
    `;
  } else if (gift.challengeType === 'quiz') {
    const buttons = gift.options.map((opt, index) => 
      `<button class="quiz-opt-btn" onclick="checkQuiz(${gift.id}, ${index})" style="width: 100%; text-align: left; padding: 0.75rem 1rem; margin-bottom: 0.5rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.08); color: #fff; cursor: pointer;">${opt}</button>`
    ).join('');

    challengeHTML = `
      <p class="modal-title">❓ Pregunta #${gift.id}</p>
      <p style="margin: 0.8rem 0; font-size: 1rem;">${gift.question}</p>
      <div class="quiz-options" style="display: flex; flex-direction: column; gap: 0.4rem;">${buttons}</div>
    `;
  }

  modalBody.innerHTML = `
    <div id="challenge-box">
      ${challengeHTML}
      <button onclick="toggleHint()" style="background: none; border: none; color: var(--pink, #ff8fd6); font-size: 0.95rem; cursor: pointer; margin-top: 1rem; text-decoration: underline; width: 100%;">¿Necesitas una pista física? 📜</button>
      <p id="hint-text" style="display:none; font-size: 0.85rem; color: #ddd; background: rgba(255,255,255,0.05); padding: 0.8rem; border-radius: 10px; border-left: 3px solid var(--pink, #ff8fd6); margin-top: 0.8rem;">${gift.hint}</p>
    </div>
    <div id="reward-box" style="display:none;">
      <span class="modal-date">✨ ¡Correcto! Has desbloqueado el regalo #${gift.id}</span>
      <h3 class="modal-title" style="margin-top: 0.5rem;">${gift.type}</h3>
      <p class="modal-feeling" style="margin-top:.8rem;font-size:1.05rem;font-style:normal;color:var(--silver);">${gift.text}</p>
    </div>
  `;

  openModal('modal-gift-detail');
}

/* FUNCIONES DE VALIDACIÓN DE DESAFÍOS */
function checkRiddle(giftId) {
  const gift = GIFTS.find(g => g.id === giftId);
  const inputEl = document.getElementById('riddle-input');
  if (!inputEl) return;
  
  const input = inputEl.value.trim().toLowerCase();

  if (input.includes(gift.answer.toLowerCase())) {
    showReward();
  } else {
    alert('❌ ¡Casi! Inténtalo de nuevo o busca la pista física en la casa.');
  }
}

function checkQuiz(giftId, selectedIndex) {
  const gift = GIFTS.find(g => g.id === giftId);

  if (selectedIndex === gift.correctIndex) {
    showReward();
  } else {
    alert('❌ Opción incorrecta, ¡piénsalo bien o busca la pista en la casa!');
  }
}

function showReward() {
  const challengeBox = document.getElementById('challenge-box');
  const rewardBox = document.getElementById('reward-box');
  if (challengeBox) challengeBox.style.display = 'none';
  if (rewardBox) rewardBox.style.display = 'block';
}

function toggleHint() {
  const hint = document.getElementById('hint-text');
  if (hint) {
    hint.style.display = hint.style.display === 'none' ? 'block' : 'none';
  }
}

/* ---------- 10. SECCIÓN 6: 50 RAZONES ---------- */
function renderReasons(){
  const container = document.getElementById('reasons-container');
  if(!container) return;
  container.innerHTML = REASONS.map((r, i) => `
    <div class="reason-card glass">
      <span class="reason-number">${i+1}</span>${r}
    </div>`).join('');
}

let reasonsRevealed = false;
function revealReasonsOnce(){
  if(reasonsRevealed) return;
  reasonsRevealed = true;
  document.querySelectorAll('.reason-card').forEach((card, i) => {
    setTimeout(() => card.classList.add('show'), Math.min(i*35, 1200));
  });
}

/* ---------- 11. SECCIÓN FINAL ---------- */
let fireworksInterval = null;

function launchFireworkBurst(){
  const layer = document.getElementById('fireworks');
  if(!layer) return;
  const cx = 15 + Math.random()*70;
  const cy = 15 + Math.random()*45;
  for(let i = 0; i < 14; i++){
    const angle = (Math.PI*2*i)/14;
    const dist = 60 + Math.random()*50;
    const f = document.createElement('span');
    f.className = 'firework';
    f.style.left = cx + '%';
    f.style.top = cy + '%';
    layer.appendChild(f);
    f.animate([
      { transform:'translate(0,0) scale(1)', opacity:1 },
      { transform:`translate(${Math.cos(angle)*dist}px, ${Math.sin(angle)*dist}px) scale(.3)`, opacity:0 }
    ], { duration: 1000 + Math.random()*400, easing:'cubic-bezier(.2,.7,.3,1)' });
    setTimeout(() => f.remove(), 1500);
  }
}

function launchConfetti(){
  const layer = document.getElementById('fireworks');
  if(!layer) return;
  const colors = ['#FF8FD6', '#E9E6F5', '#5B2C83', '#16213E', '#FF5FBF'];
  for(let i = 0; i < 70; i++){
    const c = document.createElement('span');
    c.className = 'confetti';
    c.style.left = Math.random()*100 + '%';
    c.style.background = colors[Math.floor(Math.random()*colors.length)];
    c.style.animationDuration = (Math.random()*2 + 2.5) + 's';
    c.style.animationDelay = (Math.random()*1.2) + 's';
    layer.appendChild(c);
    setTimeout(() => c.remove(), 5200);
  }
}

function startFinaleOnce(){
  const finaleElem = document.getElementById('finale-names');
  if(finaleElem) finaleElem.textContent = `${CONFIG.NOMBRE_TUYO} ♥ ${CONFIG.NOMBRE_NOVIO}`;
  if(finaleStarted) return;
  finaleStarted = true;
  launchConfetti();
  launchFireworkBurst();
  fireworksInterval = setInterval(launchFireworkBurst, 1500);
}

/* ---------- 12. MODALES ---------- */
function openModal(id){ 
  const el = document.getElementById(id);
  if(el) el.classList.add('open'); 
}

function closeModal(id){ 
  const el = document.getElementById(id);
  if(el) el.classList.remove('open'); 
}

function setupModals(){
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => closeModal(btn.dataset.closeModal));
  });
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => { if(e.target === overlay) closeModal(overlay.id); });
  });
  document.addEventListener('keydown', e => {
    if(e.key === 'Escape'){
      document.querySelectorAll('.modal-overlay.open').forEach(m => closeModal(m.id));
    }
  });
}

/* ---------- 13. CORREOS DE OPINIÓN ---------- */
function setupMailLinks(){
  const items = [
    { id:'mail-timeline', subject:'Mi opinión sobre nuestra historia', body:'Amor, esta parte me hizo sentir...' },
    { id:'mail-letter',   subject:'Mi opinión sobre tu carta',          body:'Amor, esta carta me hizo sentir...' },
    { id:'mail-album',    subject:'Mi opinión sobre el álbum de recuerdos', body:'Amor, este álbum me hizo sentir...' },
    { id:'mail-comic',    subject:'Mi opinión sobre nuestro cómic',     body:'Amor, este cómic me hizo sentir...' },
    { id:'mail-gifts',    subject:'Mi opinión sobre los 21 regalos',    body:'Amor, estos regalos me hicieron sentir...' },
    { id:'mail-reasons',  subject:'Mi opinión sobre las 50 razones',    body:'Amor, estas razones me hicieron sentir...' }
  ];
  items.forEach(it => {
    const a = document.getElementById(it.id);
    if(a) a.href = `mailto:${CONFIG.EMAIL}?subject=${encodeURIComponent(it.subject)}&body=${encodeURIComponent(it.body)}`;
  });
}

/* ---------- 14. MÚSICA Y NAVEGACIÓN GENERAL ---------- */
function setupMusicToggle(){
  const audio = document.getElementById('bg-music');
  const btn = document.getElementById('music-toggle');
  if(!audio || !btn) return;
  let playing = false;
  
  btn.addEventListener('click', () => {
    if(!playing){
      audio.play().then(() => {
        playing = true;
        btn.classList.add('playing');
      }).catch(err => console.log('Error de audio:', err));
    } else {
      audio.pause();
      playing = false;
      btn.classList.remove('playing');
    }
  });
}

function setupNavigationButtons(){
  document.querySelectorAll('[data-next]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      goToPage(btn.dataset.next);
    });
  });
}

/* ---------- INICIALIZACIÓN GLOBAL ---------- */
document.addEventListener('DOMContentLoaded', () => {
  buildStarfield();
  setInterval(spawnParticle, 1200);
  
  renderTimeline();
  renderAlbum();
  renderComic();
  renderGifts();
  renderReasons();
  
  setupModals();
  setupMailLinks();
  setupMusicToggle();
  setupNavigationButtons();
});