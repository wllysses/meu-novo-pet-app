"use server";

import { prismaClient } from "@/lib/prisma";

type CreatePetType = {
  userId: string;
  name: string;
  race: string;
  type: string;
  age: string;
  size: string;
  sex: string;
  imageUrl: string;
  contact: string;
};

export default async function create({
  userId,
  name,
  race,
  type,
  age,
  size,
  sex,
  imageUrl,
  contact,
}: CreatePetType) {
  try {
    await prismaClient.pet.create({
      data: {
        userId,
        name,
        race,
        type,
        age,
        size,
        sex,
        imageUrl,
        contact,
      },
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
