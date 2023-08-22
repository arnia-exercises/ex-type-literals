import { styled } from "styled-components";

const NotificationBase = styled.div`
  color: #fff;
  padding: 10px 15px;
  margin: 10px 0;
  font-size: 14px;
  border-radius: 4px;
`

export const Success = styled(NotificationBase)`
  background: #27ae60;
`

export const Error = styled(NotificationBase)`
  background: #c0392b;
`

export const Info = styled(NotificationBase)`
  background: #3498db;
`

export const Warning = styled(NotificationBase)`
  background: #f39c12;
`