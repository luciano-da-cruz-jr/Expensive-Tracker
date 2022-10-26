import * as C from './styles';
import { Item } from '../../type/Item';


type Props = {
    onAdd: (item: Item) => void;
}

export const ImputArea = ({ onAdd }: Props) => {

    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(2022, 9, 27),
            category: 'food',
            title: 'Item de Teste',
            value: 250.25
        };
        onAdd(newItem);
    }

    return (
        <C.Container>
            <button onClick={handleAddEvent}>Adicionar</button>
        </C.Container>
    )
}