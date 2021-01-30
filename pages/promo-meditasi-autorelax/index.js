import React, { Fragment } from "react";
import BodyContainer from "../../components/body-container/body-container.component";
import BootstrapScript from "../../components/bootstrapScript/bootstrapScript";
import RilivFooter from "../../components/footer/footer.component";
import HeaderGTagManagerGAnalytics from "../../components/header/header-analytics-tagmanager";
import HeaderFreshChat from "../../components/header/header-freshchat";
import RilivHeader from "../../components/header/header.component";
import RilivNavbar from "../../components/navbar/riliv_navbar.component";
import HeaderKonselingPage from "../../components/page/counseling/header-page/header-page.component";
import ResponsiveImage from "../../components/responsive-image/responsive-image.component";
import { ResponsiveText_H1 } from "../../components/responsive-text/responsive-text.component";
import SimpleSnackbar from "../../components/simple-snackbar/simple-snackbar.component";

const Counseling = () => {
	return (
		<Fragment>
			<RilivHeader>
				<HeaderKonselingPage />
				<HeaderGTagManagerGAnalytics />
				<HeaderFreshChat />
			</RilivHeader>
			<SimpleSnackbar identifier="comingSoon">
				<p className="p-0 m-0">Coming Soon</p>
			</SimpleSnackbar>
			<RilivNavbar hideMenu currentPage="Promo" />

			<div
				className="container-fluid body-promo d-flex justify-content-center"
				style={{ minHeight: "100vh" }}
			>
				<div className="px-0">
					<div className=" container-md bg-white my-rlv-3-mobile my-lg-rlv-3-desktop rounded-lg body-sm-white">
						{/* Row */}
						<div className="row px-lg-5 px-2 py-lg-5 py-3">
							{/* Column 1 - Content */}
							<div className="col-lg-6 col-12 order-lg-0 order-1 py-lg-5 py-3 align-self-center">
								<h3 className="font-weight-bold text-gray-5 mb-4">
									Meditasi Paket AUTO RELAX - Form Registration
								</h3>
								<p className="px-0 paragraph-riliv mb-rlv-A text-gray-5">
									Terima kasih telah membuka halaman penawaran spesial ini
								</p>
								<p className="px-0 paragraph-riliv mb-A text-gray-5">
									Anda bisa mendapatkan Premium Meditasi Riliv dan mengakses
									seluruh konten kami. Mulai dari mengatasi stres, kesedihan,
									kecemasan, overthinking, membantu tidur, dan ratusan konten
									lainnya
								</p>
								<p className="px-0 paragraph-riliv mb-A text-gray-5">
									Layanan ini hanya berlangsung hingga kuota terpenuhi
								</p>
								<hr />
								<p className="h5 font-weight-semibold text-center mb-rlv-C">
									Pilihan Paket
								</p>
								<div className="text-center row mb-rlv-B">
									<div className="col-12 col-lg-4 mb-rlv-B">
										<div
											className="pt-rlv-A px-lg-rlv-A"
											style={{
												border: "1px solid #333333",
												borderRadius: "8px",
											}}
										>
											<h6 className="font-weight-semibold mb-rlv-A">
												Meditasi 3 Bulan
											</h6>
											<h6
												className="font-weight-semibold"
												style={{ textDecoration: "line-through" }}
											>
												Rp 150.000
											</h6>
											<h5 className="font-weight-semibold">Rp 99.000</h5>
										</div>
									</div>
									<div className="col-12 col-lg-4 mb-rlv-B">
										<div
											className="pt-rlv-A px-lg-rlv-A"
											style={{
												border: "1px solid #333333",
												borderRadius: "8px",
											}}
										>
											<h6 className="font-weight-semibold mb-rlv-A">
												Meditasi 6 Bulan
											</h6>
											<h6
												className="font-weight-semibold"
												style={{ textDecoration: "line-through" }}
											>
												Rp 300.000
											</h6>
											<h5 className="font-weight-semibold">Rp 179.000</h5>
										</div>
									</div>
									<div className="col-12 col-lg-4 mb-rlv-B">
										<div
											className="pt-rlv-A px-lg-rlv-A"
											style={{
												border: "1px solid #333333",
												borderRadius: "8px",
											}}
										>
											<h6 className="font-weight-semibold mb-rlv-A">
												Meditasi 12 Bulan
											</h6>
											<h6
												className="font-weight-semibold"
												style={{ textDecoration: "line-through" }}
											>
												Rp 600.000
											</h6>
											<h5 className="font-weight-semibold">Rp 297.000</h5>
										</div>
									</div>
								</div>
								<p className="px-0 h6 mb-A text-gray-5 font-weight-semibold text-center mb-rlv-C">
									Silakan pilih paket yang Anda inginkan dan melakukan
									pembayaran paket SPESIAL ini ke rekening :
									<br />
									<br />
									Bank Mandiri 1410-595-956-566
									<br />
									atas Nama PT. Riliv Psikologi Indonesia
								</p>
								<hr />
								<p className="px-0 paragraph-riliv mb-rlv-A text-gray-5">
									<strong>Penting diperhatikan</strong>
								</p>
								<ol
									type="1"
									className="mb-rlv-A"
									style={{ paddingLeft: "16px" }}
								>
									<li>
										Anda bisa mencatat nomor rekening diatas untuk memudahkan
										Anda melakukan pembayaran.
									</li>
									<li>
										Saat selesai melakukan pembayaran, silahkan melakukan konfirtmasi melalui email :
										<a className="text-gray-5" href="mailto:info@riliv.co">
											<strong> info@riliv.co</strong>
										</a>
										atau melalui Line dengan ID : @riliv (gunakan @) dengan subject "Konfirmasi Pembayaran Meditasi" dengan mengirimkan bukti transfer/pembayaran pada kami.
									</li>
								</ol>
								<p className="px-0 paragraph-riliv mb-rlv-C text-gray-5">
									Kami tunggu kabar baiknya dan kami siap membantu Anda lebih
									sehat mental. Terima kasih😊
								</p>

								<a
									href="mailto:info@riliv.co"
									target="_blank"
									className="btn btn-block btn-special-grad-1 text-center font-weight-bold"
								>
									Konfirmasi Pembayaran
								</a>
							</div>

							{/* Column 2 - Image */}
							<div className="col-lg-6 col-12 order-lg-1 order-0 text-center py-lg-5 py-3 align-self-center">
								<img
									src="/img-promo/illustration1.png"
									alt=""
									className="d-md-inline d-none"
									style={{ maxWidth: "100%", transform: "scaleX(-1)" }}
								/>
								<img
									src="/img-promo/illustration1.png"
									alt=""
									className="d-inline d-md-none"
									style={{ width: "80vw", transform: "scaleX(-1)" }}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<RilivFooter hideAll />
			<BootstrapScript />
		</Fragment>
	);
};

export default Counseling;
