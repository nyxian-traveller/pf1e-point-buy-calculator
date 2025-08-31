export interface PointBuy {
    name: string;
    points: number;
};

export const PointBuys: PointBuy[] = [
    { name: 'Low-powered Fantasy', points: 10 },
    { name: 'Standard Fantasy', points: 15 },
    { name: 'High Fantasy', points: 20 },
    { name: 'Epic Fantasy', points: 25 }
];