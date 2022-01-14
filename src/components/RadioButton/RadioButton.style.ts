import styled from 'styled-components'

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;

  & > button:first-child {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  & > button:last-child {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`

export const RadioOption = styled.button<{ isActive: boolean }>`
  padding: 8px 12px;

  min-width: 70px;
  height: 40px;

  background: ${(props) => (props.isActive ? '#61dafb' : 'transparent')};
  border: 1px solid #61dafb;
  color: ${(props) => (props.isActive ? 'black' : '#61dafb')};

  cursor: pointer;
`
