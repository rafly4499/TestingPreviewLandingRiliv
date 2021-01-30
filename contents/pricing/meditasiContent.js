const { Fragment } = require("react");

const PaketMeditasiContent = [
	{
		Title: "Meditasi 1 tahun",
		Subtitle: "(Jaminan 14 hari uang kembali)",
		iconI: true,
		Price: "Rp. 250.000/tahun",
		Description: {
			type: "red",
			text: (
				<Fragment>
					Lebih hemat Rp. 110.000 (<s>Rp360.000</s>)
				</Fragment>
			),
		},
		first: true,
	},
	{
		Title: "Meditasi 2 bulan",
		Price: "Rp. 60.000/2 bulan",
		Description: {
			text: "Dibayar sekaligus 2 bulan sebesar Rp. 60.000",
		},
	},
];

export default PaketMeditasiContent;
