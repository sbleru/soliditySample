const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // uppercase because constructor function
const provider = ganache.provider();
const web3 = new Web3(provider);
const { interface, bytecode } = require('../compile.js'); // module.exportsの読み込み

let accounts;
let inbox;

beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();

    // Use one of those accounts to deploy
    // the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface)) // コントラクトがどんなmethodを持つかなどの情報をweb3に教える　　
        .deploy({ data: bytecode, arguments: ['Hi there!'] }) // argumentsがコントラクタの引数になる
        .send(({ from: accounts[0], gas: '1000000' })) // sendするにはgasが必要

    inbox.setProvider(provider);
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);
    });
});