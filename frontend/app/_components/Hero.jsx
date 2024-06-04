import React from "react";

export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dalptk18r/image/upload/v1714726696/vanessa_serpas_S4f_Yv5_LQ_4_A_unsplash_ae77010153.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus ducimus ea hic natus quis esse nesciunt quia omnis, totam culpa quod debitis sequi eligendi facere suscipit praesentium earum ipsa iste ipsum animi at fuga provident.
          </p>
          <a className="btn btn-primary" href="/sign-up">Get Started</a>
        </div>
      </div>
    </div>
  );
}
