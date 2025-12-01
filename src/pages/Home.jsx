import React from 'react'
import './Home.css'


const Home = () => {
  return (

    <div className='Home'>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a href="" className="navbar-brand"> <img src="/assets/img/logo.png" alt="" /></a>
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#NavbarIcon">
            <img src="/assets/img/bar.png" alt="" />
          </button>
          <div className="collapse navbar-collapse" id="NavbarIcon">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"> <a href="" className="nav-link">Used Cars</a></li>
              <li className="nav-item"> <a href="" className="nav-link">Auctions</a></li>
              <li className="nav-item"> <a href="" className="nav-link">New Cars</a></li>
              <li className="nav-item"> <a href="" className="nav-link">Sell Cars</a></li>
              <li className="nav-item"> <a href="" className="nav-link">Local Dealers</a></li>
              <li className="nav-item"> <a href="" className="nav-link">Support</a></li>

              <li className="nav-item"> <a href="" className="nav-link SignUp">
                <img src="/assets/img/person-fill.svg" alt="" />
                Sign up</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="section1">
        <div className="container">
          <h1>Say hello to your next <br />
            awesome vehicle</h1>
          <p className="Section1P">Featuring Used, Wholesale and Salvage Cars, Trucks  <br /> & SUVs for Sale</p>

          <div className="TopFooterSection">
            <div className="row">
              <div className="col-md-2 BorderRight">
                <p> Type</p>
                <select className="form-select">
                  <option selected>Used Card</option>
                  <option value="1">1 Card</option>
                  <option value="2">2 Card</option>
                  <option value="3">3 Card</option>
                </select>
              </div>
              <div className="col-md-2 BorderRight">
                <p>Make</p>
                <select className="form-select">
                  <option selected>Infiniti</option>
                  <option value="1">1 Card</option>
                  <option value="2">2 Card</option>
                  <option value="3">3 Card</option>
                </select>
              </div>
              <div className="col-md-2 Withoutp BorderRight ">
                <p className="SomeMargin"></p>
                <select className="form-select">
                  <option selected>Year</option>
                  <option value="1">1 Card</option>
                  <option value="2">2 Card</option>
                  <option value="3">3 Card</option>
                </select>
              </div>
              <div className="col-md-2 Withoutp BorderRight ">
                <p className="SomeMargin"></p>
                <select className="form-select">
                  <option selected>Model</option>
                  <option value="1">1 Card</option>
                  <option value="2">2 Card</option>
                  <option value="3">3 Card</option>
                </select>
              </div>
              <div className="col-md-2 Withoutp">
                <p></p>
                <select className="form-select">
                  <option selected>Price</option>
                  <option value="1">1 Card</option>
                  <option value="2">2 Card</option>
                  <option value="3">3 Card</option>
                </select>
              </div>
              <div className="col-md-2 Withoutp text-center">
                <button className="btn HeaderButton"><img src="img/search (1).svg" alt="" /> Search</button>
              </div>

            </div>
          </div>
        </div>
      </section>


      <section className="Section2">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-2">
              <img src="img/1.png" alt="" />
            </div>

            <div className="col-md-2 ">
              <img src="img/3.png" alt="" />
            </div>

            <div className="col-md-2">
              <img src="img/2.png" alt="" />
            </div>

            <div className="col-md-2">
              <img src="img/4.png" alt="" />
            </div>

            <div className="col-md-2">
              <img src="img/5.png" alt="" />
            </div>

            <div className="col-md-2">
              <img src="img/6.png" alt="" />
            </div>

          </div>
        </div>
      </section>


      <section className="section3">
        <div className="container">
          <div className="row">
            <h3>Trending Near You</h3>
            <div className="col-md-4">
              <div className="card">
                <img src="img/car2.png" alt="" className="card-img-top" />
                <div className="card-body">
                  <h5>Subaru Forester</h5>
                  <p>11 475 Miles</p>
                  <p>AWD <img src="img/dot.svg" alt="" /> loem ipsom</p>
                  <div className="btn-group gap-2">
                    <button className="btn Button1">$21,480</button>
                    <button className="btn Button2">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-md-4">
              <div className="card">
                <img src="img/car1.png" alt="" className="card-img-top" />
                <div className="card-body">
                  <h5>Subaru Forester</h5>
                  <p>11 475 Miles</p>
                  <p>AWD <img src="img/dot.svg" alt="" /> loem ipsom</p>
                  <div className="btn-group gap-2">
                    <button className="btn Button1">$21,480</button>
                    <button className="btn Button2">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img src="img/car2.png" alt="" className="card-img-top" />
                <div className="card-body">
                  <h5>Subaru Forester</h5>
                  <p>11 475 Miles</p>
                  <p>AWD <img src="img/dot.svg" alt="" /> loem ipsom</p>
                  <div className="btn-group gap-2">
                    <button className="btn Button1">$21,480</button>
                    <button className="btn Button2">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      <section className="section4 container">
        <header className="FindcarHeader">
          <h2 className="findCar">Find car by model</h2>
          <p className="ArrowArea">
            1/6
            <span><img src="img/arrowLeft.png" alt="" /></span>
            <span><img src="img/arrowRight.png" alt="" /></span>
          </p>
        </header>

        <section className="CarouselSection d-flex">

          <div className="product text-center">
            <img src="img/car/car1.png" alt="" />
            <div className="ProDetails">
              <p className="Sedan">Sedan</p>
              <button className="btn ProBTN">23,457 vehicles</button>
            </div>
          </div>

          <div className="product text-center">
            <img src="img/car/car1.png" alt="" />
            <div className="ProDetails">
              <p className="Sedan">SUV</p>
              <button className="btn ProBTN1">23,457 vehicles</button>
            </div>
          </div>

          <div className="product text-center">
            <img src="img/car/car1.png" alt="" />
            <div className="ProDetails">
              <p className="Sedan">SUV</p>
              <button className="btn ProBTN1">23,457 vehicles</button>
            </div>
          </div>

          <div className="product text-center">
            <img src="img/car/car1.png" alt="" />
            <div className="ProDetails">
              <p className="Sedan">SUV</p>
              <button className="btn ProBTN1">23,457 vehicles</button>
            </div>
          </div>

          <div className="product text-center">

          </div>

          <div className="product text-center">
            <img src="img/car/car1.png" alt="" />
            <div className="ProDetails">
              <p className="Sedan">SUV</p>
              <button className="btn ProBTN1">23,457 vehicles</button>
            </div>
          </div>
          <div className="product text-center">
            <img src="img/car/car1.png" alt="" />
            <div className="ProDetails">
              <p className="Sedan">SUV</p>
              <button className="btn ProBTN1">23,457 vehicles</button>
            </div>
          </div>
          <div className="product text-center">
            <img src="img/car/car1.png" alt="" />
            <div className="ProDetails">
              <p className="Sedan">SUV</p>
              <button className="btn ProBTN1">23,457 vehicles</button>
            </div>
          </div>
          <div className="product text-center">
            <img src="img/car/car1.png" alt="" />
            <div className="ProDetails">
              <p className="Sedan">SUV</p>
              <button className="btn ProBTN1">23,457 vehicles</button>
            </div>
          </div>
        </section>


      </section>
    </div>

  )
}

export default Home