import React, { useState } from 'react'
import ButtonMenuFilter from '../ButtonMenuFilter'
import ModalPlatillo from '../ModalPlatillo'
import platos from "./platos.json"

function MenuDetail() {

    const category_platos = ["All", ... new Set(platos.map(plato => plato.category))]

    const [categories, setCategories] = useState(category_platos)
    const [platillos, setPlatillos] = useState(platos)
    const [viewCategory, setViewCategory] = useState("All")

    const filterCategory = (category) => {
        if (category === "All") {
            setPlatillos(platos)
            setViewCategory(category)
            return
        }

        const filterData = platos.filter(plato => plato.category === category)
        setPlatillos(filterData)
        setViewCategory(category)
    }
    // modal view
    const [platilloview, setPlatilloview] = useState(platos)
    const [viewModal, setViewModal] = useState(false)
    const showModalEditar = (registro) => {
        setPlatilloview(registro)
        setViewModal(true)
    }
    const ocultarModalEditar = () => {
        setViewModal(false)
    }

    return (
        <>
            <div className='container-llorona menu-detail'>
                <div className='row-qh'>
                    <h1 className="text-center text-3xl md:text-4xl uppercase font-black">Menú</h1>
                    <span className="subTitle mb-4">Disfruta de nuestros platillos</span>
                    <div className="container-cards">
                        <ButtonMenuFilter viewCategory={viewCategory} categories={categories} filterCategory={filterCategory} />
                        <div className="card-menu">
                            {platillos.map(plato => {
                                return (
                                    <div className="card-detail" key={plato.id}>
                                        <span className="separator">
                                            <span className="content-name-plat" onClick={() => showModalEditar(plato)}>
                                                {plato.nombre}
                                            </span>
                                        </span>
                                        <div className="precio-plat">${plato.precio}.00</div>
                                        <div className="content-platillo">{plato.description}</div>
                                    </div>
                                );
                            })}

                        </div>

                    </div>
                </div>
            </div>
            <ModalPlatillo ocultarModalEditar={ocultarModalEditar} viewModal={viewModal} platilloview={platilloview} />
        </>

    )
}

export default MenuDetail