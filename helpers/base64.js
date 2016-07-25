
var STR64 = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','+','/'];

// TRANSFORM NUMBERS BETWEEN radix 10 AND radix 64
/** Methods based on answers shared in:
* @url   http://stackoverflow.com/questions/6213227/fastest-way-to-convert-a-number-to-radix-64-in-javascript
*/

// METHODS 
/** to64String: Method to transform a radix 10 number to radix 64 number (as string)
* @param input   Number for transform to radix 64 (as String)
* @param current String data (don't needed in request)
* @return String Number in radix 64 as String;
*
* @based http://stackoverflow.com/users/383780/monocle
* @based base64( Method for number to string - NOT string part )
*/
exportsto64String=function( input, current )
{
    if ( input < 0 && current.length == 0 ){
        input = input * - 1;
    }
    var modify = input % 64;
    var remain = Math.floor( input / 64 );
    if(typeof current=='undefined'){
        var result= STR64[ modify ];
    }else{
        var result= STR64[ modify ]+current;
    }
    return ( remain <= 0 ) ? result : to64String( remain, result );
}

/** to64Parse: Method for transform a number in radix 64 (as string) in radix 10 number
* @param input   Number in radix 64 (as String) to transform in radix 10
* @return Number in radix 10
*
* @based http://stackoverflow.com/users/520997/reb-cabin
* @based Base64.toNumber( Method for string to number )
*/
exportsto64Parse=function( input )
{
    var result = 0;
    var toProc = input.split( '' );
    for ( var e in toProc ){
        result = ( result * 64 ) + STR64.indexOf( toProc[ e ] );
    }
    return result;
}