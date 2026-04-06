/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  // Privadas — sólo servidor
  readonly RESEND_API_KEY: string;
  readonly CONTACT_TO_EMAIL: string;
  readonly CONTACT_FROM_EMAIL: string;

  // Públicas — disponibles en cliente y servidor
  readonly PUBLIC_DISPLAY_EMAIL: string;
  readonly PUBLIC_PHONE: string;
  readonly PUBLIC_LOCATION: string;
  readonly PUBLIC_AVAILABILITY: string;
  readonly PUBLIC_GITHUB: string;
  readonly PUBLIC_LINKEDIN: string;
  readonly PUBLIC_TWITTER: string;
  readonly PUBLIC_WHATSAPP: string;
  readonly PUBLIC_CV_PATH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
