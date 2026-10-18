// Keep API requests on the frontend origin. Vite proxies them locally and
// Vercel proxies them in production, so authentication cookies stay first-party.
export const API_BASE_URL = '';

export function apiUrl(path: string) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${API_BASE_URL}${normalizedPath}`;
}

export function realtimeUrl(token:string){
  const backend=import.meta.env.VITE_API_URL as string|undefined;
  if(backend)return `${backend.replace(/^http/,'ws').replace(/\/$/,'')}/api/admin/realtime?token=${encodeURIComponent(token)}`;
  return `${import.meta.env.DEV?'ws://localhost:4000':'wss://salon-tiran-backend.onrender.com'}/api/admin/realtime?token=${encodeURIComponent(token)}`;
}
