export function calculateLoan(principal, annualRate, months) {
  if (principal <= 0 || months <= 0 || annualRate < 0) return { emi: 0, total: 0, interest: 0 };
  const monthlyRate = annualRate / 1200;
  const factor = Math.pow(1 + monthlyRate, months);
  const emi =
    monthlyRate === 0 ? principal / months : (principal * monthlyRate * factor) / (factor - 1);
  const total = emi * months;
  return { emi, total, interest: total - principal };
}

export const formatRupees = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    // Older engines throw a RangeError if the maximum is below the currency's
    // default minimum (2 for INR) unless the minimum is lowered too.
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

export function calculateEligibility(salary, existingEmis, age, rate, months) {
  const budget = Math.max(0, salary * 0.4 - existingEmis);
  const meetsBasics = salary >= 30000 && age >= 23 && age <= 60;
  const unitEmi = calculateLoan(1, rate, months).emi;
  return {
    budget,
    eligible: meetsBasics && unitEmi > 0 ? Math.min(1500000, budget / unitEmi) : 0,
    meetsBasics,
  };
}

export const cibilOptions = [
  "I'm not sure",
  "No credit history",
  "Below 500",
  "500–549",
  "550–599",
  "600–649",
  "650–699",
  "700 or above",
];

// Same rules, in the same order, as the zod schema in the Lovable source.
// Returns the cleaned values, or the first problem found.
export function validateEnquiry(form, cities = ["Gurgaon"]) {
  const name = String(form.name || "").trim();
  const email = String(form.email || "").trim().toLowerCase();
  const phone = String(form.phone || "");
  const salary = Number(form.salary);
  const amount = Number(form.amount);
  if (name.length < 2 || name.length > 80 || !/^[\p{L}\p{M} .'-]+$/u.test(name))
    return { error: "Please enter a valid full name." };
  if (email.length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    return { error: "Please enter a valid email address." };
  if (!/^[6-9]\d{9}$/.test(phone))
    return { error: "Please enter a valid 10-digit Indian mobile number." };
  if (!cities.includes(form.city)) return { error: "Please choose your city." };
  if (!Number.isFinite(salary) || salary < 30000)
    return { error: "Minimum net monthly salary is ₹30,000." };
  if (salary > 10000000) return { error: "Please enter your net monthly salary." };
  if (!Number.isFinite(amount) || amount < 10000)
    return { error: "Minimum loan amount is ₹10,000." };
  if (amount > 1500000) return { error: "Loan amount cannot exceed ₹15 lakh." };
  if (!cibilOptions.includes(form.cibil)) return { error: "Please choose your CIBIL score." };
  if (form.consent !== "on") return { error: "Please agree to be contacted to continue." };
  return {
    values: {
      name,
      email,
      phone,
      city: form.city,
      salary,
      amount,
      employment: "Salaried employee",
      cibil: form.cibil,
    },
  };
}
