let balancePaisa = 500000;       // Rs 5,000
const perTxnLimitPaisa = 2500000; // Rs 25,000

const batch = [
  {
    id: "TXN-01",
    gateway: "esewa",
    amountPaisa: 15000,
    customer: {
      name: "Jenisha",
      kyc: {
        level: 2
      }
    },
    remarks: "College fee"
  },

  {
    id: "TXN-02",
    gateway: "khalti",
    amountPaisa: 0,
    customer: {
      name: "Aarav",
      kyc: {
        level: 2
      }
    },
    remarks: ""
  },

  {
    id: "TXN-03",
    gateway: "esewa",
    amountPaisa: 2700000,
    customer: {
      name: "Sita",
      kyc: {
        level: 3
      }
    }
  },

  {
    id: "TXN-04",
    gateway: "connectips",
    amountPaisa: 120000,
    customer: {
      name: "Ram",
      kyc: {
        level: 1
      }
    },
    remarks: "Hostel payment"
  },

  {
    id: "TXN-05",
    gateway: "paypal",
    amountPaisa: 50000,
    customer: {
      name: "Nisha",
      kyc: {
        level: 2
      }
    }
  },

  {
    id: "TXN-06",
    gateway: "esewa",
    amountPaisa: 600000,
    customer: {
      name: "Prakash",
      kyc: {
        level: 2
      }
    },
    remarks: "Monthly expense"
  }
];


// Calculate transaction fee
function feeFor(amountPaisa) {
  if (amountPaisa <= 10000) {
    return 0;
  } else if (amountPaisa <= 100000) {
    return 500;
  } else {
    return 1500;
  }
}


// Validate transaction
function validate(txn) {
  // 1. Amount check
  if (txn.amountPaisa <= 0) {
    return "Invalid amount";
  }

  // 2. KYC level check
  else if (txn.customer.kyc.level < 2) {
    return "KYC pending";
  }

  // 3. Per-transaction limit
  else if (txn.amountPaisa > perTxnLimitPaisa) {
    return "Exceeds per-transaction limit";
  }

  // 4. Balance check
  else if (txn.amountPaisa > balancePaisa) {
    return "Insufficient balance";
  }

  // 5. Gateway check
  else if (
    txn.gateway !== "esewa" &&
    txn.gateway !== "khalti" &&
    txn.gateway !== "connectips"
  ) {
    return "Unsupported gateway";
  }

  return "OK";
}


// Route transaction through gateway
function route(gateway) {
  switch (gateway) {
    case "esewa":
      return "Routing through eSewa";

    case "khalti":
      return "Routing through Khalti";

    case "connectips":
      return "Routing through connectIPS";

    default:
      return "No supported route";
  }
}


// Running totals
let approvedCount = 0;
let rejectedCount = 0;
let totalValuePaisa = 0;


// Store rejected transaction IDs
const rejectedIds = [];


// Process every transaction
for (const txn of batch) {
  const verdict = validate(txn);

  // Reject transaction
  if (verdict !== "OK") {
    console.log(`${txn.id}: REJECTED - ${verdict}`);

    rejectedCount++;
    rejectedIds.push(txn.id);

    continue;
  }

  // Calculate fee
  const feePaisa = feeFor(txn.amountPaisa);

  // Show remark or default message
  const remark = txn.remarks || "(no remark)";

  // Print approved transaction
  console.log(`${txn.id}: APPROVED`);
  console.log(`Customer: ${txn.customer.name}`);
  console.log(`Amount: Rs ${txn.amountPaisa / 100}`);
  console.log(`Fee: Rs ${feePaisa / 100}`);
  console.log(`Remark: ${remark}`);
  console.log(route(txn.gateway));

  // Update totals
  approvedCount++;
  totalValuePaisa += txn.amountPaisa;

  // Deduct approved amount from running balance
  balancePaisa -= txn.amountPaisa;

  console.log(`Remaining balance: Rs ${balancePaisa / 100}`);
  console.log("");
}


// Final summary
console.log(
  `Summary: ${approvedCount} approved, ${rejectedCount} rejected, total value Rs ${totalValuePaisa / 100}`
);

console.log(`Rejected IDs: ${rejectedIds.join(", ")}`);
console.log(`Final balance: Rs ${balancePaisa / 100}`);