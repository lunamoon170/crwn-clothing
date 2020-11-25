import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Hr2cAENnRkguVJRveYHyhYppNHdNkzuhG9XynUit0dl82jJu0kFBKLJvDkci3fvCs1nSj4Uxx5zKPjFzJHpNZrQ00A1hDcpen';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            lable='Pay Now'
            name='luna shop'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}; 

export default StripeCheckoutButton;