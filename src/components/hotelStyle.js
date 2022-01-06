import styled from 'styled-components'

const Name = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: ${props => props.size}px;
  line-height: 30px;
  color: #333333;
`
const Content = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr;
  grid-gap: 30px;
`
const ContentImg = styled.img`
    width: 100%;
    height: 200px;
`
const GridImg = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
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

// Style for comments

const Comments = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 70px;
`
const Comment = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: ${props => props.align};
`


export { Name, Content, ContentDiv, ContentImg, Comments, Comment, GridImg }
