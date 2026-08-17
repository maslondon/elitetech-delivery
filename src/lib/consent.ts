export const CONSENT_STORAGE_KEY = "etd-cookie-consent";
export const CONSENT_CHANGED_EVENT = "etd-consent-changed";
export const OPEN_COOKIE_PREFERENCES_EVENT = "etd-open-cookie-preferences";

export type ConsentValue = "granted" | "denied";

export function getStoredConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  return value === "granted" || value === "denied" ? value : null;
}

export function setStoredConsent(value: ConsentValue) {
  window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: value }));
}
