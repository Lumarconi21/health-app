import Entry from "../components/Entry";

function Dashboard() {
    const list = ["Ir a novedades", "Ingresar a mi cuenta", "Contacto", "FAQ", "Ayuda"]
    return (

        <section className="mt-4 flex justify-center gap-36">

            <Entry >
                <h3 className="">Las zanahorias originalmente no eran naranjas.</h3>
                <p className="py-4">Las primeras zanahorias cultivadas eran moradas, rojas, amarillas o blancas con una raíz delgada y bifurcada. La zanahoria naranja que conocemos hoy fue desarrollada en los Países Bajos en el siglo XVII como un tributo a la Casa de Orange y se convirtió en la variedad dominante debido a su sabor más dulce y textura más atractiva. Esta modificación fue lograda a través de la selección y cría de variedades con mayor contenido de betacaroteno, el compuesto responsable del color naranja, que también es un precursor de la vitamina A.</p>
            </Entry>

            <Entry >
                <h3>Sabías que la miel nunca se echa a perder?</h3>
                <p className="py-4">La miel tiene propiedades antibacterianas y un bajo contenido de agua, lo que impide el crecimiento de microorganismos. Además, el pH ácido de la miel también contribuye a su capacidad para conservarse indefinidamente. Esta combinación de factores hace que la miel sea uno de los alimentos más duraderos y naturalmente preservados.</p>
            </Entry>

            <Entry >
                <h3>Las almendras son técnicamente semillas, no nueces.</h3>
                <p className="py-4">Aunque comúnmente se les llama nueces, las almendras en realidad son semillas de los frutos del almendro. El almendro produce frutos que son similares a los duraznos. Cuando el fruto está maduro, la cáscara se abre y revela la semilla, que es lo que conocemos como almendra. Además, las almendras son uno de los alimentos más antiguos cultivados por el ser humano, con evidencia de su cultivo que se remonta a más de 5,000 años.</p>
            </Entry>


            {/* {list.map((element, index) => {
                return <ul>
                    <li key={index}>{element}</li>
                </ul>
            }) */}


        </section>
    )
}

export default Dashboard;