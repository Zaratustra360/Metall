import sendEmail from "./../../lib/mail";

export default async function handler(req, res) {
  const message = {
    to: "metallcrovlya.spb@yandex.ru",
    subject: `Письмо с сайта XXX от ${req.body.name}`,
    text: `
			Имя: ${req.body.name}, 
        	Телефон: ${req.body.tel},
        	Ширина: ${req.body.width},
        	Высота: ${req.body.height}
        `,
  };
  sendEmail(message);
  console.log(message);
  res.send(`Спасибо за заявку, ${req.body.name}!`);
}
