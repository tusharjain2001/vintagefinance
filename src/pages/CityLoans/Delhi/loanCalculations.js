export const MAX_LOAN = 1500000;
export const cities = ["Delhi", "Noida", "Gurugram", "Ghaziabad", "Faridabad"];
export const inr = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    // Older engines throw a RangeError if the maximum is below the currency's
    // default minimum (2 for INR) unless the minimum is lowered too.
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

export function calculateLoan(principal, annualRate, months) {
  if (
    !Number.isFinite(principal) ||
    !Number.isFinite(annualRate) ||
    !Number.isFinite(months) ||
    principal < 0 ||
    annualRate < 0 ||
    months < 1
  )
    return { emi: 0, total: 0, interest: 0 };
  const r = annualRate / 1200;
  const emi =
    r === 0 ? principal / months : (principal * r) / (1 - Math.pow(1 + r, -months));
  const total = emi * months;
  return { emi, total, interest: Math.max(0, total - principal) };
}

export function repaymentSchedule(principal, annualRate, months) {
  const { emi } = calculateLoan(principal, annualRate, months);
  let balance = principal;
  return Array.from({ length: months }, (_, index) => {
    const interest = (balance * annualRate) / 1200;
    const capital = Math.min(balance, emi - interest);
    balance = Math.max(0, balance - capital);
    return {
      month: index + 1,
      principal: capital,
      interest,
      emi: capital + interest,
      balance,
    };
  });
}

export function estimateEligibility(input) {
  const reasons = [];
  if (input.salary < 30000)
    reasons.push("The published minimum net monthly salary is ₹30,000.");
  if (input.age <= 23 || input.age >= 60)
    reasons.push("The published age requirement is above 23 and below 60.");
  if (input.employmentMonths < 24)
    reasons.push("At least 2 years of total employment is required.");
  if (input.currentJobMonths < 6)
    reasons.push("At least 6 months in the current organisation is required.");
  if (!cities.includes(input.city))
    reasons.push("This enquiry is for residents of Delhi NCR.");
  const affordableEmi = Math.max(0, input.salary * 0.4 - input.existingEmi);
  if (affordableEmi <= 0)
    reasons.push("Existing EMIs use the full illustrative repayment budget.");
  const unit = calculateLoan(100000, input.rate, input.months).emi;
  const loan =
    reasons.length || unit <= 0
      ? 0
      : Math.min(MAX_LOAN, Math.floor(((affordableEmi / unit) * 100000) / 1000) * 1000);
  return { loan, affordableEmi, reasons };
}

export function enquiryErrors(name, mobile, salary, amount, consent) {
  const errors = {};
  if (name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!/^[6-9]\d{9}$/.test(mobile))
    errors.mobile = "Enter a valid 10-digit Indian mobile number.";
  if (!Number.isFinite(salary) || salary <= 0)
    errors.salary = "Enter your monthly take-home salary.";
  if (!Number.isFinite(amount) || amount < 1 || amount > MAX_LOAN)
    errors.amount = "Enter a loan amount up to ₹15,00,000.";
  if (!consent) errors.consent = "Your consent is needed to continue.";
  return errors;
}

export const applicantTypes = ["Salaried employee", "Business owner / self-employed"];

export function applyErrors(name, email, mobile, applicantType, consent) {
  const errors = {};
  const cleanName = name.trim();
  const cleanEmail = email.trim();
  if (cleanName.length < 2 || cleanName.length > 80)
    errors.name = "Enter your full name (2–80 characters).";
  if (cleanEmail.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(cleanEmail))
    errors.email = "Enter a valid email address.";
  if (!/^[6-9]\d{9}$/.test(mobile))
    errors.mobile = "Enter a valid 10-digit Indian mobile number.";
  if (!applicantTypes.includes(applicantType))
    errors.applicantType = "Select whether you are salaried or in business.";
  if (!consent) errors.consent = "Your consent is needed to continue.";
  return errors;
}
