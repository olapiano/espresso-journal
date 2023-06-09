import AddCoffeeBlend from "@/components/AddCoffeeBlend"
import AddCoffeeMaker from "@/components/AddCoffeeRoaster"
import CoffeeBlendsList from "@/components/CoffeeBlendsList"
import CoffeeRoastersList from "@/components/CoffeeRoastersList"
import Hr from "@/components/base/Hr"
import { H1 } from "@/components/base/TypographyComponent"

const ServerA = () => {
    return (
    <main className="w-full">
        <H1>Server Actions Test</H1>
        <div className="w-full flex flex-row justify-evenly">
            <div>
                <AddCoffeeMaker />

                {/* @ts-expect-error Server Component */}
                <CoffeeRoastersList />
            </div>
            <div>
                {/* @ts-expect-error Server Component */}
                <AddCoffeeBlend />

                {/* @ts-expect-error Server Component */}
                <CoffeeBlendsList />
            </div>
        </div>
    </main>
    )
}

export default ServerA