const { expect, use } = require('chai')
const { ethers } = require('@nomiclabs/buidler')
const { BigNumber } = require('bignumber.js')

use(require('chai-bignumber')())

describe('FETAToken', function () {
    let token

    const tokenName = 'FETA Governance Token'
    const tokenSymbol = 'FETA'
    const mintTokens = new BigNumber(100000000 * Math.pow(10, 18));

    beforeEach(async function () {
        const Token = await ethers.getContractFactory('FETAToken')
        token = await Token.deploy()
        await token.deployed()
    })

    it('Deploys successfully', async function () {
        expect(token.address).to.not.equal(0)
    })

    it('Has correct name', async function () {
        expect(await token.name()).to.equal(tokenName)
    })

    it('Has correct symbol', async function () {
        expect(await token.symbol()).to.equal(tokenSymbol)
    })

    it('Mints 100Mil tokens', async function () {
        const actual = new BigNumber((await token.totalSupply()).toString())

        expect(actual).to.be.bignumber.equal(mintTokens)
    })
})
