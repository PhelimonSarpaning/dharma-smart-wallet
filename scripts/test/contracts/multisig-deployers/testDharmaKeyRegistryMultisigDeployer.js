async function testDharmaKeyRegistryMultisigDeployer(tester, contract) {
    await tester.runTest(
        `DharmaKeyRegistryMultisig contract deployment fails if threshold is not met`,
        contract,
        "",
        "deploy",
        [["0x0000000000000000000000000000000000000001"]],
        false
    );

    await tester.runTest(
        `DharmaKeyRegistryMultisig contract deployment fails if sigs are out of order`,
        contract,
        "",
        "deploy",
        [
            [
                "0x0000000000000000000000000000000000000005",
                "0x0000000000000000000000000000000000000002",
                "0x0000000000000000000000000000000000000003",
                "0x0000000000000000000000000000000000000004",
                "0x0000000000000000000000000000000000000001"
            ]
        ],
        false
    );

    await tester.runTest(
        `DharmaKeyRegistryMultisig contract deployment fails with too many owners`,
        contract,
        "",
        "deploy",
        [
            [
                "0x0000000000000000000000000000000000000001",
                "0x0000000000000000000000000000000000000002",
                "0x0000000000000000000000000000000000000003",
                "0x0000000000000000000000000000000000000004",
                "0x0000000000000000000000000000000000000005",
                "0x0000000000000000000000000000000000000006",
                "0x0000000000000000000000000000000000000007",
                "0x0000000000000000000000000000000000000008",
                "0x0000000000000000000000000000000000000009",
                "0x000000000000000000000000000000000000000a",
                "0x000000000000000000000000000000000000000b"
            ]
        ],
        false
    );

    await tester.runTest(
        `DharmaKeyRegistryMultisig contract deployment`,
        contract,
        "",
        "deploy",
        [
            [
                tester.ownerOne,
                tester.ownerTwo,
                tester.ownerThree,
                tester.ownerFour,
                tester.ownerFive
            ]
        ]
    );
}

module.exports = {
    testDharmaKeyRegistryMultisigDeployer
};
