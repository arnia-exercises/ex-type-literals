/**
 * Crie um componente de lista ordenável em React que possa receber diferentes tipos de ordenação como propriedades. Use tipos literais para definir as opções de ordenação disponíveis: 'asc' (crescente) e 'desc' (decrescente). O componente deve renderizar uma lista de itens e permitir que o usuário altere a ordem dos itens com base na ordenação selecionada.
 * 
*/

import SortList from "./sort-list";

export default function Ex2 () {
  return (
    <SortList
      list={['maçã', 'abacaxi', 'melancia', 'uva']}
      orderBy="DESC"
    />
  )
}
