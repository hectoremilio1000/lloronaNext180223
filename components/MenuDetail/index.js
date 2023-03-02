import React from 'react'

function MenuDetail() {
    return (
        <div className='container-llorona menu-detail'>
            <div className='row-qh'>
                <h1 className="text-center text-3xl md:text-4xl uppercase font-black">Menú</h1>
                <span className="subTitle mb-4">Disfruta de nuestros platillos</span>
                <div className="container-cards">
                    <div className="card-menu">
                        <div className="card-detail">
                            <span className="separator">
                                <span className="content-name-plat">
                                    Pescado Frito
                                </span>
                            </span>
                            <div className="precio-plat">$95.00</div>
                            <div className="content-platillo">Classic greek salad, barrel aged feta cheese, bread</div>
                        </div>
                        <div className="card-detail">
                            <span className="separator">
                                <span className="content-name-plat">
                                    Hamburguesa
                                </span>
                            </span>
                            <div className="precio-plat">$95.00</div>
                            <div className="content-platillo">Classic greek salad, barrel aged feta cheese, bread</div>
                        </div>
                        <div className="card-detail">
                            <span className="separator">
                                <span className="content-name-plat">
                                    Pizza
                                </span>
                            </span>
                            <div className="precio-plat">$95.00</div>
                            <div className="content-platillo">Classic greek salad, barrel aged feta cheese, bread</div>
                        </div>
                    </div>
                    <div className="card-menu">
                        <div className="card-detail">
                            <span className="separator">
                                <span className="content-name-plat">
                                    Pescado Frito
                                </span>
                            </span>
                            <div className="precio-plat">$95.00</div>
                            <div className="content-platillo">Classic greek salad, barrel aged feta cheese, bread</div>
                        </div>
                        <div className="card-detail">
                            <span className="separator">
                                <span className="content-name-plat">
                                    SalchiBroaster
                                </span>
                            </span>
                            <div className="precio-plat">$95.00</div>
                            <div className="content-platillo">Classic greek salad, barrel aged feta cheese, bread</div>
                        </div>
                        <div className="card-detail">
                            <span className="separator">
                                <span className="content-name-plat">
                                    Mojitos
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