//function declaration
function findSum()
{
	var sum=0;
	for(var i=0;i<arguments.length;i++)
		sum+=arguments[i];
// to display the output in console
console.log("The sum is",sum);
	
	
}
 //function calling 
 
findSum(1,2,3);
findSum(1,2,3,4,5,6,7,8,9,10); 


