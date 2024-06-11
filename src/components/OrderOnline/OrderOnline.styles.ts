import styled from 'styled-components';

export const OrderContainer = styled.div`
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  margin: 2rem auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const OrderTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const OrderForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const OrderLabel = styled.label`
  font-size: 1rem;
  color: #777;
  margin-bottom: 0.5rem;
`;

export const OrderInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const OrderButton = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  background-color: #ff6347;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #ff4500;
  }
`;
