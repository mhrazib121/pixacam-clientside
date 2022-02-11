import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ReviewCard = (props) => {
    const {img, serviceName, fee} = props.review;
    
    return (
        <div>
            <Col className="gap-4">
                <Card className="card-hover card-design">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{serviceName}</Card.Title>
                        <div>

                            <h6> {serviceName}</h6>

                        </div>

                        <div className="d-flex ">
                            {/* <Link className="btn text-white me-2" to ={`/purchase/${_id}`}> <button className="btn btn-success">Purchase Now</button> </Link> */}
                            
                            <h5 className="mx-2 mt-2 pt-1 ms-auto"> Price: $ {fee} </h5>
                        </div>
                        {/* <button className="btn btn-success">Purchase Now</button> */}
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ReviewCard;