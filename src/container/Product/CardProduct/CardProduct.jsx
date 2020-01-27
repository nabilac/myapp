import React, { Component } from 'react';
import Counter from './Counter';

class Product extends Component {
    
    render() {
        return (
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://s3-ap-southeast-1.amazonaws.com/etanee-images/product/colonel_ori_pack10.jpg" alt="" />
                    </div>
                    <p className="product-title">Daging ayam berbumbu</p>
                    <p className="product-price">Rp. 41.000</p>
                    <Counter onChangeCounter={(value) => this.props.onChangeCounter(value)}/>
                </div>
        );
    }
}

export default Product;