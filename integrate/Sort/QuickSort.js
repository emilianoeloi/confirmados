// QuickSort.js

const quickSort = function(values, began, end)
{
	//let i, j, pivo, aux;
	i = began;
	j = end-1;
	pivo = values[(began + end) / 2];
	while(i <= j)
	{
		while(values[i] < pivo && i < end)
		{
			i++;
		}
		while(values[j] > pivo && j > began)
		{
			j--;
		}
		if(i <= j)
		{
			aux = values[i];
			values[i] = values[j];
			values[j] = aux;
			i++;
			j--;
		}
	}
	if(j > began)
        quickSort(values, began, j+1);
	if(i < end)
        quickSort(values, i, end);
}

const quick = function(a) {
    quickSort(a, 0, a.length)
    console.info(a)
    return a
}
let a = [1, 2, 3, 5, 4]
quickSort(a, 0, 5)
console.info(a)

module.exports = {
    quick
}