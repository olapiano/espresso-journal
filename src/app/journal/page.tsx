import JournalEntryForm from "@/components/JournalEntryForm";
import Main from "@/components/base/Main";
import { H1 } from "@/components/base/TypographyComponent";

export default function Journal() {
    return (
        <Main>
            <H1>Journal</H1>
            <JournalEntryForm />
        </Main>
    )
}