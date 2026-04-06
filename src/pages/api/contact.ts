import type { APIRoute } from 'astro';
import { Resend } from 'resend';

// Esta ruta es siempre server-side (nunca prerenderizada)
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  // Parsear body
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { email, message, name } = body;

  // Validación básica
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ error: 'Email inválido' }), {
      status: 422,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Enviar con Resend
  const resend = new Resend(import.meta.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: import.meta.env.CONTACT_FROM_EMAIL,
    to:   import.meta.env.CONTACT_TO_EMAIL,
    replyTo: email,
    subject: `Nuevo mensaje de portafolio — ${name ?? email}`,
    html: `
      <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px;">
        <h2 style="margin:0 0 8px;font-size:22px;">Nuevo mensaje desde tu portafolio</h2>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0;" />
        ${name    ? `<p><strong>Nombre:</strong> ${name}</p>`    : ''}
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        ${message ? `<p><strong>Mensaje:</strong></p><p style="white-space:pre-wrap;">${message}</p>` : ''}
        <hr style="border:none;border-top:1px solid #eee;margin:24px 0;" />
        <p style="font-size:12px;color:#999;">Enviado desde carlos-sanchez.dev</p>
      </div>
    `,
  });

  if (error) {
    console.error('[contact] Resend error:', error);
    return new Response(JSON.stringify({ error: 'Error al enviar el mensaje' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
