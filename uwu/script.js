/* ============================================================
   REGALO DE CUMPLEAÑOS — LÓGICA PRINCIPAL
   ============================================================ */

/* ---------- 1. CONFIGURACIÓN GENERAL ---------- */
const CONFIG = {
  NOMBRE_TUYO: 'yerald',
  NOMBRE_NOVIO: 'gera',
  EMAIL: 'yeralvegagarcia17@gmail.com',
  LETTER_TEXT:
`Mi Amor

Me enamoré de ti porque sentí cosas que ninguna otra persona me había hecho sentir. Me enamoré de ti por tu personalidad, tu forma única, este sentimiento que siento por ti es inexplicable, un simple te amo no es nada comparado al inmenso amor que siento hacia ti. Tus ojos no son azules ni verdes, son cafés esos ojos que producen mis desvelos, esos ojos a los que no puedo parar de mirar. Me encanta tu voz, tus buenas sonrisa, la forma de pensar y me encanta todo de ti. te amo,quiero que seas el último amor, tomarte de la mano y que me acompañes a enseñarle al mundo que mi amor puede ser como el mar, que se vea el inicio pero no el final. 🤍`
};

/* ---------- 2. DATOS DE SECCIONES ---------- */

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

/* ---------- 5. SECCIÓN 1: CARTA ---------- */
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

/* ---------- 9. SECCIÓN 6: 50 RAZONES ---------- */
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

/* ---------- 10. SECCIÓN FINAL ---------- */
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

/* ---------- 11. MODALES ---------- */
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

/* ---------- 12. CORREOS DE OPINIÓN ---------- */
function setupMailLinks(){
  const items = [
    { id:'mail-letter',   subject:'Mi opinión sobre tu carta',          body:'Amor, esta carta me hizo sentir...' },
    { id:'mail-album',    subject:'Mi opinión sobre el álbum de recuerdos', body:'Amor, este álbum me hizo sentir...' },
    { id:'mail-comic',    subject:'Mi opinión sobre nuestro cómic',     body:'Amor, este cómic me hizo sentir...' },
    { id:'mail-reasons',  subject:'Mi opinión sobre las 50 razones',    body:'Amor, estas razones me hicieron sentir...' }
  ];
  items.forEach(it => {
    const a = document.getElementById(it.id);
    if(a) a.href = `mailto:${CONFIG.EMAIL}?subject=${encodeURIComponent(it.subject)}&body=${encodeURIComponent(it.body)}`;
  });
}

/* ---------- 13. MÚSICA Y NAVEGACIÓN GENERAL ---------- */
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
  
  renderAlbum();
  renderComic();
  renderReasons();
  
  setupModals();
  setupMailLinks();
  setupMusicToggle();
  setupNavigationButtons();
});