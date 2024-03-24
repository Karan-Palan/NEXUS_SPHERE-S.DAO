const DominionDAO = artifacts.require('NexusDAO')

module.exports = async function (deployer) {
  await deployer.deploy(NexusDAO)
}
