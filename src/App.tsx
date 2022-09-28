import { AddNewItem } from './AddNewItem';
import { Column } from './Column';
import { useAppState } from './state/AppStateContext';
import { AppContainer } from './styles';

export const App = () => {
  const { lists } = useAppState();

  return (
    <AppContainer>
      {lists.map(({ id, text }) => (
        <Column key={id} id={id} text={text} />
      ))}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
};
