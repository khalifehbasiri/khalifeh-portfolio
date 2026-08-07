type ContactRequest = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function jsonResponse(message: string, status: number) {
  return Response.json({ message }, { status });
}

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  let body: ContactRequest;

  try {
    body = (await request.json()) as ContactRequest;
  } catch {
    return jsonResponse("Invalid form submission.", 400);
  }

  const name = clean(body.name);
  const email = clean(body.email);
  const message = clean(body.message);
  const company = clean(body.company);

  if (company) {
    return jsonResponse("Message sent. I will get back to you soon.", 200);
  }

  if (!name || !email || !message) {
    return jsonResponse("Please fill out every field.", 400);
  }

  if (!emailPattern.test(email)) {
    return jsonResponse("Please enter a valid email address.", 400);
  }

  if (message.length > 5000) {
    return jsonResponse("Please keep the message under 5000 characters.", 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "khalifa7k@gmail.com";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

  if (!apiKey) {
    return jsonResponse(
      "Message form is ready, but email sending is not configured yet.",
      503,
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      html: `
        <h2>New portfolio message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      `,
    }),
  });

  if (!response.ok) {
    return jsonResponse("Unable to send message right now.", 502);
  }

  return jsonResponse("Message sent. I will get back to you soon.", 200);
}
