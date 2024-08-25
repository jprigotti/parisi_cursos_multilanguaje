import React from "react";
import { homeIntroFechas } from "./homeIntroFechas";
const HomeCursoFechas = () => {
  return (
    <div className="w-3/4 m-auto my-20 flex flex-col items-center">
      <h2 className="text-3xl font-Montserrat font-Bold pb-5 text-center">
        Próximas fechas
      </h2>

      {/* Carousel de fechas */}
      <div className="w-full flex justify-around">
        {homeIntroFechas.map((card) => {
          return (
            <div
              key={card.id}
              className={
                card.booking == "Disponible"
                  ? "w-1/4 bg-TealGreen_3 rounded-lg p-5 shadow-LightShadowGrey hover:shadow-TealGreen_3 flex flex-col justify-center items-center"
                  : "w-1/4 bg-LightGray_2 rounded-lg p-5 shadow-LightShadowGrey flex flex-col justify-center items-center"
              }
            >
              <p>{card.dates}</p>
              <p>{card.venue}</p>
              <p>{card.booking}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeCursoFechas;
