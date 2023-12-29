import React from "react";
import bannerImg from "../../assets/banner-img.png";
import "./ResponsivBannerSection/index.scss";
import "./StylesBannerSection/index.scss";
export const BannerSection = () => {
  return (
    <section className="sectionBannerSection">
      <div>
        <span>JOSÉDASILVA</span>
        <h1>
          Bem vindo ao <span> meu portifólio</span>
        </h1>
        <p>Uma frase interessante sobre mim</p>
        <button>Saiba mais</button>
      </div>
      <img src={bannerImg} alt="" />
    </section>
  );
};
