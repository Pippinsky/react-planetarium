import { useEffect, useReducer } from "react";
import * as ItemReducer from "../../items/items";
import { getAllItems } from "../../services/api-service";

const ItemList = () => {
  const [items, itemsDispatch] = useReducer(
    ItemReducer.itemReducer,
    ItemReducer.initialItemState
  );

  useEffect(() => {
    getAllItems()
      .then((data) => {
        itemsDispatch({ type: ItemReducer.SET_ITEMS, payload: data });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return <section></section>;
};

export default ItemList;
