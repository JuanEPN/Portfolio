import { useState } from "react";
import "./Contact.css"; 

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "Juan Esteban Pereira Neira",
        email: "juanestebanpereiraneira@gmail.com",
        email2: "juan.pereira.neira@outlook.com",
        email3: "juan.pereira.neira@correounivalle.edu.co",
        message: "Hello, I am interested in your services. Please contact me."
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <section className="contact-section" id="contact">
            <h2>Contacto</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email2">Email 2</label>
                    <input
                        type="email"
                        id="email2"
                        name="email2"
                        value={formData.email2}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email3">Email 3</label>
                    <input
                        type="email"
                        id="email3"
                        name="email3"
                        value={formData.email3}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensaje</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn">Enviar</button>
            </form>
        </section>
    );
}

export default Contact;








