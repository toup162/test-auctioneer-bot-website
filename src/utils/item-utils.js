export const formatGold = copperAmount => ({
    gold: Math.floor(copperAmount / 10000),
    silver: Math.floor((copperAmount - 10000 * Math.floor(copperAmount / 10000)) / 100),
    copper: copperAmount % 100
})