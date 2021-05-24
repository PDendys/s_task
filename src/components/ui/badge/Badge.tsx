import React from 'react';

// styles
import CategoryLabelStyled from './styles';

type Props = {
    readonly label: string;
    readonly bcgColor: string;
}

const CategoryLabel: React.FC<Props> = ({ label, bcgColor }: Props) => (
  <CategoryLabelStyled bcgColor={bcgColor}>{label}</CategoryLabelStyled>
);

export default CategoryLabel;
