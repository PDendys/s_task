import styled from 'styled-components';

const FiltersStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 0;
  margin: 0 0 15px;

  > .label {
    margin: 0 15px 0 0;
  }

  > .sorter-box {
    display: flex;
    flex-direction: column;
  }

  > .sorter-box > .btn {
    background-color: transparent;
    border: none;
    width: 15px;
    height: 15px;
    padding: 0;
    font-size: 12px;
    line-height: 1;
    position: relative;

    &:before {
      content: '';
      width: 8px;
      height: 8px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-bottom: solid 3px #000;
      border-right: solid 3px #000;
    }

    &.-up {
      &:before {
        transform: translate(-50%, -50%) rotate(-135deg);
      }
    }

    &.-down {
      &:before {
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }
  }
`;

export default FiltersStyled;
