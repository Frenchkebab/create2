# Calculating contract address before its creation

## [0] Setup

### 1) Clone the repository

`$ git clone https://github.com/Frenchkebab/create2.git`

### 2) Install dependencies

`$ npx install`

## [1] Test

`npx hardhat test`

### Result

```
  Create2
    ✔ should calculate its address before DeployWithCreate2 contract is created (54ms)


  1 passing (450ms)
```

## [2] Note

### create

`create` creates a contract using **address** and **nonce** of `msg.sender`.

### create2

`keccak256( 0xff ++ address ++ salt ++ keccak256(init_code))[12:]`

`create2` creates a contract using **salt** and **creationCode** instead of **nonce**, thus making it possible to calculate address of the contract before its creation.
