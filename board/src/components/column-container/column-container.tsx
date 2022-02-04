import { ColumnContainer, ColumnTitle } from "../../styles";
import { Card } from "../card-container/card-container";
import { AddNewItem } from "../add-item/add-item";

type ColumnProps = {
  text: string;
};

export const Column = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text="Generate app scaffold" />
      <Card text="Learn TypeScript" />
      <Card text="Begin to use static typing" />
      <AddNewItem
      toggleButtonText="+ Add another card"
      onAdd={console.log}
      dark
      />
    </ColumnContainer>
  );
};
