//
// A css compiler run mocha
// to ignore style imports
//
function donothing() {
  return null;
}

require.extensions['.css'] = donothing;
require.extensions['.less'] = donothing;
require.extensions['.scss'] = donothing;
