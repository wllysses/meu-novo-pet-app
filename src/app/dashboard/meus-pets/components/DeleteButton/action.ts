"use server";

import { prismaClient } from "@/lib/prisma";

export async function destroy(petId: string) {
    try {
        await prismaClient.pet.delete({
            where: {
                id: petId
            }
        });
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}