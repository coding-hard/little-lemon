import styled from 'styled-components';

export const ConfirmContainer = styled.div`
  padding: 2rem;
  background-color: #e6f7ff;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  margin: 2rem auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-height: 36.95vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ConfirmMessage = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
