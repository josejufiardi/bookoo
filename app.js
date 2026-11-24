import stories from './stories.js'

// Indonesian words for every [data-i18n] key; English is what the page is written in.
const ID = {
  skip: 'Langsung ke isi',
  'nav.stories': 'Cerita', 'nav.library': 'Perpustakaan', 'nav.plans': 'Paket', 'nav.questions': 'Tanya jawab',
  'menu.read': 'Baca', 'menu.today': 'Cerita hari ini', 'menu.today.sub': 'Gratis untuk semua, setiap hari',
  'menu.library': 'Perpustakaan cerita', 'menu.library.sub': 'Semua cerita kami',
  'menu.help': 'Bantuan', 'menu.how': 'Cara membantu', 'menu.how.sub': 'Membaca dengan suara dan gambar',
  'menu.questions': 'Tanya jawab', 'menu.questions.sub': 'Usia, bahasa dan harga',
  'menu.card': 'Bacakan untukku', 'menu.card.sub': 'Ketuk kata untuk mendengarnya',
  'lang.label': 'Bahasa',
  cta: 'Baca cerita hari ini',
  'hero.h1': 'Cerita anak gratis setiap hari',
  'hero.lead': 'Cerita bergambar pendek dalam bahasa Inggris dan Indonesia, dengan kata sederhana untuk anak yang belajar membaca. Ketuk kata untuk mendengarnya.',
  'hero.art': 'Halaman cerita Bookoo: gambar, kalimat dengan satu kata menyala, dan kalimat yang sama dalam bahasa Inggris dan Indonesia',
  'pc.word': 'singa', 'pc.word.sub': 'Ketuk untuk dengar',
  'pc.page.title': 'Singa dan Tikus · 1 dari 6', 'pc.page.text': 'Seekor <mark>singa</mark> besar tidur di bawah pohon.',
  'pc.play': 'Bacakan untukku', 'pc.today': 'Cerita hari ini', 'pc.today.title': 'Kancil dan Buaya', 'pc.today.sub': 'Dongeng Indonesia · 6 halaman',
  'today.h2': 'Cerita hari ini, siap dibaca',
  'today.p': 'Balik halaman dengan tombol panah. Tekan Bacakan untukku untuk mendengar satu halaman, atau ketuk satu kata untuk mendengarnya.',
  'today.link': 'Lihat semua cerita', 'list.head': 'Cerita',
  'how.h2': 'Cerita untuk pembaca pemula.', 'how.h2b': 'Gambar, suara dan kalimat pendek.',
  'how.1.t': 'Mengucapkan kata apa pun dalam cerita', 'how.1.p': 'Anak mengetuk kata yang belum dia tahu, mendengarnya, lalu lanjut membaca sendiri.',
  'how.2.t': 'Setiap cerita dalam dua bahasa', 'how.2.p': 'Setiap cerita ada dalam bahasa Inggris dan Indonesia. Satu ketukan mengganti seluruh halaman.',
  'how.3.t': 'Setiap halaman tetap pendek', 'how.3.p': 'Satu gambar dan satu atau dua kalimat pendek per halaman, dengan kata yang dipakai anak setiap hari.',
  'how.4.t': 'Cerita baru setiap hari', 'how.4.p': 'Setiap hari ada cerita lain yang gratis, jadi selalu ada yang baru sebelum tidur.',
  'how.1.art': 'Kalimat dengan kata menggigit yang menyala, dan kata itu diucapkan',
  'how.2.art': 'Tombol bahasa di EN, dengan kalimat yang sama dalam bahasa Inggris dan Indonesia',
  'how.3.art': 'Enam halaman pendek sebuah cerita, halaman ketiga terbuka',
  'how.4.art': 'Seminggu cerita, setiap hari cerita yang berbeda',
  'plan.free.art': 'Satu cerita menyala untuk hari ini, yang lain menunggu',
  'plan.full.art': 'Semua cerita di perpustakaan terbuka',
  'why.label': 'Kenapa Bookoo',
  'why.text': 'Setiap cerita di sini adalah dongeng lama milik semua orang, dari hewan-hewan Aesop sampai Kancil si pelanduk, diceritakan lagi dengan kalimat pendek supaya anak bisa membacanya sendiri atau <strong>bersamamu</strong>.',
  'library.h2': 'Perpustakaan cerita.', 'library.h2b': 'Satu cerita terbuka gratis setiap hari.',
  'plans.h2': 'Paket', 'plans.p': 'Mulai dengan cerita gratis hari ini. Perpustakaan lengkap segera hadir.',
  'plans.both': 'Kedua paket punya semua cerita dalam bahasa Inggris dan Indonesia, dengan suara yang membacakan.',
  'plan.free': 'Cerita hari ini', 'plan.free.who': 'Untuk semua anak', 'plan.free.price': 'Gratis', 'plan.free.btn': 'Lihat perpustakaan cerita',
  'plan.free.1': 'Satu cerita baru setiap hari', 'plan.free.2': 'Enam halaman lengkap dengan gambar', 'plan.free.3': 'Tanpa akun dan tanpa daftar',
  'plan.full': 'Perpustakaan lengkap', 'plan.full.who': 'Untuk keluarga yang membaca setiap hari', 'plan.full.price': 'Segera hadir', 'plan.full.btn': 'Daftar antrean',
  'plan.full.1': 'Semua cerita di perpustakaan', 'plan.full.2': 'Cerita apa saja, kapan saja', 'plan.full.3': 'Suara rekaman yang membacakan',
  'q.h2': 'Tanya jawab', 'q.p': 'Yang paling sering ditanyakan orang tua dan guru.', 'q.link': 'Kirim email',
  'q.1': 'Cerita ini untuk siapa?', 'q.1.a': 'Anak yang mulai belajar membaca, sekitar 4 sampai 8 tahun, sendiri atau bersama orang dewasa.',
  'q.2': 'Dari mana cerita-ceritanya?', 'q.2.a': 'Dongeng lama yang bebas dibagikan siapa saja, seperti fabel Aesop dan dongeng Indonesia. Kami menceritakannya lagi dengan kata sederhana.',
  'q.3': 'Bagaimana suara cerita bekerja?', 'q.3.a': 'Bacakan untukku memakai suara di ponsel atau komputermu. Suara rekaman akan hadir bersama perpustakaan lengkap.',
  'q.4': 'Apakah cerita harian gratis?', 'q.4.a': 'Ya. Satu cerita gratis setiap hari. Perpustakaan lengkap nanti berbayar.',
  'q.5': 'Apakah anak perlu akun untuk membaca?', 'q.5.a': 'Tidak. Buka halamannya dan mulai membaca. Tidak perlu mendaftar.',
  'q.6': 'Berapa panjang setiap cerita?', 'q.6.a': 'Enam halaman pendek, dengan satu atau dua kalimat di setiap halaman. Kebanyakan anak membacanya dalam sekitar lima menit.',
  'close.h2': 'Cerita hari ini sudah siap', 'close.p': 'Enam halaman pendek bergambar, gratis dibaca sekarang.',
  'foot.lede': 'Cerita pendek dalam bahasa Inggris dan Indonesia untuk anak yang belajar membaca.',
  'foot.contact': 'Kontak', 'foot.pd': 'Cerita diceritakan ulang dari dongeng domain publik.',
}

// Words the reader draws itself.
const UI = {
  en: { today: 'Free today', locked: 'Full library', page: (a, b) => `${a} of ${b}`, back: 'Back', next: 'Next', read: 'Read to me', stop: 'Stop',
    lockedText: 'This story is in the full library, which is coming soon. Today\'s story is free to read now.', toToday: 'Open today\'s story',
    picture: (t, n) => `Picture for page ${n} of ${t}`, end: 'The end', again: 'Read it again',
    days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] },
  id: { today: 'Gratis hari ini', locked: 'Perpustakaan lengkap', page: (a, b) => `${a} dari ${b}`, back: 'Kembali', next: 'Lanjut', read: 'Bacakan untukku', stop: 'Berhenti',
    lockedText: 'Cerita ini ada di perpustakaan lengkap, yang segera hadir. Cerita hari ini bisa dibaca gratis sekarang.', toToday: 'Buka cerita hari ini',
    picture: (t, n) => `Gambar untuk halaman ${n} dari ${t}`, end: 'Tamat', again: 'Baca lagi',
    days: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'] },
}

const dayNumber = (d = new Date()) => Math.floor((d - d.getTimezoneOffset() * 6e4) / 864e5)
const todayIndex = dayNumber() % stories.length
const state = { lang: 'en', story: todayIndex, page: 0 }
const t = () => UI[state.lang]
const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])
const html = s => esc(s).replace(/&quot;/g, '"')

// ---------- language ----------
const en = new Map()   // the English the page shipped with, per element
function setLang(lang) {
  state.lang = lang
  document.documentElement.lang = lang
  for (const el of document.querySelectorAll('[data-i18n]')) {
    if (!en.has(el)) en.set(el, el.innerHTML)
    el.innerHTML = lang === 'id' ? ID[el.dataset.i18n] ?? en.get(el) : en.get(el)
  }
  for (const el of document.querySelectorAll('[data-i18n-label]')) {
    if (!el.dataset.enLabel) el.dataset.enLabel = el.getAttribute('aria-label')
    el.setAttribute('aria-label', lang === 'id' ? ID[el.dataset.i18nLabel] : el.dataset.enLabel)
  }
  for (const b of document.querySelectorAll('[data-lang]')) b.setAttribute('aria-pressed', String(b.dataset.lang === lang))
  try { localStorage.setItem('bookoo-lang', lang) } catch {}
  stopVoice()
  renderAll()
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-lang]')
  if (b) setLang(b.dataset.lang)
})

// ---------- pictures ----------
// shortcut: a soft placeholder in the story's colour; drawings replace it once `img` is set in stories.js.
function picture(story, n) {
  const label = esc(t().picture(story.title[state.lang], n + 1))
  const img = story.pages[n]?.img
  return img
    ? `<img class="ill" src="${img}" alt="${label}">`
    : `<div class="ill" role="img" aria-label="${label}" style="--c:${story.color}"></div>`
}

// ---------- the reader ----------
const reader = document.querySelector('[data-reader]')
const list = document.querySelector('[data-story-list]')

function renderList() {
  list.innerHTML = stories.map((s, i) => {
    const open = i === todayIndex
    return `<li><button type="button" class="app__story${i === state.story ? ' is-current' : ''}" data-story="${i}" aria-current="${i === state.story}">
      <span class="app__thumb" style="--c:${s.color}"></span>
      <span class="app__who">${esc(s.title[state.lang])}<small>${esc(s.from[state.lang])}</small></span>
      <span class="app__chip${open ? ' is-free' : ''}">${open ? esc(t().today) : lockIcon + `<span class="sr-only">${esc(t().locked)}</span>`}</span>
    </button></li>`
  }).join('')
}
const lockIcon = '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><rect x="3" y="7" width="10" height="7" rx="2" fill="currentColor"/><path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>'

// Each word is its own span so a tap can say it and the voice can light it.
function words(text) {
  let i = 0
  return text.split(/(\s+)/).map(part => {
    if (/^\s+$/.test(part) || !part) { i += part.length; return part }
    const start = i; i += part.length
    return `<span class="w" data-at="${start}">${html(part)}</span>`
  }).join('')
}

function renderReader() {
  const s = stories[state.story]
  const L = state.lang
  if (state.story !== todayIndex) {
    reader.innerHTML = `<div class="book book--locked">
      ${picture(s, 0)}
      <div class="book__text">
        <p class="book__meta">${esc(s.from[L])}</p>
        <p class="book__title">${esc(s.title[L])}</p>
        <p class="book__note">${lockIcon} ${esc(t().lockedText)}</p>
        <div class="book__nav"><button type="button" class="btn btn--secondary" data-go-today>${esc(t().toToday)}</button></div>
      </div></div>`
    return
  }
  const n = s.pages.length
  const last = state.page === n - 1
  reader.innerHTML = `<div class="book">
    ${picture(s, state.page)}
    <div class="book__text">
      <p class="book__meta">${esc(s.from[L])} · ${esc(t().page(state.page + 1, n))}</p>
      <p class="book__title">${esc(s.title[L])}</p>
      <p class="book__words" lang="${L}" data-words>${words(s.pages[state.page][L])}</p>
      ${last ? `<p class="book__end">${esc(t().end)}</p>` : ''}
      <div class="book__dots" aria-hidden="true">${s.pages.map((_, i) => `<i${i === state.page ? ' class="is-on"' : ''}></i>`).join('')}</div>
      <div class="book__nav">
        <button type="button" class="book__arrow" data-turn="-1" aria-label="${esc(t().back)}" ${state.page === 0 ? 'disabled' : ''}><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M12.5 4.5 7 10l5.5 5.5"/></svg></button>
        <button type="button" class="btn btn--secondary book__read" data-read ${'speechSynthesis' in window ? '' : 'hidden'}><span class="pc-say" aria-hidden="true"></span><span data-read-label>${esc(t().read)}</span></button>
        ${last
          ? `<button type="button" class="book__arrow" data-again aria-label="${esc(t().again)}"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M15.5 10a5.5 5.5 0 1 1-1.6-3.9M14.5 3v3.5H11"/></svg></button>`
          : `<button type="button" class="book__arrow" data-turn="1" aria-label="${esc(t().next)}"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7.5 4.5 13 10l-5.5 5.5"/></svg></button>`}
      </div>
    </div></div>`
}

reader.addEventListener('click', e => {
  const turn = e.target.closest('[data-turn]')
  if (turn) { stopVoice(); state.page += Number(turn.dataset.turn); renderReader(); reader.querySelector(`[data-turn="${turn.dataset.turn}"]:not(:disabled)`)?.focus(); return }
  if (e.target.closest('[data-again]')) { stopVoice(); state.page = 0; renderReader(); return }
  if (e.target.closest('[data-go-today]')) { openStory(todayIndex); return }
  if (e.target.closest('[data-read]')) { speaking ? stopVoice() : readPage(); return }
  const w = e.target.closest('.w')
  if (w) say(w.textContent.replace(/[^\p{L}\p{N}'-]/gu, ''), w)
})
document.addEventListener('keydown', e => {
  if (!reader.contains(document.activeElement) && document.activeElement !== document.body) return
  if (state.story !== todayIndex) return
  const r = reader.getBoundingClientRect()
  if (r.bottom < 0 || r.top > innerHeight) return
  const n = stories[state.story].pages.length
  if (e.key === 'ArrowRight' && state.page < n - 1) { stopVoice(); state.page++; renderReader() }
  if (e.key === 'ArrowLeft' && state.page > 0) { stopVoice(); state.page--; renderReader() }
})

function openStory(i) {
  stopVoice()
  state.story = i
  state.page = 0
  renderList(); renderReader()
}
list.addEventListener('click', e => {
  const b = e.target.closest('[data-story]')
  if (b) openStory(Number(b.dataset.story))
})

// ---------- the voice ----------
// shortcut: the device's own voice (speechSynthesis); swap in recorded narration when the audio files exist.
let speaking = false
function voiceFor(lang) {
  const tag = lang === 'id' ? 'id' : 'en'
  return speechSynthesis.getVoices().find(v => v.lang.toLowerCase().startsWith(tag))
}
function utter(text, onBoundary) {
  const u = new SpeechSynthesisUtterance(text)
  u.lang = state.lang === 'id' ? 'id-ID' : 'en-US'
  u.voice = voiceFor(state.lang) || null
  u.rate = 0.85   // a little slower than normal speech, for new readers
  if (onBoundary) u.onboundary = onBoundary
  return u
}
function say(word, el) {
  if (!word || !('speechSynthesis' in window)) return
  speechSynthesis.cancel()
  light(el)
  const u = utter(word)
  u.onend = () => light(null)
  speechSynthesis.speak(u)
}
function light(el) {
  reader.querySelectorAll('.w.is-on').forEach(w => w.classList.remove('is-on'))
  el?.classList.add('is-on')
}
function readPage() {
  const box = reader.querySelector('[data-words]')
  if (!box) return
  speechSynthesis.cancel()
  const spans = [...box.querySelectorAll('.w')]
  const u = utter(box.textContent, e => {
    if (e.name && e.name !== 'word') return
    light(spans.findLast(s => Number(s.dataset.at) <= e.charIndex))
  })
  u.onend = u.onerror = () => { speaking = false; light(null); readLabel() }
  speaking = true
  readLabel()
  speechSynthesis.speak(u)
}
function stopVoice() {
  if (!('speechSynthesis' in window)) return
  speaking = false
  speechSynthesis.cancel()
  light(null)
  readLabel()
}
function readLabel() {
  const l = reader.querySelector('[data-read-label]')
  if (l) l.textContent = speaking ? t().stop : t().read
  reader.querySelector('[data-read]')?.setAttribute('aria-pressed', String(speaking))
}

// ---------- the library shelf and the week ----------
function renderShelf() {
  const cards = stories.map((s, i) => {
    const open = i === todayIndex
    const inner = `<span class="shelf__cover" style="--c:${s.color}" role="img" aria-label="${esc(t().picture(s.title[state.lang], 1))}"></span>
      <span class="shelf__title">${esc(s.title[state.lang])}</span>
      <span class="shelf__meta">${esc(s.from[state.lang])}<span class="shelf__chip${open ? ' is-free' : ''}">${open ? esc(t().today) : lockIcon + esc(t().locked)}</span></span>`
    return `<li>${open ? `<a class="shelf__item" href="#today">${inner}</a>` : `<div class="shelf__item is-locked">${inner}</div>`}</li>`
  })
  // two shelves of four, so a phone shows the library on two screens
  for (const ul of document.querySelectorAll('[data-shelf]')) ul.innerHTML = cards.slice(+ul.dataset.shelf, +ul.dataset.shelf + 4).join('')
}
function renderWeek() {
  const today = new Date()
  document.querySelector('[data-week]').innerHTML = [-3, -2, -1, 0, 1, 2, 3].map(k => {
    const d = new Date(today); d.setDate(d.getDate() + k)
    const s = stories[((dayNumber(d) % stories.length) + stories.length) % stories.length]
    return `<span class="hw-day${k === 0 ? ' is-on' : ''}"><small>${t().days[d.getDay()]}</small><i style="--c:${s.color}"></i></span>`
  }).join('')
}

function renderAll() { renderList(); renderReader(); renderShelf(); renderWeek() }

let saved = null
try { saved = new URLSearchParams(location.search).get('lang') || localStorage.getItem('bookoo-lang') } catch {}
setLang(saved === 'id' ? 'id' : 'en')
