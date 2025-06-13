'use client';
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.25);
  .logo {
    width: 100%;
    height: 100%;
    display: flex;
    position: fixed;
    align-items: end;
  }
`;

export const Content = styled.div`
    margin-top: 1.3rem;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  .photo-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    img {
      width: 90%;
    }
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: white;
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
