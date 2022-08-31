import styled from "styled-components";

export const HomeContainer = styled.div`
  justify-content: center;
  align-content: center;
  height: 60vh;
  margin: 16rem auto;
  max-width: 950px;

  @media screen and (max-width: 1020px) {
    margin: 4rem 3rem;
  }
`

export const HomeHeadline = styled.div`
  font-weight: 700;
	font-style: italic;
  font-size: 6rem;
  align-self: end;
  margin: 0 0 2rem 0;

  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }
`

export const HomeSubhead = styled.div`
  font-weight: 200;
  font-size: 3rem;
  align-self: end;
  margin: 0 0 2rem 0;
`

export const HomeContent = styled.div`
  font-weight: 400;
  font-size: 1.85rem;
  align-self: end;
  line-height: 3rem;

  a {
    color: #000;
    text-decoration: none;

    &:hover {
      color: #e75a58;
    }
  }
`

