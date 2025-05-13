import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_d9aojew",
        "template_cp3ey1g",
        formData,
        "WB-UjMmlaeTWc5xOn"
      )
      .then(
        (result) => {
          alert("Message envoyé avec succès !");
          setFormData({ title: "", name: "", email: "", message: "" });
        },
        (error) => {
          alert("Une erreur s'est produite. Veuillez réessayer.");
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-800 px-2.5">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Titre"
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-100"
            required
          />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nom"
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-100"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-100"
            required
          />
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-100 resize-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg"
            disabled={isSending}
          >
            {isSending ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
      </div>
    </section>
  );
}
