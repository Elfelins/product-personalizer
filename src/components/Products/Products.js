import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products]  = useState(productsData);

  return (
    <section>
      {products.map(tshirt => <Product key={tshirt.id} {...tshirt}/>)}
    </section>
  );
};

export default Products;