'use client';
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  text-align: center;
  padding: 24px;
  background-image: url("/boda.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  .logo {
    width: 100%;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #002a60;
  margin-bottom: 1rem;
  font-family: "Great Vibes", cursive;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;

export const Paragraph = styled.p`
  font-size: 1.125rem;
  color: #ffffff;
  max-width: 42rem;
  font-family: "Playfair Display", serif;
  text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);
`;
