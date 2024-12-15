import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCartItem } from "../services/cartItem/mutation";

export const useUpdateCartItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["CART_ITEM"],
    mutationFn: (payload: { type: string; id: string }) =>
      updateCartItem(payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["CART"]);
    },
  });
};
