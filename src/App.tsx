import { AddNewItem } from './AddNewItem';
import { Column } from './Column';
import { addList } from './state/actions';
import { useAppState } from './state/AppStateContext';
import { AppContainer } from './styles';

export const App = () => {
  const { lists, dispatch } = useAppState();

  return (
    <AppContainer>
      {lists.map(({ id, text }) => (
        <Column key={id} id={id} text={text} />
      ))}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={(text) => dispatch(addList(text))} />
    </AppContainer>
  );
};
