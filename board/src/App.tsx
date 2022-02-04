import {AppContainer} from "./styles";
import { Column } from "./components/column-container/column-container";
import { AddNewItem } from "./components/add-item/add-item";
import { useAppState } from "./state/AppStateContext";
import { addList } from "./state/actions"

export const App = () => {
  const { lists, dispatch } = useAppState()

  return (
    <AppContainer>
      {lists.map((list) => (
        <Column text={list.text} key={list.id} id={list.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => dispatch(addList(text))}
      />
    </AppContainer>
  )
}
