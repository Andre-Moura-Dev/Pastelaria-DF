import React from "react";

function Contact() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contato</h2>
      <p>
        <strong>Telefone:</strong> (11) 1234-5678
      </p>
      <p>
        <strong>Email:</strong> contato@pastelariadelicia.com
      </p>
      <p>
        <strong>Endereço:</strong> Rua dos Pastéis, 123 - São Paulo, SP
      </p>

      <p>
        <strong>Mapa</strong>
      </p>

      <iframe
        title="Localização"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.840290429765!2d-122.0842497!3d37.4219998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbbba7d6d88fb%3A0x8e69aa5a3d6e2d2a!2sGoogleplex!5e0!3m2!1sen!2sbr!4v1577433570079"
        width="400"
        height="300"
        style={{ border: 0, marginTop: "10px" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Contact;
