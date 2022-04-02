/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import MyFace from "./my-face.jpg" 
import Twitter from "./twitter-icon.jpeg"
import Introduction from "./introduction.json"
import { 
  background, 
  bottomSpace, 
  englishName, 
  favComment, 
  favSpace, 
  favThing, 
  favTitle, 
  hobbyContainer, 
  hobbyContent, 
  hobbyThing, 
  hobbyTitle, 
  kanjiName, 
  mainImage, 
  mainImageWrapper, 
  nameArea, 
  nameOtherInfo, 
  nameWrapper, 
  pageBottom, 
  pageTop, 
  specializeField, 
  studentNumber, 
  twitterBorder, 
  twitterContent, 
  twitterIconWrapper, 
  twitterImage, 
  twitterImageBorder, 
  twitterObject, 
  twitterTitle 
} from "./style"

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
        <div>
          <img src={MyFace} alt="かお" css={mainImage} width="400px" height="400px"/>
        </div>
      </div>
      <div css={pageBottom}>
        <div css={twitterBorder}>
          <div css={twitterObject}>
            <p css={twitterTitle}>Twitter</p>
            <p css={twitterContent}>{data.twitter.name}</p>
            <p css={twitterTitle}>Twitter Id</p>
            <p css={twitterContent}>{data.twitter.id}</p>
          </div>
        </div>
        <div css={twitterIconWrapper}>
          <div css={twitterImageBorder}>
            <img src={Twitter} alt="twitter icon" css={twitterImage} width="210px" height="210px"/>
          </div>
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
