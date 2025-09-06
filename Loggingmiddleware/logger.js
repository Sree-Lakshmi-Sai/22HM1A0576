// src/utils/logger.js
export function logEvent(event, details = {}) {
  const message = [${new Date().toISOString()}] EVENT: ${event} ${JSON.stringify(details)};
  // Optionally send this to a backend or external service in the future
  // For now, log to the browser console as a proof of integration
  console.info(message);
}