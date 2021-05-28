import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100vh - 80px);
  width: 100vw;
  background-image: linear-gradient(to bottom right, #232b2b, #3d4d4d);
`;

export const Space = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpaceImage = styled.img`
  margin-right: 10px;
`;

export const WrapperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-image: linear-gradient(to bottom right, #232b2b, #3d4d4d);
`;
