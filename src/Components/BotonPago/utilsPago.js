export const ACCESS_TOKEN ="APP_USR-6783227213516217-031919-fdbab35cb3c110743626d1534eecc893-1092642418"

export const urlMercadoPago = "https://api.mercadopago.com/checkout/preferences";

export let body = {
    payer_email: "test_user_71811293@testuser.com",
    items: [
      {
        title: "Viaje en Her Way",
        description: "Viaje en Her Way",
        picture_url: "https://png.pngtree.com/png-clipart/20190520/original/pngtree-girl-taking-a-taxi-out-taxitrunktravel-png-image_4032278.jpg",
        category_id: "category123",
        quantity: 1,
        unit_price: 180
      }
    ],
    back_urls: {
      failure: "/failure",
      pending: "/pending",
      success: "http://localhost:3000"
    },
    payment_methods: {
        excluded_payment_types: [
            {
                id: "ticket"
            }
        ],
          installments: 1
      }
  }
