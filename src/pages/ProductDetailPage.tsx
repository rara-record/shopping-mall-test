import { useParams } from 'react-router-dom';
import ProductDetailView from '../components/product-detail/ProductDetailView';
import useFetchProduct from '../hooks/useFetchProduct';

export default function ProductDetailPage() {
  const params = useParams();

  const { loading, error } = useFetchProduct({ productId: String(params.id) });

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error...</div>;
  }

  return (
    <ProductDetailView />
    // <ProductProvider>
    //   <ProductDetail />
    // </ProductProvider>
  );
}
