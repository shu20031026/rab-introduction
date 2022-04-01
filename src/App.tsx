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
  margin-left: -30px;
  margin-top: -35px;
`

const bottomSpace = css`
  margin-top: -50px;
  margin-left: -40px;
  color: #3a8daa;
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
const favSpace = css`
  margin-left: 500px;
  color: white;
`

const favTitle = css`
  font-size: 3rem;
  font-weight: 700;
`

const favThing = css`
  font-size: 1.6rem;
`

const favComment = css`
  font-size: 1rem;
  padding-left: 40px;
`

const hobbyThing = css`
  font-size: 1.6rem;
`

const hobbyTitle = css`
  font-size: 2rem;
  padding-left: 160px;
  font-weight: 700;
`

const hobbyContent = css`
  font-size: 1rem;
  padding-left: 40px;
`

const hobbyContainer = css`
  padding-left: 180px;
`

const twitterObject = css`
  text-align: center;
  margin-left: 80px;
  margin-top: -80px;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-color: #3a8daa;
  color: white;
  border: 0.5rem solid white;
`

const twitterTitle = css`
  font-weight:600;
  margin: 10px;
`

const twitterContent = css`
  margin:10px;
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
        <div css={favSpace}>
          <div css={favTitle}>好きな技術</div>
          <div>
            {data.favouriteTech.map(item => {
              return(
                <>
                  <div css={favThing}>{`・${item.thing}`}</div>
                  <div css={favComment}>{`${item.comment}`}</div>
                </>
              )
            })}
          </div>
        </div>
      </div>
      <div css={mainImageWrapper}>
        <img src={MyFace} alt="かお" css={mainImage} width="400px" height="400px"/>
      </div>
      <div css={pageBottom}>
        <div css={twitterObject}>
          <p css={twitterTitle}>Twitter</p>
          <p css={twitterContent}>{data.twitter.name}</p>
          <p css={twitterTitle}>Twitter Id</p>
          <p css={twitterContent}>{data.twitter.id}</p>
        </div>
        <div css={twitterIconWrapper}>
          <img src={Twitter} alt="twitter icon" css={twitterImage} width="220px" height="220px"/>
        </div>
        <div css={bottomSpace}>
          <div css={hobbyTitle}>趣味</div>
          <div css={hobbyContainer}>
            {data.hobby.map(item => {
              return(
                <>
                  <div css={hobbyThing}>{`・${item.thing}`}</div>
                  <div css={hobbyContent}>{`${item.comment}`}</div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default App;
