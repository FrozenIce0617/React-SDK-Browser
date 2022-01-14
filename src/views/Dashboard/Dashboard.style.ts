import styled from 'styled-components'

export const Container = styled.div`
  padding: 64px;
  background-color: #282c34;
  min-height: 100vh;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #fff;
`

export const Title = styled.div`
  color: white;
  font-size: 32px;
`

export const Content = styled.div`
  margin-top: 36px;
  padding: 12px;
  border: 1px solid #61dafb;
`

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
`

export const ContentTitle = styled.div`
  color: #61dafb;
  font-size: 24px;
`

export const SdkRow = styled.div`
  margin: 12px 12px;
`

export const SdkInfoRow = styled.div`
  margin: 12px;
  & > span {
    color: #ccc;
  }

  & > span:first-child {
    margin-right: 20px;
  }
`

export const CategoryText = styled.span`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`

export const SubTitle = styled.div`
  color: #ccc;
  padding: 8px 12px;

  border-bottom: 1px solid #61dafb;
`
