import styled from 'styled-components';
import useProductDetailContext from '../../hooks/useProductDetailContext';
import Description from './Description';
import Images from './Images';
import AddToCartForm from './form/AddToCartForm';

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

function ProductDetailContents() {
  const { product } = useProductDetailContext();

  if (!product) return null;

  return (
    <Container>
      <aside>
        <Images images={product.images} />
      </aside>
      <article>
        <h2>{product.name}</h2>
        <AddToCartForm />
        <Description value={product.description} />
      </article>
    </Container>
  );
}

export default ProductDetailContents;
