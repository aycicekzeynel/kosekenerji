import { redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export function load() {
  if (env.MAINTENANCE_MODE !== 'true') {
    throw redirect(307, '/');
  }
}
