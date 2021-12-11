function bubblsor(){
    var arr=[10,9,8,7,6,5];
    console.log("Original array before sorting: ",arr,"\n");
    let n=arr.length;
    for(let i=0;i<=n-1;i++){
        for(let j=0;j<=n-i-1;j++){
            if(arr[j]>arr[j+1]){
                // swap(arr[j],arr[j+1]);
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            } 
        }
    }
    console.log("After sorting array: ",arr,"\n");
}
bubblsor();