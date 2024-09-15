import { useState } from "react";

function Main({ name, features, topics }) {
  const [value, setValue] = useState("");
  return (
    <main className="flex-grow px-12 p-10 text-2xl">
      <section>
        <h1>
          Hola <b>{name}</b> bienvenido al curso de React
        </h1>
        <br></br>
        <h2 className="font-bold">¿Qué es React?</h2>
        <br></br>
        <p>
          React es una biblioteca de JavaScript de código abierto creada por
          Facebook y utilizada por millones de desarrolladores en todo el mundo.
          Su objetivo principal es facilitar la creación de interfaces de
          usuario interactivas, rápidas y eficientes. React se centra en el
          desarrollo de componentes reutilizables, lo que te permite construir
          aplicaciones de manera modular y organizada.
        </p>
      </section>
      <br></br>
      <section>
        <h2 className="font-bold">¿Por qué eligir React ?</h2>
        <br></br>
        <ol className="list-decimal ml-4 space-y-2 pl-4">
          {features.map((item) => (
            <li key={item.id}>{item.feature}</li>
          ))}
        </ol>
      </section>
      <br></br>
      <section>
        <h2 className="font-bold">
          Estos son algunos temas que miraremos en detalle:
        </h2>
        <br></br>
        <ol className="list-decimal ml-4 space-y-2 pl-4">
          {topics.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ol>
      </section>
      <br></br>
      <p className="text-center mt-5 mb-5 text-[#247BA0]">
        {value === "Si" && (
          <>Has finalizado tu lectura con éxito, sigue avanzando !</>
        )}
        {value === "No" && <>Sigue intentando !</>}
      </p>
      <div className="flex justify-center items-center jusborder border-[#FF0000] space-x-2">
        <button
          className="bg-[#CCCCCC] p-2 w-[50px] hover:bg-[#AAAAAA]"
          onClick={() => setValue("Si")}
        >
          Si
        </button>
        <button
          className="bg-[#CCCCCC] p-2 w-[50px] hover:bg-[#AAAAAA]"
          onClick={() => setValue("No")}
        >
          No
        </button>
      </div>
    </main>
  );
}

export default Main;
