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

const AdsMeditasiPage1 = () => {
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
        className="container-fluid px-0 bg-header d-none d-lg-block"
        style={{
          backgroundImage: 'url("./../img-ads/bgheader.png")',
          overflow: "hidden",
          backgroundColor: "#0fbace",
        }}
      >
        <BodyContainer>
          <div className="row">
            <div className="col-12 col-lg-7 order-2 order-lg-1 py-rlv-5-mobile py-lg-rlv-5-desktop">
              <div className="p-rlv-1-mobile p-lg-rlv-1-desktop mb-0 mb-lg-rlv-3-desktop rounded-lg">
                <h1 className="h2 text-white mb-rlv-1-mobile mb-lg-rlv-1-desktop">
				Pikiranmu Terlalu Berisik untuk Hidup yang Tenang
                </h1>
                <a href="#section1"
                  className="btn btn-special-grad-1 btn-block d-block btn-lg-fix font-weight-semibold text-white px-rlv-A"
                >
                  Lihat Selengkapnya
                </a>
              </div>
            </div>
          </div>
        </BodyContainer>
      </div>

      {/* HEADER MOBILE */}
      <div className="d-block d-lg-none">
        <div
          className="d-block pt-rlv-5-desktop bg-header d-lg-block"
          style={{
            backgroundImage: "url('./../img-ads/bgmeditasi1.png')",
            backgroundSize: "cover",
          }}
        >
          <div style={{ height: "50vw" }} />
        </div>
        <div
          className="container-fluid pt-rlv-2-desktop"
          style={{
            backgroundImage: 'url("./../img-hening/group_12542.png")',
            backgroundSize: "cover",
            /* color: white !important; */
          }}
        >
          <BodyContainer>
            <div className="mt-rlv-1-mobile mb-rlv-5-mobile">
              <h1 className="h2 text-white text-center mb-rlv-1-mobile mb-lg-rlv-1-desktop">
			  Pikiranmu Terlalu Berisik untuk Hidup yang Tenang
              </h1>
              <a href="#section1"
                  className="btn btn-special-grad-1 btn-block d-block btn-lg-fix font-weight-semibold text-white px-rlv-A"
                >
                  Lihat Selengkapnya
                </a>
            </div>
            <hr />
          </BodyContainer>
        </div>
      </div>

			{/* KAMU BISA BANTU */}
			<div className="">
				<BodyContainer>
				<div className="py-rlv-3-mobile py-lg-rlv-3-desktop py-rlv-3-mobile px-lg-rlv-5-desktop px-lg-5">

<h3 className="text-center mb-rlv-C font-weight-semibold">
Apakah kamu merasakan:
</h3>
<div className="row pt-5">
  <div className="col-md-4">
	<img
	  className="img-fluid img_content"
	  src="./../img-ads/content/content_cemas.png"
	/>
  </div>
  <div className="col-md-8">
	<h5 className="font-weight-bold">Cemas akan banyak hal</h5>
	<p>
	  Kamu sering mengkhawatirkan masa depan yang tidak jelas,
	  dilanda panik hingga berdebar dan gemetar, takut mengambil
	  keputusan, selalu berada di zona nyaman sehingga kehilangan
	  banyak kesempatan.
	</p>
  </div>
</div>
<div className="row pt-4">
  <div className="col-md-4">
	<img
	  className="img-fluid img_content"
	  src="./../img-ads/content/content_overthinking.png"
	/>
  </div>
  <div className="col-md-8 pt-3">
	<h5 className="font-weight-bold">
	  Overthinking dan pikiran selalu berisik
	</h5>
	<p>
	  Sering teringat dan menyesali kejadian masa lalu yang tidak
	  dapat diubah, memikirkan hal-hal yang tidak dapat dikontrol,
	  mengkhawatirkan penilaian orang lain secara berlebihan.
	</p>
  </div>
</div>
<div className="row pt-4">
  <div className="col-md-4">
	<img
	  className="img-fluid img_content"
	  src="./../img-ads/content/content_emosi.png"
	/>
  </div>
  <div className="col-md-8 pt-3">
	<h5 className="font-weight-bold">Tidak bisa mengatur emosi</h5>
	<p>
	  Kamu menjadi emosional saat dihadapkan dengan masalah, lebih
	  mudah marah, sedih berlebihan, mudah tersinggung atas perilaku
	  dan perkataan orang lain hingga menganggap semua orang tak
	  bisa mengerti dirimu.
	</p>
  </div>
</div>
<div className="row pt-4">
  <div className="col-md-4">
	<img
	  className="img-fluid img_content"
	  src="./../img-ads/content/content_tidur.png"
	/>
  </div>
  <div className="col-md-8 pt-3">
	<h5 className="font-weight-bold">Mengalami gangguan tidur</h5>
	<p>
	  Sebenarnya kamu sudah sangat lelah, namun tidak bisa tidur
	  dengan nyenyak, mudah terbangun di malam hari, selalu
	  diselimuti rasa gelisah bahkan saat sudah tidur tetap merasa
	  lelah keesokan harinya.
	</p>
  </div>
</div>
<div className="row pt-4">
  <div className="col-md-4">
	<img
	  className="img-fluid img_content"
	  src="./../img-ads/content/content_semangat.png"
	/>
  </div>
  <div className="col-md-8 pt-3">
	<h5 className="font-weight-bold">Kehilangan semangat hidup</h5>
	<p>
	  Semua terasa tidak menarik lagi bahkan pada hal-hal yang
	  biasanya menjadi favoritmu, selalu ingin menyendiri dan malas
	  bersosialisasi, sering merasa sedih atau menangis tanpa sebab.
	</p>
  </div>
</div>
</div>
				</BodyContainer>
			</div>

			{/* KAMI MENGERTI SECTION */}
			<div className="py-rlv-4-mobile py-lg-rlv-4-desktop">
        <BodyContainer>
          <h2 className="my-rlv-1-mobile my-lg-rlv-1-desktop text-center font-weight-semibold">
		  Semua masalah hanya berputar di kepala dan <br/>
kamu tidak tau harus bagaimana?
          </h2>
			<div className="row">
				<div className="col-md-6">
				<div className="listriliv2">
                      <ul>
                        <li><p><b>Pandangan orang lain yang selalu mengintimidasi</b></p></li>
                        <li><p><b>Ketidakpastian akan masa depan</b></p></li>
						<li><p><b>Kesalahan masa lalu yang belum termaafkan</b></p></li>
					  </ul>
                    </div>
				</div>
				<div className="col-md-6">
				<div className="listriliv2">
                      <ul>
                        <li><p><b>Tuntutan standar sosial yang tak masuk akal </b></p></li>
                        <li><p><b>Keretakan hubungan dengan orang tersayang</b></p></li>
						<li><p><b>Emosi yang sering kali tak terkendali</b></p></li>
					  </ul>
				</div>
			</div>
		  </div>
        </BodyContainer>
      </div>
			<div className="py-rlv-1-mobile py-lg-rlv-1-desktop">
				<BodyContainer>
					<h3 className="mb-rlv-C font-weight-semibold text-center">
					Kami bisa bantu tenangkan pikiranmu
					</h3>
					<p className="text-center">Telah membantu <b>325.431+ user</b> dengan berbagai masalah seperti <b>Stres, Cemas,<br/> Overthinking, Susah tidur, Gelisah,</b> dan masih banyak lagi.</p>
					<div className="container">
		  <div className="py-rlv-1-mobile py-lg-rlv-1-desktop py-rlv-3-mobile px-lg-rlv-5-desktop px-lg-5">

		  <div className="jumbotron jumbotron-fluid bg_riliv_2" style={{padding: "40px 24px !important"}}>
                  <div className="container">
				  <h4 className="text-center font-weight-semibold">Kamu hebat telah berjuang hingga saat ini. Masih<br/> banyak lagi hari yang harus kamu lalui dan kami tak<br/> ingin kamu berjuang sendiri ♥</h4>
                    
                  </div>
                </div>
		  </div>
		  </div>
				</BodyContainer>
			</div>
			<div id="section1" className="bg-riliv-level-6 py-rlv-3-mobile py-lg-rlv-3-desktop">
        <BodyContainer>

		<div className="py-rlv-1-mobile py-lg-rlv-1-desktop">
            <div className="row">
              <div className="col-md-8">
                <div className="jumbotron jumbotron-fluid bg_riliv text-white">
                  <div className="container">
                    <img src="./../img-ads/icon/icon_love.png" />
                    <h5 class="font-content2">
					Kami dengan senang hati akan membantumu melewati hari-hari yang berat. Saat tak ada yang bisa kamu andalkan, kami selalu ada dalam genggaman.
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="jumbotron jumbotron-fluid bg_default">
                  <div className="container">
					<h2>Harga Penawaran Special Hari Ini</h2>
					<hr/>
					<p class="price-orange"><s>Rp.150.000</s></p>
                    <p className="price-riliv">Rp.99.000</p>
                    <hr/>
                    <p className="text-center">Hanya dengan <b>Rp.99.000</b>, dapatkan <b>3 Bulan Meditasi Premium Full Akses</b> untuk kesehatan mentalmu yang lebih baik</p>
                    <a href="https://clientarea.riliv.co.id?packageId=18">
                      <button className="btn-riliv btn-garansi">
                        Dapatkan Sekarang
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BodyContainer>
      </div>
	  <div className="py-rlv-3-mobile py-lg-rlv-3-desktop">
        <BodyContainer>
		<h2 className="text-center font-weight-semibold pt-5">Bebas Akses ke Semua Fitur</h2>
		  <h4 className="text-center">Kami menghadirkan kumpulan layanan terapi online  untuk kesehatan mental yang lebih baik berupa konseling dan meditasi online</h4>
				<div className="row pt-4">
					<div className="col-md-3 col-6">
						  <div className="bg_riliv3">
						  <h4 className="title-content">Meditasi</h4>
						  <img className="pict-content mx-auto d-block" src="./../img-ads/fitur/fitur_meditasi.png" />
						  
						  </div>
					</div>
					
					<div className="col-md-3 col-6">
					<div className="bg_riliv3">
					<h4 className="title-content">Lelap</h4>
						  <img className="pict-content mx-auto d-block" src="./../img-ads/fitur/fitur_lelap.png" />
						  
						  </div>
					</div>
					
					<div className="col-md-3 col-6">
					<div className="bg_riliv3">
					<h4 className="title-content">Konseling</h4>
						  <img className="pict-content mx-auto d-block" src="./../img-ads/fitur/fitur_konseling.png" />
						  </div>
					</div>
					
					<div className="col-md-3 col-6">
					<div className="bg_riliv3">
					<h4 className="title-content">Mood Tracker</h4>
						  <img className="pict-content mx-auto d-block" src="./../img-ads/fitur/fitur_mood.png" />
						  
						  </div>
					</div>
					<div className="col-md-3 col-6">
					<div className="bg_riliv3">
					<h4 className="title-content">Journey</h4>
						  <img className="pict-content mx-auto d-block" src="./../img-ads/fitur/fitur_journey.png" />
						  
						  </div>
					</div>
					<div className="col-md-3 col-6">
					<div className="bg_riliv3">
					<h4 className="title-content">Journal</h4>
						  <img className="pict-content mx-auto d-block" src="./../img-ads/fitur/fitur_journal.png" />
						  
						  </div>
					</div>
					<div className="col-md-3 col-6">
					<div className="bg_riliv3">
					<h4 className="title-content">Bubble Breath</h4>
						  <img className="pict-content mx-auto d-block" src="./../img-ads/fitur/fitur_bubble.png" />
						  
						  </div>
					</div>
				</div>
				<div className="my-rlv-3-mobile my-lg-rlv-3-desktop">
				<div className="row mt-5">
				<div className="col-md-4 mt-4">
					<div className="mx-auto d-block bg-riliv-level-6 mb-4"  style={{ width:"88px", padding:"20px 0px", borderRadius:"16px"}}>
						  <img className="mx-auto d-block" src="./../img-ads/icon/icon_meditasi.png" />
						  </div>
						  <h4 className="title-content">Meditasi</h4>
						  <p className="text-center">Fokuskan pikiran dengan panduan mudah untuk atasi berbagai masalah</p>
						  
					</div>
					<div className="col-md-4 mt-4">
						  <div className="mx-auto d-block bg-riliv-level-6 mb-4" style={{ width:"88px", padding:"20px 0px", borderRadius:"16px"}}>
						  <img className="mx-auto d-block" src="./../img-ads/icon/icon_cerita_lelap.png" />
						  </div>
						  <h4 className="title-content">Cerita Lelap</h4>
						  <p className="text-center">Tak perlu overthinking lagi, kamu bisa tidur lelap hari ini</p>
						  
					</div>
					 
					<div className="col-md-4 mt-4">
				
						  <img className="mx-auto d-block mb-4" src="./../img-ads/icon/icon_journay.png" />
						  <h4 className="title-content">Journey</h4>
							<p className="text-center">Perjalanan temukan kedamaian dan ketenangan hati</p>
						  
					</div>
					
					
					
					<div className="col-md-4 mt-5">
					<div className="mx-auto d-block bg-riliv-level-6 mb-4"  style={{ width:"88px", padding:"22px 0px", borderRadius:"16px"}}>
						  <img className="mx-auto d-block" src="./../img-ads/icon/icon_journal.png" />
						  </div>
						  <h4 className="title-content">Journal</h4>
						  <p className="text-center">Catat semua perasaanmu dengan mudah di mana dan kapan saja</p>
						 
					</div>
					<div className="col-md-4 mt-5">
					<div className="mx-auto d-block bg-riliv-level-6 mb-4"  style={{ width:"88px", padding:"20px 0px", borderRadius:"16px"}}>
						  <img className="mx-auto d-block" src="./../img-ads/icon/icon_darurat.png" />
						  </div>
						  <h4 className="title-content">Bubble Breath</h4>
						  <p className="text-center">Panduan pengatur nafas agar tenang saat kondisi tak terkendali</p>
						 
					</div>
					
					<div className="col-md-4 mt-5">
					<div className="mx-auto d-block bg-riliv-level-6 mb-4" style={{ width:"88px", padding:"20px 0px", borderRadius:"16px"}}>
						  <img className="mx-auto d-block" src="./../img-ads/icon/icon_mood.png" />
						  </div>
						  <h4 className="title-content">Mood Tracker</h4>
						  <p className="text-center">Memantau dan mengelola emosimu semudah menggeser jari</p>
						  
					</div>
				</div>
				</div>
				<h2 className="text-center font-weight-semibold pt-5">Kualitas kami dibuktikan dengan angka bukan sekadar kata</h2>
				</BodyContainer>
				</div>
				<div
				className="bg-riliv-level-1 bg-header"
				style={{ backgroundImage: 'url("/img-home/background-kenapa.png")' }}
			>
				<BodyContainer key="body6">
					<div className="py-rlv-3-mobile py-lg-rlv-3-desktop row align-items-center">
						<div className="col-12 col-lg-6">
							<h2 className="text-white mb-lg-rlv-1-mobile mb-rlv-1-mobile text-center text-lg-left font-weight-semibold">
							Kenapa Riliv adalah sahabat terbaik untuk Sehat Mental?{" "}
							</h2>
						</div>
						<div className="col-12 col-lg-6">
							<div className="row px-rlv-B">
								<CardKenapaSection
									textTitle="+200.000"
									textDescription="User lebih sehat mental dengan layanan di Aplikasi Riliv"
									customCol="col-12 col-lg-6"
								/>
								<CardKenapaSection
									
									textTitle="94%"
									textDescription="Pengguna lebih sehat mental dengan meditasi Riliv"
									customCol="col-12 col-lg-6"
								/>
							</div>
						</div>
					</div>
				</BodyContainer>
				</div>
				<div class="container">
				<BodyContainer>
				
				<h2 className="text-center font-weight-semibold pt-5">Hasil riset setelah 10 hari meditasi, terbukti:</h2>
				<div className="row pt-4">
					<div className="col-md-4">
						  <div className="bg-riliv-level-6 mt-4" style={{padding:"24px !important", borderRadius:"16px"}}>
						  <h2 className="text-center font-weight-bold" style={{ color:"#11CBE1"}}>22.4%</h2>
						  <h4 className="title-content font-weight-semibold">Better life satisfaction</h4>
						  
						  </div>
					</div>
					
					<div className="col-md-4">
					<div className="bg-riliv-level-6 mt-4" style={{padding:"24px !important", borderRadius:"16px"}}>
					<h2 className="text-center font-weight-bold" style={{ color:"#11CBE1"}}>45.6%</h2>
						  <h4 className="title-content font-weight-semibold">Less stressed</h4>
						  
						  </div>
					</div>
					
					<div className="col-md-4">
					<div className="bg-riliv-level-6 mt-4" style={{padding:"24px !important", borderRadius:"16px"}}>
					<h2 className="text-center font-weight-bold" style={{ color:"#11CBE1"}}>16.6%</h2>
						  <h4 className="title-content font-weight-semibold">Increased on being mindful</h4>
						  </div>
					</div>
					
					<div className="col-md-4">
					<div className="bg-riliv-level-6 mt-4" style={{padding:"24px !important", borderRadius:"16px"}}>
					<h2 className="text-center font-weight-bold" style={{ color:"#11CBE1"}}>14%</h2>
						  <h4 className="title-content font-weight-semibold">Increased in positive effect</h4>
						  
						  </div>
					</div>
					<div className="col-md-4">
					<div className="bg-riliv-level-6 mt-4" style={{padding:"24px !important", borderRadius:"16px"}}>
					<h2 className="text-center font-weight-bold" style={{ color:"#11CBE1"}}>27.4%</h2>
						  <h4 className="title-content font-weight-semibold">Decreased in negative effect</h4>
						  
						  </div>
					</div>
				</div>
				<div className="py-rlv-1-mobile py-lg-rlv-1-desktop mt-4">
            <div className="row">
              <div className="col-md-8">
                <div className="jumbotron jumbotron-fluid bg_riliv text-white">
                  <div className="container">
                    <img src="./../img-ads/icon/icon_love.png" />
                    <h4>
					Kami dengan senang hati akan membantumu melewati hari-hari yang berat. Saat tak ada yang bisa kamu andalkan, kami selalu ada dalam genggaman.
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="jumbotron jumbotron-fluid bg_default">
                  <div className="container">
					<h2>Harga Penawaran Special Hari Ini</h2>
					<hr/>
					<p class="price-orange"><s>Rp.150.000</s></p>
                    <p className="price-riliv">Rp.99.000</p>
                    <hr/>
                    <p className="text-center">Hanya dengan <b>Rp.99.000</b>, dapatkan <b>3 Bulan Meditasi Premium Full Akses</b> untuk kesehatan mentalmu yang lebih baik</p>
                    <a href="https://clientarea.riliv.co.id?packageId=18">
                      <button className="btn-riliv btn-garansi">
                        Dapatkan Sekarang
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
		  </BodyContainer>
		  </div>
			<div
				className="container-fluid px-0 bg-header py-rlv-5-mobile py-lg-rlv-5-desktop bg-riliv-level-6"
				style={{
					backgroundImage: 'url("/img-hening/group_7.png")',
					backgroundPosition: "center",
				}}
			>
				<BodyContainer>
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
									Bagaimana kami <br/>membantumu?
									</h2>
								</div>
							</div>
						</div>
					</div>
				</BodyContainer>
			</div>
			<div
				className="pb-5 mb-5">
			<BodyContainer>
			<div className="container">
		  <div className="py-rlv-3-mobile py-lg-rlv-3-desktop py-rlv-3-mobile px-lg-rlv-5-desktop px-lg-5">

		  
		  <h2 className="text-center font-weight-semibold mt-5">Memahami. Menerima. Menghadapi.</h2>
		  <div className="listriliv">
              <ol>
                <li>
				<b>Memahami</b> tentang diri sendiri, tentang emosi dan segala hal yang sedang terjadi saat ini
                </li>
                <li>
                  <b>Menerima</b> bahwa apa yang kamu rasakan adalah sesuatu yang wajar, sekalipun itu perasaan yang menyakitkan
                </li>
                <li>
				<b>Menghadapi</b> sumber-sumber masalah yang sebenarnya tidak dapat kamu kendalikan dengan lebih kuat
                </li>
               
              </ol>
            </div>
			</div>
		  </div>
		  <div
						className="d-flex justify-content-center bg-riliv-level-5 mb-rlv-3-mobile mb-lg-rlv-3-desktop"
						style={{ borderRadius: "16px" }}
					>
						<img
							src="/img-ads/meditasi.png"
							style={{ width: "70%", height: "100%" }}
						/>
					</div>
					<h2 className="text-center font-weight-semibold mt-5 mb-5">Kenapa harus meditasi di Riliv?</h2>
					<div className="row pt-4 mb-4">
				<div className="col-md-6">
				<div className="listriliv">
                      <ul>
                        <li><p><b>Melatih pikiran menjadi lebih tenang,</b> dengan mengurangi tekanan emosional dan stres dapat membantu meningkatkan kreativitas serta fokus</p></li>
                        <li><p><b>Terpercaya berdasarkan penelitian, </b> meditasi disusun oleh profesional melalui metode ilmiah sehingga terbukti ampuh untuk menenangkan pikiran</p></li>
						
					  </ul>
                    </div>
				</div>
				<div className="col-md-6">
				<div className="listriliv">
                      <ul>
                        <li><p><b>Tidak memakan waktu, </b> cukup 10 menit setiap hari selama 10 hari untuk merasakan manfaatnya secara langsung. Menjadikan hidup lebih bahagia</p></li>
                        <li><p><b>Ratusan konten meditasi,</b> bebas pilih sesuai permasalahan seperti; kecemasan, overthinking, susah tidur, kesedihan, stres, dan masih banyak lagi</p></li>
						
					  </ul>
				</div>
			</div>
		  </div>
		  <div className="row mt-5">
		  <div className="col-md-3 col-6">
		  <img
                  className="img-fluid img_content pt-4"
                  src="./../img-ads/content/content_panik.png"
                />
				<h5 className="font-weight-semibold">Saat Panik</h5>
				<p className="font-meditasi">7-10 menit | Med Instan</p>
			  </div>
			  <div className="col-md-3 col-6">
		  <img
                  className="img-fluid img_content pt-4"
                  src="./../img-ads/content/content_frustasi.png"
                />
				<h5 className="font-weight-semibold">Frustasi</h5>
				<p className="font-meditasi">7-10 menit | Med Instan</p>
			  </div>
			  <div className="col-md-3 col-6">
		  <img
                  className="img-fluid img_content pt-4"
                  src="./../img-ads/content/content_konsentrasi.png"
                />
				<h5 className="font-weight-semibold">Konsentrasi</h5>
				<p className="font-meditasi">7-10 menit | Med Instan</p>
			  </div>
			  <div className="col-md-3 col-6">
		  <img
                  className="img-fluid img_content pt-4"
                  src="./../img-ads/content/content_duka.png"
                />
				<h5 className="font-weight-semibold">Hidup dengan Duka</h5>
				<p className="font-meditasi">7-10 menit | Med Seri</p>
			  </div>
			  <div className="col-md-3 col-6">
		  <img
                  className="img-fluid img_content pt-4"
                  src="./../img-ads/content/content_waktu.png"
                />
				<h5 className="font-weight-semibold">Waktu Sendiri</h5>
				<p className="font-meditasi">7-10 menit | Med Instan</p>
			  </div>
			  <div className="col-md-3 col-6">
		  <img
                  className="img-fluid img_content pt-4"
                  src="./../img-ads/content/content_tersakiti.png"
                />
				<h5 className="font-weight-semibold">Tersakiti</h5>
				<p className="font-meditasi">7-10 menit | Med Instan</p>
			  </div>
			  <div className="col-md-3 col-6">
		  <img
                  className="img-fluid img_content pt-4"
                  src="./../img-ads/content/content_menyesal.png"
                />
				<h5 className="font-weight-semibold">Mengapa Menyesal</h5>
				<p className="font-meditasi">7-10 menit | Med Seri</p>
			  </div>
			  <div className="col-md-3 col-6">
		  <img
                  className="img-fluid img_content pt-4"
                  src="./../img-ads/content/content_fokus.png"
                />
				<h5 className="font-weight-semibold">Fokus</h5>
				<p className="font-meditasi">7-10 menit | Med Singkat</p>
			  </div>
		  </div>
		  </BodyContainer>
		  </div>
		  
			  
		  
		  <div className="bg-riliv-level-6 py-rlv-3-mobile py-lg-rlv-3-desktop">
		  <div class="container">
		  <h2 className="text-center font-weight-bold">Kami Membantu Menghadapi Masalahmu</h2>
		  <h5 className="text-center font-weight-semibold mt-5">Setiap masalah hadir bukan untuk dihilangkan, namun untuk dihadapi.</h5>
		  <p className="text-center">Bersama kami, kamu akan lebih siap dan kuat dalam melaluinya. Dengan menggunakan <br/> teknik yang tepat dan konsistensi dalam memfokuskan pikiran, maka kamu akan menjadi<br/> pribadi yang lebih tenang dan bahagia.</p>
			  </div>
			  </div>
			  <div className="py-rlv-3-mobile py-lg-rlv-3-desktop">
				  <BodyContainer>
			  <div className="row pt-4">
              <div className="col-md-4">
                <img
                  className="img-fluid img_content"
                  src="./../img-ads/bgmeditasi2.png"
                />
              </div>
			  
              <div className="col-md-8 pt-3">
                <h5 className="font-weight-bold">Duduk, Dengar, Damai</h5>
                <p>
				<b>Tenangkan pikiran mudah hanya dengan 3 teknik sederhana.</b><br/>
Kami akan beri panduan lengkap di aplikasi. Terbukti membantu <br/>menjadi lebih tenang, kalem, mengurangi stres, dan menghilangkan <br/>overthinking.
                </p>
              </div>
			  
            </div>
            <div className="row py-rlv-1-mobile py-lg-rlv-1-desktop mt-5">
              <div className="col-md-8">
                <div className="jumbotron jumbotron-fluid bg-riliv-level-6" style={{ padding:"67px 40px !important", borderRadius:"16px"}}>
                  <div className="container">
                    <h3 className="font-weight-semibold">
					Sudah Lebih Dari 300.000 Orang Memilih Meditasi Bersama Riliv
                    </h3>
					<p>Mereka telah menerapkan metode yang <b>terbukti efektif</b> dan memiliki <b>sejuta manfaat</b> dengan harga terjangkau</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="jumbotron jumbotron-fluid bg_default">
                  <div className="container">
					<h2>Harga Penawaran Special Hari Ini</h2>
					<hr/>
					<p class="price-orange"><s>Rp.150.000</s></p>
                    <p className="price-riliv">Rp.99.000</p>
                    <hr/>
                    <p className="text-center">Hanya dengan <b>Rp.99.000</b>, dapatkan <b>3 Bulan Meditasi Premium Full Akses</b> untuk kesehatan mentalmu yang lebih baik</p>
                    <a href="https://clientarea.riliv.co.id?packageId=18">
                      <button className="btn-riliv btn-garansi">
                        Dapatkan Sekarang
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
			</BodyContainer>
          </div>
			<div className="py-rlv-3-mobile py-lg-rlv-3-desktop bg-grey-light">
        <BodyContainer>
          <h1 className="font-weight-semibold text-center mb-rlv-C">
            Testimoni User
          </h1>
		  <div className="row pt-4">
					<div className="col-md-6">
						  <div className="bg_default2 mt-4" style={{ background:"black", borderRadius:"16px"}}>
						  <img className="pict-content mx-auto d-block img-fluid" src="./../img-ads/testimoni/testimoni_user7.png" />
						  </div>
					</div>
					
					<div className="col-md-6">
					<div className="bg_default2 mt-4" style={{ background:"black", borderRadius:"16px"}}>
						  <img className="pict-content mx-auto d-block img-fluid" src="./../img-ads/testimoni/testimoni_user8.png" />
						 
						  </div>
					</div>
					
					<div className="col-md-4">
					<div className="bg_default2 mt-4" style={{ background:"white", borderRadius:"16px"}}>
						  <img className="pict-content mx-auto d-block img-fluid" src="./../img-ads/testimoni/testimoni_user9.png" />
						 
						  </div>
					</div>
					
					<div className="col-md-4">
					<div className="bg_default2 mt-4" style={{ background:"white", borderRadius:"16px"}}>
						  <img className="pict-content mx-auto d-block img-fluid" src="./../img-ads/testimoni/testimoni_user10.png" />
						  
						  </div>
					</div>
					<div className="col-md-4">
					<div className="bg_default2 mt-4" style={{ background:"white", borderRadius:"16px"}}>
						  <img className="pict-content mx-auto d-block img-fluid" src="./../img-ads/testimoni/testimoni_user11.png" />
						  
						  </div>
					</div>
					<div className="col-md-6">
					<div className="bg_default2 mt-4" style={{ background:"white", borderRadius:"16px", padding:"40px"}}>
						  <img className="pict-content mx-auto d-block" src="./../img-ads/testimoni/user_testimoni3.png" />
						  <p className="font-weight-semibold">“Jujur selama ini aku bingung sama perasaanku. Banyak banget hal yang bikin dada sesak. Tapi sejak kenal meditasi Riliv, semuanya tuh jadi lebih lega. Rasanya kaya kita dibantu untuk memahami semua kondisi yang rumit ini jadi hal yang masuk akal.”</p>
						  </div>
					</div>
					<div className="col-md-6">
					<div className="bg_default2 mt-4" style={{ background:"white", borderRadius:"16px", padding:"40px"}}>
						  <img className="pict-content mx-auto d-block" src="./../img-ads/testimoni/user_testimoni4.png" />
						  <p className="font-weight-semibold">“Enaaakk banget! Aku yang sebelumnya gak pernah tau apa itu meditasi aja bisa ngikutin. Caranya sederhana banget, terus bisa dilakuin dimana aja, jadi bisa buat pertolongan pertama kalau lagi butuh ketenangan gitu. Keren lah pokoknya.”
</p>
						  </div>
					</div>
				</div>
        </BodyContainer>
      </div>
	  <div className="py-rlv-1-mobile py-lg-rlv-1-desktop">
		  <BodyContainer>
            <div className="row">
              <div className="col-md-8">
                <div className="jumbotron jumbotron-fluid bg-riliv-level-6" style={{ padding:"67px 40px !important", borderRadius:"16px"}}>
                  <div className="container">
				  <h4 className="">
					Saatnya kamu mengubah hidupmu untuk<br/>
<b>Lebih Tenang dan Bahagia bersama</b>
                    </h4>
					<h2 className="font-weight-bold">Aplikasi Kesehatan Mental<br/>
No. 1 di Indonesia</h2>
					
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="jumbotron jumbotron-fluid bg_default">
                  <div className="container">
					<h2>Harga Penawaran Special Hari Ini</h2>
					<hr/>
					<p class="price-orange"><s>Rp.150.000</s></p>
                    <p className="price-riliv">Rp.99.000</p>
                    <hr/>
                    <p className="text-center">Hanya dengan <b>Rp.99.000</b>, dapatkan <b>3 Bulan Meditasi Premium Full Akses</b> untuk kesehatan mentalmu yang lebih baik</p>
                    <a href="https://clientarea.riliv.co.id?packageId=18">
                      <button className="btn-riliv btn-garansi">
                        Dapatkan Sekarang
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
			
		  <h2 className="font-weight-semibold text-center mb-rlv-C mt-2">
		  Tidak perlu diragukan lagi, bersamamu 
kami berhasil meraih…
          </h2>
				
		  <div className="row mt-5">
		  	<div className="col-md-4 mt-4">
						  
						  <img className="mx-auto d-block mb-4" src="./../img-ads/achieve/achieve_google.png" />
						 
						  <h4 className="title-content">Winners of Google Business Group Stories Search 2017</h4>
						  <p className="text-center">Google Inc.</p>
						  
					</div>
					 
					<div className="col-md-4 mt-4">
						  
						  <img className="mx-auto d-block mb-4" src="./../img-ads/achieve/achieve_tempo.png" />
						 
						  <h4 className="title-content">Best Sustainable Startup 2017</h4>
						  <p className="text-center">Tempo Media</p>
						  
					</div>
					
					<div className="col-md-4 mt-4">
						  
						  <img className="mx-auto d-block mb-4" src="./../img-ads/achieve/achieve_bmcig.png" />
						 
						  <h4 className="title-content">Winner of Indonesia Startup Insight 2018</h4>
						  <p className="text-center">KinerjaBisa Holding Pte Ltd</p>
						  
					</div>
					
					<div className="col-md-4 mt-4">
						  
						  <img className="mx-auto d-block mb-4" src="./../img-ads/achieve/achieve_gen.png" />
						 
						  <h4 className="title-content">Winners of Indonesian Enterpreneurship World Cup 2019</h4>
						  <p className="text-center">Global Enterpreneurship
Network (GEN)</p>
						  
					</div>
					<div className="col-md-4 mt-4">
						  
						  <img className="mx-auto d-block mb-4" src="./../img-ads/achieve/achieve_digitaraya.png" />
						 
						  <h4 className="title-content">Most Favorite Startup In Google Launchpad Accelarator Demo 2018</h4>
						  <p className="text-center">Global Launchpad Accelerator
by Digitaraya</p>
						  
					</div>
					
					<div className="col-md-4 mt-4">
						  
						  <img className="mx-auto d-block mb-4" src="./../img-ads/achieve/achieve_yseali.png" />
						 
						  <h4 className="title-content">Indonesian Delegates of YSEALI Academic Fellows for Social Enterpreneur 2017</h4>
						  <p className="text-center">U.S. Department of State</p>
						  
					</div>
					<div className="col-md-4 mt-4">
						  
						  <img className="mx-auto d-block mb-4" src="./../img-ads/achieve/achieve_australia.png" />
						 
						  <h4 className="title-content">Indonesian Delegates of Australia Awards 2016</h4>
						  <p className="text-center">Australia Department of State</p>
						  
					</div>
					<div className="col-md-4 mt-4">
						  
						  <img className="mx-auto d-block mb-4" src="./../img-ads/achieve/achieve_yse.png" />
						 
						  <h4 className="title-content">Best 16 Young Social Enterpreneurs (YSE) 2016</h4>
						  <p className="text-center">Singapore International
Foundation</p>
						  
					</div>
					<div className="col-md-4 mt-4">
						  
						  <img className="mx-auto d-block mb-4" src="./../img-ads/achieve/achieve_startup.png" />
						 
						  <h4 className="title-content">Top 3 Startups of Startup Sprint 2015</h4>
						  <p className="text-center">EMTEK Group</p>
						  
					</div>
				</div>

				<div className="py-rlv-4-mobile py-lg-rlv-4-desktop">
				<h2 className="text-center text-gray-5 mb-rlv-1-mobile mb-lg-rlv-1-desktop font-weight-semibold">
            Telah Diliput Di
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
		  </div>
		  </BodyContainer>
          </div>
			<RilivFooter hideLinks />
			<BootstrapScript />
		</div>
	);
};

export default AdsMeditasiPage1;
