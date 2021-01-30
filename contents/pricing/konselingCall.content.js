import { Fragment } from "react";

const KonselingCallContent = [
	{
		Title: "PERKENALAN",
		Price: "149.000",
		PriceTotal: "149.000",
		ExpiredIn: "1 minggu",
		Url:"43",
		List: [
			{
				on: true,
				text: "1x Sesi Konseling Telepon",
			},
			{
				on: true,
				text: "1 sesi = 50 menit",
			},
			{
				on: true,
				text: (
					<Fragment>
						Lebih terjangkau Rp. 350.000 dari konseling <em>offline</em>
					</Fragment>
				),
			},
		],
		first: true,
	},
	{
		Title: "LEGA",
		Price: "137.500",
		PriceTotal: "550.000",
		ExpiredIn: "1 bulan",
		Url:"44",
		List: [
			{
				on: true,
				text: "4x Sesi Konseling Telepon",
			},
			{
				on: true,
				text: "1 sesi = 50 menit",
			},
			{
				on: true,
				text: (
					<Fragment>
						Lebih terjangkau Rp. 1.450.000 dari konseling <em>offline</em>
					</Fragment>
				),
			},
		],
	},
];

export default KonselingCallContent;
