import AddCoffeeMaker from "@/components/AddCoffeeMaker"
import CoffeeMakersList from "@/components/CoffeeMakersList"
import { H1 } from "@/components/base/TypographyComponent"

const ServerA = () => {
    return (
    <main>
        <H1>Server Actions Test</H1>

        <AddCoffeeMaker />

        {/* @ts-expect-error Server Component */}
        <CoffeeMakersList />
    </main>
    )
}

export default ServerA