"use server"

import { redirect } from "next/navigation";
import { saveMeal } from "./meals"
import { revalidatePath } from "next/cache";

function isvalidtext(text) {
    return !text || text.trim() === "";
}

export async function shareMeal(prevState, formData) {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get("instructions"),
        image: formData.get("image"),
        creator: formData.get("name"),
        creator_email: formData.get("email")
    }
    // console.log(meal);
    if (
        isvalidtext(meal.title) ||
        isvalidtext(meal.summary) ||
        isvalidtext(meal.instructions) ||
        isvalidtext(meal.creator) ||
        isvalidtext(meal.creator_email) ||
        !meal.creator_email.includes("@") ||
        !meal.image ||
        !meal.image.size === 0
    ) {
        return { message: "Invalid data" }
    }
    await saveMeal(meal);
    revalidatePath("/meals") // it revalidate the meals page and not store catch aggressivaly  // we use it for productioon server
    redirect("/meals")

}