"use client";
import Image from "next/image";
import img2 from "../../../public/images/img2.jpg";
import img3 from "../../../public/images/img3.jpg";
import img4 from "../../../public/images/img4.jpg";
import img5 from "../../../public/images/img5.jpg";
import img6 from "../../../public/images/img6.jpg";
import img7 from "../../../public/images/img7.jpg";

function MainPage() {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
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
          <div className="carousel-item active" data-bs-interval="2000">
            <Image
              className="d-block w-100"
              src={img7}
              alt="Third slide"
              width={700}
              height={450}
            ></Image>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <Image
              className="d-block w-100"
              src={img4}
              alt="Third slide"
              width={700}
              height={450}
            ></Image>
          </div>

          <div className="carousel-item" data-bs-interval="2000">
            <Image
              className="d-block w-100"
              src={img3}
              alt="Third slide"
              width={700}
              height={450}
            ></Image>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <Image
              className="d-block w-100"
              src={img5}
              alt="Third slide"
              width={700}
              height={450}
            ></Image>
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
  );
}

export default MainPage;
