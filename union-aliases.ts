//UNION TYPES

//CUSTOM TYPES
type Combinable = number | string;
type ConversionDescriptor = 'ASNUMBERS' |'ASTEXT';

function combine(
    input1: Combinable, 
    input2: Combinable, 
    resultConversiton: ConversionDescriptor
    ) {
    let result;
    if(typeof input1  === 'number' && typeof input2 === 'number' || resultConversiton === 'ASNUMBERS'){
        result = +input1 + +input2;
    } else {
        result = input1.toString()+' '+input2.toString();
    }

    return result;

    /*if(resultConversiton === 'ASNUMBERS'){
        return +result;
    } else {
        return result.toString();
    }  */
  }


  const combineAges = combine(20,26,'ASNUMBERS');
  console.log(combineAges);

  const combinedStringAges = combine('20','26','ASNUMBERS');
  console.log(combinedStringAges);

  const combineNames = combine('KISS','RÓBERT','ASTEXT');
  console.log(combineNames);