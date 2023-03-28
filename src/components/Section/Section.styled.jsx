import styled from 'styled-components';

export const SectionWrapper = styled.div`
  padding: 20px;
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-size: 14px;
    text-transform: uppercase;
  }
  .titleRight {
    justify-content: end;
  }
  .sectionRow {
    display: ${({isRow})=>(isRow ? 'flex': 'block')};
    align-items: ${({isRow})=>(isRow ? 'center': 'inherit')};
    gap: ${({isRow})=>(isRow ? '20px': '0')};
  }

`;

