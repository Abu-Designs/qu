
document.write(`<style>


.service-info-bx {
	margin-top: 20px;
}

.service-bx {
	box-shadow: 0 0 25px 0 rgba(29, 25, 0, 0.25);
	transition: all 0.5s;
	-moz-transition: all 0.5s;
	-webkit-transition: all 0.5s;
	-ms-transition: all 0.5s;
	-o-transition: all 0.5s;
	position: relative;
	background-color: #fff;
}

.service-bx [class*="feature-"] {
	box-shadow: 0 0 25px 0 rgba(29, 25, 0, 0.15);
	margin-top: -30px;
	position: relative;
	top: -40px;
	margin-bottom: -20px;
}

.service-bx .info-bx {
	padding: 30px;
}

.service-bx:hover {
	transform: translateY(-15px);
	-moz-transform: translateY(-15px);
	-webkit-transform: translateY(-15px);
	-ms-transform: translateY(-15px);
	-o-transform: translateY(-15px);
}

.heading-bx {
	margin-bottom: -10px;
}

.heading-bx.left p {
	max-width: 500px;
	margin-bottom: 0;
}

.title-head {
	color: #623C21;
	font-weight: 500;
	display: inline-block;
}

.title-head span {
	font-weight: 500;
	color: black;
}


/* Popular Courses */
.cours-bx .info-bx {
	padding: 15px;
	font-size: 13px;
}

.cours-bx .action-box .btn {
	border-radius: 0;
	position: absolute;
	bottom: 0;
	left: -50%;
	transition: all 0.5s;
	-moz-transition: all 0.5s;
	-ms-transition: all 0.5s;
	-o-transition: all 0.5s;
	-webkit-transition: all 0.5s;
}

.cours-bx:hover .action-box .btn {
	left: 0;
}

.cours-bx {
	box-shadow: 0 0 25px 0 rgba(29, 25, 0, 0.25);
	border-radius: 4px;
	overflow: hidden;
}

.cours-more-info {
	border-top: 1px solid #e6e6e6;
	display: flex;
	margin: 0;
}

.cours-star {
	margin: 0;
	padding: 0;
}

.cours-star li {
	display: inline-block;
	list-style: none;
	color: #d1d1d1;
	font-size: 13px;
}

.cours-star li.active {
	color: var(--primary);
}

.cours-more-info .price,
.cours-more-info .review {
	width: 50%;
	padding: 5px 15px;
}

.cours-more-info .review span {
	font-size: 12px;
	color: #3c3c3c;
}

.cours-more-info .price del {
	font-size: 12px;
	font-weight: 500;
	color: #8e8e8e;
}

.cours-more-info .review {
	border-right: 1px solid #e6e6e6;
}

.cours-more-info .price {
	text-align: right;
}

.cours-more-info .price h5 {
	margin-bottom: 0;
}

.courses-carousel {
	margin-top: -15px;
}

.courses-carousel .item {
	padding: 15px;
}

.courses-carousel .owl-nav {
	position: absolute;
	top: -70px;
	right: 10px;
}

.testimonial-carousel .owl-nav {
	position: absolute;
	top: -80px;
	right: -5px;
}

.recent-news-carousel .owl-nav {
	position: absolute;
	top: -80px;
	right: -5px;
}

.courses-carousel .owl-nav .owl-next,
.courses-carousel .owl-nav .owl-prev,
.recent-news-carousel .owl-nav .owl-next,
.recent-news-carousel .owl-nav .owl-prev,
.testimonial-carousel .owl-nav .owl-next,
.testimonial-carousel .owl-nav .owl-prev {
	background-color: var(--primary);
	margin: 0 5px !important;
}

.courses-carousel .owl-nav .owl-next:hover,
.courses-carousel .owl-nav .owl-prev:hover,
.recent-news-carousel .owl-nav .owl-next:hover,
.recent-news-carousel .owl-nav .owl-prev:hover,
.testimonial-carousel .owl-nav .owl-next:hover,
.testimonial-carousel .owl-nav .owl-prev:hover {
	background-color: var(--sc-primary);
}


.event-info .event-title {
	font-family: Roboto;
	font-weight: 500;
	margin-bottom: 5px;
	/* font-size:24px; */
}

.event-info .media-post {
	margin-bottom: 10px;
}

.event-info .media-post li a {
	text-transform: capitalize;
	font-size: 14px;
	color: #757575;
}

.event-info p {
	color: #454545;
	margin-bottom: 0;
	font-family: Roboto;
	font-size: 15px;
	font-weight: 400;
	line-height: 24px;
}

.upcoming-event-carousel .owl-item {
	box-shadow: none;
	transform: scale(0.9);
	transition: all 0.5s;
	opacity: 0.4;
}

.upcoming-event-carousel .owl-item .item {
	padding: 0;
}

.upcoming-event-carousel .owl-item.active.center .item {
	padding: 50px;
	padding-top: 10px;
}

.heading-bx {
	margin-top: 0px;
}

@media only screen and (max-width: 640px) {
	.upcoming-event-carousel .owl-item.active.center .item {
		padding: 15px;
	}

	.heading-bx {
		margin-top: -40px;
	}
}

.upcoming-event-carousel .owl-item.active.center {
	transform: scale(1);
	transition: all 0.5s;
	opacity: 1;
}

@media only screen and (max-width: 1025px) {

	.upcoming-event-carousel.owl-btn-1 .owl-prev,
	.upcoming-event-carousel.owl-btn-1 .owl-next {
		margin: 0 15% !important;
	}
}

@media only screen and (min-width: 1025px) {

	.upcoming-event-carousel.owl-btn-1 .owl-prev,
	.upcoming-event-carousel.owl-btn-1 .owl-next {
		margin: 0 23.75% !important;
	}
}

.upcoming-event-carousel.owl-btn-1 .owl-prev,
.upcoming-event-carousel.owl-btn-1 .owl-next {
	font-size: 22px;
	width: 50px;
	height: 50px;
	line-height: 50px;
	background-color: initial !important;
}

.upcoming-event-carousel.owl-btn-1 .owl-prev:hover,
.upcoming-event-carousel.owl-btn-1 .owl-next:hover {
	color: #000 !important;
}


</style>`);

document.write(`<div class="section-area research-section content-inner service-info-bx">
<div class="container">
	<div class="row">
		<div class="col-md-12 heading-bx">
			<h3 class="title-head">Latest <span>Research</span></h3>
		</div>
	</div>
</div>
<div class="row">
	<div class="upcoming-event-carousel owl-carousel owl-btn-center-lr owl-btn-1 col-12 p-lr0">
		<div class="item">
			<div class="event-bx">
				<div class="action-box">
					<img src="assets/images/gallery/peo1.jpg" alt="">
				</div>
				<div class="info-bx d-flex">
					<div class="event-info">
						<h4 class="event-title"><a href="#">Education Autumn Tour 2019</a></h4>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the..</p>
					</div>
				</div>
			</div>
		</div>
		<div class="item">
			<div class="event-bx">
				<div class="action-box">
					<img src="assets/images/gallery/peo2.jpg" alt="">
				</div>
				<div class="info-bx d-flex">
					<div class="event-info">
						<h4 class="event-title"><a href="#">Education Autumn Tour 2019</a></h4>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the..</p>
					</div>
				</div>
			</div>
		</div>
		<div class="item">
			<div class="event-bx">
				<div class="action-box">
					<img src="assets/images/gallery/peo3.jpg" alt="">
				</div>
				<div class="info-bx d-flex">
					<div class="event-info">
						<h4 class="event-title"><a href="#">Education Autumn Tour 2019</a></h4>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the..</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</div>`);