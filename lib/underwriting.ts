export interface UnderwritingInput {
  purchasePrice: number;
  rentEstimate: number;
  propertyTaxRate: number;
  monthlyHoa: number;
}

export interface UnderwritingResult {
  annualRent: number;
  annualTaxes: number;
  annualHoa: number;
  vacancyReserve: number;
  maintenanceReserve: number;

  noi: number;
  capRate: number;

  grossRentMultiplier: number;
  expenseRatio: number;
  monthlyCashFlow: number;

  investmentRecommendation: string;
  havenIQScore: number;
}
export function calculateUnderwriting(
  input: UnderwritingInput
): UnderwritingResult {

  const annualRent = input.rentEstimate * 12;

  const annualTaxes =
    input.purchasePrice * (input.propertyTaxRate / 100);

  const annualHoa =
    input.monthlyHoa * 12;

  const vacancyReserve = annualRent * 0.05;
  const maintenanceReserve = annualRent * 0.08;

  const noi =
  annualRent -
  annualTaxes -
  annualHoa -
  vacancyReserve -
  maintenanceReserve;
    const capRate =
  input.purchasePrice !== 0
    ? (noi / input.purchasePrice) * 100
    : 0;
   const grossRentMultiplier =
  annualRent !== 0
    ? input.purchasePrice / annualRent
    : 0;
    const expenseRatio =
  annualRent !== 0
    ? ((annualTaxes + annualHoa + vacancyReserve + maintenanceReserve) / annualRent) * 100
    : 0;
    const monthlyCashFlow =
  (annualRent -
    annualTaxes -
    annualHoa -
    vacancyReserve -
    maintenanceReserve) / 12;
   let havenIQScore = 50;

// Cap Rate (0–20 points)
if (capRate >= 8) havenIQScore += 20;
else if (capRate >= 6) havenIQScore += 15;
else if (capRate >= 5) havenIQScore += 10;
else if (capRate >= 4) havenIQScore += 5;

// Monthly Cash Flow (0–15 points)
if (monthlyCashFlow >= 1000) havenIQScore += 15;
else if (monthlyCashFlow >= 500) havenIQScore += 10;
else if (monthlyCashFlow > 0) havenIQScore += 5;

// Expense Ratio (0–10 points)
if (expenseRatio <= 30) havenIQScore += 10;
else if (expenseRatio <= 40) havenIQScore += 7;
else if (expenseRatio <= 50) havenIQScore += 4;

// Gross Rent Multiplier (0–5 points)
if (grossRentMultiplier <= 10) havenIQScore += 5;
else if (grossRentMultiplier <= 15) havenIQScore += 3;

// Keep score between 0 and 100
havenIQScore = Math.min(havenIQScore, 100);

const investmentRecommendation =
  havenIQScore >= 85   
    ? "BUY"
    : havenIQScore >= 70
    ? "HOLD"
    : "PASS";

return {
  annualRent,
  annualTaxes,
  annualHoa,
  vacancyReserve,
  maintenanceReserve,

  noi,
  capRate,
  grossRentMultiplier,
  expenseRatio,
  monthlyCashFlow,
  investmentRecommendation,
  havenIQScore,
};
}