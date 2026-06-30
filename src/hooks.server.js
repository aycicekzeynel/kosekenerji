import { redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export function handle({ event, resolve }) {
  const maintenance = env.MAINTENANCE_MODE === 'false';
  const isMaintenance = event.url.pathname === '/maintenance';

  if (maintenance && !isMaintenance) {
    throw redirect(307, '/maintenance');
  }

  return resolve(event);
}
