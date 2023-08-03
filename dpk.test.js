const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("should return the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("should return the trivial partition key when event is not provided", () => {
    const result = deterministicPartitionKey(null);
    expect(result).toBe("0");
  });
  
  it("should use provided partition key when available", () => {
    const event = { partitionKey: "customKey" };
    const result = deterministicPartitionKey(event);
    expect(result).toBe("customKey");
  });
  
  it("should generate the partition key from event data when partition key is not provided", () => {
    const event = { name: "John", age: 30 };
    const result = deterministicPartitionKey(event);
    expect(result).toMatch(/[0-9a-f]{128}/); // The SHA3-512 hash is 128 characters long in hexadecimal.
  });
  
  it("should generate a long partition key when candidate key exceeds the max length", () => {
    const longKey = "a".repeat(300);
    const result = deterministicPartitionKey(longKey);
    expect(result).toMatch(/[0-9a-f]{128}/); // The SHA3-512 hash is 128 characters long in hexadecimal.
  });
});

