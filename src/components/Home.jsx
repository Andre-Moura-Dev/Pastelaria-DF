import React from "react";

function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Bem-vindo à Pastelaria Delícia!</h2>
      <p>
        Aqui você encontra os melhores pastéis da cidade, feitos com amor e
        ingredientes de alta qualidade!
      </p>
      <img
        src="https://via.placeholder.com/500x300"
        alt="Pastéis deliciosos"
        style={{ width: "100%", maxWidth: "500px", borderRadius: "10px" }}
      />
    </div>
  );
}

export default Home;
