/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import MyFace from "./my-face.jpg" 
import Twitter from "./twitter-icon.jpeg"
import Introduction from "./introduction.json"

const background = css`
  width: 100%;
  height:100vh;
`
const pageTop = css`
  background-color: #3a8daa;
  width: 100%;
  height: 70%;
` 
const mainImageWrapper = css`
  margin-top: -360px;
  padding-left: 50px;
`
const mainImage = css`
  border-radius: 50%;
  border: 0.5rem solid white;
`
const pageBottom = css`
  background-color: white;
  width: 100%;
  display: flex;
`
const nameArea = css`
  display: flex;
  color: white;
  justify-content: space-between;
`
const nameWrapper = css`
  align-items: flex-end;
  padding: 24px;
  display: flex;
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
const twitterImage = css`
  border-radius: 50%;
  border: 0.5rem solid white;
`
const twitterIconWrapper = css`
  margin-left: 340px;
  margin-top: -40px;
`

const bottomSpace = css`
  background-color: gray;
  width:100%;
  margin-top: -50px;
  margin-left: -64px;
`

const nameOtherInfo = css`
  margin-top: 60px;
  margin-right: 100px;
`

const studentNumber = css`
  margin: 0;
  font-size: 1.8rem;
`
const specializeField = css `
  margin: 0;
  font-size: 1.8rem;
`
const App = () => {
  const data = Introduction
  return (
  <>
    <div css={background}>
      <div css={pageTop}>
        <div css={nameArea}>
          <div css={nameWrapper}>
          <p css={kanjiName}>{`${data.name.lastName.kanji} ${data.name.firstName.kanji}`}</p>
          <p css={englishName}>{`${data.name.firstName.english} ${data.name.lastName.english}`}</p>
          </div>
          <div css={nameOtherInfo}>
            <p css={studentNumber}>{`学籍番号: ${data.studentNumber}`}</p>
            <p css={specializeField}>{`所属: ${data.specializedField}`}</p>
          </div>
        </div>
        <div>
          <div>

          </div>
          <div>

          </div>
        </div>
      </div>
      <div css={mainImageWrapper}>
        <img src={MyFace} alt="かお" css={mainImage} width="400px" height="400px"/>
      </div>
      <div css={pageBottom}>
        <div css={twitterIconWrapper}>
          <img src={Twitter} alt="twitter icon" css={twitterImage} width="200px" height="200px"/>
        </div>
        <div css={bottomSpace}>
          aaa
        </div>
      </div>
    </div>
  </>
  );
}

export default App;
