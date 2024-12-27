// // Import Express
// const bodyparser = require('body-parser');
// const express = require('express');
// const stripe = require('stripe')('sk_test_51QXzeSDQNeVDcpoYpmQBXZGzNzJSiEuWLh2PCLiM5FIcTmBR8aapRy3DuyH0HZe9BcjsMTD349q1KPRrxvHOpQkI00MQZHH6h5')

// const app = express();


// // Body-parser middleware
// app.use(bodyparser.urlencoded({ extended: true }))
// app.use(bodyparser.json())



// // Define a route
// app.get('/', (req, res) => {
//     res.send('Welcome to the Express.js Tutorialefeferfe');
// });

// // Start the server

// app.post("/checkout", async(req,res)=>{
// //    let checkoutData=JSON.parse(req.body.checkoutData)
// //    console.log(checkoutData);

//    let obj = JSON.parse(req.body.checkoutData)
// //    console.log(obj.products);

//    let final = []

   
//    for(var k of obj.products){
//        final.push( {
//            price_data: {
//                currency: 'usd',
//                product_data: {
//             name: k.title,
//           },
//           unit_amount: Math.round(k.price) ,
//         },
//         quantity: k.quantity,
//     })
// }
   
//    const session = await stripe.checkout.sessions.create({
//     line_items: final,
//     mode: 'payment',
//     success_url: 'http://localhost:3000/successPage',
//     cancel_url: 'http://localhost:4242/cancel',
//   });
//    res.redirect(303, session.url);
   

    
// })
    


// app.post('/create-checkout-session', async (req, res) => {
//     const session = await stripe.checkout.sessions.create({
//       line_items: [
//         {
//           price_data: {
//             currency: 'usd',
//             product_data: {
//               name: 'T-shirt',
//             },
//             unit_amount: 2000,
//           },
//           quantity: 1,
//         },
//       ],
//       mode: 'payment',
//       success_url: 'http://localhost:4242/success',
//       cancel_url: 'http://localhost:4242/cancel',
//     });
  
//     res.redirect(303, session.url);
//   });



//     app.listen(1111, () => {
//         console.log('Server is running on http://localhost:1111');
//     });


const express = require('express');
const bodyparser = require('body-parser');
const stripe = require('stripe')('sk_test_51QXzeSDQNeVDcpoYpmQBXZGzNzJSiEuWLh2PCLiM5FIcTmBR8aapRy3DuyH0HZe9BcjsMTD349q1KPRrxvHOpQkI00MQZHH6h5');

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Express.js Server');
});

app.post('/checkout', async (req, res) => {
  try {
    const checkoutData = JSON.parse(req.body.checkoutData);

    const lineItems = checkoutData.products.map((product) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: product.title,
        },
        unit_amount: Math.round(product.price * 100),
      },
      quantity: product.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: 'http://localhost:3000/successPage',
      cancel_url: 'http://localhost:3000/cancelPage',
    });

    res.redirect(303, session.url);
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(1111, () => {
  console.log('Server running at http://localhost:1111');
});
