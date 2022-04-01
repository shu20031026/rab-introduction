/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import MyFace from "./my-face.jpg" 
import Introduction from "./introduction.json"
const background = css`
  width: 100%;
  height:100vh;
`

const pageTop = css`
  background-color: #3a8daa;
  width: 100%;
  height: 50%;
` 

const imageWrapper = css`
  margin-top: -200px;
  padding-left: 50px;
`

const image = css`
  border-radius: 50%;
  border: 0.5rem solid white;
`

const pageBottom = css`
  background-color: white;
  width: 100%;
`

const nameArea = css`
  display: flex;
  align-items: flex-end;
  padding: 24px;
`
const kanjiName = css`
  margin: 0;
  margin-right: 12px;
  font-size: 6.0rem;
  color: white;
  font-weight: bold;

`
const englishName = css`
  margin: 0;
  font-size: 4.0rem;
  color: white;
  margin-bottom: 12px;
`

const App = () => {
  const data = Introduction
  return (
  <>
    <div css={background}>
      <div css={pageTop}>
        <div css={nameArea}>
          <p css={kanjiName}>{`${data.name.lastName.kanji} ${data.name.firstName.kanji}`}</p>
          <p css={englishName}>{`${data.name.firstName.english} ${data.name.lastName.english}`}</p>
        </div>
        
      </div>
      <div css={imageWrapper}>
        <img src={MyFace} alt="かお" css={image} width="400px" height="400px"/>
      </div>
      <div css={pageBottom}>
      </div>
    </div>
  </>
  );
}

export default App;
