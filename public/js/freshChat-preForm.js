let preChatTemplate = {
	//Form header color and Submit button color.
	mainbgColor: "#11cbe1", //Form Header Text and Submit button text color.
	maintxColor: "#fff", //Chat Form Title
	heading: "Riliv", //Chat form Welcome Message
	textBanner: `Hai, dear😊 Yuk, chat bersama Customer Happiness Riliv dan kami akan dengan senang hati membantu Anda! Agar kami dapat mengenal Anda lebih jauh, Anda dapat mengisi form di bawah ini terlebih dahulu, ya.`, //Submit Button Label.
	SubmitLabel: "Mulai Chat", //Fields List - Maximum is 5
	//All the values are mandatory and the script will not work if not available.
	fields: {
		field2: {
			//Type for Name - Do not Change
			type: "name",
			//Label for Field Name, can be in any language
			label: "Name",
			//Default - Field ID for Name - Do Not Change
			fieldId: "name",
			//Required "yes" or "no"
			required: "yes",
			//Error text to be displayed
			error: "Please Enter a valid name",
		},
		field3: {
			//Type for Email - Do Not Change
			type: "email",
			//Label for Field Email, can be in any language
			label: "Email",
			//Default - Field ID for Email - Do Not Change
			fieldId: "email",
			//Required "yes" or "no"
			required: "yes",
			//Error text to be displayed
			error: "Please Enter a valid Email",
		},
		field4: {
			//Type for Phone - Do Not Change
			type: "phone",
			//Label for Field Phone, can be in any language
			label: "Phone",
			//Default - Field ID for Phone - Do Not Change
			fieldId: "phone",
			//Required "yes" or "no"
			required: "yes",
			//Error text to be displayed
			error: "Please Enter a valid Phone Number",
		},
	},
};
window.fcSettings = {
	token: "8d37d6b3-475f-479c-8b20-49a873bf94d2",
	host: "https://wchat.freshchat.com",
	config: {
		cssNames: {
			//The below element is mandatory. Please add any custom class or leave the default.
			widget: "custom_fc_frame",
			//The below element is mandatory. Please add any custom class or leave the default.
			expanded: "custom_fc_expanded",
		},
	},
	onInit: function () {
		console.log("widget init");
		fcPreChatform.fcWidgetInit(preChatTemplate);
	},
};
