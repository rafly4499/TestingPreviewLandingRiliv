import BodyContainer from "../../components/body-container/body-container.component";
import BootstrapScript from "../../components/bootstrapScript/bootstrapScript";
import RilivFooter from "../../components/footer/footer.component";
import HeaderGTagManagerGAnalytics from "../../components/header/header-analytics-tagmanager";
import HeaderFreshChat from "../../components/header/header-freshchat";
import RilivHeader from "../../components/header/header.component";
import RilivNavbar from "../../components/navbar/riliv_navbar.component";
import CardKenapaSection from "../../components/page/homepage/card-kenapa-section/card-kenapa-section.component";
import HeaderRilivForCompany from "../../components/page/riliv-for-company/header-page/header-page.component";
import SimpleSnackbar from "../../components/simple-snackbar/simple-snackbar.component";
import { ResponsiveText_H1 } from "../../components/responsive-text/responsive-text.component";
import ResponsiveImage from "../../components/responsive-image/responsive-image.component";
import CentangHijauList from "../../components/centang-hijau-list";
import AdsMeditasiPriceBox from "../../components/page/ads-meditasi/price-box";
import MediaImages from "../../components/media-images/media-images.component";
import AdsMeditasiHeaderSetup from "../../components/page/ads-meditasi/header-setup";
import AdsMeditasiHeaderList from "../../components/page/ads-meditasi/header-list";
import { AdsMeditasiButton } from "../../components/page/ads-meditasi/button";

const AdsMeditasiPage = () => {
	return (
		<div>
			<RilivHeader
				customTitle="Riliv - Aplikasi Meditasi, Cerita Tidur, Konseling Online"
				customDescription="Riliv menyediakan layanan meditasi, cerita tidur, dan konseling online dengan psikolog untuk atasi depresi dan kecemasan. Praktis, mudah, terjangkau."
			>
				<HeaderRilivForCompany
					customTitle="Riliv - Aplikasi Meditasi, Cerita Tidur, Konseling Online"
					customDescription="Riliv menyediakan layanan meditasi, cerita tidur, dan konseling online dengan psikolog untuk atasi depresi dan kecemasan. Praktis, mudah, terjangkau."
				/>
				<HeaderGTagManagerGAnalytics />
				<HeaderFreshChat />
			</RilivHeader>
			<RilivNavbar hideMenu currentPage="Promo" center />
			<SimpleSnackbar identifier="comingSoon">
				<p className="p-0 m-0">Coming Soon</p>
			</SimpleSnackbar>

			{/* HEADER SECTION */}
			<div
				className="container-fluid px-0"
				style={{ position: "relative", overflow: "hidden" }}
			>
				<AdsMeditasiHeaderSetup />
				<BodyContainer>
					<div className="d-lg-flex d-block py-rlv-3-mobile py-lg-rlv-3-desktop align-items-center">
						<div
							className="mr-lg-rlv-1-mobile mr-0 mb-rlv-3-mobile mb-lg-0 text-center text-lg-left d-none d-lg-block"
							style={{ maxWidth: "409px" }}
						>
							<h1 className="text-white mb-rlv-1-mobile mb-lg-rlv-1-desktop">
								Pikiranmu Terlalu Berisik untuk Hidup yang Tenang
							</h1>
						</div>
						<div className="mr-lg-rlv-1-mobile mr-0 mb-rlv-3-mobile mb-lg-0 text-center text-lg-left d-block d-lg-none">
							<h1 className="text-white mb-rlv-1-mobile mb-lg-rlv-1-desktop">
								Pikiranmu Terlalu Berisik untuk Hidup yang Tenang
							</h1>
						</div>
						<div
							className="bg-white py-rlv-1-mobile py-lg-rlv-1-desktop px-rlv-C"
							style={{ borderRadius: "10px" }}
						>
							<div className="d-flex justify-content-center d-lg-block">
								<div style={{ maxWidth: "500px" }}>
									<h5 className="mb-rlv-C text-lg-left text-center">
										Apakah semua yang telah kamu lakukan terasa sia-sia? Mungkin
										kamu merasa hubungan dengan orang tua, pasangan, karir,
										pendidikan tidak berjalan sebagaimana mestinya. Segalanya
										tak selalu berjalan sesuai rencana. Perasaan marah, sedih,
										menyesal, takut, cemas, tertekan bercampur menjadi satu.
									</h5>
									<h5 className="mb-rlv-C text-lg-left text-center font-weight-semibold">
										Semua hanya berputar di kepala dan kamu tidak tau harus
										bagaimana?
									</h5>
								</div>
							</div>
						</div>
					</div>
				</BodyContainer>
			</div>

			{/* KAMU BISA BANTU */}
			<div className="bg-gray--1">
				<BodyContainer>
					<div className="py-rlv-3-mobile py-lg-rlv-3-desktop">
						<h1 className="text-center mb-rlv-B font-weight-semibold">
							KAMI BISA BANTU “HENING”KAN PIKIRANMU{" "}
						</h1>
						<h5 className="mb-rlv-B text-center">
							Kami telah membantu lebih dari 300.000 user dengan berbagai macam
							masalah kesehatan mental. Menggunakan teknik sederhana yang dapat
							kamu lakukan di mana dan kapan saja.
						</h5>
						<h4 className="text-center mb-rlv-C">
							“Kami dengan senang hati akan membantumu melewati hari-hari yang
							berat. Saat tak ada yang bisa kamu andalkan, kami selalu ada dalam
							genggaman.”
						</h4>
						<div className="text-center">
							<AdsMeditasiButton
								link="/promo-meditasi-autorelax"
								textLink="Dapatkan Solusinya!"
							/>
						</div>
					</div>
				</BodyContainer>
			</div>

			{/* KAMI MENGERTI SECTION */}
			<div className="bg-riliv-level-5 py-rlv-3-mobile py-lg-rlv-3-desktop">
				<BodyContainer>
					<h3 className="mb-rlv-C font-weight-semibold">
						Kami mengerti bahwa banyak hal di luar sana yang mengusik pikiranmu.
					</h3>
					<ul className="h5" type="-">
						<li className="my-rlv-B">
							Pandangan orang lain yang selalu mengintimidasi
						</li>
						<li className="my-rlv-B">
							Obsesi orang tua terhadap pekerjaan kita
						</li>
						<li className="my-rlv-B">
							Tuntutan standar sosial yang tak masuk akal{" "}
						</li>
						<li className="my-rlv-B">Ketidakpastian akan masa depan</li>
						<li className="my-rlv-B">
							Keretakan hubungan dengan orang tersayang
						</li>
						<li className="my-rlv-B">
							Kesalahan masa lalu yang belum termaafkan
						</li>
						<li className="my-rlv-B">Emosi yang sering kali tak terkendali</li>
					</ul>
				</BodyContainer>
			</div>

			{/* SEMUA ITU MEMBUATMU MERASA */}
			<div className="bg-gray--1 py-rlv-3-mobile py-lg-rlv-3-desktop">
				<BodyContainer>
					<h3 className="mb-rlv-C font-weight-semibold">
						Semua itu membuatmu merasa
					</h3>
					<ul className="h5" type="-">
						<li className="my-rlv-B">
							Khawatir tidak diterima oleh pertemanan
						</li>
						<li className="my-rlv-B">
							Takut mengecewakan ekspektasi orang lain
						</li>
						<li className="my-rlv-B">
							Susah tidur karena banyak hal yang harus dipikirkan
						</li>
						<li className="my-rlv-B">
							Sering terbangun karena rasa bersalah atas apa yang telah kamu
							lakukan atau katakan
						</li>
						<li className="my-rlv-B">
							Tidak fokus dalam menyelesaikan pekerjaan
						</li>
						<li className="my-rlv-B">
							Kehilangan motivasi untuk melakukan semua hal
						</li>
					</ul>
					<h4 className="mb-rlv-B font-weight-semibold text-left">
						Hal tersebut sangat wajar. Kami paham. Namun apakah kamu akan terus
						menerus menjalani hidup yang seperti ini?
					</h4>
				</BodyContainer>
			</div>

			{/* LAYAK MENDAPATKAN KEBAHAGIAAN */}
			<div className="py-rlv-4-mobile py-lg-rlv-4-desktop">
				<BodyContainer>
					{/* Smile Photo */}
					<div className="d-flex justify-content-center">
						<div
							className="d-lg-flex d-block justify-content-center"
							style={{ maxWidth: "640px" }}
						>
							<div className="d-flex justify-content-center">
								<div className="py-rlv-A px-rlv-A px-lg-rlv-B">
									<img src="/img-ads/smile_1.png" style={{ width: "100%" }} />
								</div>
								<div className="py-rlv-A px-rlv-A px-lg-rlv-B">
									<img src="/img-ads/smile_2.png" style={{ width: "100%" }} />
								</div>
							</div>
							<div className="d-flex justify-content-center">
								<div className="py-rlv-A px-rlv-A px-lg-rlv-B">
									<img src="/img-ads/smile_3.png" style={{ width: "100%" }} />
								</div>
								<div className="py-rlv-A px-rlv-A px-lg-rlv-B">
									<img src="/img-ads/smile_4.jpg" style={{ width: "100%" }} />
								</div>
							</div>
						</div>
					</div>
					{/* Smilie Photo End */}
					<h2 className="my-rlv-1-mobile my-lg-rlv-1-desktop text-center">
						Padahal kamu bisa lebih bahagia. Dadamu bisa terasa lega. Tak ada
						lagi yang mengganggu waktu tidurmu. Ketenangan dalam hidup akan
						menjadi milikmu.
					</h2>
					<h1 className="my-rlv-1-mobile my-lg-rlv-1-desktop font-weight-semibold text-center">
						Jika kamu mencari semua itu? Kamu berada di tempat yang tepat
					</h1>

					<div className="text-center">
						<AdsMeditasiButton
							link="/promo-meditasi-autorelax"
							dynamic
							textLink="YA, SAYA MAU COBA SEKARANG"
						/>
					</div>

					<div className="mt-rlv-2-mobile mt-lg-rlv-2-desktop">
						<img
							src="/img-ads/tempat_tepat.png"
							width="100%"
							height="100%"
							style={{ borderRadius: "8px" }}
						/>
					</div>
					<h1 className="my-rlv-1-mobile my-lg-rlv-1-desktop text-center font-weight-semibold">
						Riliv akan membantumu!
					</h1>
					<ul className="h4">
						<li className="mb-rlv-B">
							Sudah 5 tahun kami berfokus pada kesehatan mental dan telah
							membantu RATUSAN RIBU masalah pribadi
						</li>
						<li className="mb-rlv-B">
							Tim Riliv setiap minggunya melakukan riset tentang user untuk
							mendapatkan cara paling efektif dalam memberi pelayanan terbaik
						</li>
						<li className="mb-rlv-B">
							Dipandu oleh pakar meditasi yang sudah memiliki sertifikat
							mengajar MBSR (Mindfullness Based Stress Reduction)
						</li>
						<li className="mb-rlv-B">
							Menggunakan metode penghilang stres yang sudah teruji klinis tanpa
							perlu diragukan lagi
						</li>
					</ul>
					<h3 className="text-center py-rlv-C font-weight-semibold">
						Kami menghadirkan kumpulan layanan terapi online untuk kesehatan
						mental yang lebih baik berupa teks online dan meditasi online
					</h3>
				</BodyContainer>
			</div>

			{/* KENAPA RILIV SECTION */}
			<div
				className="bg-riliv-level-1 bg-header"
				style={{ backgroundImage: 'url("/img-home/background-kenapa.png")' }}
			>
				<BodyContainer key="body6">
					<div className="py-rlv-3-mobile py-lg-rlv-3-desktop row align-items-center">
						<div className="col-12 col-lg-6">
							<h2 className="text-white mb-lg-rlv-1-mobile mb-rlv-1-mobile text-center text-lg-left font-weight-semibold">
								Kualitas kami dibuktikan dengan angka bukan sekadar kata{" "}
							</h2>
						</div>
						<div className="col-12 col-lg-6">
							<div className="row px-rlv-B">
								<CardKenapaSection
									imgSrc="/img-home/group_12344.png"
									imgAlt="user sehat mental"
									imgWidth="65px"
									textTitle="+200.000"
									textDescription="User lebih sehat mental dengan layanan di Aplikasi Riliv"
									customCol="col-12 col-lg-6"
								/>
								<CardKenapaSection
									imgSrc="/img-home/group_12259.png"
									imgAlt="Sehat Mental Meditasi Riliv"
									imgWidth="65px"
									textTitle="94%"
									textDescription="Pengguna lebih sehat mental dengan meditasi Riliv"
									customCol="col-12 col-lg-6"
								/>
							</div>
						</div>
					</div>
				</BodyContainer>
			</div>

			{/* COBA HENING SEKARANG */}
			<div
				className="container-fluid px-0 bg-header py-rlv-5-mobile py-lg-rlv-5-desktop"
				style={{
					backgroundImage: 'url("/img-hening/group_7.png")',
					backgroundPosition: "center",
				}}
			>
				<BodyContainer>
					<h1 className="mb-rlv-1-mobile mb-lg-rlv-1-desktop font-weight-semibold text-center">
						Bagaimana kami membantumu?
					</h1>
					<div className="row">
						<div className="col-12 col-lg-6 order-2 order-lg-1">
							<img
								className="d-none d-lg-block text-center mx-auto"
								src="/img-hening/group_12564.png"
								style={{ width: "80%" }}
							/>
							<img
								className="d-block d-lg-none text-center mx-auto"
								src="/img-hening/group_12564.png"
								style={{ width: "80%" }}
							/>
						</div>
						<div className="col-12 col-lg-6 order-1 order-lg-2 mb-rlv-1-mobile mb-lg-0">
							<div className="d-flex h-100">
								<div className="d-block my-lg-auto">
									<h2 className="font-weight-bold text-gray-5 text-center text-lg-left mb-rlv-1-mobile mb-lg-rlv-1-desktop mt-0">
										Coba Hening Sekarang
									</h2>
									<p className="h5 text-gray-5 text-center text-lg-left mb-rlv-1-mobile mb-lg-rlv-1-desktop">
										Rasakan ketenangan dalam hidup Anda hanya dengan
										#HeningSejenak selama 10 menit.
									</p>
								</div>
							</div>
						</div>
					</div>
				</BodyContainer>
			</div>

			{/* MEMAHAMI MENERIMA MENGHADAPI SECTION */}
			<div className="py-rlv-3-mobile py-lg-rlv-3-desktop">
				<BodyContainer>
					<h1 className="mb-rlv-1-mobile mb-lg-rlv-1-desktop font-weight-semibold text-center">
						Memahami. Menerima. Menghadapi.
					</h1>
					<ol className="h4">
						<li className="mb-rlv-B">
							Kami membantumu memahami tentang diri sendiri, tentang emosi dan
							segala hal yang sedang terjadi saat ini
						</li>
						<li className="mb-rlv-B">
							Kami membantumu menerima bahwa apa yang kamu rasakan adalah
							sesuatu yang wajar, sekalipun itu perasaan yang menyakitkan
						</li>
						<li className="mb-rlv-B">
							Kami membantumu menghadapi sumber-sumber masalah yang sebenarnya
							tidak dapat kamu kendalikan dengan lebih kuat
						</li>
					</ol>
					<CentangHijauList>
						<span className="pb-rlv-A d-block h4">
							Melatih pikiranmu untuk dapat memfokuskan diri dan menyadari apa
							yang sedang terjadi sehingga dapat mengendalikan emosi lebih baik
						</span>
					</CentangHijauList>
					<CentangHijauList>
						<span className="pb-rlv-A d-block h4">
							Teknik ini telah teruji secara klinis melalui berbagai penelitian
							internasional{" "}
						</span>
					</CentangHijauList>
					<CentangHijauList>
						<span className="pb-rlv-A d-block h4">
							Program sangat tertata sehingga hasil yang didapatkan bisa
							maksimal{" "}
						</span>
					</CentangHijauList>
					<CentangHijauList>
						<span className="pb-rlv-A d-block h4">
							Menggunakan cara-cara yang lebih sederhana dan mudah dipahami{" "}
						</span>
					</CentangHijauList>
				</BodyContainer>
			</div>

			{/* KAMI TIDAK MENGHILANGKAN MASALAHMU SECTION */}
			<div className="py-rlv-4-mobile py-lg-rlv-4-desktop bg-gray--1">
				<BodyContainer>
					<h1 className="text-center font-weight-semibold mb-rlv-1-mobile mb-lg-rlv-1-desktop">
						Kami Tidak Menghilangkan Masalahmu.
						<br />
						Kami Membantumu Menghadapinya
					</h1>
					<p className="h4 text-center">
						Setiap masalah hadir bukan untuk dihilangkan, namun untuk dihadapi.
						Bersama kami, kamu akan lebih siap dan kuat dalam melaluinya. Kami
						membantumu sadar bahwa kondisi dan masalah yang sedang kamu hadapi
						adalah hal wajar dan tidak perlu kamu khawatirkan.
						<br /> <br />
						Dengan menggunakan teknik yang tepat dan konsistensi dalam berlatih,
						maka kamu akan menjadi pribadi yang lebih tenang dan bahagia.
						<br /> <br />
					</p>
					<div className="text-center">
						<h2 className="font-weight-semibold mb-rlv-C">
							Duduk, Dengar, Damai
						</h2>
						<div className="d-flex justify-content-center">
							<p className="h5 mb-rlv-C" style={{ maxWidth: "750px" }}>
								HANYA 3 teknik sederhana ini yang kami ajarkan di aplikasi kami
								dan telah digunakan lebih dari 300.000 orang se Indonesia untuk
								lebih tenang, kalem, dan hilangkan overthinking.
								<br />
								Tanpa efek samping, tanpa ribet, tanpa effort.
							</p>
						</div>
						<AdsMeditasiButton
							dynamic
							link="/promo-meditasi-autorelax"
							textLink="YA, SAYA MAU COBA SEKARANG"
						/>
					</div>
				</BodyContainer>
			</div>

			<div className="py-rlv-4-mobile py-lg-rlv-4-desktop">
				<BodyContainer>
					<div
						className="d-flex justify-content-center bg-riliv-level-5 mb-rlv-3-mobile mb-lg-rlv-3-desktop"
						style={{ borderRadius: "8px" }}
					>
						<img
							src="/img-ads/meditasi.png"
							style={{ width: "70%", height: "100%" }}
						/>
					</div>
					<p className="h2 font-weight-semibold text-center mb-rlv-1-mobile mb-lg-rlv-1-desktop">
						Kami menggunakan teknik yang dapat melatih perhatian dan kesadaran
						dengan kondisi fisik yang rileks. Hal ini berguna untuk mengurangi
						pikiran negatif dan berfokus pada kondisi saat ini. Sehingga kamu
						tidak perlu mengkhawatirkan masa depan dan dapat memaafkan masa
						lalu.
					</p>
					<div id="lihatSolusi" className="my-rlv-4-mobile my-lg-rlv-4-desktop">
						<div className="row">
							<div className="col-12 col-lg-6">
								<p className="h4 font-weight-semibold mb-rlv-C">
									Manfaat Meditasi di Riliv:
								</p>
								<CentangHijauList additionalClass="mb-rlv-B">
									Menjadi lebih tenang
								</CentangHijauList>
								<CentangHijauList additionalClass="mb-rlv-B">
									TERBUKTI! Setelah 10 hari penggunaan, 94% pengguna Hening
									merasa lebih damai dan tingkat stres berkurang sebesar 45,6%
								</CentangHijauList>
								<CentangHijauList additionalClass="mb-rlv-B">
									Tidak perlu lama, cukup 10 menit dalam sehari
								</CentangHijauList>
								<CentangHijauList additionalClass="mb-rlv-B">
									Meningkatkan kepuasan hidup
								</CentangHijauList>
								<CentangHijauList additionalClass="mb-rlv-B">
									Membantu meningkatkan kreativitas serta fokus
								</CentangHijauList>
								<CentangHijauList additionalClass="mb-rlv-B">
									Terdapat ratusan konten meditasi untuk setiap permasalahan
									seperti; kecemasan, overthinking, susah tidur, kesedihan, dan
									lain-lain{" "}
								</CentangHijauList>
							</div>
							<div className="col-12 col-lg-6">
								<div className="text-center">
									<img
										src="/img-ads/meditasidea.png"
										style={{ width: "70%", borderRadius: "12px" }}
									/>
								</div>
							</div>
						</div>
					</div>
				</BodyContainer>
			</div>

			{/* TESTIMONI SECTION */}
			<div className="py-rlv-4-mobile py-lg-rlv-4-desktop bg-riliv-level-5">
				<BodyContainer>
					<p className="h1 font-weight-semibold mb-rlv-C text-center">
						Apalagi yang kamu tunggu?
					</p>
					<p className="h3 mb-rlv-1-mobile mb-lg-rlv-1-desktop text-center font-weight-semibold">
						Mereka telah menerapkan metode yang TERBUKTI efektif dan memiliki
						SEJUTA MANFAAT dengan harga terjangkau{" "}
					</p>
					<h1 className="mb-rlv-1-mobile mb-lg-rlv-1-desktop text-center font-weight-semibold">
						Sudah Lebih Dari 300.000 Orang Memilih Meditasi bersama Riliv
					</h1>

					{/* TESTI 1 */}
					<div
						className="d-lg-flex d-block align-items-center p-rlv-2-mobile bg-white mt-rlv-1-mobile mt-lg-rlv-1-desktop mb-rlv-C"
						style={{ borderRadius: "8px" }}
					>
						<div className="my-lg-0 mb-rlv-C text-center">
							<img
								src="/img-ads/testi-meditasi-1.jpg"
								width="200px"
								style={{ borderRadius: "100px" }}
							/>
						</div>
						<div className="text-lg-left text-center ml-lg-rlv-C ml-0">
							<p className="h5">
								“Jujur selama ini aku bingung sama perasaanku. Banyak banget hal
								yang bikin dada sesak. Tapi sejak kenal meditasi Riliv, semuanya
								tuh jadi lebih lega. Rasanya kaya kita dibantu untuk memahami
								semua kondisi yang rumit ini jadi hal yang masuk akal.”
							</p>
						</div>
					</div>

					{/* TESTI 2 */}
					<div
						className="d-lg-flex d-block align-items-center p-rlv-2-mobile bg-white mb-rlv-1-mobile mb-lg-rlv-1-desktop"
						style={{ borderRadius: "8px" }}
					>
						<div className="my-lg-0 mb-rlv-C text-center order-2">
							<img
								src="/img-ads/testi-meditasi-2.jpg"
								width="200px"
								style={{ borderRadius: "100px" }}
							/>
						</div>
						<div className="text-lg-right text-center mr-lg-rlv-C mr-0 order-1">
							<p className="h5">
								“Enaaakk banget! Aku yang sebelumnya gak pernah tau apa itu
								meditasi aja bisa ngikutin. Caranya sederhana banget, terus bisa
								dilakuin dimana aja, jadi bisa buat pertolongan pertama kalau
								lagi butuh ketenangan gitu. Keren lah pokoknya.”
							</p>
						</div>
					</div>

					<div className="row mb-rlv-C">
						<div className="col-12 col-lg-4 my-rlv-B">
							<img src="/img-ads/testi_4.png" style={{ width: "100%" }} />
						</div>
						<div className="col-12 col-lg-4 my-rlv-B">
							<img src="/img-ads/testi_5.png" style={{ width: "100%" }} />
						</div>
						<div className="col-12 col-lg-4 my-rlv-B">
							<img src="/img-ads/testi_3.png" style={{ width: "100%" }} />
						</div>
					</div>

					<div className="row mb-rlv-C">
						<div className="col-12 col-lg-6 my-rlv-B">
							<img
								src="/img-ads/testi-ads-chat-1.jpg"
								style={{ width: "100%" }}
							/>
						</div>
						<div className="col-12 col-lg-6 my-rlv-B">
							<img
								src="/img-ads/testi-ads-chat-2.jpg"
								style={{ width: "100%" }}
							/>
						</div>
					</div>

					<div className="text-center">
						<AdsMeditasiButton
							dynamic
							link="/promo-meditasi-autorelax"
							textLink="YA, SAYA MAU COBA SEKARANG"
						/>
					</div>
				</BodyContainer>
			</div>

			<div className="py-rlv-4-mobile py-lg-rlv-4-desktop bg-white">
				<BodyContainer>
					<h2 className=" text-center mb-rlv-1-mobile mb-lg-rlv-1-desktop font-weight-semibold">
						HASIL RISET SETELAH 10 HARI MEDITASI, TERBUKTI:
					</h2>
					<div className="row justify-content-center">
						<div className="col-6 col-md-4 text-center">
							<img
								src="/img-ads/impact-meditasi-1.jpg"
								className="mb-rlv-A"
								width="100%"
								height="auto"
							/>
							<p
								className="h1 font-weight-bold mb-rlv-A"
								style={{ color: "#69A454" }}
							>
								22,4%
							</p>
							<p className="h3 text-gray-3 font-weight-semibold mb-rlv-B">
								Kepuasan Hidup Lebih Baik
							</p>
						</div>
						<div className="col-6 col-md-4 text-center">
							<img
								src="/img-ads/impact-meditasi-2.jpg"
								className="mb-rlv-A"
								width="100%"
								height="auto"
							/>
							<p
								className="h1 font-weight-bold mb-rlv-A"
								style={{ color: "#69A454" }}
							>
								45,6%
							</p>
							<p className="h3 text-gray-3 font-weight-semibold mb-rlv-B">
								Stres Berkurang
							</p>
						</div>
						<div className="col-6 col-md-4 text-center">
							<img
								src="/img-ads/impact-meditasi-3.jpg"
								className="mb-rlv-A"
								width="100%"
								height="auto"
							/>
							<p
								className="h1 font-weight-bold mb-rlv-A"
								style={{ color: "#69A454" }}
							>
								16,6%
							</p>
							<p className="h3 text-gray-3 font-weight-semibold mb-rlv-B">
								Perhatian Meningkat
							</p>
						</div>
						<div className="col-6 col-md-4 text-center">
							<img
								src="/img-ads/impact-meditasi-4.jpg"
								className="mb-rlv-A"
								width="100%"
								height="auto"
							/>
							<p
								className="h1 font-weight-bold mb-rlv-A"
								style={{ color: "#69A454" }}
							>
								14%
							</p>
							<p className="h3 text-gray-3 font-weight-semibold mb-rlv-B">
								Meningkat dalam Pengaruh Positif
							</p>
						</div>
						<div className="col-6 col-md-4 text-center">
							<img
								src="/img-ads/impact-meditasi-5.jpg"
								className="mb-rlv-A"
								width="100%"
								height="auto"
							/>
							<p
								className="h1 font-weight-bold mb-rlv-A"
								style={{ color: "#69A454" }}
							>
								27,4%
							</p>
							<p className="h3 text-gray-3 font-weight-semibold mb-rlv-B">
								Menurun dalam Pengaruh Negatif
							</p>
						</div>
					</div>

					<h3 className="my-rlv-C text-center">
						Saatnya kamu mengubah hidupmu untuk
					</h3>
					<ul className="h5" type="-" style={{ marginLeft: "-16px" }}>
						<li className="my-rlv-B">Menjadi lebih bahagia</li>
						<li className="my-rlv-B">
							Lebih bijak dan tepat dalam menanggapi suatu masalah
						</li>
						<li className="my-rlv-B">
							Lebih tenang, tidak mudah sensitif, dan dapat memelihara kesehatan
							mental dengan baik
						</li>
					</ul>
					<h5>dan yang terpenting…</h5>
					<h2 className="my-rlv-C text-center font-weight-semibold">
						MENDAPATKAN HIDUP YANG TENANG DAN BAHAGIA
					</h2>
					<h1 className="my-rlv-C text-center font-weight-semibold">
						bersama Aplikasi Kesehatan Mental No. 1 di Indonesia
					</h1>
					<h2 className="font-weight-semibold text-center mb-rlv-C">
						Mengapa harus Riliv?
					</h2>
					<h5 className="text-center mb-rlv-C">
						Riliv memberikan kemudahan untuk menenangkan diri dan mendapatkan
						solusi atas masalah kesehatan mentalmu di mana dan kapan saja,
						lengkap dan nggak ribet.
					</h5>
					<div className="row text-center mb-rlv-B">
						<div className="col-12 col-lg-4 mb-rlv-C">
							<h3 className="font-weight-semibold mb-rlv-B">Konseling</h3>
							<h5>
								Selesaikan masalah dengan berbagai solusi terpercaya dari yang
								ahli.
							</h5>
						</div>
						<div className="col-12 col-lg-4 mb-rlv-C">
							<h3 className="font-weight-semibold mb-rlv-B">Cerita Lelap</h3>
							<h5>
								Tak perlu overthingking lagi, kamu bisa tidur lelap hari ini.
							</h5>
						</div>
						<div className="col-12 col-lg-4 mb-rlv-C">
							<h3 className="font-weight-semibold mb-rlv-B">
								Belajar Meditasi
							</h3>
							<h5>Panduan yang mudah membuatmu lebih fokus dalam bekerja.</h5>
						</div>
						<div className="col-12 col-lg-4 mb-rlv-C">
							<h3 className="font-weight-semibold mb-rlv-B">Nuansa Lelap</h3>
							<h5>
								Hadirkan ketenangan dalam tidurmu, singkirkan beban pikiran.
							</h5>
						</div>
						<div className="col-12 col-lg-4 mb-rlv-C">
							<h3 className="font-weight-semibold mb-rlv-B">
								Meditasi Darurat
							</h3>
							<h5>
								Menjadi tenang dengan segera karena cemas bisa datang tiba-tiba.
							</h5>
						</div>
						<div className="col-12 col-lg-4 mb-rlv-C">
							<h3 className="font-weight-semibold mb-rlv-B">Mood Tracker</h3>
							<h5>Memantau dan mengelola emosimu semudah menggeser jari.</h5>
						</div>
					</div>
					<div className="text-center">
						<AdsMeditasiButton
							dynamic
							link="/promo-meditasi-autorelax"
							textLink="YA, SAYA MAU COBA SEKARANG"
						/>
					</div>
				</BodyContainer>
			</div>

			{/* TELAH DILIPUT DI */}
			{/* MEDIA SECTION */}
			<BodyContainer>
				<div
					className="py-rlv-3-mobile py-lg-rlv-3-desktop mb-rlv-4-mobile mb-lg-rlv-4-desktop"
					style={{
						borderTop: "1px solid #c6c6c6",
						borderBottom: "1px solid #c6c6c6",
					}}
				>
					<h2 className="text-center text-gray-5 mb-rlv-1-mobile mb-lg-rlv-1-desktop font-weight-semibold">
						Prestasi dari berbagai pihak ini menjadi bukti nyata dedikasi kami
						dalam membantumu
					</h2>
					<div className="row text-center">
						<div className="col-lg-1 d-none d-lg-inline"></div>
						<MediaImages
							key="media1"
							photoUrl="/img-home/kumparan.png"
							photoAlt="kumparan"
						/>
						<MediaImages
							key="media2"
							photoUrl="/img-home/liputan6.png"
							photoAlt="liputan6"
						/>
						<MediaImages
							key="media3"
							photoUrl="/img-home/techinasia.png"
							photoAlt="techinasia"
						/>
						<MediaImages
							key="media4"
							photoUrl="/img-home/the_straits.png"
							photoAlt="the straits"
						/>
						<MediaImages
							key="media5"
							photoUrl="/img-home/thejakarta.png"
							photoAlt="the jakarta post"
						/>

						<div className="col-lg-1 d-none d-lg-inline"></div>
						<div className="col-lg-1 d-none d-lg-inline"></div>
						<MediaImages
							key="media6"
							photoUrl="/img-home/tirto.png"
							photoAlt="tirto"
						/>
						<MediaImages
							key="media7"
							photoUrl="/img-home/conversation.png"
							photoAlt="conversation"
						/>
						<MediaImages
							key="media8"
							photoUrl="/img-home/detik.png"
							photoAlt="detikcom"
						/>
						<MediaImages
							key="media9"
							photoUrl="/img-home/forbes.png"
							photoAlt="forbes"
						/>
						<MediaImages
							key="media10"
							photoUrl="/img-home/idn.png"
							photoAlt="idn times"
						/>
						<div className="col-lg-1 d-none d-lg-inline"></div>
					</div>
					<p className="text-center text-gray-5 mt-rlv-B h5">
						dan belasan media lainnya
					</p>
				</div>
			</BodyContainer>
			<RilivFooter hideLinks />
			<BootstrapScript />
		</div>
	);
};

export default AdsMeditasiPage;
