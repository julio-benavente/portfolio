import transporter from "./transporter";
import { SendMailOptions } from "nodemailer";

export async function POST(request: Request) {
  try {
    const res = await request.json();

    var messageToSender: SendMailOptions = {
      from: {
        address: "hello@juliobenavente.com",
        name: "Julio Benavente | Frontend developer",
      },
      to: res?.email,
      subject: "Thank you, I got your message 🙂",
      text: `Thank you ${res?.name} for contacting me. I'll get in touch with you as fast as I can`,
      html: `
        <div>
            Thank you ${res?.name} for contacting me. 🙌🏾
            <br/>I'll get in touch with you as fast as I can. 😉
        </div>
        `,
    };

    var messageToMyself = {
      from: "hello@juliobenavente.com",
      to: "julio.benavente.02@gmail.com",
      subject: "Contacto desde PORTAFOLIO | juliobenavente.com",
      text: `
        Este es un mensaje de ${res?.email}.
        Su nombre es ${res?.name}.
        Su mensaje decía: ${res?.message}`,
      html: `
        <div>
            <p><b>Nombre:</b> ${res?.name}</p>
            <p><b>Email:</b> ${res?.email}</p>
            <p><b>Mensaje:</b> ${res?.message}</p>
        </div>
      `,
    };

    const emailToSender = transporter.sendMail(messageToSender);
    const emailToMyself = transporter.sendMail(messageToMyself);

    return new Response("Message sent", {
      status: 200,
    });
  } catch (err) {
    if (err instanceof Error) {
      // ✅ TypeScript knows err is Error
      console.log(err.message);
    } else {
      console.log("Unexpected error", err);
    }
  }
}
