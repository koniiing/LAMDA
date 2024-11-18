import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
export const GlobalStyles = createGlobalStyle`
    ${reset}
    html{
        font-size:10px;
        box-sizing:border-box;
    }
    body{ 

    font-family: coolvetica, sans-serif,Pretendard,PP-Editorial;
    font-style: normal;
    

    }
    .konkhmer-sleokchher-regular {
  font-family: "Konkhmer Sleokchher", system-ui;
  font-weight: 400;
  font-style: normal;
}

//     @font-face {
//   font-family: "PP-Editorial";
//   font-weight: 400;
//   src: url("../assets/fonts/pp-regular.woff") format("woff");
// }

// @font-face {
//   font-family: "PP-Editorial";
//   font-weight: 500;
//   src: url("../assets/fonts/pp-ultria-bold.woff") format("woff");
// }
// @font-face {
//   font-family: "PP-Editorial";
//   font-weight: 500;
//   font-style: italic;
//   src: url("../assets/fonts/pp-ultra-bolditalic.woff") format("woff");
// }
// @font-face {
//   font-family: "PP-Editorial";
//   font-weight: 300;
//   src: url("../assets/fonts/pp-ultra-light.woff") format("woff");
// }
// @font-face {
//   font-family: "PP-Editorial";
//   font-weight: 300;
//   font-style: italic;
//   src: url("../assets/fonts/pp-ultra-lightitalic.woff") format("woff");
// }

// @font-face {
//   font-family: "Coolvetica";
//   font-weight: 400;
//   src: url("../assets/fonts/CoolveticaRg-Regular.woff") format("woff");
// }
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
`;
