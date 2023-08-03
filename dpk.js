const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  if (!event) {
    return "0";
  }

  if (typeof event.partitionKey === "string") {
    return event.partitionKey;
  }

  const data = JSON.stringify(event);
  let candidate = crypto.createHash("sha3-512").update(data).digest("hex");

  if (candidate.length > 256) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }

  return candidate;
};
