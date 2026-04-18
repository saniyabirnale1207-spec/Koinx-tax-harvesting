function calculateTax(trades) {
  let totalProfit = 0;
  let totalLoss = 0;

  trades.forEach(trade => {
    const { buyPrice, sellPrice, quantity } = trade;

    const result = (sellPrice - buyPrice) * quantity;

    if (result > 0) {
      totalProfit += result;
    } else {
      totalLoss += Math.abs(result);
    }
  });

  const taxableIncome = totalProfit;
  const tax = taxableIncome * 0.30;

  return { totalProfit, totalLoss, taxableIncome, tax };
}

module.exports = { calculateTax };  // 🔥 MUST BE THIS EXACT LINE