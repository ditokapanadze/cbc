import React from "react";
import "./gallery.css";
import Cat from "../../assets/img/cat.jpg";

function Gallery() {
  console.log("REdner");
  return (
    <div className="gallery__container" id="gallery">
      {/* <div className="filters__container">
        <p>Color</p>
        <p>Hats</p>
        <p>Eyes</p>
        <p>filter</p>
        <p>filter</p>
      </div> */}
      <div className="nfts__container">
        <div className="single__nft">
          <img className="nft__img" src={Cat} alt="nft" />
          <span>cripto cat</span>
        </div>
        <div className="single__nft">
          <img className="nft__img" src={Cat} alt="nft" />
          <span>cripto cat</span>
        </div>
        <div className="single__nft">
          <img className="nft__img" src={Cat} alt="nft" />
          <span>cripto cat</span>
        </div>
        <div className="single__nft">
          <img className="nft__img" src={Cat} alt="nft" />
          <span>cripto cat</span>
        </div>
        <div className="single__nft">
          <img className="nft__img" src={Cat} alt="nft" />
          <span>cripto cat</span>
        </div>
        <div className="single__nft">
          <img className="nft__img" src={Cat} alt="nft" />
          <span>cripto cat</span>
        </div>
        <div className="single__nft">
          <img className="nft__img" src={Cat} alt="nft" />
          <span>cripto cat</span>
        </div>
        <div className="single__nft">
          <img className="nft__img" src={Cat} alt="nft" />
          <span>cripto cat</span>
        </div>
        <div className="single__nft">
          <img className="nft__img" src={Cat} alt="nft" />
          <span>cripto cat</span>
        </div>
        <div className="single__nft">
          <img className="nft__img" src={Cat} alt="nft" />
          <span>cripto cat</span>
        </div>
        <div className="single__nft">
          <img className="nft__img" src={Cat} alt="nft" />
          <span>cripto cat</span>
        </div>
        <div className="single__nft">
          <img className="nft__img" src={Cat} alt="nft" />
          <span>cripto cat</span>
        </div>
        <div className="single__nft">
          <img className="nft__img" src={Cat} alt="nft" />
          <span>cripto cat</span>
        </div>
        <div className="single__nft">
          <img className="nft__img" src={Cat} alt="nft" />
          <span>cripto cat</span>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
