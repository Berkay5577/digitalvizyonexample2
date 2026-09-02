/* ===== Digital Vizyon Akademi — shared behaviour ===== */
(function(){
  'use strict';
  const $=(s,r=document)=>r.querySelector(s);
  const $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  /* ---- shared header + footer injection ---- */
  const PAGE=document.body.dataset.page||'home';
  const CORP=['hakkimizda','operasyon','tamamlanan','referanslar','kimlik','bulten','sss'];
  const ac=c=>PAGE===c?' class="active"':'';
  const headEl=$('#header');
  if(headEl&&!headEl.querySelector('.navpill')){
    headEl.innerHTML=`
    <div class="navpill">
      <a class="brand" href="index.html" aria-label="Digital Vizyon Akademi"><img class="logo-img" src="logo.svg" alt="Digital Vizyon Akademi"></a>
      <nav class="nav-center" id="menu">
        <a href="index.html"${PAGE==='home'?' class="active"':''}>Anasayfa</a>
        <div class="has-sub">
          <a href="hakkimizda.html"${CORP.includes(PAGE)?' class="active"':''}>Kurumsal</a>
          <div class="submenu"><div class="inner">
            <a href="hakkimizda.html">Hakkımızda</a>
            <a href="operasyon.html">Operasyon Süreci</a>
            <a href="tamamlanan-egitimler.html">Tamamlanan Eğitimler</a>
            <a href="referanslar.html">Referanslar</a>
            <a href="kurumsal-kimlik.html">Kurumsal Kimlik</a>
            <a href="teknoloji-bulteni.html">Teknoloji Bülteni</a>
            <a href="sss.html">Sıkça Sorulan Sorular</a>
          </div></div>
        </div>
        <a href="egitimler.html"${(PAGE==='egitimler'||PAGE==='detay')?' class="active"':''}>Eğitimler</a>
        <a href="iletisim.html"${PAGE==='iletisim'?' class="active"':''}>İletişim</a>
      </nav>
      <a href="iletisim.html" class="btn-cta" aria-label="Teklif Alın"><span class="txt">Teklif Alın</span><svg viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></svg></a>
      <button class="hamb" id="hamb" aria-label="Menü"><span></span><span></span><span></span></button>
    </div>`;
  }
  const footEl=$('#siteFooter');
  if(footEl&&!footEl.dataset.built){
    footEl.dataset.built='1';
    footEl.innerHTML=`
    <div class="wrap">
      <div class="foot-grid">
        <div>
          <div class="brand" style="margin-bottom:18px"><img class="logo-img" src="logo.svg" alt="Digital Vizyon Akademi" style="height:54px"></div>
          <p class="desc">Kurumların dijital dönüşüm ve gelişim yolculuğunda; IT ve kurumsal gelişim eğitimleriyle çözüm ortağınız.</p>
          <div class="socials">
            <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.1c.5-1 1.8-2 3.6-2 3.9 0 4.6 2.5 4.6 5.8V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4z"/></svg></a>
            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 4 4 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zm0 3.2A6.6 6.6 0 1 0 12 18.6 6.6 6.6 0 0 0 12 5.4zm0 10.9A4.3 4.3 0 1 1 12 7.7a4.3 4.3 0 0 1 0 8.6zM18.4 4.6a1.5 1.5 0 1 0 0 3.1 1.5 1.5 0 0 0 0-3.1z"/></svg></a>
            <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24"><path d="M23 12s0-3.4-.4-5c-.2-.9-.9-1.6-1.8-1.8C19.2 5 12 5 12 5s-7.2 0-8.8.2c-.9.2-1.6.9-1.8 1.8C1 8.6 1 12 1 12s0 3.4.4 5c.2.9.9 1.6 1.8 1.8C4.8 19 12 19 12 19s7.2 0 8.8-.2c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-5 .4-5zM9.8 15.3V8.7l5.7 3.3z"/></svg></a>
          </div>
        </div>
        <div><h4>Kurumsal</h4><ul>
          <li><a href="hakkimizda.html">Hakkımızda</a></li>
          <li><a href="operasyon.html">Operasyon Süreci</a></li>
          <li><a href="tamamlanan-egitimler.html">Tamamlanan Eğitimler</a></li>
          <li><a href="referanslar.html">Referanslar</a></li>
          <li><a href="kurumsal-kimlik.html">Kurumsal Kimlik</a></li>
          <li><a href="teknoloji-bulteni.html">Teknoloji Bülteni</a></li>
          <li><a href="sss.html">Sıkça Sorulan Sorular</a></li>
        </ul></div>
        <div><h4>Eğitimler</h4><ul>
          <li><a href="egitimler.html?cat=it">IT Eğitimleri</a></li>
          <li><a href="egitimler.html?cat=kurumsal">Kurumsal Gelişim</a></li>
          <li><a href="egitimler.html?cat=kalite">Kalite &amp; Standartlar</a></li>
          <li><a href="egitimler.html">Tüm Katalog</a></li>
        </ul></div>
        <div><h4>İletişim</h4><ul>
          <li><a href="tel:+903122174303">+90 312 217 43 03</a></li>
          <li><a href="mailto:info@digitalvizyon.net">info@digitalvizyon.net</a></li>
          <li>Ankara, Türkiye</li>
          <li><a href="iletisim.html">Teklif / Katalog Talep</a></li>
        </ul></div>
      </div>
      <div class="foot-bot">© <span class="js-year">2026</span> Digital Vizyon Akademi — Tüm hakları saklıdır. (Tasarım uyarlaması)</div>
    </div>`;
  }

  /* ---- quick contact bar ---- */
  if(!$('.quickbar')){
    const qb=document.createElement('div');qb.className='quickbar';
    qb.innerHTML=`
      <a href="tel:+903122174303" aria-label="Telefon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg><span class="lbl">+90 312 217 43 03</span></a>
      <a class="wa" href="https://wa.me/903122174303" target="_blank" rel="noopener" aria-label="WhatsApp"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.7 1-.3.1-.5 0a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2a.4.4 0 0 0 0-.4L9.9 7.8c-.2-.5-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3A2.8 2.8 0 0 0 7.3 10c0 1.7 1.2 3.3 1.4 3.5s2.4 3.7 5.9 5c.8.3 1.5.5 2 .7.8.2 1.6.2 2.2.1.7-.1 1.4-.6 1.6-1.1s.2-1 .1-1.1-.2-.1-.4-.2z"/></svg><span class="lbl">WhatsApp</span></a>
      <a href="mailto:info@digitalvizyon.net" aria-label="E-posta"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg><span class="lbl">info@digitalvizyon.net</span></a>
      <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.1c.5-1 1.8-2 3.6-2 3.9 0 4.6 2.5 4.6 5.8V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4z"/></svg><span class="lbl">LinkedIn</span></a>
      <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 4 4 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zm0 3.2A6.6 6.6 0 1 0 12 18.6 6.6 6.6 0 0 0 12 5.4zm0 10.9A4.3 4.3 0 1 1 12 7.7a4.3 4.3 0 0 1 0 8.6zM18.4 4.6a1.5 1.5 0 1 0 0 3.1 1.5 1.5 0 0 0 0-3.1z"/></svg><span class="lbl">Instagram</span></a>`;
    document.body.appendChild(qb);
  }

  /* ---- decorate page-hero banners ---- */
  function decoPageHero(root=document){
    $$('.page-hero',root).forEach(ph=>{
      if(ph.querySelector('.ph-deco'))return;
      const d=document.createElement('div');d.className='ph-deco';
      d.innerHTML='<span></span><span></span><span></span><span class="ring"></span>';
      ph.insertBefore(d,ph.firstChild);
      const s=document.createElement('div');s.className='ph-scroll';ph.appendChild(s);
    });
  }
  decoPageHero();

  /* ---- custom cursor ---- */
  const cur=$('#cursor');
  let x=innerWidth/2,y=innerHeight/2,cx=x,cy=y;
  if(cur){
    addEventListener('mousemove',e=>{x=e.clientX;y=e.clientY;});
    (function loop(){cx+=(x-cx)*0.18;cy+=(y-cy)*0.18;cur.style.left=cx+'px';cur.style.top=cy+'px';requestAnimationFrame(loop);})();
  }
  function bindGrow(root=document){
    if(!cur)return;
    $$('a,button,.cat,.tcard,.why-card,.step,.post,.ref,.val-card,.mod,.search,input,select,textarea',root).forEach(el=>{
      if(el._g)return;el._g=1;
      el.addEventListener('mouseenter',()=>cur.classList.add('grow'));
      el.addEventListener('mouseleave',()=>cur.classList.remove('grow'));});
  }
  bindGrow();

  /* ---- reveal ---- */
  const io=new IntersectionObserver(ents=>ents.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
  function observeReveal(root=document){$$('.reveal',root).forEach(el=>io.observe(el));}
  observeReveal();

  /* ---- sticky header + to-top + dark cursor ---- */
  const header=$('#header'),totop=$('#totop');
  const darkTop=$('#home')||$('.page-hero');
  const heroBg=$('#home');
  addEventListener('scroll',()=>{
    const sc=scrollY;
    if(header)header.classList.toggle('scrolled',sc>60);
    if(totop)totop.classList.toggle('show',sc>700);
    if(cur&&darkTop)cur.classList.toggle('on-dark',darkTop.getBoundingClientRect().bottom>cy);
    if(heroBg&&sc<820)heroBg.style.backgroundPositionY=(sc*0.2)+'px';
  },{passive:true});
  if(totop)totop.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
  // initial dark-cursor state
  if(cur&&darkTop)cur.classList.add('on-dark');

  /* ---- mobile menu ---- */
  const hamb=$('#hamb'),menu=$('#menu');
  if(hamb&&menu){
    hamb.addEventListener('click',()=>{hamb.classList.toggle('open');menu.classList.toggle('open');});
    $$('a',menu).forEach(a=>a.addEventListener('click',()=>{hamb.classList.remove('open');menu.classList.remove('open');}));
  }

  /* ---- scroll-spy (homepage only) ---- */
  if($('#home')&&menu){
    const sections=$$('section[id]');
    const navLinks=$$('a',menu);
    addEventListener('scroll',()=>{
      let id='home';
      sections.forEach(s=>{if(scrollY>=s.offsetTop-140)id=s.id;});
      navLinks.forEach(a=>{const h=a.getAttribute('href')||'';a.classList.toggle('active',h==='#'+id||h==='index.html#'+id);});
    },{passive:true});
  }

  /* ---- animated counters ---- */
  const counters=$$('[data-count]');
  if(counters.length){
    const cio=new IntersectionObserver(ents=>ents.forEach(e=>{
      if(!e.isIntersecting)return;cio.unobserve(e.target);
      const el=e.target,target=parseFloat(el.dataset.count),dec=parseInt(el.dataset.dec||'0');
      const dur=1600,t0=performance.now();
      (function tick(t){let p=Math.min((t-t0)/dur,1);p=1-Math.pow(1-p,3);
        const v=target*p;el.textContent=dec?v.toFixed(dec).replace('.',','):Math.floor(v).toLocaleString('tr-TR');
        if(p<1)requestAnimationFrame(tick);else el.textContent=dec?target.toFixed(dec).replace('.',','):target.toLocaleString('tr-TR');})(t0);
    }),{threshold:.4});
    counters.forEach(c=>cio.observe(c));
  }

  /* ---- homepage: category chips filter category cards ---- */
  const catFilter=$('#catFilter'),catGrid=$('#catGrid');
  if(catFilter&&catGrid){
    const chips=$$('.chip',catFilter),cards=$$('.cat',catGrid),noRes=$('#noResult');
    let f='all';
    function apply(){let n=0;cards.forEach(c=>{const ok=f==='all'||c.dataset.cat===f;c.classList.toggle('hide',!ok);if(ok)n++;});if(noRes)noRes.style.display=n?'none':'block';}
    chips.forEach(ch=>ch.addEventListener('click',()=>{chips.forEach(c=>c.classList.remove('active'));ch.classList.add('active');f=ch.dataset.f;apply();}));
  }

  /* ---- homepage search -> catalog ---- */
  const homeForm=$('#homeSearchForm'),homeInput=$('#homeSearch');
  if(homeForm&&homeInput){
    homeForm.addEventListener('submit',e=>{e.preventDefault();const q=homeInput.value.trim();location.href='egitimler.html'+(q?('?q='+encodeURIComponent(q)):'');});
  }

  /* ---- catalog rendering + filter ---- */
  const grid=$('#trainingGrid');
  if(grid&&window.TRAININGS){
    const params=new URLSearchParams(location.search);
    const search=$('#catalogSearch');
    const filterBar=$('#trainingFilter');
    const noRes=$('#noResult');
    const countEl=$('#resultCount');
    let f=params.get('cat')||'all', q=(params.get('q')||'').toLowerCase();
    if(search&&q)search.value=params.get('q');

    grid.innerHTML=window.TRAININGS.map(t=>`
      <a class="tcard" href="egitim-detay.html?id=${t.id}" data-cat="${t.category}" data-k="${esc((t.keywords||'')+' '+t.title+' '+t.summary).toLowerCase()}">
        <div class="thumb"><span class="tag">${esc(t.tag)}</span><img loading="lazy" src="${t.image}" alt="${esc(t.title)}"></div>
        <div class="tbody">
          <div class="tcat">${esc(t.categoryLabel)}</div>
          <h3>${esc(t.title)}</h3>
          <p>${esc(t.summary)}</p>
          <div class="tmeta">
            <span>⏱ ${esc(t.duration)}</span><span>◍ ${esc(t.level)}</span><span>▣ ${esc(t.format)}</span>
          </div>
          <span class="go">Detayları Gör →</span>
        </div>
      </a>`).join('');
    const cards=$$('.tcard',grid);
    bindGrow(grid);observeReveal(grid);

    function apply(){
      let n=0;
      cards.forEach(c=>{
        const okF=f==='all'||c.dataset.cat===f;
        const okQ=!q||c.dataset.k.includes(q);
        const ok=okF&&okQ;c.classList.toggle('hide',!ok);if(ok)n++;
      });
      if(noRes)noRes.style.display=n?'none':'block';
      if(countEl)countEl.textContent=n;
    }
    if(filterBar){
      const chips=$$('.chip',filterBar);
      chips.forEach(ch=>ch.classList.toggle('active',ch.dataset.f===f));
      if(!filterBar.querySelector('.chip.active'))chips[0]&&chips[0].classList.add('active');
      chips.forEach(ch=>ch.addEventListener('click',()=>{chips.forEach(c=>c.classList.remove('active'));ch.classList.add('active');f=ch.dataset.f;apply();}));
    }
    if(search)search.addEventListener('input',()=>{q=search.value.trim().toLowerCase();apply();});
    apply();
  }

  /* ---- detail rendering ---- */
  const droot=$('#detailRoot');
  if(droot&&window.TRAININGS){
    const id=new URLSearchParams(location.search).get('id');
    const t=window.TRAININGS.find(x=>x.id===id);
    if(!t){
      droot.innerHTML=`<div class="wrap" style="padding:160px 0 100px;text-align:center">
        <h1 style="font-family:Oswald;font-size:32px;margin-bottom:14px">Eğitim bulunamadı</h1>
        <p style="color:#6f6a78;margin-bottom:24px">Aradığınız eğitim mevcut değil ya da kaldırılmış olabilir.</p>
        <a class="btn btn-purple" href="egitimler.html">Tüm Eğitimler</a></div>`;
    }else{
      document.title=t.title+' | Digital Vizyon Akademi';
      const related=window.TRAININGS.filter(x=>x.category===t.category&&x.id!==t.id).slice(0,3);
      droot.innerHTML=`
      <section class="page-hero">
        <div class="wrap ph-in">
          <div class="crumb"><a href="index.html">Anasayfa</a><span>›</span><a href="egitimler.html">Eğitimler</a><span>›</span>${esc(t.title)}</div>
          <h1>${esc(t.title)}</h1>
          <p>${esc(t.summary)}</p>
        </div>
      </section>
      <section class="detail"><div class="wrap detail-layout">
        <div class="detail-main">
          <img class="dhero" src="${t.image.replace(/\/\d+\/\d+/,'/1200/600')}" alt="${esc(t.title)}">
          <p class="lead">${esc(t.description[0])}</p>
          ${t.description.slice(1).map(p=>`<p>${esc(p)}</p>`).join('')}
          <h2>Eğitim Kazanımları</h2>
          <ul class="olist">${t.outcomes.map(o=>`<li><svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>${esc(o)}</li>`).join('')}</ul>
          <h2>Kimler Katılmalı?</h2>
          <ul class="olist">${t.audience.map(o=>`<li><svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>${esc(o)}</li>`).join('')}</ul>
          <h2>Eğitim İçeriği</h2>
          <div class="outline">${t.outline.map(m=>`<div class="mod"><div class="num"></div><div><h4>${esc(m.t)}</h4><p>${esc(m.d)}</p></div></div>`).join('')}</div>
          <div class="tag-row">${(t.tags||[]).map(x=>`<span>${esc(x)}</span>`).join('')}</div>
        </div>
        <aside>
          <div class="info-card">
            <h3>Eğitim Bilgileri</h3>
            <div class="price">Kurumsal / grup fiyatları için teklif alın</div>
            <div class="row"><span class="lab"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>Süre</span><span class="val">${esc(t.duration)}</span></div>
            <div class="row"><span class="lab"><svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>Seviye</span><span class="val">${esc(t.level)}</span></div>
            <div class="row"><span class="lab"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>Format</span><span class="val">${esc(t.format)}</span></div>
            <div class="row"><span class="lab"><svg viewBox="0 0 24 24"><path d="M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5l-8-3z"/></svg>Sertifika</span><span class="val">${esc(t.certificate)}</span></div>
            <div class="row"><span class="lab"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>Kategori</span><span class="val">${esc(t.categoryLabel)}</span></div>
            <a class="btn btn-gold" href="iletisim.html?egitim=${encodeURIComponent(t.title)}">Teklif / Bilgi Al</a>
            <a class="btn btn-outline" href="egitimler.html">Tüm Eğitimler</a>
          </div>
        </aside>
      </div></section>
      ${related.length?`<section class="cats" style="padding:20px 0 100px"><div class="wrap">
        <div class="sec-head left"><div class="k">İlgili Eğitimler</div><h2>Benzer Programlar</h2></div>
        <div class="tgrid">${related.map(r=>`
          <a class="tcard" href="egitim-detay.html?id=${r.id}">
            <div class="thumb"><span class="tag">${esc(r.tag)}</span><img loading="lazy" src="${r.image}" alt="${esc(r.title)}"></div>
            <div class="tbody"><div class="tcat">${esc(r.categoryLabel)}</div><h3>${esc(r.title)}</h3><p>${esc(r.summary)}</p><span class="go">Detayları Gör →</span></div>
          </a>`).join('')}</div>
      </div></section>`:''}`;
      bindGrow(droot);observeReveal(droot);decoPageHero(droot);
    }
  }

  /* ---- blog listing (teknoloji-bulteni) ---- */
  const bgrid=$('#blogGrid');
  if(bgrid&&window.POSTS){
    const posts=window.POSTS;
    const feat=posts.find(p=>p.featured)||posts[0];
    const rest=posts.filter(p=>p!==feat);
    const bfeat=$('#blogFeatured');
    if(bfeat){
      bfeat.innerHTML=`
        <img src="${feat.image}" alt="${esc(feat.title)}">
        <div class="fx">
          <span class="badge">Öne Çıkan</span>
          <div class="meta">${esc(feat.date)} • ${esc(feat.read)} okuma • ${esc(feat.category)}</div>
          <h2>${esc(feat.title)}</h2>
          <p>${esc(feat.excerpt)}</p>
          <a href="blog-detay.html?id=${feat.id}" class="btn btn-purple">Yazının Devamı</a>
        </div>`;
    }
    bgrid.innerHTML=rest.map(p=>`
      <a class="tcard" href="blog-detay.html?id=${p.id}">
        <div class="thumb"><span class="tag">${esc(p.category)}</span><img loading="lazy" src="${p.image}" alt="${esc(p.title)}"></div>
        <div class="tbody"><div class="tmeta"><span>${esc(p.date)}</span><span>${esc(p.read)}</span></div><h3>${esc(p.title)}</h3><p>${esc(p.excerpt)}</p><span class="go">Devamını Oku →</span></div>
      </a>`).join('');
    bindGrow(bgrid);observeReveal(bgrid);if(bfeat)observeReveal(bfeat.parentElement||bfeat);
  }

  /* ---- blog detail (blog-detay) ---- */
  const broot=$('#blogRoot');
  if(broot&&window.POSTS){
    const id=new URLSearchParams(location.search).get('id');
    const post=window.POSTS.find(p=>p.id===id);
    if(!post){
      broot.innerHTML=`<div class="wrap" style="padding:160px 0 100px;text-align:center">
        <h1 style="font-family:Oswald;font-size:32px;margin-bottom:14px">Yazı bulunamadı</h1>
        <p style="color:#6f6a78;margin-bottom:24px">Aradığınız içerik mevcut değil olabilir.</p>
        <a class="btn btn-purple" href="teknoloji-bulteni.html">Teknoloji Bülteni</a></div>`;
    }else{
      document.title=post.title+' | Digital Vizyon Akademi';
      const body=post.body.map(b=> b.h?`<h2>${esc(b.h)}</h2>` : b.ul?`<ul class="olist">${b.ul.map(i=>`<li><svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>${esc(i)}</li>`).join('')}</ul>` : `<p>${esc(b.p)}</p>`).join('');
      const related=window.POSTS.filter(p=>p.id!==post.id).slice(0,3);
      broot.innerHTML=`
      <section class="page-hero"><div class="wrap ph-in">
        <div class="crumb"><a href="index.html">Anasayfa</a><span>›</span><a href="teknoloji-bulteni.html">Teknoloji Bülteni</a><span>›</span>${esc(post.category)}</div>
        <h1 style="max-width:920px;margin-left:auto;margin-right:auto;font-size:clamp(26px,3.4vw,44px)">${esc(post.title)}</h1>
        <p>${esc(post.date)} • ${esc(post.read)} okuma • ${esc(post.category)}</p>
      </div></section>
      <section class="detail"><div class="wrap" style="max-width:840px">
        <img class="dhero" src="${post.image}" alt="${esc(post.title)}">
        <div class="detail-main">${body}</div>
        <div class="tag-row" style="margin-top:34px;gap:12px"><a class="btn btn-purple" href="teknoloji-bulteni.html">← Tüm Yazılar</a><a class="btn btn-outline" href="iletisim.html">İletişime Geç</a></div>
      </div></section>
      <section class="cats" style="padding:20px 0 100px"><div class="wrap">
        <div class="sec-head left"><div class="k">Bültenden</div><h2>Diğer Yazılar</h2></div>
        <div class="tgrid">${related.map(r=>`<a class="tcard" href="blog-detay.html?id=${r.id}"><div class="thumb"><span class="tag">${esc(r.category)}</span><img loading="lazy" src="${r.image}" alt=""></div><div class="tbody"><div class="tmeta"><span>${esc(r.date)}</span><span>${esc(r.read)}</span></div><h3>${esc(r.title)}</h3><p>${esc(r.excerpt)}</p><span class="go">Devamını Oku →</span></div></a>`).join('')}</div>
      </div></section>`;
      bindGrow(broot);observeReveal(broot);decoPageHero(broot);
    }
  }

  /* ---- prefill contact form from ?egitim= ---- */
  const egParam=new URLSearchParams(location.search).get('egitim');
  if(egParam){
    const sel=$('#quoteForm [name=egitim]');
    if(sel){let found=false;$$('option',sel).forEach(o=>{if(o.value===egParam||o.textContent===egParam){o.selected=true;found=true;}});
      if(!found){const o=document.createElement('option');o.textContent=egParam;o.selected=true;sel.appendChild(o);}}
    const msg=$('#quoteForm [name=mesaj]');
    if(msg&&!msg.value)msg.value=`"${egParam}" eğitimi hakkında bilgi/teklif almak istiyorum.`;
  }

  /* ---- FAQ accordion ---- */
  $$('.qa .q').forEach(q=>q.addEventListener('click',()=>{
    const qa=q.parentElement,a=$('.a',qa),open=qa.classList.contains('open');
    $$('.qa').forEach(o=>{o.classList.remove('open');$('.a',o).style.maxHeight=null;});
    if(!open){qa.classList.add('open');a.style.maxHeight=a.scrollHeight+'px';}
  }));

  /* ---- contact form validation ---- */
  const form=$('#quoteForm'),ok=$('#formOk');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();let valid=true;
      $$('[required]',form).forEach(fl=>{
        const field=fl.closest('.field');let bad=!fl.value.trim();
        if(fl.type==='email'&&fl.value.trim())bad=!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fl.value);
        field.classList.toggle('err',bad);if(bad)valid=false;});
      if(!valid){if(ok)ok.classList.remove('show');return;}
      if(ok){ok.classList.add('show');ok.scrollIntoView({behavior:'smooth',block:'center'});setTimeout(()=>ok.classList.remove('show'),6000);}
      form.reset();
    });
    $$('input,select,textarea',form).forEach(fl=>fl.addEventListener('input',()=>fl.closest('.field').classList.remove('err')));
  }

  /* ---- reference logos marquee ---- */
  const t1=$('#refTrack1'),t2=$('#refTrack2');
  if(t1||t2){
    const base='icon/Kurumsal-Gelisim-Egitimleri-Yazilim-Egitimleri-';
    const nums=[];for(let i=1;i<=90;i++){if(i!==2)nums.push(i);}
    const tile=n=>`<div class="ref"><img loading="lazy" src="${base}${n}.jpg" alt="Referans" onerror="this.closest('.ref').remove()"></div>`;
    const half=Math.ceil(nums.length/2);
    const a=nums.slice(0,half).map(tile).join(''),b=nums.slice(half).map(tile).join('');
    if(t1)t1.innerHTML=a+a;if(t2)t2.innerHTML=b+b;
  }

  /* ---- footer year ---- */
  $$('.js-year').forEach(el=>el.textContent=new Date().getFullYear());
})();
