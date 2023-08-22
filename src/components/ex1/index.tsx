/**
 * Desenvolva um sistema de notificações em React.
 * Crie um componente de notificação que possa receber diferentes tipos de
 * notificações como propriedades. Use tipos literais para definir os tipos
 * de notificações disponíveis: 'success', 'info', 'warning' e 'error'.
 * O componente de notificação deve exibir a mensagem da notificação com
 * a aparência apropriada para o tipo correspondente
 */

import Notification from "./notication";

export function Ex1 () {
  return (
    <>
      <Notification type="success">Minha notificação de success</Notification>
      <Notification type="error">Minha notificação de error</Notification>
      <Notification type="warning">Minha notificação de warning</Notification>
      <Notification type="info">Minha notificação de info</Notification>
    </>
  )
}
