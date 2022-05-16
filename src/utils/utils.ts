
export const promptComparison = (prompt: string, preset: string) => {
    return prompt.split("") === preset.split("");
}