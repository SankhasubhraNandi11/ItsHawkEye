import ImgBg from './bk.png'
import styled from 'styled-components';

export const DataContainer = styled.div`
  background:url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;
export const DataContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;
export const DataItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 1000px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;
export const DataH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 3rem;
  margin-left:340px;
  border: 8px solid white;
  letter-spacing: 3px;
`;
export const DataP = styled.p`
  font-size: clamp(1rem, 2vw, 3rem);
  margin-bottom: 2rem;
  margin-left:495px;
`;
export const DataBtn = styled.button`
  font-size: 0.7rem;
  font-weight:700;
  padding: 0.5rem 1.2rem;
  border: none;
  margin-left:550px;
  margin-bottom:70px;
  border-radius: 10px;
  background: #fff;
  color: #000;
  transition: 0.2s ease-out;
  &:hover {
    background: #3bcc4c;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;