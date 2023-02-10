const validatePrice = require('./validateValue')
const resultObj = {};

describe('backblaze', () => {

	test('check calcPrice for storage=50, transfer=50 backblaze.com provider', () => {
		validatePrice("backblaze.com", 50, 50, null, resultObj);
		expect(resultObj["backblaze.com"]).toBe('7.00');
	});

	test('check calcPrice for storage=100, transfer=200 backblaze.com provider', () => {
		validatePrice("backblaze.com", 100, 200, null, resultObj);
		expect(resultObj["backblaze.com"]).toBe('7.00');
	});
	test('check calcPrice for storage=300, transfer=300 backblaze.com provider', () => {
		validatePrice("backblaze.com", 300, 300, null, resultObj);
		expect(resultObj["backblaze.com"]).toBe('7.00');
	});

	test('check calcPrice for storage=1000, transfer=1000 backblaze.com provider', () => {
		validatePrice("backblaze.com", 1000, 1000, null, resultObj);
		expect(resultObj["backblaze.com"]).toBe('15.00');
	});
})

describe('bunny.net', () => {

	test('check calcPrice for storage=50, transfer=50 bunny.net provider', () => {
		validatePrice("bunny.net", 50, 50, 'hdd', resultObj);
		expect(resultObj["bunny.net"]).toBe('1.00');
	});

	test('check calcPrice for storage=100, transfer=200 bunny.net provider', () => {
		validatePrice("bunny.net", 100, 200, 'hdd', resultObj);
		expect(resultObj["bunny.net"]).toBe('3.00');
	});
	test('check calcPrice for storage=300, transfer=300 bunny.net provider', () => {
		validatePrice("bunny.net", 300, 300, 'hdd', resultObj);
		expect(resultObj["bunny.net"]).toBe('6.00');
	});

	test('check calcPrice for storage=1000, transfer=1000 bunny.net provider', () => {
		validatePrice("bunny.net", 1000, 1000, 'hdd', resultObj);
		expect(resultObj["bunny.net"]).toBe('10.00');
	});
	// ssd
	test('check calcPrice for storage=50, transfer=50 bunny.net provider', () => {
		validatePrice("bunny.net", 50, 50, 'ssd', resultObj);
		expect(resultObj["bunny.net"]).toBe('1.50');
	});

	test('check calcPrice for storage=100, transfer=200 bunny.net provider', () => {
		validatePrice("bunny.net", 100, 200, 'ssd', resultObj);
		expect(resultObj["bunny.net"]).toBe('4.00');
	});
	test('check calcPrice for storage=300, transfer=300 bunny.net provider', () => {
		validatePrice("bunny.net", 300, 300, 'ssd', resultObj);
		expect(resultObj["bunny.net"]).toBe('9.00');
	});

	test('check calcPrice for storage=1000, transfer=1000 bunny.net provider', () => {
		validatePrice("bunny.net", 1000, 1000, 'ssd', resultObj);
		expect(resultObj["bunny.net"]).toBe('10.00');
	});
})

describe('scaleway.com', () => {

	test('check calcPrice for storage=50, transfer=50 scaleway.com provider', () => {
		validatePrice("scaleway.com", 50, 50, 'multi', resultObj);
		expect(resultObj["scaleway.com"]).toBe('0.00');
	});

	test('check calcPrice for storage=100, transfer=200 scaleway.com provider', () => {
		validatePrice("scaleway.com", 100, 200, 'multi', resultObj);
		expect(resultObj["scaleway.com"]).toBe('4.00');
	});
	test('check calcPrice for storage=300, transfer=300 scaleway.com provider', () => {
		validatePrice("scaleway.com", 300, 300, 'multi', resultObj);
		expect(resultObj["scaleway.com"]).toBe('18.00');
	});

	test('check calcPrice for storage=1000, transfer=1000 scaleway.com provider', () => {
		validatePrice("scaleway.com", 1000, 1000, 'multi', resultObj);
		expect(resultObj["scaleway.com"]).toBe('74.00');
	});
	// single
	test('check calcPrice for storage=50, transfer=50 scaleway.com provider', () => {
		validatePrice("scaleway.com", 50, 50, 'single', resultObj);
		expect(resultObj["scaleway.com"]).toBe('0.00');
	});

	test('check calcPrice for storage=100, transfer=200 scaleway.com provider', () => {
		validatePrice("scaleway.com", 100, 200, 'single', resultObj);
		expect(resultObj["scaleway.com"]).toBe('3.25');
	});
	test('check calcPrice for storage=300, transfer=300 scaleway.com provider', () => {
		validatePrice("scaleway.com", 300, 300, 'single', resultObj);
		expect(resultObj["scaleway.com"]).toBe('11.25');
	});

	test('check calcPrice for storage=1000, transfer=1000 scaleway.com provider', () => {
		validatePrice("scaleway.com", 1000, 1000, 'single', resultObj);
		expect(resultObj["scaleway.com"]).toBe('46.25');
	});
})

describe('vultr.com', () => {

	test('check calcPrice for storage=50, transfer=50 vultr.com provider', () => {
		validatePrice("vultr.com", 50, 50, null, resultObj);
		expect(resultObj["vultr.com"]).toBe('5.00');
	});

	test('check calcPrice for storage=100, transfer=200 vultr.com provider', () => {
		validatePrice("vultr.com", 100, 200, null, resultObj);
		expect(resultObj["vultr.com"]).toBe('5.00');
	});
	test('check calcPrice for storage=300, transfer=300 vultr.com provider', () => {
		validatePrice("vultr.com", 300, 300, null, resultObj);
		expect(resultObj["vultr.com"]).toBe('6.00');
	});

	test('check calcPrice for storage=1000, transfer=1000 vultr.com provider', () => {
		validatePrice("vultr.com", 1000, 1000, null, resultObj);
		expect(resultObj["vultr.com"]).toBe('20.00');
	});
})