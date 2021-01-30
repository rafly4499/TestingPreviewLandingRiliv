import YangAkanAndaDapatkan from "../../components/page/pricing/YangAkanAndaDapatkan";
import { Fragment } from "react";

const YangAkanAndaDapatContent = [
	{
		imgSrc: "icon_1 2x.webp",
		imgAlt: "Psikolog Profesional",
		Description:
			"Bimbingan langsung dari Psikolog profesional yang berpengalaman di bidangnya",
		first: true,
	},
	{
		imgSrc: "icon_2 2x.webp",
		imgAlt: "Kemudahan Akses",
		Description:
			"Kemudahan akses menuju sehat mental, kapanpun dan dimanapun, dengan harga yang sangat terjangkau",
	},
	{
		imgSrc: "icon_3 2x.webp",
		imgAlt: "Psikolog Profesional",
		Description: (
			<Fragment>
				500+ konten meditasi eksklusif yang didesain langsung oleh{" "}
				<em>Certified Mindfulness Practitioner</em>, dengan konten baru setiap
				minggunya
			</Fragment>
		),
	},
];

export default YangAkanAndaDapatContent;
