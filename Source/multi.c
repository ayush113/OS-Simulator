#include<stdio.h>

struct process{

int at,bt,pri;
}p1[10],p2[10],temp;


typedef  struct process process;

int q=0;


void FCFS(process p2[],int n2,int timepassed)
{
	int wt[10],tat[10];
	int i,j;
	printf("\n");
	//sort acording to arrival time
	for(i=0;i<n2;i++)
	     {
		for(j=i+1;j<n2;j++)
		 {
		     if(p2[i].at>p2[j].at)
		       {
		           temp=p2[i];
			   p2[i]=p2[j];
			   p2[j]=temp;
			
		      }
		 }
    	     }

	printf("Gantt Chart:\n");
	for(i=0;i<n2;i++)
	{
		printf("%d P%d\t",timepassed,i+1);
		wt[i]=timepassed-p2[i].at;
		timepassed+=p2[i].bt;
		tat[i]=wt[i]+p2[i].bt;
	}

	printf("%d",timepassed);


	float awt=0;
        float awtat=0;
    	printf("\n Process   Waiting time");
   	for(i=0;i<n2;i++)
       {
       	
                       wt[i]=wt[i]-p1[i].at;
                       awtat=awtat+wt[i]+p1[i].bt;
   		       printf("\n P%d      :   %d",i+1,wt[i]); 
                       awt=awt+wt[i];
        }

	printf("\n Avg waiting time %f ",awt/n2);
    
}	
	
int  roundrobin(process p1[],int n1, int ts)
{

	//declaration of variables
	int wt[10],tat[10],rt[10],te[10],id[10],i,j,q=0,aw;
	
	//initialising remaining variables not in structure	
	for(i=0;i<n1;i++)
	{
		rt[i]=p1[i].bt;
		wt[i]=0;
		te[i]=0;
		id[i]=i+1;
	}		

	//sort according to arrival time
	  for(i=0;i<n1;i++)
	     {
		for(j=i+1;j<n1;j++)
		 {
		     if(p1[i].at>p1[j].at)
		       {
		           temp=p1[i];
			   p1[i]=p1[j];
			   p1[j]=temp;
			
		      }
		 }
    	     }
    //beginning of time  

    q=p1[0].at; 
    printf("\n Gantt chart \n");
    j=0;

    while(j<=n1)
       {
          j++;
          for(i=0;i<n1;i++)
            {
              if(rt[i]==0)  continue;
                   if(rt[i]>ts)
                     {
                        printf("\t %d\t P%d",q,id[i]);
                        q=q+ts;
                        rt[i]=rt[i]-ts;
                        te[i]=te[i]+1;
                     }
                  else
                    {
                       printf("\t %d\t P%d",q,id[i]);
                       wt[i]=q-te[i]*ts;
                       q=q+rt[i]; 
                       rt[i]=rt[i]-rt[i];
                    }
            }
       }  


   //Calculation of waiting times and tat
                         
    float awt=0;
     float awtat=0;
    printf("\n Process   Waiting time");
    for(i=0;i<n1;i++)
       {
       	
                       wt[i]=wt[i]-p1[i].at;
                       awtat=awtat+wt[i]+p1[i].bt;
   		       printf("\n P%d      :   %d",i+1,wt[i]); 
                       awt=awt+wt[i];
        }
    aw=awt;
   
  // printf("\nAvg tat = %f",awtat/n);
    printf("\n Avg waiting time %f ",awt/n1);
	return q;
    
 }

int main(){

	int n1,n2,i=0;
	printf("Enter the number of foreground processes: ");
	scanf("%d",&n1);
	printf("Enter the number of background processes: ");
	scanf("%d",&n2);

	printf("For the queue of foreground processes: ");
	for(i=0;i<n1;i++)
	{
		printf("Enter arrival, burst time and priority of process%d: ",i+1);
		scanf("%d%d%d",&p1[i].at,&p1[i].bt,&p1[i].pri);
		//p1[i].wt=0;
		//p1[i].tat=0;
		//p1[i].rt=p1[i].bt;
	}
	

	printf("For the queue of background processes: ");
	for(i=0;i<n2;i++)
	{
		printf("Enter arrival, burst time and priority of process%d: ",i+1);
		scanf("%d%d%d",&p2[i].at,&p2[i].bt,&p2[i].pri);
		//p2[i].wt=0;
		//p2[i].tat=0;
		//p2[i].rt=p2[i].bt;
	}


	//Queue1 has higher priority than Queue2
	//Therefore all processes in Queue1 will finish first 
	//First queue uses round robin and the second one uses FCFS
	int m;
	m=roundrobin(p1,n1,2);
	FCFS(p2,n2,m);

	return 0;
}

