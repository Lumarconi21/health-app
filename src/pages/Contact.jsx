import { useState } from "react"

function Contact() {



    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [submitted, setSubmitted] = useState(false)

    const handleNameChange = (e) => {
        setName(e.target.value)
        console.log(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true)
        handleReset()
        console.log(e.target.id)

    }

    const handleReset = () => {
        setName("");
        setEmail("");
        setMessage("");
        setSubmitted(false)
    }

    return (
        <section className="flex flex-col items-center">
            <h1 className=" mt-20 mb-10">Envianos tu mensaje y te responderemos a la brevedad</h1>
            <form id="lupi" className="w-96 h-64 flex flex-col items-center justify-center border rounded-lg"
                onSubmit={handleSubmit}>

                <label className="flex flex-col items-center  mb-3">
                    Nombre
                    <input type="text"
                        name="name"
                        placeholder="Juan"
                        value={name}
                        onChange={handleNameChange}
                        className="text-center"
                    />
                </label>

                <label className="flex flex-col items-center mb-3">
                    E-mail
                    <input type="email"
                        name="email"
                        placeholder="juan21@gmail.com"
                        value={email}
                        onChange={handleEmailChange}
                        className="text-center"
                    />
                </label>

                <label className="flex flex-col items-center">
                    Mensaje
                    <textarea name="message"
                        //placeholder="mensaje"
                        value={message}
                        onChange={handleMessageChange}
                        className="text-center"
                    >
                    </textarea>
                </label>

                <div className="flex gap-10 mt-4">
                    <button onClick={handleReset}
                        className="border rounded-2xl px-2"
                    >Reset</button>
                    <button className="border rounded-2xl px-2">Enviar</button>
                </div>
            </form>

            {/* {submitted ? <p>Mensaje enviado con éxito</p> : null} */}

        </section>
    )
}


export default Contact;