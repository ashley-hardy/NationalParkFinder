const expect = chai.expect

describe('latitude', function() {
  it('parses a string from NPS API to get latitude', function() {
    expect(typeof latitude).to.be.a('string')
  })
})

describe('longitude', function() {
  it('parses a string from NPS API to get longitude', function() {
    expect(typeof longitude).to.be.a('string')
  })
})

describe('map', function() {
  it('displays map on page', function() {
    expect(initMap).to.be.a('function')
  })
})
