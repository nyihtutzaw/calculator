export class Calculator {
    private readonly menu: Record<string, number>;

    private discountItems=["Orange set","Pink set","Green set"];

    constructor() {
        this.menu = {
            "Red set": 50,
            "Green set": 40,
            "Blue set": 30,
            "Yellow set": 50,
            "Pink set": 80,
            "Purple set": 90,
            "Orange set": 120,
        };
    }


    calculatePrice(items: string[], hasMemberCard: boolean): number {
        let totalPrice = 0;

        items.forEach((item) => totalPrice += this.menu[item])


        const itemCounts: Record<string, number> = {};
        for (const item of items) {
            itemCounts[item] = (itemCounts[item] || 0) + 1;
            if (itemCounts[item] === 2 && (this.discountItems.includes(item))) {
                totalPrice -= (this.menu[item] * 2) * 0.05; // Apply 5% discount
            }
        }

        if (hasMemberCard) {
            totalPrice *= 0.9;
        }

        return totalPrice;
    }
}
