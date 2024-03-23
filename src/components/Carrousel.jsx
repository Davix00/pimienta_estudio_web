const Carrousel = () => {
  return (
    <div className="containerCarrousel">
      <img className="carrouselImage" src="" alt="imagen" />
      <button className="btnCarrouse" onClick={prevImage}>
        Anterior
      </button>
      <button className="btnCarrouse" onClick={nextImage}>
        Siguiente
      </button>
    </div>
  );
};

export default Carrousel;
