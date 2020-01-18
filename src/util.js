
export function capitalizeTitle(str) {
    return str.split("-")
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ")
}
