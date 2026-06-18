// Webhook endpoints are configured per environment.
// Placeholder values are shown here; real URLs live in the deployed config.
export const WEBHOOKS = {
  GET_CONTRACTORS: "https://your-n8n-instance.example.com/webhook/get-contractors",
  GET_PROPERTIES: "https://your-n8n-instance.example.com/webhook/get-properties",
  GET_UNPAID_BILLS: "https://your-n8n-instance.example.com/webhook/get-unpaid-bills",
  SUBMIT_INVOICE: "https://your-n8n-instance.example.com/webhook/submit-invoice",
  PROPERTY_MANAGEMENT: "https://your-n8n-instance.example.com/webhook/property-management",
  PROCESS_PAYMENT: "https://your-n8n-instance.example.com/webhook/process-payment",
  PERSONAL_INVOICE: "https://your-n8n-instance.example.com/webhook/personal-invoice",
  ADD_CONTRACTOR: "https://your-n8n-instance.example.com/webhook/add-contractor",
  REMOVE_CONTRACTOR: "https://your-n8n-instance.example.com/webhook/remove-contractor",
};

export const BANK_ACCOUNTS = ["Bank 1", "Bank 2", "Bank 3", "Bank 4", "Bank 5"];

export function fmtMoney(n: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);
}

export function fmtDateShort(iso: string): string {
  if (!iso) return "—";
  const d = new Date(iso + (iso.length === 10 ? "T00:00:00" : ""));
  if (isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function todayISO(): string {
  const d = new Date();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

export function isPastDue(iso: string): boolean {
  if (!iso) return false;
  const d = new Date(iso + (iso.length === 10 ? "T00:00:00" : ""));
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return d.getTime() < today.getTime();
}
