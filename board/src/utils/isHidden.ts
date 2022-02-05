import { DragItem } from "../drag-item"

export const isHidden = (
    draggedItem: DragItem | null,
    itemType: string,
    id: string
): boolean => {
    return Boolean(
        draggedItem &&
        draggedItem.type === itemType &&
        draggedItem.id === id
    )
}