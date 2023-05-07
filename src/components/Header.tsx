import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import useAccessToken from '../hooks/useAccessToken';
import Button from './ui/Button';
import useFetchCategories from '../hooks/useFetchCategories';

const Container = styled.header`
  margin-bottom: 2rem;

  h1 {
    font-size: 4rem;
  }

  nav {
    padding-block: 2rem;

    ul {
      display: flex;
    }

    li {
      margin-right: 2rem;
    }

    .active {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

// TODO: 헤더에 카테고리 목록 보여주기
export default function Header() {
  const navigate = useNavigate();
  const { accessToken, setAccessToken } = useAccessToken();
  const { categories } = useFetchCategories();

  const [showCategorues, setShowCategories] = useState(false);

  const handleClickLogout = () => {
    setAccessToken('');
    navigate('/');
  };

  return (
    <Container>
      <h1>Shop</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li
            onMouseEnter={() => setShowCategories(true)}
            onMouseLeave={() => setShowCategories(false)}
          >
            <Link
              to="products"
            >
              Products
            </Link>
            {showCategorues && (
              <ul>
                {
                  categories.map((category) => (
                    <li key={category.id}>
                      <Link to={`/products?categoryId=${category.id}`}>
                        {category.name}
                      </Link>

                    </li>
                  ))
                }
              </ul>
            )}

          </li>
          {accessToken ? (
            <>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Button onClick={handleClickLogout}>
                  Logout
                </Button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>

      </nav>
    </Container>
  );
}
