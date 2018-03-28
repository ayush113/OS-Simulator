#include<stdio.h>


int main(int argc,char *arg)
{
	int at[10],bt[10],n,wt[10],turnaroundtime[10],i,j,averagetat=0,averagewait=0;
	float n1,n2;
	int pos;
	printf("\nEnter the number of processes \n");
	scanf("%d",&n);
	
	 for(i=0;i<n;i++)
	{
		printf("Enter arrival and burst time of process%d: ",i+1);
		scanf("%d%d",&at[i],&bt[i]);
	}
	
	//sorting based on arrival time 
	for(i=0;i<n;i++)
	{
		pos=i;
		for(j=i+1;j<n;j++)
		{
			if(at[j]<at[pos] )
			pos=j;
		}
		
	int temp;
	

	temp=at[i];
	at[i]=at[pos];
	at[pos]=temp;
	
	temp=bt[i];
	bt[i]=bt[pos];
	bt[pos]=temp;

	}
	// calculation of waiting time
	for(i=0;i<n;i++)
	{
		wt[i]=0;
		for(j=0;j<i;j++)
		wt[i]+=bt[j];
		wt[i]-=at[i];
		if(wt[i]<0)
		wt[i]=0;
	}
	

	//calculation of turn around time
	for(i=0;i<n;i++)
	{
		turnaroundtime[i]=wt[i]+bt[i];
	}
	
	//average calculations
	for(i=0;i<n;i++)
	{
		averagetat+=turnaroundtime[i];
		averagewait+=wt[i];
	}
	printf("process    arrival time    burst time    waiting time    turnaroundtime\n");
	for(i=0;i<n;i++)
	printf("%d             %d                 %d                  %d           %d\n ",i+1,at[i],bt[i],wt[i],turnaroundtime[i]);

	n1=averagetat/(float)n;
	n2=averagewait/(float)n;
	printf( "\nAverage turn around time = %f",n1);
	printf("\nAverage waiting time =%f\n ",n2);
}











