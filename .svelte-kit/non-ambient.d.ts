
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/en" | "/en/hakkimizda" | "/en/hizmetler" | "/en/iletisim" | "/en/kurumsal" | "/en/projeler" | "/hakkimizda" | "/hizmetler" | "/iletisim" | "/kurumsal" | "/projeler" | "/robots.txt" | "/ru" | "/ru/hakkimizda" | "/ru/hizmetler" | "/ru/iletisim" | "/ru/kurumsal" | "/ru/projeler" | "/sitemap.xml";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/en": Record<string, never>;
			"/en/hakkimizda": Record<string, never>;
			"/en/hizmetler": Record<string, never>;
			"/en/iletisim": Record<string, never>;
			"/en/kurumsal": Record<string, never>;
			"/en/projeler": Record<string, never>;
			"/hakkimizda": Record<string, never>;
			"/hizmetler": Record<string, never>;
			"/iletisim": Record<string, never>;
			"/kurumsal": Record<string, never>;
			"/projeler": Record<string, never>;
			"/robots.txt": Record<string, never>;
			"/ru": Record<string, never>;
			"/ru/hakkimizda": Record<string, never>;
			"/ru/hizmetler": Record<string, never>;
			"/ru/iletisim": Record<string, never>;
			"/ru/kurumsal": Record<string, never>;
			"/ru/projeler": Record<string, never>;
			"/sitemap.xml": Record<string, never>
		};
		Pathname(): "/" | "/en" | "/en/hakkimizda" | "/en/hizmetler" | "/en/iletisim" | "/en/kurumsal" | "/en/projeler" | "/hakkimizda" | "/hizmetler" | "/iletisim" | "/kurumsal" | "/projeler" | "/robots.txt" | "/ru" | "/ru/hakkimizda" | "/ru/hizmetler" | "/ru/iletisim" | "/ru/kurumsal" | "/ru/projeler" | "/sitemap.xml";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/favicon.svg" | "/manifest.webmanifest" | "/og-image.svg" | string & {};
	}
}