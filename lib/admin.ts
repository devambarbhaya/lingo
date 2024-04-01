import { auth } from "@clerk/nextjs";

const adminIds = ["user_2dwSm90SjNlsiv2FubDkPYdX4zz"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
