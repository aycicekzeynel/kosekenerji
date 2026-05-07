import { c as create_ssr_component, h as spread, i as escape_object, j as escape_attribute_value, d as add_attribute } from "./ssr.js";
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let props;
  let { name } = $$props;
  let { size = 24 } = $$props;
  let { stroke = 1.6 } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.stroke === void 0 && $$bindings.stroke && stroke !== void 0) $$bindings.stroke(stroke);
  props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  };
  return `${name === "Bolt" ? `<svg${spread(
    [
      escape_object(props),
      { stroke: "currentColor" },
      {
        "stroke-width": escape_attribute_value(stroke)
      },
      { "stroke-linecap": "round" },
      { "stroke-linejoin": "round" }
    ],
    {}
  )}><path d="M13 2L3 14h7l-1 8 11-13h-7l1-7z"></path></svg>` : `${name === "Sun" ? `<svg${spread(
    [
      escape_object(props),
      { stroke: "currentColor" },
      {
        "stroke-width": escape_attribute_value(stroke)
      },
      { "stroke-linecap": "round" },
      { "stroke-linejoin": "round" }
    ],
    {}
  )}><circle cx="12" cy="12" r="4"></circle><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"></path></svg>` : `${name === "Tower" ? `<svg${spread(
    [
      escape_object(props),
      { stroke: "currentColor" },
      {
        "stroke-width": escape_attribute_value(stroke)
      },
      { "stroke-linecap": "round" },
      { "stroke-linejoin": "round" }
    ],
    {}
  )}><path d="M5 22L12 4l7 18M8.5 13L12 4l3.5 9M7 17h10M9 19h6M10 8h4"></path></svg>` : `${name === "Panel" ? `<svg${spread(
    [
      escape_object(props),
      { stroke: "currentColor" },
      {
        "stroke-width": escape_attribute_value(stroke)
      },
      { "stroke-linecap": "round" },
      { "stroke-linejoin": "round" }
    ],
    {}
  )}><rect x="3" y="4" width="18" height="14" rx="1"></rect><path d="M3 11h18M9 4v14M15 4v14M3 21h18"></path></svg>` : `${name === "Bulb" ? `<svg${spread(
    [
      escape_object(props),
      { stroke: "currentColor" },
      {
        "stroke-width": escape_attribute_value(stroke)
      },
      { "stroke-linecap": "round" },
      { "stroke-linejoin": "round" }
    ],
    {}
  )}><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.7.5 1 1.3 1 2.1V18h6v-1.2c0-.8.3-1.6 1-2.1A7 7 0 0 0 12 2z"></path></svg>` : `${name === "Wrench" ? `<svg${spread(
    [
      escape_object(props),
      { stroke: "currentColor" },
      {
        "stroke-width": escape_attribute_value(stroke)
      },
      { "stroke-linecap": "round" },
      { "stroke-linejoin": "round" }
    ],
    {}
  )}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-2.5 2.5-2.5z"></path></svg>` : `${name === "Cpu" ? `<svg${spread(
    [
      escape_object(props),
      { stroke: "currentColor" },
      {
        "stroke-width": escape_attribute_value(stroke)
      },
      { "stroke-linecap": "round" },
      { "stroke-linejoin": "round" }
    ],
    {}
  )}><rect x="6" y="6" width="12" height="12" rx="1"></rect><path d="M9 9h6v6H9z"></path><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"></path></svg>` : `${name === "Shield" ? `<svg${spread(
    [
      escape_object(props),
      { stroke: "currentColor" },
      {
        "stroke-width": escape_attribute_value(stroke)
      },
      { "stroke-linecap": "round" },
      { "stroke-linejoin": "round" }
    ],
    {}
  )}><path d="M12 2l8 4v6c0 5-3.5 9.3-8 10-4.5-.7-8-5-8-10V6l8-4z"></path><path d="M9 12l2 2 4-4"></path></svg>` : `${name === "Phone" ? `<svg${spread(
    [
      escape_object(props),
      { stroke: "currentColor" },
      {
        "stroke-width": escape_attribute_value(stroke)
      },
      { "stroke-linecap": "round" },
      { "stroke-linejoin": "round" }
    ],
    {}
  )}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.4 2.1L8.1 9.7a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.4c.8.3 1.7.6 2.6.7a2 2 0 0 1 1.7 2z"></path></svg>` : `${name === "Mail" ? `<svg${spread(
    [
      escape_object(props),
      { stroke: "currentColor" },
      {
        "stroke-width": escape_attribute_value(stroke)
      },
      { "stroke-linecap": "round" },
      { "stroke-linejoin": "round" }
    ],
    {}
  )}><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M2 7l10 6 10-6"></path></svg>` : `${name === "Pin" ? `<svg${spread(
    [
      escape_object(props),
      { stroke: "currentColor" },
      {
        "stroke-width": escape_attribute_value(stroke)
      },
      { "stroke-linecap": "round" },
      { "stroke-linejoin": "round" }
    ],
    {}
  )}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>` : `${name === "Clock" ? `<svg${spread(
    [
      escape_object(props),
      { stroke: "currentColor" },
      {
        "stroke-width": escape_attribute_value(stroke)
      },
      { "stroke-linecap": "round" },
      { "stroke-linejoin": "round" }
    ],
    {}
  )}><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>` : `${name === "Arrow" ? `<svg${spread(
    [
      escape_object(props),
      { stroke: "currentColor" },
      {
        "stroke-width": escape_attribute_value(stroke)
      },
      { "stroke-linecap": "round" },
      { "stroke-linejoin": "round" }
    ],
    {}
  )}><path d="M5 12h14M12 5l7 7-7 7"></path></svg>` : `${name === "ArrowUR" ? `<svg${spread(
    [
      escape_object(props),
      { stroke: "currentColor" },
      {
        "stroke-width": escape_attribute_value(stroke)
      },
      { "stroke-linecap": "round" },
      { "stroke-linejoin": "round" }
    ],
    {}
  )}><path d="M7 17L17 7M7 7h10v10"></path></svg>` : `${name === "Check" ? `<svg${spread(
    [
      escape_object(props),
      { stroke: "currentColor" },
      { "stroke-width": "2" },
      { "stroke-linecap": "round" },
      { "stroke-linejoin": "round" }
    ],
    {}
  )}><path d="M5 12l5 5L20 7"></path></svg>` : `${name === "LogoMark" ? `<svg${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} viewBox="0 0 32 32" fill="none"><path d="M14 4L6 18h7l-2 10 11-14h-7l2-10z" fill="currentColor"></path></svg>` : `${name === "WhatsApp" ? `<svg${spread(
    [
      escape_object(props),
      { fill: "currentColor" },
      { stroke: "none" }
    ],
    {}
  )}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>` : ``}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`;
});
export {
  Icon as I
};
