import React from 'react';

// Componente para cada tipo de DOFA (Debilidades, Oportunidades, Fortalezas, Amenazas)
const SWOTSection = ({ type, items }) => {
  return (
    <div className="border p-4">
      <h3 className="font-semibold text-lg text-center">{type}</h3>
      <ul className="list-decimal ml-4 mt-2">
        {items.map((item) => (
          <li key={item.id}>
            <h3 className="font-semibold">{item.title}</h3>
            <p>{item.description}</p></li>
        ))}
      </ul>
    </div>
  );
};

// Componente principal para la sección DOFA
const SWOT = ({ data }) => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold ml-4">1. Current Diagnosis </h2>
      <div className="grid grid-cols-2 gap-8 mt-4 ml-4 mr-4">
        {data.map((dofa) => (
          <SWOTSection key={dofa.id} type={dofa.type} items={dofa.items} />
        ))}
      </div>
    </section>
  );
};

export default SWOT;
