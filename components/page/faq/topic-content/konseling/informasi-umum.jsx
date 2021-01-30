import { Fragment } from "react";

import AccordionInfo from "../../accordion-info/accordion-info";
import { TopicSubContainer } from "../../topic-container/topic-container";

const InformasiUmum = (props) => {
	const { title } = props;
	return (
		<Fragment>
			<TopicSubContainer title={title}>
				<AccordionInfo
					accordionId="apaRilivKonselingTatapMuka"
					title="Apakah Riliv melayani konseling tatap muka?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Untuk saat ini konseling dalam Riliv hanya bersifat online saja.
					</h5>
				</AccordionInfo>
				<AccordionInfo
					accordionId="dapatGantikanKonselingTatapMuka"
					title="Dapatkah Riliv menggantikan konseling tatap muka?"
					dataParent={title.split(" ").join("")}
				>
					<h5>
						Ada beberapa masalah yang membutuhkan konseling tatap muka. Namun
						Anda dapat menggunakan Riliv sebagai konsultasi awal sebelum
						memutuskan untuk bertatap muka ke psikolog. Bila Anda melakukan
						perilaku self-harm, berkeinginan bunuh diri, serta berada dalam
						kondisi yang membahayakan fisik dan mental Anda, segeralah menemui
						psikolog terdekat.
					</h5>
				</AccordionInfo>
				<AccordionInfo
					accordionId="apaKonselingOnlineEfektif"
					title="Apakah konseling online itu efektif?"
					dataParent={title.split(" ").join("")}
				>
					<h5 className="mb-rlv-B">
						Berbagai penelitian menunjukkan bahwa konseling online memiliki
						efektivitas yang sama dengan konseling tatap muka. Berikut beberapa
						referensinya:
					</h5>
					<h5 className="mb-rlv-B">
						<a
							href="http://www.tandfonline.com/doi/abs/10.1080/15228830802094429#.VI8vaCvF_hs"
							target="_blank"
						>
							Barak, Azy, et al. (2008). “A comprehensive review and a
							meta-analysis of the effectiveness of internet-based
							psychotherapeutic interventions.” Journal of Technology in Human
							Services, 26.2-4: 109-160
						</a>
					</h5>
					<h5 className="mb-0">
						<a href="http://www.jmir.org/2004/4/e40/" target="_blank">
							Wantland, D. J., Portillo, C. J., Holzemer, W. L., Slaughter, R.,
							& McGhee, E. M. (2004). “The effectiveness of Web-based vs.
							non-Web-based interventions: a meta-analysis of behavioral change
							outcomes.” Journal of Medical Internet Research, 6(4).
						</a>
					</h5>
				</AccordionInfo>
			</TopicSubContainer>
		</Fragment>
	);
};

export default InformasiUmum;
