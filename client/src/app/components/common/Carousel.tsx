import React from 'react'
import planoBloque from '../../../assets/img/imgprueba/planoBloque.jpeg'
import instalacion from '../../../assets/img/imgprueba/instalacionSalpicadero.jpeg'
function Carousel() {
    return (
        <div style={{ width: "40vw", height: "20vh" }}>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" >
                    <div className="carousel-item active">
                        <img src={planoBloque} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Armado de motores, para calle o competicion</h5>
                            <p>Restauracion y armado de motores desde cero</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={instalacion} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Instalaciones</h5>
                            <p>Fabricamos tu instalacion electrica a medida, con los mejores componentes y acabados</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <video className="d-block w-100" controls>
                            <source src='../../../assets/video/videoInmo.mp4' type="video/mp4" />
                            Tu navegador no admite la reproducción de videos.
                        </video>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel