import { c as create_ssr_component, e as each, b as add_attribute, d as escape, a as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { t, I as Icon } from "../../chunks/index2.js";
import { S as SEO } from "../../chunks/SEO.js";
import { S as SERVICES, C as CLIENTS, P as PROJECTS } from "../../chunks/data.js";
const HeroElectric = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg class="hero-electric" viewBox="0 0 800 800" fill="none" preserveAspectRatio="xMidYMid meet"><defs><radialGradient id="boltGrad" cx="0.5" cy="0.5" r="0.6"><stop offset="0" stop-color="#FFE970" stop-opacity="1"></stop><stop offset="1" stop-color="#FFD400" stop-opacity="0.9"></stop></radialGradient><filter id="glow"><feGaussianBlur stdDeviation="6"></feGaussianBlur></filter></defs><g class="spin-slow" style="transform-origin: 400px 400px"><circle cx="400" cy="400" r="360" stroke="#1A2540" stroke-width="1" stroke-dasharray="2 8" fill="none"></circle><circle cx="400" cy="400" r="360" stroke="#FFD400" stroke-width="1" stroke-dasharray="40 320" fill="none" opacity="0.6"></circle></g><g class="spin-rev" style="transform-origin: 400px 400px"><circle cx="400" cy="400" r="280" stroke="#1A2540" stroke-width="1" fill="none"></circle><circle cx="400" cy="400" r="280" stroke="#FFD400" stroke-width="2" stroke-dasharray="3 50" fill="none" opacity="0.7"></circle>${each(Array(60), (_, i) => {
    let a = i / 60 * Math.PI * 2;
    return ` <line${add_attribute("x1", 400 + Math.cos(a) * 270, 0)}${add_attribute("y1", 400 + Math.sin(a) * 270, 0)}${add_attribute("x2", 400 + Math.cos(a) * 280, 0)}${add_attribute("y2", 400 + Math.sin(a) * 280, 0)} stroke="#FFD400"${add_attribute("stroke-width", i % 5 === 0 ? 1.5 : 0.6, 0)}${add_attribute("opacity", i % 5 === 0 ? 0.7 : 0.3, 0)}></line>`;
  })}</g><g opacity="0.3" stroke="#FFD400" fill="none"><circle cx="400" cy="400" r="200" stroke-width="1"></circle><circle cx="400" cy="400" r="160" stroke-width="0.6"></circle><circle cx="400" cy="400" r="120" stroke-width="0.4"></circle></g><g stroke="#FFD400" stroke-width="0.5" opacity="0.4"><line x1="400" y1="40" x2="400" y2="120"></line><line x1="400" y1="680" x2="400" y2="760"></line><line x1="40" y1="400" x2="120" y2="400"></line><line x1="680" y1="400" x2="760" y2="400"></line></g><g class="bolt-anim" style="transform-origin: 400px 400px"><path d="M450 180 L300 420 L385 420 L340 620 L510 360 L420 360 L450 180 Z" fill="url(#boltGrad)" stroke="#FFE970" stroke-width="2" stroke-linejoin="round"></path><path d="M450 200 L320 410 L380 410 L350 580" fill="none" stroke="#FFFAD9" stroke-width="1.5" opacity="0.7"></path></g><g stroke="#FFD400" fill="none" stroke-width="1.5" stroke-linecap="round" opacity="0.85"><path class="flow-line" d="M120 200 L180 200 L195 180 L215 220 L235 200 L295 200" filter="url(#glow)"></path><path class="flow-line" d="M120 200 L180 200 L195 180 L215 220 L235 200 L295 200"></path><path class="flow-line" d="M505 200 L565 200 L580 180 L600 220 L620 200 L680 200" filter="url(#glow)"></path><path class="flow-line" d="M505 200 L565 200 L580 180 L600 220 L620 200 L680 200"></path><path class="flow-line" d="M120 600 L180 600 L195 580 L215 620 L235 600 L295 600" filter="url(#glow)"></path><path class="flow-line" d="M120 600 L180 600 L195 580 L215 620 L235 600 L295 600"></path><path class="flow-line" d="M505 600 L565 600 L580 580 L600 620 L620 600 L680 600" filter="url(#glow)"></path><path class="flow-line" d="M505 600 L565 600 L580 580 L600 620 L620 600 L680 600"></path></g><g fill="#FFD400"><circle cx="120" cy="200" r="4"></circle><circle cx="680" cy="200" r="4"></circle><circle cx="120" cy="600" r="4"></circle><circle cx="680" cy="600" r="4"></circle><circle cx="120" cy="200" r="10" opacity="0.2"></circle><circle cx="680" cy="200" r="10" opacity="0.2"></circle><circle cx="120" cy="600" r="10" opacity="0.2"></circle><circle cx="680" cy="600" r="10" opacity="0.2"></circle></g><g font-family="ui-monospace, monospace" font-size="10" fill="#8A99B8" letter-spacing="1.5"><text x="80" y="190">N · 01</text><text x="640" y="190">N · 02</text><text x="80" y="624">N · 03</text><text x="640" y="624">N · 04</text><text x="380" y="60" text-anchor="end">400 kV</text><text x="420" y="60">50 Hz</text></g></svg>`;
});
const Ticker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const items = [
    { v: "24+ Yıl Tecrübe", a: true },
    { v: "340+ Tamamlanan Proje" },
    { v: "185 MW Kurulu GES Gücü", a: true },
    { v: "EMO Sertifikalı" },
    { v: "TEDAŞ Onaylı", a: true },
    { v: "ISO 9001:2015" },
    { v: "7/24 Acil Servis", a: true },
    { v: "IEC 61439 Pano" }
  ];
  const doubled = [...items, ...items];
  return `<div class="hero-ticker"><div class="ticker-track">${each(doubled, (t2) => {
    return `<div class="ticker-item"><span${add_attribute("class", t2.a ? "acc" : "", 0)}>⚡</span> <span>${escape(t2.v)}</span> <span class="sep"></span> </div>`;
  })}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filtered;
  let filters;
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Kösek Enerji",
    "url": "https://www.kosekenerji.com",
    "description": "Antalya merkezli endüstriyel elektrik mühendislik firması",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.kosekenerji.com/hizmetler",
      "query-input": "required name=search_term_string"
    }
  };
  let filter = "hepsi";
  filtered = PROJECTS;
  filters = [
    {
      id: "hepsi",
      label: $t("projects.filters.all") ?? "Tümü"
    },
    {
      id: "endustriyel",
      label: $t("projects.filters.industrial") ?? "Endüstriyel"
    },
    {
      id: "yenilenebilir",
      label: $t("projects.filters.renewable") ?? "Yenilenebilir"
    },
    {
      id: "otomasyon",
      label: $t("projects.filters.automation") ?? "Otomasyon"
    },
    {
      id: "aydinlatma",
      label: $t("projects.filters.lighting") ?? "Aydınlatma"
    }
  ];
  $$unsubscribe_t();
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: "Kösek Enerji — Antalya Endüstriyel Elektrik & Enerji Mühendisliği",
      description: "Antalya'da 24 yıllık deneyimle yüksek gerilim tesisleri, pano imalatı, GES ve SCADA otomasyon projeleri. EMO ve TEDAŞ onaylı. Ücretsiz keşif için arayın.",
      keywords: "Antalya elektrik firması, Antalya endüstriyel elektrik, yüksek gerilim Antalya, pano imalatı Antalya, GES Antalya güneş enerjisi, otomasyon SCADA Antalya, elektrik mühendislik Antalya",
      canonical: "/",
      schema: homeSchema
    },
    {},
    {}
  )} <section class="hero"><div class="hero-bg" data-svelte-h="svelte-170ofbd"><div class="hero-bg-grid"></div> <div class="hero-bg-glow"></div> <div class="hero-bg-noise"></div></div> ${validate_component(HeroElectric, "HeroElectric").$$render($$result, {}, {}, {})} <div class="container hero-main"><div class="hero-top fade-in"><div class="hero-top-left"><div class="eyebrow"><span class="blink"></span>${escape($t("pages.home.eyebrow"))}</div> <div class="hero-id" data-svelte-h="svelte-hx5hb9">REF · KSK-2026 / 0428 · LIVE</div></div> <div class="hero-voltage" data-svelte-h="svelte-15ur3p1"><div class="voltage-readout"><div class="label">Voltaj</div><div class="value">400 kV</div></div> <div class="voltage-readout"><div class="label">Frekans</div><div class="value">50.0 Hz</div></div> <div class="voltage-readout"><div class="label">PF</div><div class="value">0.98</div></div></div></div> <div class="hero-headline fade-in fade-in-2" data-svelte-h="svelte-wteosj"><h1 class="display-xl"><span class="line">ENDÜSTRİNİN</span> <span class="line"><span class="accent">ENERJİSİNİ</span> TAŞIYAN</span> <span class="line"><span class="outline">MÜHENDİSLİK</span> GÜCÜ.</span></h1></div> <div class="hero-bottom fade-in fade-in-3"><p class="hero-lead">${escape($t("pages.home.lead"))}</p> <div class="hero-lead-cta"><div class="hero-cta-buttons"><a href="/iletisim" class="btn btn-primary">${escape($t("pages.home.cta1"))} ${validate_component(Icon, "Icon").$$render($$result, { name: "Arrow", size: 16 }, {}, {})}</a> <a href="/hizmetler" class="btn btn-ghost">${escape($t("pages.home.cta2"))}</a></div></div></div></div> ${validate_component(Ticker, "Ticker").$$render($$result, {}, {}, {})}</section> <div class="hero-mega-band" data-svelte-h="svelte-1q5otvv"><div class="mega-marquee"><span>YÜKSEK GERİLİM <span class="dot"></span> PANO İMALATI <span class="dot"></span> GES <span class="dot"></span> OTOMASYON <span class="dot"></span> AYDINLATMA <span class="dot"></span> BAKIM <span class="dot"></span></span> <span>YÜKSEK GERİLİM <span class="dot"></span> PANO İMALATI <span class="dot"></span> GES <span class="dot"></span> OTOMASYON <span class="dot"></span> AYDINLATMA <span class="dot"></span> BAKIM <span class="dot"></span></span></div></div> <section class="services"><div class="container"><div class="section-head"><div><div class="eyebrow">${escape($t("pages.home.servicesEyebrow"))}</div> <h2 class="display-lg"><!-- HTML_TAG_START -->${$t("pages.home.servicesTitle")}<!-- HTML_TAG_END --></h2></div> <a href="/hizmetler" class="head-cta">${escape($t("footer.servicesTitle"))} ${validate_component(Icon, "Icon").$$render($$result, { name: "ArrowUR", size: 14 }, {}, {})}</a></div> <div class="services-bento">${each(SERVICES, (s, i) => {
    return `<a href="/hizmetler" class="service-tile"><div class="tile-top"><div class="tile-icon">${validate_component(Icon, "Icon").$$render($$result, { name: s.icon, size: 22 }, {}, {})}</div> <span class="tile-num">${escape(String(i + 1).padStart(2, "0"))}</span></div> <h3>${escape($t(`data.svc.${s.slug}`)?.title ?? s.title)}</h3> <p>${escape($t(`data.svc.${s.slug}`)?.short ?? s.short)}</p> <ul class="tile-list">${each(($t(`data.svc.${s.slug}`)?.bullets ?? s.bullets).slice(0, 3), (b) => {
      return `<li>${escape(b)}</li>`;
    })}</ul> <div class="tile-bottom"><div class="tile-tags">${each(s.tags, (tag) => {
      return `<span class="tile-tag">${escape(tag)}</span>`;
    })}</div> <span class="tile-cta">→ ${validate_component(Icon, "Icon").$$render($$result, { name: "Arrow", size: 13 }, {}, {})}</span></div> </a>`;
  })}</div></div></section> <section><div class="container"><div class="section-head"><div><div class="eyebrow">${escape($t("pages.home.processEyebrow"))}</div> <h2 class="display-lg"><!-- HTML_TAG_START -->${$t("pages.home.processTitle")}<!-- HTML_TAG_END --></h2></div></div> <div class="process-grid">${each($t("data.process"), (p, i) => {
    return `<div class="process-card"><div class="process-card-top"><span class="process-step-num">${escape(String(i + 1).padStart(2, "0"))}</span> ${i % 3 !== 2 ? `<span class="process-connector" aria-hidden="true"></span>` : ``}</div> <div class="process-card-line"></div> <h4 class="process-card-title">${escape(p.t)}</h4> <p class="process-card-desc">${escape(p.d)}</p> </div>`;
  })}</div></div></section> <section style="background: var(--bg-deep); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line)"><div class="container"><div class="section-head"><div><div class="eyebrow">${escape($t("pages.home.projectsEyebrow"))}</div> <h2 class="display-lg"><!-- HTML_TAG_START -->${$t("pages.home.projectsTitle")}<!-- HTML_TAG_END --></h2></div> <a href="/projeler" class="head-cta">${escape($t("nav.projects"))} ${validate_component(Icon, "Icon").$$render($$result, { name: "ArrowUR", size: 14 }, {}, {})}</a> <div class="projects-filter">${each(filters, (f) => {
    return `<button class="${["filter-btn", filter === f.id ? "active" : ""].join(" ").trim()}">${escape(f.label)}</button>`;
  })}</div></div> <div class="projects-grid">${each(filtered, (p, i) => {
    return `<div class="project-card"><div class="project-img" style="${"background: linear-gradient(135deg, " + escape(p.color1, true) + "25, " + escape(p.color2, true) + "10), var(--bg-deep)"}"><svg class="project-img-pattern" viewBox="0 0 200 150" preserveAspectRatio="xMidYMid slice"><defs><linearGradient${add_attribute("id", `pg${i}`, 0)} x1="0" y1="0" x2="1" y2="1"><stop offset="0"${add_attribute("stop-color", p.color1, 0)} stop-opacity="0.9"></stop><stop offset="1"${add_attribute("stop-color", p.color2, 0)} stop-opacity="0.5"></stop></linearGradient></defs><g stroke="rgba(255,255,255,0.08)" fill="none">${each(Array(10), (_, k) => {
      return `<line${add_attribute("x1", k * 22, 0)} y1="0"${add_attribute("x2", k * 22, 0)} y2="150"></line>`;
    })}${each(Array(8), (_, k) => {
      return `<line x1="0"${add_attribute("y1", k * 22, 0)} x2="200"${add_attribute("y2", k * 22, 0)}></line>`;
    })}</g><path d="M10 130 L40 80 L60 100 L90 50 L120 90 L150 30 L190 70"${add_attribute("stroke", `url(#pg${i})`, 0)} stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="150" cy="30" r="4"${add_attribute("fill", p.color1, 0)}></circle><circle cx="150" cy="30" r="12"${add_attribute("fill", p.color1, 0)} opacity="0.25"></circle></svg></div> <div class="project-meta"><span class="project-tag">${escape(p.tag)}</span> <h4>${escape(p.title)}</h4> <div class="project-loc">${escape(p.loc)}</div></div> </div>`;
  })}</div></div></section> <section class="clients"><div class="container"><div class="clients-label">${escape($t("pages.home.clientsLabel"))}</div> <div class="clients-grid">${each(CLIENTS, (c) => {
    return `<div class="client-logo">${escape(c)}</div>`;
  })}</div></div></section> <section class="cta-band"><div class="container"><div class="cta-band-inner"><h2><!-- HTML_TAG_START -->${$t("pages.home.ctaTitle")}<!-- HTML_TAG_END --></h2> <a href="/iletisim" class="cta-band-cta">${validate_component(Icon, "Icon").$$render($$result, { name: "Bolt", size: 18 }, {}, {})} ${escape($t("pages.contact.ctaBtn"))}</a></div></div> <svg class="cta-band-pattern" viewBox="0 0 1200 200" preserveAspectRatio="none"><path d="M0 100 L200 100 L220 60 L260 140 L300 100 L1200 100" stroke="#000" stroke-width="2" fill="none"></path><path d="M0 50 L400 50 L420 20 L460 80 L500 50 L1200 50" stroke="#000" stroke-width="1.5" fill="none" opacity="0.4"></path><path d="M0 150 L600 150 L620 110 L660 180 L700 150 L1200 150" stroke="#000" stroke-width="1.5" fill="none" opacity="0.4"></path></svg></section>`;
});
export {
  Page as default
};
