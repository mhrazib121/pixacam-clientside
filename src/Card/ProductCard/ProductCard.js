import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'

const ProductCard = (props) => {
    const {_id,id, img, productName, price } = props.product;
    console.log(_id)
    console.log(id)
    return (
        <div data-aos="zoom-in-down" data-aos-delay="500" data-aos-easing="ease-in-sine">
            <div className='card-design shadow-2xl m-3'>
                <div className='p-3'>
                    <img className='img-edit' src={img} alt="" />
                </div>
                <div>
                    <h4 className='text-xl font-bold text-color my-2 text-center'> {productName}</h4>
                    <p className='p-2'> Description : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat maiores sapiente maxime harum, dolorum molestias?</p>
                    <div className='flex items-center p-2'>
                        <button className='btn-all'> <Link className='link-d' to={`/placeorder/${_id}`}> Buy Now </Link> </button>
                        <p className='text-xl text-color ms-auto font-bold'> ${price}</p>
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