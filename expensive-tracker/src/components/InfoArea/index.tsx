import { formatCurrentMonth } from '../../helpers/dataFilter';
import { ResumeItem } from '../ResumeItem';
import * as C from './styles';

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void
    income: number;
    expensive: number
}

export const InfoArea = ({currentMonth, onMonthChange, income, expensive}: Props) => {

    const handlePrevMonth = () =>{
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth (currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    const handleNextMonth = () =>{
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth (currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    return (
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>
                <ResumeItem title="Receitas" value={income}/>
                <ResumeItem title="Despesas" value={expensive}/>
                <ResumeItem 
                    title="Balanço" 
                    value={income - expensive}
                    color={(income - expensive < 0 ? 'red' : 'green')}
                    />
            </C.ResumeArea>
        </C.Container>
    );
}