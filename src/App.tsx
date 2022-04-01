/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const hello = css`
  color: red;
`

function App() {
  return (
  <>
    <div css={hello}>
      aa
    </div>
  </>
  );
}

export default App;
