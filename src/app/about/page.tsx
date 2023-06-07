import Main from "@/components/base/Main";
import { H1 } from "@/components/base/TypographyComponent";
import { AlertButton, TestButton } from "./Buttons";

export default function About() {
    return (
        <Main>
            <H1>About</H1>
            <AlertButton title="Arne">Click</AlertButton>
            <TestButton color="green">Click</TestButton>
        </Main>
    )
}