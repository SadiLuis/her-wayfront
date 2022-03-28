import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { BsEnvelope } from "react-icons/bs";
import styles from "./ContactForm.module.css"
import Swal from "sweetalert2";

function ContactForm() {
  const [values, setValues] = useState({
    nombreCompleto: "",
    email: "",
    mensaje: "",
  });
  const [status, setStatus] = useState("");
  console.log(values);

  function handleSubmit(e) {
    e.preventDefault();
    emailjs.send("service_4kjyudg","template_vqcx9n9",values, "user_sWs226JAyOW1aSGcgfhxz")
      .then(
        (response) => {
          console.log("Success", response);
          setValues({
            nombreCompleto: "",
            email: "",
            mensaje: "",
          });
          setStatus("Success");
        },
        (error) => {
          console.log("Failed", error);
        }
      );
    e.target.reset();
  }

  useEffect(() => {
    if (status === "Success") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  function handleChange(e) {
    e.preventDefault();
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  }
  return (
    <>
      <div className="container mt-5">
        <h3>Comunicate con nosotras!</h3>
      </div>
      <div className="container mt-5">
        {status && renderAlert()}
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="primerNombre" className="form-label">
              Nombre
            </label>
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
              id="primerNombre"
              name="primerNombre"
              required
            ></input>
          </div>

          <div className="col-md-6">
            <label htmlFor="apellido" className="form-label">
              Apellido
            </label>
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
              id="apellido"
              name="apellido"
              required
            ></input>
          </div>
          <div className="col-md-8">
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              onChange={handleChange}
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
            ></input>
          </div>
          <div className="col-md-4">
            <label htmlFor="telefono" className="form-label">
              Teléfono
            </label>
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
              id="telefono"
              name="telefono"
            ></input>
          </div>
          <div className="col-md-12">
            <label htmlFor="comentarios" className="form-label">
              Su mensaje
            </label>
            <textarea
              onChange={handleChange}
              className="form-control"
              id="mensaje"
              name="mensaje"
              rows="3"
              required
            ></textarea>
          </div>
          <div className="col-md-12">
            <button type="submit" className={styles.boton}>
              <span>
                <BsEnvelope></BsEnvelope>
              </span>
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

const renderAlert = () => {
  Swal.fire({
    title: "Su mensaje fue enviado exitosamente",
    icon:"success"
  })
 }
    

 export default ContactForm;
