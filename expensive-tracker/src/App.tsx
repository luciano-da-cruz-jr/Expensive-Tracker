import * as C from './App.styles';
import { Item } from './type/Item';
import { Category } from './type/Category';
import { items } from './data/items';
import { categories } from './data/categories';
import { useEffect, useState } from 'react';
import { getCurrentMonth, filterListByMonth } from './helpers/dataFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { ImputArea } from './components/ImputArea';

const App = () => {
  const [list, setList] = useState(items); // Lista completa
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expensive, setExpensive] = useState(0);

  useEffect(() => {
    setFilteredList( filterListByMonth(list, currentMonth) );
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expensiveCount = 0;

    for(let i in filteredList){
      if (categories[filteredList[i].category].expensive) {
        expensiveCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setExpensive(expensiveCount);
    setIncome(incomeCount);

  },[filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expensive={expensive}
        />

       <ImputArea onAdd={handleAddItem}/>

        <TableArea list={filteredList}/>

      </C.Body>
    </C.Container>
  )
}

export default App;