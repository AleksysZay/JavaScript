// function GetDataType(value, number_task){ dont work =(
//     var res=`${value}) Variable: ${value}, DataType: ${GetDataType()}`;
//     alert(res);
// }
// GetDataType(1/2, 1);
// GetDataType(12/0, 2);
// GetDataType(true+false, 3);
// GetDataType(12/"6", 4);
// GetDataType("number"+15+3, 5);
// GetDataType(15+3+"number", 6);
// GetDataType([1]>null, 7);
// GetDataType("foo"+"bar", 8);
// GetDataType('true'==true, 9);
// GetDataType(false=='false', 10);
// GetDataType(null=='', 11);
// GetDataType(!!"false"==!!"true", 12);
// GetDataType([`x`]==`x`, 13);

alert(`1) Variable: 1/2, DataType: ${typeof (1/2)}`);
alert(`2) Variable: 12/0, DataType: ${typeof (12/0)}`);
alert(`3) Variable: true+false, DataType: ${typeof(true+false)}`);
alert(`4) Variable: 12/"6", DataType: ${typeof(12/"6")}`);
alert(`5) Variable: "number"+15+3, DataType: ${typeof("number"+15+3)}`);
alert(`6) Variable: 15+3+"number", DataType: ${typeof(15+3+"number")}`);
alert(`7) Variable: [1]>null, DataType: ${typeof([1]>null)}`);
alert(`8) Variable: "foo"+"bar", DataType: ${typeof("foo"+"bar")}`);
alert(`9) Variable: 'true'==true, DataType: ${typeof('true'==true)}`);
alert(`10) Variable: false=='false', DataType: ${typeof(false=='false')}`);
alert(`11) Variable: null=='', DataType: ${typeof(null=='')}`);
alert(`12) Variable: !!"false"==!!"true", DataType: ${typeof(!!"false"==!!"true")}`);
alert(`13) Variable: ['x']=='x', DataType: ${typeof([`x`]==`x`)}`);
