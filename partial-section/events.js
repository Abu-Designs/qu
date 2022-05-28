
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


.event-bx {
	box-shadow: 0 0 15px 0 rgba(29, 25, 0, 0.25);
}

.upcoming-event-carousel {
	margin-top: -15px;
}

.upcoming-event-carousel .item {
	padding: 15px;
}

.event-bx .info-bx {
	padding: 30px;
}

.event-time {
	color: #fff;
	background-color: #167687;
	text-align: center;
	padding: 5px;
	border-radius: 4px;
}

.event-time .event-date {
	font-size: 40px;
	font-family: Roboto;
	font-weight: 100;
	margin: -6px 0;
}

.event-section .event-title,
.event-section .event-month,
.media-post {
	color: #167687;
}

.event-section .info-bx {
	padding: 0 1rem 0 0;
}

.event-left-side {
	padding: 15px 10px;
	display: flex;
}

.event-left-section:hover>.event-left-side {
	cursor: pointer;
	background-color: #E7E7E7;
	border-left: 5px solid #167687;
}

.event-section .event-month {
	text-align: center;
	font-weight: 500;
	font-size: 20px;
}

.media-post {
	margin-top: -10px !important;
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


</style>`);

document.write(`<div class="section-area event-section content-inner service-info-bx">
<div class="container">
	<div class="row">
		<div class="col-md-12 heading-bx">
			<h3 class="title-head">Latest <span>Events</span></h3>
		</div>
	</div>
	<br />
	<div class="row">
		<div class="item col-md-6">
			<div class="info-bx d-flex event-left-section">
				<div class="event-left-side">
					<div style="margin-right: 20px;">
						<div class="event-time">
							<div class="event-date">29</div>
						</div>
						<div class="event-month">Oct</div>
					</div>
					<div class="event-info">
						<h5 class="event-title">Education Autumn Tour 2019</h5>
						<ul class="media-post">
							<li> 7:00 am to 8:00 am</li>
						</ul>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the..</p>
					</div>
				</div>
			</div>
			<br />
			<div class="info-bx d-flex event-left-section">
				<div class="event-left-side">
					<div style="margin-right: 20px;">
						<div class="event-time">
							<div class="event-date">25</div>
						</div>
						<div class="event-month">Oct</div>
					</div>
					<div class="event-info">
						<h5 class="event-title">Education Autumn Tour 2019</h5>
						<ul class="media-post">
							<li> 7:00 am to 8:00 am</li>
						</ul>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the..</p>
					</div>
				</div>

			</div>
		</div>
		<div class="item col-md-6 calender-photo">
			<div class="row">
				<div class="col-8 p-0" style="z-index: 10;">
					<div class="calendar">
						<div class="header">
							<a data-action="prev-month" href="javascript:void(0)"
								title="Previous Month"><i></i></a>
							<div class="text" data-render="month-year" style="padding-top: 8px;">
							</div>
							<a data-action="next-month" href="javascript:void(0)"
								title="Next Month"><i></i></a>
						</div>
						<div class="months" data-flow="left">
							<div class="month month-a">
								<div class="render render-a"></div>
							</div>
							<div class="month month-b">
								<div class="render render-b"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-4 p-0" style="z-index: 0;">
					<img src="assets/images/gallery/cbg.jpg"
						style="height: 100%; border-radius: 0 10px 10px 0;object-fit: cover;" />
				</div>
			</div>
		</div>
	</div>
</div>

</div>`);