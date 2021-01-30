const { Fragment } = require("react");

const SyaratKetentuanGaransiContent = [
	{
		first: true,
		Title: (
			<Fragment>
				PAKET NYAMAN &<br />
				PAKET BAHAGIA
			</Fragment>
		),
		Subtitle: "Konseling Teks",
		List: [
			{
				text: "Psikolog tidak menjawab selama 1x24 jam pada jadwal konseling",
				visible: true,
			},
			{
				text:
					"Terdapat kendala saat mengakses layanan disebabkan oleh faktor internal aplikasi",
				visible: true,
			},
		],
		Url:
			"https://api.whatsapp.com/send?phone=6288235832600&text=Hai%2c%20saya%20ingin%20mengajukan%20klaim%20terkait%20jaminan%20uang%20kembali%20pada%20paket%20konseling%20saya%20%F0%9F%98%8A&source=&data=&app_absent=",
	},
	{
		Title: (
			<Fragment>
				PAKET MEDITASI
				<br />1 TAHUN
			</Fragment>
		),
		List: [
			{
				text: "Merasa tidak puas selama 14 hari pertama setelah pembelian",
				visible: true,
			},
			{
				text:
					"Terdapat kendala saat mengakses layanan disebabkan oleh faktor internal aplikasi",
				visible: false,
			},
		],
		Url:
			"https://api.whatsapp.com/send?phone=6288235832600&text=Hai%2c%20saya%20ingin%20mengajukan%20klaim%20terkait%20jaminan%2014%20hari%20uang%20kembali%20%f0%9f%98%8a&source=&data=&app_absent=",
	},
];

export default SyaratKetentuanGaransiContent;
