
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
		RouteId(): "/" | "/hakkimizda" | "/hizmetler" | "/iletisim" | "/kurumsal" | "/projeler" | "/robots.txt" | "/sitemap.xml";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/hakkimizda": Record<string, never>;
			"/hizmetler": Record<string, never>;
			"/iletisim": Record<string, never>;
			"/kurumsal": Record<string, never>;
			"/projeler": Record<string, never>;
			"/robots.txt": Record<string, never>;
			"/sitemap.xml": Record<string, never>
		};
		Pathname(): "/" | "/hakkimizda" | "/hizmetler" | "/iletisim" | "/kurumsal" | "/projeler" | "/robots.txt" | "/sitemap.xml";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): string & {};
	}
}