export const CardReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      if (state.newList.some(prod => prod.product.id === action.product.id)) {
        return {
          newList: state.newList.map(prod => {
            console.log(prod.count);
            return prod.product.id === action.product.id
              ? { ...prod, count: prod.count + 1 }
              : prod;
          })
        };
      }
      return {
        newList: [
          ...state.newList,
          { product: action.product, count: action.count }
        ]
      };
    }
    case "INCREASE": {
      return {
        newList: state.newList.map(prod => {
          console.log(prod.count);
          return prod.product.id === action.id
            ? { ...prod, count: prod.count + 1 }
            : prod;
        })
      };
    }
    case "DECREASE": {
      return {
        newList: state.newList.map(prod => {
          console.log(prod.count);
          return prod.product.id === action.id && prod.count > 1
            ? { ...prod, count: prod.count - 1 }
            : prod;
        })
      };
    }
    case "DELETE": {
      return {
        newList: state.newList.filter(
          product => product.product.id !== action.id
        )
      };
    }
    default:
      return state;
  }
};
