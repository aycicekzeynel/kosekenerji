import { c as create_ssr_component, e as each, f as escape, v as validate_component } from "../../../chunks/ssr.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { V as VALUES } from "../../../chunks/data.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const certs = [
    "ISO 9001:2015 Kalite",
    "ISO 14001 Çevre",
    "ISO 45001 İSG",
    "TEDAŞ Onaylı Müteahhit",
    "EMO SMM Yetki",
    "CE / TSE Pano",
    "OHSAS 18001 İSG",
    "Yapı Müteahhidi"
  ];
  return `${$$result.head += `<!-- HEAD_svelte-fmd446_START -->${$$result.title = `<title>Kurumsal — Kösek Enerji</title>`, ""}<!-- HEAD_svelte-fmd446_END -->`, ""} <section class="page-hero" data-svelte-h="svelte-1ict75p"><div class="hero-bg"><div class="hero-bg-grid"></div><div class="hero-bg-glow"></div></div> <div class="container" style="position: relative; z-index: 2"><h1 class="display-xl">MÜHENDİSLİĞİN<br><span style="color: var(--accent)">GÜCÜNE</span> İNANIYORUZ.</h1> <p class="lead">2001&#39;den bu yana endüstriyel elektrik tesisat ve enerji çözümlerinde Türkiye sanayisinin güvenilir ortağıyız. Anadolu&#39;da kurduk, Anadolu&#39;nun büyümesiyle büyüdük.</p></div></section> <section style="padding-top: 0"><div class="container"><div class="section-head" data-svelte-h="svelte-1atbuft"><div><div class="eyebrow">/ DEĞERLER</div> <h2 class="display-md">Bizi biz yapan ilkeler.</h2></div></div> <div class="kv-grid">${each(VALUES, (v) => {
    return `<div class="kv-card"><div class="kv-num">${escape(v.n)}</div> <span class="kv-icon">${validate_component(Icon, "Icon").$$render($$result, { name: v.i, size: 48 }, {}, {})}</span> <h3>${escape(v.t)}</h3> <p>${escape(v.d)}</p> </div>`;
  })}</div></div></section> <section style="background: var(--bg-deep); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line)"><div class="container"><div class="section-head" data-svelte-h="svelte-1ox69p3"><div><div class="eyebrow">/ SERTİFİKALAR</div> <h2 class="display-md">Sektörel onay ve standartlar.</h2></div></div> <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px">${each(certs, (c) => {
    return `<div style="padding: 22px 24px; border: 1px solid var(--line); border-radius: 8px; background: var(--bg-card); display: flex; align-items: center; gap: 14px"><span style="color: var(--accent); flex-shrink: 0; display: flex">${validate_component(Icon, "Icon").$$render($$result, { name: "Check", size: 18 }, {}, {})}</span> <span style="font-size: 14px; font-weight: 500">${escape(c)}</span> </div>`;
  })}</div></div></section>`;
});
export {
  Page as default
};
