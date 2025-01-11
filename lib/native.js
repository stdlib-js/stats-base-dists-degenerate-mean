/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Returns the expected value of a degenerate distribution.
*
* @private
* @param {number} mu - constant value of the distribution
* @returns {number} expected value
*
** @example
* var v = mean( 0.1 );
* // returns 0.1
*
* @example
* var v = mean( 0.5 );
* // returns 0.5
*
* @example
* var v = mean( 10.0 );
* // returns 10.0
*
* @example
* var v = mean( NaN );
* // returns NaN
*/
function mean( mu ) {
	return addon( mu );
}


// EXPORTS //

module.exports = mean;