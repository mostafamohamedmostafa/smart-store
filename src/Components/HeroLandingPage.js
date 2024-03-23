import allinone from "../img/Allinone.png";
import allproducts from "../img/AllProducts.png";
import creditcard from "../img/CreditCard.png";
import fastdelivery from "../img/FastDelivery.png";

function HeroLandingPage() {
  return (
    <section>
      <div className="HeroLandingPage">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={allinone}
                className="d-block w-100 img-fluid"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={allproducts}
                className="d-block w-100  img-fluid"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={creditcard}
                className="d-block w-100  img-fluid"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src={fastdelivery}
                className="d-block w-100  img-fluid"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <section className="container  ">
        <div className="row  row-cols-md-4 g-4 ">
          <div className="col" data-aos="zoom-in-up">
            <div className="card h-100 ">
              <img src={allinone} className="img-fluid rounded-start " alt="" />
              <div className="card-body">
                <h4 className="card-title text-center">"All in one"</h4>
              </div>
            </div>
          </div>

          <div className="col" data-aos="zoom-in-up">
            <div className="card h-100 ">
              <img
                src={allproducts}
                className="img-fluid rounded-start "
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title text-center">" All Products"</h4>
              </div>
            </div>
          </div>

          <div className="col" data-aos="zoom-in-up">
            <div className="card h-100 ">
              <img
                src={creditcard}
                className="img-fluid rounded-start "
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title text-center">"CreditCard Payment"</h4>
              </div>
            </div>
          </div>

          <div className="col" data-aos="zoom-in-up">
            <div className="card h-100 ">
              <img
                src={fastdelivery}
                className="img-fluid rounded-start "
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title text-center">"FastDelivery"</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default HeroLandingPage;
