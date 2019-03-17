import { css } from "@emotion/core";
import { colors, border } from '../../styles';
// import { IMessageTypes } from './Message.interfaces';

// Block
export const styles = css`
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 100%;
  text-align: left;
  padding: 8px;
  margin: 8px 0;
  border: ${border.size} ${border.style};
  border-radius: ${border.radius};
  line-height: 1.4;
`;


// Modifiers
const palete = (bgColor?: string, fontColor?: string, borderColor?: string) => css`
  background  : ${bgColor || colors.basic.white};
  color: ${fontColor || colors.basic.black};
  border-color: ${borderColor || fontColor || colors.basic.black}
`

export const stylesTypes = {
  info: palete(colors.status.info.background, colors.status.info.text),
  success: palete(colors.status.success.background, colors.status.success.text),
  warning: palete(colors.status.warning.background, colors.status.warning.text),
  error: palete(colors.status.error.background, colors.status.error.text)
}



// const styles2 = {
//   panel: {
//     background: 'red'
//   },
//   alert: {
//      backgroundColor: 'red'
//   }
// };

// class App extends Component {
//   render() {
//     return (
//       <div style={css(
//             styles.panel,
//             this.props.alert && styles.alert
//         )}
//       >
//         React + Emotion rocks!
//       </div>
//     );
//   }
// }