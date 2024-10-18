export const defaultPlanId = "free"

export const pricingPlans = [
  {
    id: "free",
    name: "Free",
    description: "A free plan to get you started!",
    price: "$0",
    priceIntervalName: "per month",
    stripe_price_id: null,
    features: ["MIT Licence", "Fast Performance", "Stripe Integration"],
  },
  {
    id: "pro",
    name: "Pro",
    description:
      "A plan to test the purchase experience. Try buying this with the test credit card 4242424242424242.",
    price: "$5",
    priceIntervalName: "per month",
    stripe_price_id: "price_1QB52KP3WlJdlkiPHVUdrqwH",
    stripe_product_id: "prod_R3BPJpoWY3ZHJe",
    features: [
      "Everything in Free",
      "Support us with fake money",
      "Test the purchase experience",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description:
      "A plan to test the upgrade experience. Try buying this with the test credit card 4242424242424242.",
    price: "$15",
    priceIntervalName: "per month",
    stripe_price_id: "price_1QB53yP3WlJdlkiPv0MEydFy",
    stripe_product_id: "prod_R3BQE548bhmEuk",
    features: [
      "Everything in Pro",
      "Try the 'upgrade plan' UX",
      "Still actually free!",
    ],
  },
]
