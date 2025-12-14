import React from 'react'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'

const PayPalCheckoutButton = ({ amount, onSuccess, onError }) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": "AXRkM-PcuvutlJjXPS8mox16Hmb_OxWdbC4sKIASTP8KVyYstIhP2MwrV2SMDMh9g25CFzVkkpIbPWe1",
        currency: "LKR"
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount.toString()
                }
              }
            ]
          })
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(onSuccess)
        }}
        onError={onError}
      />
    </PayPalScriptProvider>
  )
}

export default PayPalCheckoutButton
