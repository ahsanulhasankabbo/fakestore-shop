import React from 'react';
import ReactModal from '../ReactModal/ReactModal';

const Products = (props) => {
    // console.log(props.product)
    const {image,title} = props.product;
    const {setCart} = props;
    return (
        <div className="container col-md-4">
            <div className='card p-3 border'>
                <img className='w-50 mx-auto h-50' src={image} alt="" />
                <h5>{title}</h5>
                <div className="d-flex justify-content-around m-5">
                    <button onClick={setCart} className='btn bg-success text-white'>Add to cart</button>
                    <button className='btn bg-danger text-white'>Delete</button>
                    {/* <button className='btn bg-primary text-white'>Details</button> */}
                    <ReactModal product={props.product}></ReactModal>
                </div>
            </div>
        </div>
    );
};

export default Products;