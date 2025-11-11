export const products = [
    {
        id: 30,
        name: "Eagle Keychain",
        short_description: "Detailed eagle keychain in gold PLA, perfect for keys or backpacks.",
        description: "Show your school spirit with this detailed Eagle Keychain, part of the DO Merch collection. Crafted with precision, this keychain features a striking eagle design and is perfect for backpacks, keys, or as a collectible. Made from durable PLA material in a gold finish, it’s both stylish and sturdy.",
        price: 9.99,
        model_id: 1, // Corresponds to /uploads/19e1d52e6aae5f04.glb
        type: "custom",
        image: {
            url: "/uploads/cbe090eb31614d61.png"
        },
        customOptions: [
            { 
                id: 1,
                type: 'text',
                label: 'Add Engraving Text',
                name: 'engraving_text',
                default: 'Del Oro',
            },
            {
                id: 2,
                type: 'material',
                label: 'Base Material',
                slot: 'base',
                allowed: ['PLA', 'PETG', 'ABS'],
                default: 2
            }
        ],
        tags: ["jewelry", "merch"]
    },
    {
        id: 29,
        name: "Articulated Lizard",
        short_description: "Flexible green lizard toy made from durable PETG.",
        description: "Enjoy hours of fun with the Articulated Lizard! This playful toy features multiple moving segments, allowing it to bend and twist in lifelike ways. Designed for fidgeting and entertainment, it’s printed in vibrant green PETG for durability and flexibility. Great for kids and adults who love unique desk toys.",
        price: 14.50,
        model_id: 2, // Corresponds to /uploads/a1bd905774121e61.glb
        type: "custom",
        image: {
            url: "/uploads/1751497278_500df4af574e31b91479.png"
        },
        customOptions: [
            {
                id: 1,
                type: 'material',
                label: 'Belly Material',
                slot: 'belly',
                allowed: ['PLA', 'PETG', 'ABS'],
                default: 2
            },
            {
                id: 2,
                type: 'material',
                label: 'Top Material',
                slot: 'top',
                allowed: ['PLA', 'PETG', 'ABS'],
                default: 2
            },
            {
                id: 3,
                type: 'material',
                label: 'Eyes Material',
                slot: 'eyes',
                allowed: ['PLA', 'PETG', 'ABS'],
                default: 2
            },

        ],
        tags: ["toy", "fidget", "fun"]
    },
    {
        id: 31,
        name: "DO Earrings",
        short_description: "Lightweight silver PLA earrings with a modern design.",
        description: "Accessorize with these stylish DO Earrings, part of the exclusive DO Merch line. These lightweight earrings feature a sleek, modern design and are printed in silver PLA for a smooth, polished look. Perfect for everyday wear or special occasions, they make a great gift for fans and fashion lovers alike.",
        price: 7.99,
        model_id: 3, // Not in original models, but can be added
        type: "standard",
        image: {
            url: "/uploads/fecc88a4b0e760ad.png"
        },
        tags: ["jewelry", "merch"]
    },
    {
        id: 32,
        name: "Star Fidget",
        short_description: "Yellow PLA star-shaped fidget toy for stress relief.",
        description: "Brighten your day with the Star Fidget! This cheerful fidget toy is shaped like a star and designed to help relieve stress and improve focus. Made from sturdy yellow PLA, it’s comfortable to hold and spin, making it ideal for both kids and adults. Keep it on your desk or carry it in your pocket for instant relaxation.",
        price: 8.99,
        model_id: 4, // Not in original models, but can be added
        type: "custom",
        image: {
            url: "/uploads/7c9543d5af38f796.png"
        },
        customOptions: [
            {
                id: 1,
                type: 'material',
                label: 'Material',
                slot: 'base',
                options: ['PLA', 'PETG', 'ABS'],
                default: 2
            }
        ],
        tags: ["fun", "fidget"]
    }
];

export const models = [
    { id: 1, url: "/uploads/19e1d52e6aae5f04.glb" }, // Eagle Keychain
    { id: 2, url: "/uploads/a1bd905774121e61.glb" }, // Articulated Lizard
    { id: 3, url: "/uploads/0e7c394e3269b8f5.glb" }, // DO Earrings
    { id: 4, url: "/uploads/991694e7f6ca47db.glb" }  // Star Fidget
];
