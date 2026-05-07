import { c as create_ssr_component, d as escape, b as add_attribute } from "./ssr.js";
const SITE = "https://www.kosekenerji.com";
const SEO = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let canonicalUrl;
  let ldJson;
  let { title } = $$props;
  let { description } = $$props;
  let { keywords = "" } = $$props;
  let { canonical = "" } = $$props;
  let { schema = null } = $$props;
  const OG_IMG = `${SITE}/og-image.jpg`;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  if ($$props.keywords === void 0 && $$bindings.keywords && keywords !== void 0) $$bindings.keywords(keywords);
  if ($$props.canonical === void 0 && $$bindings.canonical && canonical !== void 0) $$bindings.canonical(canonical);
  if ($$props.schema === void 0 && $$bindings.schema && schema !== void 0) $$bindings.schema(schema);
  canonicalUrl = canonical ? `${SITE}${canonical}` : SITE;
  ldJson = schema ? `<script type="application/ld+json">${JSON.stringify(schema)}<\/script>` : "";
  return `${$$result.head += `<!-- HEAD_svelte-rtfoj2_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="description"${add_attribute("content", description, 0)}>${keywords ? `<meta name="keywords"${add_attribute("content", keywords, 0)}>` : ``}<meta name="robots" content="index, follow"><meta name="author" content="Kösek Enerji Mühendislik"><meta name="geo.region" content="TR-07"><meta name="geo.placename" content="Antalya"><meta name="geo.position" content="36.8969;30.7133"><meta name="ICBM" content="36.8969, 30.7133"><link rel="canonical"${add_attribute("href", canonicalUrl, 0)}><meta property="og:site_name" content="Kösek Enerji"><meta property="og:title"${add_attribute("content", title, 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta property="og:type" content="website"><meta property="og:url"${add_attribute("content", canonicalUrl, 0)}><meta property="og:image"${add_attribute("content", OG_IMG, 0)}><meta property="og:locale" content="tr_TR"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${add_attribute("content", title, 0)}><meta name="twitter:description"${add_attribute("content", description, 0)}><meta name="twitter:image"${add_attribute("content", OG_IMG, 0)}>${schema ? `<!-- HTML_TAG_START -->${ldJson}<!-- HTML_TAG_END -->` : ``}<!-- HEAD_svelte-rtfoj2_END -->`, ""}`;
});
export {
  SEO as S
};
