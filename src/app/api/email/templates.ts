// Simple, light email layout in the same style as the site: a bordered title bar, plain text, thin lines.
// Email clients need inline styles and system fonts, so this can't reuse the site's CSS.

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const withLineBreaks = (value: string) => escapeHtml(value).replace(/\n/g, "<br/>");

const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

const square = (filled: boolean) =>
  `<span style="display:inline-block;width:10px;height:10px;margin-left:6px;border:1px solid #111111;${
    filled ? "background:#111111;" : ""
  }"></span>`;

const layout = (title: string, content: string) => `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#fafafa;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fafafa;">
      <tr>
        <td align="center" style="padding:40px 16px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;font-family:${FONT};color:#111111;">
            <tr>
              <td style="border:1px solid #111111;padding:12px 16px;font-size:18px;font-weight:600;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="font-family:${FONT};font-size:18px;font-weight:600;color:#111111;">${escapeHtml(title)}</td>
                    <td align="right" style="white-space:nowrap;">${square(false)}${square(false)}${square(true)}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 0 8px;font-size:16px;line-height:1.6;color:#111111;">${content}</td>
            </tr>
            <tr>
              <td style="padding-top:24px;border-top:1px solid #dddddd;font-size:14px;color:#777777;">
                Julio Benavente &middot; Software Engineer
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

const row = (label: string, value: string) =>
  `<p style="margin:0 0 16px;"><span style="display:block;font-size:14px;color:#777777;">${label}</span>${value}</p>`;

interface Contact {
  name: string;
  email: string;
  message: string;
}

/** The message that lands in my inbox. Replying to it answers the visitor. */
export const notificationEmail = ({ name, email, message }: Contact) => ({
  subject: `New message from ${name.replace(/[\r\n]+/g, " ")} via your portfolio`,
  text: `New message from your portfolio\n\nName: ${name}\nEmail: ${email}\n\n${message}\n\nReply to this email to answer ${name}.`,
  html: layout(
    "New message",
    [
      row("Name", escapeHtml(name)),
      row("Email", `<a href="mailto:${escapeHtml(email)}" style="color:#111111;">${escapeHtml(email)}</a>`),
      row("Message", withLineBreaks(message)),
      `<p style="margin:24px 0 0;font-size:14px;color:#777777;">Reply to this email to answer ${escapeHtml(name)}.</p>`,
    ].join("")
  ),
});

/** The confirmation the visitor receives. */
export const confirmationEmail = ({ name, message }: Contact) => ({
  subject: "Thank you for your message",
  text: `Hi ${name},\n\nThank you for your message. I have received it and will reply as soon as I can.\n\nYour message:\n${message}\n\nJulio Benavente\nSoftware Engineer`,
  html: layout(
    "Thank you for your message",
    [
      `<p style="margin:0 0 16px;">Hi ${escapeHtml(name)},</p>`,
      `<p style="margin:0 0 24px;">Thank you for your message. I have received it and will reply as soon as I can.</p>`,
      row("Your message", withLineBreaks(message)),
      `<p style="margin:24px 0 0;">Julio Benavente</p>`,
    ].join("")
  ),
});
