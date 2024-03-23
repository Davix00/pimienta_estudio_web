const Clientes = () => {
  const images = [
    {
      path: "../assets/",
    },
  ];
  return (
    <div className="clientsContainer">
      <h1 className="clientsTitle">HECHO EN CASA</h1>
      <span className="clientsText">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi tenetur
        nisi at quasi libero rem itaque iure recusandae, laborum aspernatur
        alias quas facere eveniet id autem nihil! Voluptate, quaerat culpa.
      </span>
      <div className="clientsLogoContainer"></div>
      {/* {images.map((image) => (
        <img src={image.path} alt="image" className="clientesLogo" />
      ))} */}
    </div>
  );
};

export default Clientes;
