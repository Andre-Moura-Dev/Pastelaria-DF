import React from "react";

const items = [
  { name: "Pastel de Carne", price: "R$ 8,00" },
  { name: "Pastel de Queijo", price: "R$ 7,50" },
  { name: "Pastel de Frango com Catupiry", price: "R$ 9,00" },
  { name: "Pastel de Pizza", price: "R$ 8,50" },
  { name: "Pastel de Chocolate", price: "R$ 9,50" },
];

function Menu() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Cardápio</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <strong>{item.name}</strong> - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
