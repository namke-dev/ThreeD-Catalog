"use server";
export async function sendOrderConfirmEmail(
  user,
  chargePlan,
  period,
  getPrice
) {
  if (!user) {
    return null;
  }

  const userEmail = user.email;

  console.log("==> " + userEmail);
  console.log("==> " + chargePlan);
  console.log("==> " + period);
  console.log("==> " + getPrice(chargePlan, period));
}
