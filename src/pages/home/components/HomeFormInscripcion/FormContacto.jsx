import React, { useState } from "react";
import TextInputComponent from "../../../../components/Form/TextInputComponent";
import { useFormContacto } from "./useFormContacto";

const FormContacto = () => {
  const {
    btnSubmitText,
    formData,
    handleChange,
    handleSubmitContacto,
  } = useFormContacto();

  return (
    <div className="w-full tablet:w-3/4 laptop1:w-1/2 laptop2:w-1/3 m-auto rounded-lg bg-White shadow-lg p-6 mt-20 mb-20">
      <h2 className="title-sections font-Bold text-DarkBlue pb-5 text-center">
        Contactanos
      </h2>
      <form onSubmit={handleSubmitContacto} className="space-y-4">

        <TextInputComponent
          id="nombre"
          label="Nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        <TextInputComponent
          id="apellido"
          label="Apellido"
          value={formData.apellido}
          onChange={handleChange}
        />
        <TextInputComponent
          id="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextInputComponent
          id="pais"
          label="País"
          value={formData.pais}
          onChange={handleChange}
        />

        <div>
          <label
            className="block font-Poppins text-base text-DarkBlue font-Semibold mb-2"
            htmlFor="consulta"
          >
            Consulta
          </label>
          <textarea
            id="consulta"
            name="consulta"
            value={formData.consulta}
            onChange={handleChange}
            rows="4"
            className="w-full font-Poppins text-base p-3 bg-LightGray_2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-TealGreen text-White font-Montserrat text-lg font-bold py-3 rounded-lg hover:bg-teal-700 transition duration-300"
          >
            {btnSubmitText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormContacto;
