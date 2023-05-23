export const cartReducer = (state, action) => {
    switch (action.type) {
      case "AGREGAR":
        return { AddProductCart: state.AddProductCart + 1 };
      case "QUITAR":
        return { AddProductCart: state.AddProductCart - 1 };
      default:
        return state;
    }
  };