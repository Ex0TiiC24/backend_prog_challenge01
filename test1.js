import {execSync} from 'child_process';

// Run challenge1.js and capture output
const output = execSync('node challenge1.js').toString().trim();

// Expected result
const expected = '1\n3\n5\n7\n9';

// Simple test
if (output === expected) {
  console.log('✓ Test passed!');
} else {
  console.log('✗ Test failed!');
  console.log(`Expected:\n${expected}`);
  console.log(`Got:\n${output}`);
}
