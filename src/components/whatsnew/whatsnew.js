
import React from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
// import catering from '../../images/catering.png';
import "../../stylee.css"


import frame1 from '../../image/Frame1.png';
import frame2 from '../../image/Frame2.png';
import frame3 from '../../image/Frame3.png';
import frame4 from '../../image/Frame4.png';
import frame5 from '../../image/Frame5.png';
import footerlogo from '../../image/footerlogo.png';
import userff from '../../image/userff.png';
import icon from '../../image/Icon.png';
import { Link, StaticQuery,graphql } from 'gatsby';


const Whatsnew = () => (

	<StaticQuery
	query={graphql`
            query {
                allWpNews {
					nodes {
					  id
					  title
					  featuredImage {
						node {
						  sourceUrl
						}
					  }
					  content
					  author {
						node {
						  name
						}
					  }
					  date(formatString: " DD MMMM yyyy")
					}
				  }
              }
            `}
	
		render={data => (

			<>
				<section class="section new00">
					<div class="secation01 bhg secn_abouts">
						<div class="container">
							<div class="row">
								<div class="col-md-12">
									<div class="our_main_heading text-center">
										<div class="bread_cumg">
											<h1 class="text-center"><strong>News </strong>  From QLSPACE</h1>
											<p>Get the latest updates and helpful information</p>
										</div>
									</div>
									<div class="img_arrow">
										<div class="roww_wrap">
											<a href="#"><img src="https://www.qlspace.com.au/wp-content/themes/qls/assets/image/arrow.svg" /></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="section sectionnewss">
					<div class="whats_new_page">
						<div class="container">
							<div class="row">
								<div class="col-md-12">
									<div class="list_tab_wg">
										<ul>
											<li ><Link to='/app/event'>Events</Link></li>
											<li class="active_cl"><Link to='/app/whatsnew'>News</Link></li>
											<li><Link to='/app/blog'>Blogs</Link></li>
											<li><Link to='/app/partner'>Partner News</Link></li>
											<li><Link to='/app/videos'>Videos</Link></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="list_mnbv">
						<div class="container">
							<div class="row">
							{data && data.allWpNews && data.allWpNews.node && data.allWpNews.node.map((nodedata, i) => {
								<div class="col-md-6">
									<div class="our_lkhb">
										<div class="imh_bc">
											<div class="inner_ghv">
												<a href="https://www.qlspace.com.au/news/spacex-successfully-launches-10-space-force-tranche-0-satellites-after-abort-delay-lands-rocket/">
													<img src="https://www.qlspace.com.au/wp-content/uploads/2023/04/News-image-3rd-April-546x333-1.jpg" />
												</a>
											</div>
											<div class="date_wrad_news">
												<div class="date_rn">
													<div class="date_icon"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/icon-_calendar-outline_.png" /></span> 03 April 2023</div>
												</div>
												<div class="oir_amin">
													<div class="uhgbv"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/userfv.png" /></span> Admin</div>
												</div>
											</div>
											<div class="heading_nmb">
												<h4>
													<a href="https://www.qlspace.com.au/news/spacex-successfully-launches-10-space-force-tranche-0-satellites-after-abort-delay-lands-rocket/">
														SpaceX successfully launches 1...    </a>
												</h4>
												<div class="next_page">
													<a href="https://www.qlspace.com.au/news/spacex-successfully-launches-10-space-force-tranche-0-satellites-after-abort-delay-lands-rocket/">Read More <span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/arrowright.png" /></span></a>
												</div>
											</div>
										</div>
									</div>
								</div>
							})}
								<div class="col-md-6">
									<div class="our_lkhb">
										<div class="imh_bc">
											<div class="inner_ghv">
												<a href="https://www.qlspace.com.au/news/space-tech/">
													<img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/news.png" />
												</a>
											</div>
											<div class="date_wrad_news">
												<div class="date_rn">
													<div class="date_icon"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/icon-_calendar-outline_.png" /></span> 24 March 2023</div>
												</div>
												<div class="oir_amin">
													<div class="uhgbv"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/userfv.png" /></span> Admin</div>
												</div>
											</div>
											<div class="heading_nmb">
												<h4>
													<a href="https://www.qlspace.com.au/news/space-tech/">
														Space tech    </a>
												</h4>
												<div class="next_page">
													<a href="https://www.qlspace.com.au/news/space-tech/">Read More <span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/arrowright.png" /></span></a>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="col-md-6">
									<div class="our_lkhb">
										<div class="imh_bc">
											<div class="inner_ghv">
												<a href="https://www.qlspace.com.au/news/winner-unearthed-thinking-critical-sa/">
													<img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/13_546.jpg" />
												</a>
											</div>
											<div class="date_wrad_news">
												<div class="date_rn">
													<div class="date_icon"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/icon-_calendar-outline_.png" /></span> 24 March 2023</div>
												</div>
												<div class="oir_amin">
													<div class="uhgbv"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/userfv.png" /></span> Admin</div>
												</div>
											</div>
											<div class="heading_nmb">
												<h4>
													<a href="https://www.qlspace.com.au/news/winner-unearthed-thinking-critical-sa/">
														Winner: Unearthed Thinking Cri...    </a>
												</h4>
												<div class="next_page">
													<a href="https://www.qlspace.com.au/news/winner-unearthed-thinking-critical-sa/">Read More <span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/arrowright.png" /></span></a>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="col-md-6">
									<div class="our_lkhb">
										<div class="imh_bc">
											<div class="inner_ghv">
												<a href="https://www.qlspace.com.au/news/winner-announcement-critical-thinking-sa/">
													<img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/imgpsh_fullsize_anim-3.jpg" />
												</a>
											</div>
											<div class="date_wrad_news">
												<div class="date_rn">
													<div class="date_icon"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/icon-_calendar-outline_.png" /></span> 24 March 2023</div>
												</div>
												<div class="oir_amin">
													<div class="uhgbv"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/userfv.png" /></span> Admin</div>
												</div>
											</div>
											<div class="heading_nmb">
												<h4>
													<a href="https://www.qlspace.com.au/news/winner-announcement-critical-thinking-sa/">
														Winner Announcement, Critical ...    </a>
												</h4>
												<div class="next_page">
													<a href="https://www.qlspace.com.au/news/winner-announcement-critical-thinking-sa/">Read More <span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/arrowright.png" /></span></a>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="col-md-6">
									<div class="our_lkhb">
										<div class="imh_bc">
											<div class="inner_ghv">
												<a href="https://www.qlspace.com.au/news/unearthed-meet-the-winners/">
													<img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/imgpsh_fullsize_anim-2.jpg" />
												</a>
											</div>
											<div class="date_wrad_news">
												<div class="date_rn">
													<div class="date_icon"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/icon-_calendar-outline_.png" /></span> 24 March 2023</div>
												</div>
												<div class="oir_amin">
													<div class="uhgbv"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/userfv.png" /></span> Admin</div>
												</div>
											</div>
											<div class="heading_nmb">
												<h4>
													<a href="https://www.qlspace.com.au/news/unearthed-meet-the-winners/">
														Unearthed: Meet the Winners    </a>
												</h4>
												<div class="next_page">
													<a href="https://www.qlspace.com.au/news/unearthed-meet-the-winners/">Read More <span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/arrowright.png" /></span></a>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="col-md-6">
									<div class="our_lkhb">
										<div class="imh_bc">
											<div class="inner_ghv">
												<a href="https://www.qlspace.com.au/news/thinking-critical-south-australia-the-winners/">
													<img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/imgpsh_fullsize_anim-2.jpg" />
												</a>
											</div>
											<div class="date_wrad_news">
												<div class="date_rn">
													<div class="date_icon"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/icon-_calendar-outline_.png" /></span> 24 March 2023</div>
												</div>
												<div class="oir_amin">
													<div class="uhgbv"><span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/userfv.png" /></span> Admin</div>
												</div>
											</div>
											<div class="heading_nmb">
												<h4>
													<a href="https://www.qlspace.com.au/news/thinking-critical-south-australia-the-winners/">
														Thinking Critical South Austra...    </a>
												</h4>
												<div class="next_page">
													<a href="https://www.qlspace.com.au/news/thinking-critical-south-australia-the-winners/">Read More <span><img src="https://www.qlspace.com.au/wp-content/uploads/2023/03/arrowright.png" /></span></a>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="pagination">
									<span aria-current="page" class="page-numbers current">1</span>
									<a class="page-numbers" href="https://www.qlspace.com.au/news/page/2/">2</a>
									<span class="page-numbers dots">…</span>
									<a class="page-numbers" href="https://www.qlspace.com.au/news/page/4/">4</a>
									<a class="page-numbers" href="https://www.qlspace.com.au/news/page/5/">5</a>
									<a class="next page-numbers" href="https://www.qlspace.com.au/news/page/2/"> <i class="fa fa-angle-right" aria-hidden="true"></i></a></div>

							</div>
						</div>
					</div>
				</section>
				<section class="section">
					<div class="main_fot bhg">
						<footer class="footer_wrap">
							<div class="container">
								<div class="row">
									<div class="col-md-12">
										<h2>Subscribe to our newsletter</h2>
										<p>Lörem ipsum monomubegt håd epiv dide.</p>
									</div>
									<div class="col-md-12">
										<div class="our_news_leeter">
											<form class="row g-3">
												<div class="col-md-6">
													<div class="hfnfa">
														<input type="text" class="form-control" id="name" placeholder="Enter Name" />
														<div class="imgddds">
															<img src={userff} alt="" />

														</div>
													</div>
												</div>
												<div class="col-md-6">
													<div class="hfnfa">
														<input type="text" class="form-control" id="email" placeholder="Enter Email" />
														<div class="imgddds">
															<img src={icon} alt="" />

														</div>
													</div>
												</div>
												<div class="col-12">
													<button type="submit" class="btn btn-primary">Submit</button>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
							<div class="our_main_footer">
								<div class="container">
									<div class="row">
										<div class="col-md-3">
											<div class="images_logo">
												<div class="logo_footer">
													<a href="#">
														<img src={footerlogo} alt="" />
													</a>
												</div>
												<div class="cont_footer">
													<p>Our goal is to develop cutting-edge space technology that accomplishes the incredible.</p>
												</div>
												<div class="list_s">
													<ul>
														<li><a href="#">
															<img src={frame1} alt="" /></a></li>
														<li><a href="#"><img src={frame2} alt="" /></a></li>
														<li><a href="#"><img src={frame3} alt="" /></a></li>
														<li><a href="#"><img src={frame4} alt="" /></a></li>
														<li><a href="#"><img src={frame5} alt="" /></a></li>
													</ul>
												</div>
											</div>
										</div>
										<div class="col-md-3">

											<div id="myDIV" class="ythfr">
												<ul>
													<li class="btn_list active_list"><a href="#">Home</a></li>
													<li class="btn_list"><a href="#">About Us</a></li>
													<li class="btn_list"><a href="#">Solution</a></li>
													<li class="btn_list"><a href="#">Partner</a></li>
													<li class="btn_list"><a href="#">News Room</a></li>
												</ul>

											</div>

										</div>
										<div class="col-md-3">
											<div class="kn_list">
												<div class="kn_left_list">
													<div class="lefti_text">
														<div class="inner_l">
															{/* <img src="assets/image/Icon.png"> */}
														</div>
													</div>
													<div class="righti_text">
														<div class="rig_th">
															<span>Mail</span>
															<p>info@qlspace.com.au</p>
														</div>
													</div>
												</div>
												<div class="kn_left_list">
													<div class="lefti_text">
														<div class="inner_l">
															{/* <img src="assets/image/map.png"> */}
														</div>
													</div>
													<div class="righti_text">
														<div class="rig_th">
															<span>Address</span>
															<p>45 St Georges Terrace, Ground Floor,Perth, WA, 6000</p>
														</div>
													</div>
												</div>
												<div class="kn_left_list">
													<div class="lefti_text">
														<div class="inner_l">
															{/* <img src="assets/image/map.png"> */}
														</div>
													</div>
													<div class="righti_text">
														<div class="rig_th">
															<span>Addess</span>
															<p>Ground Floor, Space Lab Building, Lot Fourteen, Frome Road, ADELAIDE | SA |5000</p>
														</div>
													</div>
												</div>
											</div>

										</div>
										<div class="col-md-3">
											<div class="kn_list">
												<div class="kn_left_list">
													<div class="lefti_text">
														<div class="inner_l">
															{/* <img src="assets/image/phone.png"> */}
														</div>
													</div>
													<div class="righti_text">
														<div class="rig_th">
															<span>Mail</span>
															<p>+61 8 6262 3559</p>
														</div>
													</div>
												</div>
												<div class="kn_left_list">
													<div class="lefti_text">
														<div class="inner_l">
															{/* <img src="assets/image/phone.png"> */}
														</div>
													</div>
													<div class="righti_text">
														<div class="rig_th">
															<span>Mail</span>
															<p>+61 410 881 616</p>
														</div>
													</div>
												</div>

											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="copy_right">
								<div class="container">
									<div class="row">
										<div class="col-md-6">
											<div class="outg_o">
												<p>Copyright ©2023 SPACE. Powered By QL Tech</p>
											</div>
										</div>
										<div class="col-md-6">
											<div class="right_text_copy">
												All Rights Reserved <span><ul>
													<li><a href="#"> Terms and Conditions </a></li>
													<li><a href="#"> Privacy Policy </a></li>
												</ul>
												</span>

											</div>
										</div>
									</div>
								</div>
							</div>
						</footer>
					</div>
				</section>
			</>

		)}
	/>
);
export default Whatsnew;
