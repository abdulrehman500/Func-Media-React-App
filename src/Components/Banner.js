import React from 'react'
// import IconsFirst from '../../public/assets/img/bar-icons/1.png'
import './Banner.css';
export default function Banner() {

// const  openNav = () => {
//     document.getElementById("mySidenav").style.width = "100%";
//   }

// const  closeNav = () => {
//     document.getElementById("mySidenav").style.width = "0";
//   }
  function sayHello() {
    alert('Hello!');
    document.getElementById("mySidenav").style.width = "100%";
  }

    return (

      
        <div>
<div id="carousel" class="carousel slide hero-slides" data-ride="carousel">
  <ol class="carousel-indicators">
    <li class="active" data-target="#carousel" data-slide-to="0"></li>
    <li data-target="#carousel" data-slide-to="1"></li>
    <li data-target="#carousel" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" role="listbox">
    <div class="carousel-item active boat">
      <div class=" h-100 d-none d-md-block">
        <div class="row align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="caption animated fadeIn">
              <h2 class="animated fadeInUp">Boat Excursions</h2>
              <p class="animated fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique nisl vitae luctus sollicitudin. Fusce consectetur sem eget dui tristique, ac posuere arcu varius.</p>
              {/* <a class="animated fadeInUp btn delicious-btn" href="#">Learn more</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item sea">
      <div class=" d-none d-md-block">
        <div class="row align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="caption animated fadeIn">
              <h2 class="animated fadeInUp">Discover the canyon by the sea</h2>
              <p class="animated fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique nisl vitae luctus sollicitudin. Fusce consectetur sem eget dui tristique, ac posuere arcu varius.</p>
              {/* <a class="animated fadeInUp btn delicious-btn" href="#">Learn more</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item river">
      <div class=" d-none d-md-block">
        <div class="row align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="caption animated fadeIn">
              <h2 class="animated fadeInUp">Explore the river valley</h2>
              <p class="animated fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique nisl vitae luctus sollicitudin. Fusce consectetur sem eget dui tristique, ac posuere arcu varius.</p>
              {/* <a class="animated fadeInUp btn delicious-btn" href="#">Learn more</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
{/* <!--nav bar  --> */}
<nav class="navbar fixed-top-nav navbar-toggleable-md navbar-light">
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>


  {/* <!-- all the links inside mobile menu  --> */}
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    {/* <!-- left side nav bar  --> */}
    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Team</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Store</a>
      </li>
    </ul>
  </div>
</nav>
{/* <!-- end nav  --> */}


<div class="as-seen-in-logos wf-section">
  <a href="/news" target="_blank" class="client w-inline-block">
  <img src="https://picsum.photos/seed/picsum/1200/600" alt="" class="client-logo"/></a>
  <a href="/news" target="_blank" class="client w-inline-block">
    <img src="https://picsum.photos/seed/picsum/1200/600" alt="" class="client-logo"/>
      </a><a href="/news" target="_blank" class="client w-inline-block">
        <img src="https://picsum.photos/seed/picsum/1200/600" 
         class="client-logo"/></a><a href="/news" target="_blank" class="client w-inline-block">
          <img src="https://picsum.photos/seed/picsum/1200/600" alt="" class="client-logo"/></a><a href="/news" target="_blank" class="client w-inline-block">
            <img src="https://picsum.photos/seed/picsum/1200/600" alt="" class="client-logo"/></a><a href="/news" target="_blank" class="client w-inline-block">
              <img src="https://picsum.photos/seed/picsum/1200/600" alt="" class="client-logo"/></a>
          <a href="/news" target="_blank" class="client mobile w-inline-block">
            <img src="https://picsum.photos/seed/picsum/1200/600"   sizes="100vw" alt="" class="client-logo up mobile"/></a></div>
        </div>
    )
}
