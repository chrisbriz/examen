import { useDragLayer } from "react-dnd"
import { Column } from "../column-container/column-container"
import { CustomDragLayerContainer, DragPreviewWrapper } from "../../styles"
import { useAppState } from "../../state/AppStateContext"

export const CustomDragLayer = () => {
  const { draggedItem } = useAppState()
  const { currentOffset } = useDragLayer((monitor) => ({
    currentOffset: monitor.getClientOffset(),
  }))

  return draggedItem && currentOffset ? (
    <CustomDragLayerContainer>
      <DragPreviewWrapper position={currentOffset}>
        <Column id={draggedItem.id} text={draggedItem.text} isPreview />
      </DragPreviewWrapper>
    </CustomDragLayerContainer>
  ) : null
}
