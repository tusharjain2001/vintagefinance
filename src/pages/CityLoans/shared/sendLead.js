// Backend endpoint that emails landing page enquiries (vintage-backend's
// api/send-lead.js). Like the complaint form's REACT_APP_COMPLAINT_API, it can
// be overridden with REACT_APP_LEAD_API in the frontend .env.
const LEAD_API =
  process.env.REACT_APP_LEAD_API || "https://vintage-backend-five.vercel.app/api/send-lead";

// Sends one form submission. `fields` is a list of [label, value] pairs, shown
// in the email in that order; it must include "Mobile number". Resolves to an
// error message, or null when the email was sent.
export async function sendLead(form, fields) {
  try {
    const response = await fetch(LEAD_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ form, page: window.location.pathname, fields }),
    });
    const data = await response.json().catch(() => ({}));
    if (response.ok && data.success) return null;
    return data.message || "Something went wrong. Please try again later.";
  } catch (err) {
    return "Unable to submit right now. Please check your connection and try again.";
  }
}
