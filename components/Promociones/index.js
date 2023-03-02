import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import promo1 from "../../public/images/promociones/promo1.jpg"
import promo2 from "../../public/images/promociones/promo2.jpg"
import promo3 from "../../public/images/promociones/promo3.jpg"
import promo4 from "../../public/images/promociones/promo4.jpg"

function Promociones() {
    return (
        <div className="container-llorona">
            <div className="row-qh">
                <span className="subTitle">Nuestras</span>
                <h1 className="text-center text-3xl md:text-4xl uppercase font-black">Promociones</h1>
                <div className="subbanner">
                    <div className="banner-col card-banner">
                        <Link className='img-banner' href="/promociones/cards0">
                            <Image src={promo2} alt="" />
                            <div class="subbanner-text">
                                <div class="offer-title">30% <span>Dcto.</span></div>
                                <div class="main-title">Weekend Special</div>
                                <div class="sub-title">Italian Veg Pizza</div>
                                <div class="shopnow"><a class="shop-now" href="#">Order Now</a></div>
                            </div>
                        </Link>
                        <Link className='img-banner' href="/promociones/cards0">
                            <Image src={promo3} alt="" />
                            <div class="subbanner-text">
                                <div class="offer-title">Up To <span>50%</span> <span class="desc">Descuento</span></div>
                            </div>
                        </Link>
                    </div>
                    <div className="card-banner">
                        <Link className='img-banner' href="/promociones/cards0">
                            <Image src={promo1} alt="" />
                            <div class="subbanner-text">
                                <div class="offer-title"><span>40%</span> Discount</div>
                                <div class="subbanner-desc">
                                    <div class="main-title">Today's Menu</div>
                                    <div class="sub-title">Weekend Special Offer</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="card-banner">
                        <Link className='img-banner' href="/promociones/cards0">
                            <Image src={promo4} alt="" />
                            <div class="subbanner-text">
                                <div class="offer-title">30% Discount</div>
                                <div class="main-title">Healthy Breakfast</div>
                                <div class="shopnow"><a class="shop-now" href="#">Order Now</a></div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promociones