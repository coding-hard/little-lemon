import React, { useState } from 'react';
import {
  OrderContainer,
  OrderTitle,
  OrderForm,
  OrderLabel,
  OrderInput,
  OrderButton,
} from './OrderOnline.styles';

const OrderOnline: React.FC = () => {
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    address: '',
    phone: '',
    dish: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mockPostRequest = new Promise((resolve) => {
      setTimeout(() => {
        console.log('Order Details:', orderDetails);
        resolve('Order placed successfully!');
      }, 1000);
    });

    mockPostRequest.then((message) => {
      alert(message);
      setOrderDetails({
        name: '',
        address: '',
        phone: '',
        dish: '',
      });
    });
  };

  return (
    <OrderContainer>
      <OrderTitle>Order Online</OrderTitle>
      <OrderForm onSubmit={handleSubmit}>
        <OrderLabel htmlFor="name">Name:</OrderLabel>
        <OrderInput
          type="text"
          id="name"
          name="name"
          value={orderDetails.name}
          onChange={handleChange}
          required
          aria-required="true"
        />
        <OrderLabel htmlFor="address">Address:</OrderLabel>
        <OrderInput
          type="text"
          id="address"
          name="address"
          value={orderDetails.address}
          onChange={handleChange}
          required
          aria-required="true"
        />
        <OrderLabel htmlFor="phone">Phone:</OrderLabel>
        <OrderInput
          type="tel"
          id="phone"
          name="phone"
          value={orderDetails.phone}
          onChange={handleChange}
          required
          aria-required="true"
        />
        <OrderLabel htmlFor="dish">Dish:</OrderLabel>
        <OrderInput
          type="text"
          id="dish"
          name="dish"
          value={orderDetails.dish}
          onChange={handleChange}
          required
          aria-required="true"
        />
        <OrderButton type="submit">Place Order</OrderButton>
      </OrderForm>
    </OrderContainer>
  );
};

export default OrderOnline;
