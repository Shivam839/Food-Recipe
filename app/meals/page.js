import Link from "next/link";
import classes from "./page.module.css"
import MealGrid from "@/components/meals/meal-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import Loading from "./loading-out";

async function Meal() {
    const meals = await getMeals();
    return <MealGrid meals={meals} />

}

export default function Meals() {


    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created {" "} <span className={classes.highlight}> by you</span>
                </h1>
                <p> Choose your favourite recipe and cook it your self. It is easy and fun </p>
                <p className={classes.cta}>
                    <Link href="/meals/share">
                        Share your favourite recipe
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<Loading />}>
                    <Meal />
                </Suspense>
            </main>

        </>
    )
}