
document.write(`<style>
    
.news-section img {
	height: 100%;
	width: 100%;
}


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

.img-news {
	padding: 0;
	background: #167687 !important;
}

.img-news :hover {
	cursor: pointer;
	/* opacity: 0.4; */
}

.news-info{
	display: none;
}

.news-hover-color{
	background-color: #10798F;
	width: 100%;
	height: 100%;
	position: absolute;
	bottom: 0;
	opacity: 0.4;
	display: none;
}

.img-news > .news-info h6 , .news-info h4, .news-info p, .news-info a{
	color: white !important;
	line-height: normal;
	margin-bottom: 5px;
}

.news-info a{
	text-decoration: underline !important;
}

.img-news:hover > .news-info,
.img-news:hover > .news-hover-color{
	display: block;
}

.img-news:hover > .news-info{
	padding-left: 50px;
	padding-bottom: 30px;
	bottom: 0;
}

.btn-section {
	width: 45px;
	height: 45px;
	background-color: #10798F;
	border-radius: 50%;
	text-align: center;
	display: inline-block;
	margin-bottom: 1rem;
}

.btn-dot {
	width: 7px;
	height: 7px;
	border-radius: 50%;
	background-color: white;
	display: inline-block;
	margin-top: 42%;
}

</style>`);

document.write(`<div class="section-area news-section content-inner service-info-bx">
<div class="container">
    <div class="row">
        <div class="col-md-12 heading-bx">
            <h3 class="title-head">Latest <span>News</span></h3>
            <div class="btn-section">
                <div class="btn-dot"></div>
                <div class="btn-dot"></div>
                <div class="btn-dot"></div>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-lg-4 col-md-4 col-sm-6 img-news">
        <img src="assets/images/gallery/sec-photos1.jpg" alt="">
        <div class="news-hover-color"></div>
        <div class="news-info" style="position: absolute;">
            <h6>12 December 2022</h6>
            <h4>Title</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores est tenetur...</p>
            <a href="#">More</a>
        </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-6 img-news">
        <img src="assets/images/gallery/sec-photos2.jpg" alt="">
        <div class="news-hover-color"></div>
        <div class="news-info" style="position: absolute;">
            <h6>12 December 2022</h6>
            <h4>Title</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores est tenetur...</p>
            <a href="#">More</a>
        </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-12 img-news">
        <img src="assets/images/gallery/sec-photos3.jpg" alt="">
        <div class="news-hover-color"></div>
        <div class="news-info" style="position: absolute;">
            <h6>12 December 2022</h6>
            <h4>Title</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores est tenetur...</p>
            <a href="#">More</a>
        </div>
    </div>
</div>
</div>`);