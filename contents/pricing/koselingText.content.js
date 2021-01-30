import { Fragment } from "react";

const KonselingTextContent = [
	{
		Title: "PERKENALAN",
		Subtitle: "For First Timer",
		SubtitleBg: "#11cbe1",
		Price: "100.000",
		PriceTotal: "100.000",
		ExpiredIn: "1 minggu",
		Url:"1",
		List: [
			{
				on: true,
				text: "1x Sesi Konseling Teks",
			},
			{
				on: true,
				text: "1 sesi = 60 menit",
			},
			{
				on: true,
				text: (
					<Fragment>
						Lebih terjangkau Rp. 400.000 dari konseling <em>offline</em>
					</Fragment>
				),
			},
			{
				on: false,
				text: "Garansi Uang Kembali",
			},
		],
		first: true,
	},
	{
		Title: "LEGA",
		Subtitle: "Best Value",
		SubtitleBg: "#73cb6c",
		Price: "87.500",
		PriceTotal: "350.000",
		ExpiredIn: "1 bulan",
		Url:"3",
		List: [
			{
				on: true,
				text: "4x Sesi Konseling Teks",
			},
			{
				on: true,
				text: "1 sesi = 60 menit",
			},
			{
				on: true,
				text: (
					<Fragment>
						Lebih terjangkau Rp. 1.650.000 dari konseling <em>offline</em>
					</Fragment>
				),
			},
			{
				on: false,
				text: "Garansi Uang Kembali",
			},
		],
	},
	{
		Title: "NYAMAN",
		Price: "80.000",
		PriceTotal: "640.000",
		ExpiredIn: "2 bulan",
		Url:"2",
		List: [
			{
				on: true,
				text: "8x Sesi Konseling Teks",
			},
			{
				on: true,
				text: "1 sesi = 60 menit",
			},
			{
				on: true,
				text: (
					<Fragment>
						Lebih terjangkau Rp. 3.360.000 dari konseling <em>offline</em>
					</Fragment>
				),
			},
			{
				on: true,
				iconI: true,
				text: "Garansi Uang Kembali",
			},
		],
	},
	{
		Title: "BAHAGIA",
		Price: "77.000",
		PriceTotal: "924.000",
		ExpiredIn: "4 bulan",
		Url:"4",
		List: [
			{
				on: true,
				text: "12x Sesi Konseling Teks",
			},
			{
				on: true,
				text: "1 sesi = 60 menit",
			},
			{
				on: true,
				text: (
					<Fragment>
						Lebih terjangkau Rp. 5.076.000 dari konseling <em>offline</em>
					</Fragment>
				),
			},
			{
				on: true,
				iconI: true,
				text: "Garansi Uang Kembali",
			},
		],
	},
];

export default KonselingTextContent;
