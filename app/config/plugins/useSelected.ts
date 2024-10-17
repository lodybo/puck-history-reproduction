import { usePuck } from "@measured/puck"

export const useSelected = (componentId: string) => {
  const {
    appState: {
      ui: { itemSelector },
      data,
    },
    dispatch,
  } = usePuck();

  // ItemSelector is empty if we directly click on the editor. If we click TinyMCE's toolbar, it's not empty and everything works.
  // But then, history.historyStore is empty, so an error is thrown.

  if (!itemSelector) {
    console.log('useSelected !itemSelector', { itemSelector });
    return {
      isSelected: false,
      onChange: null,
    }
  }

  const { index: destinationIndex, zone: destinationZone } = itemSelector

  if (!destinationZone) {
    console.log('useSelected !destinationZone');
    return {
      isSelected: false,
      onChange: null,
    }
  }

  const item =
    destinationZone !== "default-zone"
      ? data.zones?.[destinationZone]?.[destinationIndex]
      : data.content[destinationIndex]

  if (item?.props.id !== componentId) {
    console.log('useSelected item?.props.id !== componentId', item?.props.id, componentId);
    return {
      isSelected: false,
      onChange: null,
    }
  }

  console.log('all good');
  return {
    isSelected: true,
    onChange: (props: Partial<typeof item.props>) => {
      console.log('useSelected onChange', props)
      dispatch({
        type: 'replace',
        destinationIndex,
        destinationZone,
        data: {
          props: { ...item.props, ...props },
          type: item.type,
        },
      })},
  }
}
