import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  display: grid;
  grid-template-columns: 5fr 1fr;
  width: auto;
  height: 40px;
  padding: 40px 40px 40px 6px;
  background: #F7F5F5;
  box-shadow: 6px 2px 10px rgba(0, 0, 0, 0.2);
`

export const SubContainer = styled.div`
  background: transparent;
  font-weight: bold;
  gap: 24px;
  display: flex;
  flex-flow: row;
  align-self: flex-end;
  width: 100%;
  height: 40px;
`

export const NavNameIcon = styled.div`
  display: flex;
  gap: 8px;
  width: max-content;
  font-size: 16px;

  img{
    width: 25px;
    height: 25px;
  }
`

export const LogoArea = styled.div`
  display: flex;
  position: absolute;
  top: 0;
`