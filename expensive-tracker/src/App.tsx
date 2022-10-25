import * as C from './App.styles';
import { Item } from './type/Item';
import { Category } from './type/Category';
import { items } from './data/items';
import { categories } from './data/categories';
import { useEffect, useState } from 'react';
import { getCurrentMonth, filterListByMonth } from './helpers/dataFilter';
import { TableArea } from './components/TableArea';

const App = () => {
  const [list, setList] = useState(items); // Lista completa
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList( filterListByMonth(list, currentMonth) );
  }, [list, currentMonth])

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        {/* Área de informações*/}

        {/* Área de insrção*/}

        <TableArea list={filteredList}/>

      </C.Body>
    </C.Container>
  )
}

export default App;