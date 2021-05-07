const nodemailer = require('nodemailer');
const fetch = require('node-fetch');
const cron = require('node-cron');
const outdent = require('outdent');

const date = new Date();
const currentDate = `${date.getDate()}-${
	date.getMonth() + 1
}-${date.getFullYear()}`;
console.log(currentDate);

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'your gmail',
		pass: 'your gmail password',
	},
});

fetch(
	`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=411028&date=${currentDate}`
)
	.then((res) => res.json())
	.then((data) => {
		let sendText = '';
		data.centers.map((center) => {
			sendText += `NAME: ${center.name} \n ADDRESS: ${center.address} \n FROM: ${center.from} \n TO: ${center.to} \n FEE TYPE: ${center.fee_type} \n`;
			center.sessions.map((session) => {
				sendText += `DATE: ${session.date} AVAILABE CAPACITY: ${session.available_capacity} AGE: ${session.min_age_limit} VACCINE: ${session.vaccine} \n SLOTS AVAILABLE \n`;
				session.slots.map((slot) => {
					sendText += `${slot} \n`;
				});
			});
			sendText += '\n';
		});

		const mailOptions = {
			form: 'your email',
			to: 'to whose address you want to send this mail to',
			subject: 'Node js',
			text: sendText.toString(),
		};

		setInterval(() => {
			transporter.sendMail(mailOptions, (error, info) => {
				if (error) console.log(error);
				else console.log('Email sent' + info.response);
			});
		}, 600000);
	});
