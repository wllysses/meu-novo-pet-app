"use server";

import { prismaClient } from "@/lib/prisma";

export async function update({ petId, available }: { petId: string, available: boolean }) {
    try {
        await prismaClient.pet.update({
            where: {
                id: petId
            },
            data: {
                available
            }
        });
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}