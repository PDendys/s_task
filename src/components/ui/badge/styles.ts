import styled from 'styled-components';

const CategoryLabelStyled = styled.span<{ bcgColor: string }>`
    padding: 3px 8px;
    color: #000;
    font-weight: 600;
    background-color: ${({ bcgColor }) => bcgColor};
    font-size: 10px;   
    position: absolute;
    border-radius: 2px;
    left: 0;
    top: 0;
`;

export default CategoryLabelStyled;
