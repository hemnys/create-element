import { Component } from "../lib/react/src/React.js";
import styled from "../lib/styled-components.js";

const UserStyled = styled.div`
  background: red;
`;
const AvatarStyled = styled.img`
  color: white;
`;
class User extends Component {
  render() {
    const { avatar, name } = this.props;
    return `${UserStyled(`
      ${AvatarStyled(`
        src="${avatar}"
      `)}
      <h4>${name}</h4>
    `)}`;
  }
}

export default User;
