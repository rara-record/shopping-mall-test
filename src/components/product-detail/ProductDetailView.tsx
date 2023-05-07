import styled from 'styled-components';
import useProductDetailStore from '../../hooks/useProductDetailStore';
import Images from './Images';
import Description from './Description';

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  aside {
    width: 38%;
  }

  article {
    width: 60%;

    h2 {
      margin-bottom: 1rem;
      font-size: 2rem;
    }
  }
`;

export default function ProductDetailView() {
  // const params = useParams();
  // const { loading, error } = useProductDetail({ productId: String(params.id) });
  //
  // if (loading) {
  //   return (
  //     <p>Loading...</p>
  //   );
  // }
  //
  // if (error) {
  //   return (
  //     <p>Error!</p>
  //   );
  // }

  const [{ product }] = useProductDetailStore();

  if (!product) return null;

  return (
    <Container>
      <aside>
        <Images images={product.images} />
      </aside>
      <article>
        <h2>{product.name}</h2>
        {/* <AddToCartForm /> */}
        <Description value={product.description} />
      </article>
    </Container>
  );
}
