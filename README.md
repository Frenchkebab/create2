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

        SALT:  777

        Calculated Address :  0x7f49500Acc41aC0B16A1101448E347918CA896A5
        Deployed Addrss    :  0x7f49500acc41ac0b16a1101448e347918ca896a5
    ✔ should calculate its address before DeployWithCreate2 contract is created (48ms)


  1 passing (358ms)
```

## [2] Note

### create

`keccak256(rlp([sender, nonce]))[12:]`

`create` creates a contract using **address** and **nonce** of `msg.sender`.

### create2

`keccak256( 0xff ++ address ++ salt ++ keccak256(init_code))[12:]`

`create2` creates a contract using **salt** and **creationCode** instead of **nonce**, thus making it possible to calculate address of the contract before its creation.
