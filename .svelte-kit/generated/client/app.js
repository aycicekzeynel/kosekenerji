export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21')
];

export const server_loads = [];

export const dictionary = {
		"/": [4],
		"/en": [5,[2]],
		"/en/hakkimizda": [6,[2]],
		"/en/hizmetler": [7,[2]],
		"/en/iletisim": [8,[2]],
		"/en/kurumsal": [9,[2]],
		"/en/projeler": [10,[2]],
		"/hakkimizda": [11],
		"/hizmetler": [12],
		"/iletisim": [13],
		"/kurumsal": [14],
		"/projeler": [15],
		"/ru": [16,[3]],
		"/ru/hakkimizda": [17,[3]],
		"/ru/hizmetler": [18,[3]],
		"/ru/iletisim": [19,[3]],
		"/ru/kurumsal": [20,[3]],
		"/ru/projeler": [21,[3]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));
export const encoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.encode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.svelte';