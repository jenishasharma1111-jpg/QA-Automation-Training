
const merchantName: string = "Qrius Store";
let balancePaisa: number = 250000;
const isKycVerified: boolean = true;

const amountPaisa: number = 150000;
const cashbackPaisa: number = amountPaisa * 0.02;

// Check whether the transfer can be completed.
const canSend: boolean =
    balancePaisa >= amountPaisa &&
    isKycVerified &&
    amountPaisa > 0;

// Update the balance after the transfer.
balancePaisa = balancePaisa - amountPaisa;

// Display the transaction receipt.
console.log(`
Merchant : ${merchantName}
KYC      : ${isKycVerified ? "verified" : "not verified"}
Sent     : Rs ${(amountPaisa / 100).toFixed(2)}
Cashback : Rs ${(cashbackPaisa / 100).toFixed(2)}
Balance  : Rs ${(balancePaisa / 100).toFixed(2)}
Approved : ${canSend}
`);