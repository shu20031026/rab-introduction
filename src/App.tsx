/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const background = css`
  background-color: #bbe2f1;
  width: 100%;
  height:100vh;
`

const backgroundTop = css`

` 

const backgroundBottom = css`

`

function App() {
  return (
  <>
    <div css={background}>
      <div css={backgroundTop}></div>
      <div css={backgroundBottom}></div>
    </div>
  </>
  );
}

export default App;
