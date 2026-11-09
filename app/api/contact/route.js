const FORM_ENDPOINT = process.env.FORM_ENDPOINT || 'https://ywwxvriolxwuqcwjaluh.supabase.co/functions/v1/form-submit/38e0a9ab-d1c3-43bd-8075-231050a22a3b';
const FIELDS = ['name', 'phone', 'email', 'dog', 'service', 'message'];
const MAX_LENGTH = 4000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function verifyTurnstile(token, ip) {
  const body = new URLSearchParams({ secret: process.env.TURNSTILE_SECRET_KEY, response: token });
  if (ip) body.set('remoteip', ip);
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body });
  const data = await res.json().catch(() => ({}));
  return data.success === true;
}

export async function POST(request) {
  let input;
  try {
    input = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request' }, { status: 400 });
  }

  if (process.env.TURNSTILE_SECRET_KEY) {
    const token = typeof input['cf-turnstile-response'] === 'string' ? input['cf-turnstile-response'] : '';
    const ip = request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
    if (!token || !(await verifyTurnstile(token, ip))) {
      return Response.json({ error: 'Security check failed' }, { status: 403 });
    }
  }

  const data = {};
  for (const key of FIELDS) {
    if (typeof input[key] === 'string') data[key] = input[key].slice(0, MAX_LENGTH);
  }
  if (!data.name || !data.phone || !data.email || !data.service) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }
  if (!EMAIL_RE.test(data.email)) {
    return Response.json({ error: 'Invalid email' }, { status: 400 });
  }

  const res = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) return Response.json({ error: 'Submit failed' }, { status: 502 });
  return Response.json({ ok: true });
}
