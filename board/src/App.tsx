import {AppContainer} from "./styles";
import { Column } from "./components/column-container/column-container";
import { AddNewItem } from "./components/add-item/add-item";

export const App = () => {
  return (
    <AppContainer>
      <Column text="Todo:"/>
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={console.log}
      />
    </AppContainer>
  );
};
