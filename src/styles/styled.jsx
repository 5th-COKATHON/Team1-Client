import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
  overflow: hidden;
  box-sizing: border-box; /* 패딩을 내부 크기로 포함 */
`;

export const Container = styled(FlexBox)`
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled(FlexBox)`
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const WidthBlock = styled(FlexBox)`
  width: 100vw;
  height: 100vh;
`;
