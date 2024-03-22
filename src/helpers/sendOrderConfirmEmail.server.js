// "use server";

import { Resend } from "resend";
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export default async function sendOrderConfirmEmail(
  user,
  chargePlan,
  period,
  getPrice
) {
  console.log("==> function send email");
  if (!user) {
    return null;
  }

  const userEmail = user.email;
  const message = `
  Dear ${userEmail},

  We hope this email finds you well.

  We wanted to inform you that your recent order is currently being processed. Here are the details of your order:

  Charge Plan: ${chargePlan}
  Period: ${period}
  Additionally, here is the pricing information based on your selected plan:

  Total Charge: ${getPrice(chargePlan, period)}
  Please note that our team is diligently working to ensure that your order is processed accurately and efficiently. We will notify you as soon as your order has been successfully completed.

  If you have any questions or concerns regarding your order, please feel free to reach out to us at [Your Contact Information].

  Thank you for choosing us for your Service needs. We appreciate your business and look forward to serving you.

  Best regards,
`;
  console.log(message);
  // resend.emails.send({
  //   from: "onboarding@resend.dev",
  //   to: userEmail,
  //   subject: "Katalog 3d: Xác nhận đơn hàng",
  //   text: message,
  // });
}
