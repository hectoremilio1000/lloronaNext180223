import React, { useState } from 'react'
import ButtonMenuFilter from '../ButtonMenuFilter'
import platos from "./platos.json"

function MenuDetail() {

    const category_platos = ["All", ... new Set(platos.map(plato => plato.category))]

    const [categories, setCategories] = useState(category_platos)
    console.log(categories)
    const [platillos, setPlatillos] = useState(platos)

    const filterCategory = (category) => {
        if (category === "All") {
            setPlatillos(platos)
            return
        }

        const filterData = platos.filter(plato => plato.category === category)
        setPlatillos(filterData)
    }

    return (
        <div className='container-llorona menu-detail'>
            <div className='row-qh'>
                <h1 className="text-center text-3xl md:text-4xl uppercase font-black">Menú</h1>
                <span className="subTitle mb-4">Disfruta de nuestros platillos</span>
                <div className="container-cards">
                    <ButtonMenuFilter categories={categories} filterCategory={filterCategory} />
                    <div className="card-menu">
                        {platillos.map(plato => {
                            return (
                                <div className="card-detail" key={plato.id}>
                                    <span className="separator">
                                        <span className="content-name-plat">
                                            {plato.nombre}
                                        </span>
                                    </span>
                                    <div className="precio-plat">${plato.precio}.00</div>
                                    <div className="content-platillo">{plato.description}</div>
                                </div>
                            );
                        })}
                        <div className="card-detail">
                            <span className="separator">
                                <span className="content-name-plat">
                                    Pescado Frito
                                </span>
                            </span>
                            <div className="precio-plat">$95.00</div>
                            <div className="content-platillo">Classic greek salad, barrel aged feta cheese, bread</div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default MenuDetail