import { AddNewItem } from './AddNewItem';
import { Card } from './Card';
import { addTask } from './state/actions';
import { useAppState } from './state/AppStateContext';
import { ColumnContainer, ColumnTitle } from './styles';

type ColumnProps = {
  id: string;
  text: string;
};

export const Column = ({ id, text }: ColumnProps) => {
  const { getTasksByListId, dispatch } = useAppState();
  const tasks = getTasksByListId(id);

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map(({ id, text }) => (
        <Card key={id} id={id} text={text} />
      ))}
      <AddNewItem toggleButtonText="+ Add another card" onAdd={(text) => dispatch(addTask(text, id))} dark />
    </ColumnContainer>
  );
}
