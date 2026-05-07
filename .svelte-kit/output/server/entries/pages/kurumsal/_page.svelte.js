import { c as create_ssr_component, a as subscribe, v as validate_component, d as escape, e as each } from "../../../chunks/ssr.js";
import { t, I as Icon } from "../../../chunks/index2.js";
import { S as SEO } from "../../../chunks/SEO.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kösek Enerji Mühendislik ve Elektrik Hizmetleri Sanayi Ticaret Limited Şirketi",
    "alternateName": "Kösek Enerji",
    "url": "https://www.kosekenerji.com",
    "foundingDate": "2001",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": 48
    },
    "taxID": "5881221574",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Cumhuriyet Mah. Fatih Cad. Kılınç Apt. No:45 İç Kapı No:B",
      "addressLocality": "Muratpaşa",
      "addressRegion": "Antalya",
      "postalCode": "07040",
      "addressCountry": "TR"
    },
    "hasCredential": [
      "EMO Serbest Müşavirlik",
      "TEDAŞ Onaylı Müteahhit",
      "ISO 9001:2015",
      "ISO 14001",
      "ISO 45001"
    ]
  };
  $$unsubscribe_t();
  return `${validate_component(SEO, "SEO").$$render(
    $$result,
    {
      title: "Kurumsal — Antalya Elektrik Mühendislik Şirketi | Kösek Enerji",
      description: "2001 yılında kurulan Kösek Enerji, Antalya merkezli EMO ve TEDAŞ onaylı elektrik mühendislik şirketidir. ISO 9001:2015 sertifikalı, 48 uzman personel, 340+ tamamlanan proje.",
      keywords: "Kösek Enerji kurumsal, Antalya elektrik şirketi, EMO onaylı elektrik Antalya, TEDAŞ onaylı müteahhit Antalya, ISO 9001 elektrik firması, elektrik mühendislik şirketi Antalya",
      canonical: "/kurumsal",
      schema: orgSchema
    },
    {},
    {}
  )} <section class="page-hero"><div class="hero-bg" data-svelte-h="svelte-1xp5dsq"><div class="hero-bg-grid"></div><div class="hero-bg-glow"></div></div> <div class="container" style="position: relative; z-index: 2"><h1 class="display-xl"><!-- HTML_TAG_START -->${$t("pages.corporate.heroTitle")}<!-- HTML_TAG_END --></h1> <p class="lead">${escape($t("pages.corporate.heroLead"))}</p></div></section> <section style="padding-top: 0"><div class="container"><div class="section-head"><div><div class="eyebrow">${escape($t("pages.corporate.valuesEyebrow"))}</div> <h2 class="display-md">${escape($t("pages.corporate.valuesTitle"))}</h2></div></div> <div class="kv-grid">${each($t("data.values"), (v) => {
    return `<div class="kv-card"><div class="kv-num">${escape(v.n)}</div> <span class="kv-icon">${validate_component(Icon, "Icon").$$render($$result, { name: v.i, size: 48 }, {}, {})}</span> <h3>${escape(v.t)}</h3> <p>${escape(v.d)}</p> </div>`;
  })}</div></div></section> <section style="background: var(--bg-deep); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line)"><div class="container"><div class="section-head"><div><div class="eyebrow">${escape($t("pages.corporate.certsEyebrow"))}</div> <h2 class="display-md">${escape($t("pages.corporate.certsTitle"))}</h2></div></div> <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px">${each($t("pages.corporate.certs"), (c) => {
    return `<div style="padding: 22px 24px; border: 1px solid var(--line); border-radius: 8px; background: var(--bg-card); display: flex; align-items: center; gap: 14px"><span style="color: var(--accent); flex-shrink: 0; display: flex">${validate_component(Icon, "Icon").$$render($$result, { name: "Check", size: 18 }, {}, {})}</span> <span style="font-size: 14px; font-weight: 500">${escape(c)}</span> </div>`;
  })}</div></div></section>`;
});
export {
  Page as default
};
