import styled from 'styled-components'

const Name = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  color: #333333;
`
const Content = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr;
  grid-gap: 30px;
`
const ContentImg = styled.img`
    width: 728px;
    height: 500px;
  border-radius: 8px;
`
const ContentDiv = styled.div`
  width: 364px;
  height: 500px;
  border-radius: 8px;
  padding: 45px 20px 20px 45px;
  display: flex;
  flex-direction: column;
  background: #0A223D;
`
const Stars = styled.div`
display: flex;
`

export { Name, Content, ContentDiv, ContentImg, Stars }
