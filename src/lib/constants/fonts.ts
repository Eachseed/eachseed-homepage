import { Bayon, Poppins } from "next/font/google";

export const headingFont = Bayon({
    weight: "400",
    subsets: ['khmer']
})

export const bodyFont = Poppins({
    weight: ["200", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"]
})