import React from 'react';
import './ProductCard.css'

const ProductCard = (props) => {
    const { img, serviceName, fee } = props.product;
    return (
        <div data-aos="zoom-in-down" data-aos-delay="500" data-aos-easing="ease-in-sine">
            <div className='card-design'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h4 className='text-color text-center'> {serviceName}</h4>
                    <p> Description : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat maiores sapiente maxime harum, dolorum molestias?</p>
                    <div>
                        <button className='btn-all'>Buy Now</button>
                        <p>{fee}</p>
                    </div>
                </div>
            </div>

            {/* <Col >
                <Card className="card-design">
                    <Card.Img variant="top" src={img}/>
                    <Card.Body>
                        <Card.Title className="text-color text-center">{serviceName}</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        <div className='d-lg-flex align-items-center'>
                        <button className='btn-all'> <Link className='link-d' to={`/placeorder/${_id}`}>Booking Now</Link> </button>
                        <p className='fs-3 mt-2 text-color ms-auto'> $ {fee}</p>
                        </div>
                    </Card.Body>
                </Card>
            </Col> */}
        </div>
    );
};

export default ProductCard;