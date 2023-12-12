import styles from './Product.module.scss';
import {useState} from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import PropTypes from 'prop-types';

const Product = props => {
  const [currentColor, setCurrentColor]= useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);

  return (
    <article className={styles.product}>
      <ProductImage name={props.name}
                    title={props.title}
                    currentColor={currentColor}/>
      <ProductForm sizes={props.sizes}
                    colors={props.colors}
                    title={props.title}
                    basePrice={props.basePrice}
                    currentColor={currentColor}
                    currentSize={currentSize}
                    setCurrentColor={setCurrentColor}
                    setCurrentSize={setCurrentSize}/>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  basePrice: PropTypes.number.isRequired,
};

export default Product;