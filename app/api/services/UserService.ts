// import { UserCreatePayload } from "@/app/models/UserModel";
// import { prisma } from "@/lib/prisma";

// export const createOrUpdateUser = async (data: UserCreatePayload) => {
  // const { userId, email, accessToken, expiresIn } = data;

  // const existingUser = await prisma.user.findUnique({
  //   where: {
  //     userId,
  //   },
  // });


  // if (existingUser) {
  //   // Update the existing record
  //   return prisma.user.update({
  //     where: {
  //       userId,
  //     },
  //     data: {
  //       accessToken: accessToken,
  //       expiresIn: expiresIn,
  //     },
  //   });
  // } else {
  //   // Create a new record
  //   return prisma.user.create({
  //     data: {
  //       userId: userId,
  //       accessToken: accessToken,
  //       expiresIn: expiresIn,
  //       email: email,
  //     },
  //   });
  // }
// };
