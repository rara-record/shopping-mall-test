import { useContext } from 'react';
import { ProductContext } from '../../context/ProductDetailContext';

const useProductDetailContext = () => useContext(ProductContext);

export default useProductDetailContext;
