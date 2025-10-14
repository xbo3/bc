// === wooss2 · 완성본 drop-in (v3) ===

// 케어 토글 + 상태 저장
(function(){
  const KEY = 'heroOpen';
  const root = document.documentElement;
  const btn  = document.getElementById('careToggle');
  if (localStorage.getItem(KEY) === '1') root.classList.add('is-hero-open');
  btn && btn.addEventListener('click', ()=>{
    root.classList.toggle('is-hero-open');
    localStorage.setItem(KEY, root.classList.contains('is-hero-open') ? '1' : '0');
  });
})();

// 노란박스 이미지 확장자 자동 탐지 로더(.png -> .jpg -> .jpeg -> .webp)
(function(){
  const tryLoad = (url)=> new Promise(res=>{
    const im = new Image();
    im.onload  = ()=>res(url);
    im.onerror = ()=>res(null);
    im.src = url + (url.includes('?') ? '&' : '?') + 'v=' + Date.now();
  });
  async function resolve(base){
    const order = ['.png', '.jpg', '.jpeg', '.webp'];
    for (const ext of order){
      const ok = await tryLoad(base+ext);
      if (ok) return ok;
    }
    return null;
  }
  async function init(){
    const nodes = document.querySelectorAll('img.auto-ext[data-src-base], [data-bg-auto-ext]');
    for (const el of nodes){
      const base = el.getAttribute('data-src-base') || el.getAttribute('data-bg-auto-ext');
      if (!base) continue;
      const src = await resolve(base);
      if (!src) continue;
      if (el.tagName === 'IMG') el.src = src;
      else {
        el.style.backgroundImage = `url("${src}")`;
        el.style.backgroundSize = 'cover';
        el.style.backgroundPosition = 'center';
      }
    }
  }
  document.addEventListener('DOMContentLoaded', init);
})();
