import styled from "styled-components";

export default styled.nav`
  width: 5vw;
  margin-top: auto;
  ul {
    padding: 1rem;
  }
  li {
    min-height: 150px;
  }

  a:hover {
    opacity: 0.2;
    cursor: pointer;
  }
  .active {
    opacity: 0.2;
  }
`;
