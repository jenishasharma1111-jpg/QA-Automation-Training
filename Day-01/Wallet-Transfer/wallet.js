// Wallet Transfer Snapshot
// QA Automation Training - Day 1

const merchantName = "Qrius Store";
let balancePaisa = 250000;
const isKycVerified = true;

const amountPaisa = 150000;
const cashbackPaisa = amountPaisa * 0.02;

// Check whether the transfer can be completed.
const canSend =
    balancePaisa >= amountPaisa &&
    isKycVerified &&
    amountPaisa > 0;

// Update the balance after the transfer.
balancePaisa -= amountPaisa;

// Display the transaction receipt.
console.log(`
Merchant : ${merchantName}
KYC      : ${isKycVerified ? "verified" : "not verified"}
Sent     : Rs ${(amountPaisa / 100).toFixed(2)}
Cashback : Rs ${(cashbackPaisa / 100).toFixed(2)}
Balance  : Rs ${(balancePaisa / 100).toFixed(2)}
Approved : ${canSend}
`);