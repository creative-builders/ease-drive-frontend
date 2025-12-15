
import { useMutation } from "@tanstack/react-query";
import { deleteUserAccount } from "../store/auth/general/api";

export const useDeleteAccount = () => {
  const mutation = useMutation({
    mutationFn: async (user_Id) => {
      const response = await deleteUserAccount(user_Id);
      return response;
    },
  });

  return mutation;
};

