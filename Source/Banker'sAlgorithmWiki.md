The banker’s algorithm is a resource allocation and deadlock avoidance algorithm that tests for safety by 
simulating the allocation for predetermined maximum possible amounts of all resources, then makes an 
“s-state” check to test for possible activities, before deciding whether allocation should be allowed to continue.

Banker's Algorithm consists of <b>safety algorithm</b> and <b>resource request algorithm</b> <br/>

Every process will have the following resource related structures.<br/>
<b>Available :</b> Includes all the available resources<br/>
<b>Max :</b> Includes the maximum demand of resources for each process<br/>
<b>Allocation :</b> Includes the number of resources of each type allocated to the processs<br/>

<b>Safety ALgorithm </b><br/>

1) Let Work and Finish be vectors of length ‘m’ and ‘n’ respectively.<br/>
Initialize: Work = Available<br/>
Finish[i] = false; for i=1, 2, 3, 4….n<br/>

2) Find an i such that both<br/>
a) Finish[i] = false<br/>
b) Needi <= Work if no such i exists goto step (4)<br/>

3) Work = Work + Allocation<br/>
Finish[i] = true<br/>
goto step (2)<br/>

4) if finish [i] = true for all i<br/>
then the system is in a safe state<br/>

<br/><br/>

<b>Resource Request ALgorithm</b>

1) If Requesti <= Needi<br/>
Goto step (2) ; otherwise, raise an error condition, since the process has exceeded its maximum claim.<br/>

2) If Requesti <= Available Goto step (3); otherwise, Pi must wait, since the resources are not available.<br/>

3) Have the system pretend to have allocated the requested resources to process Pi by modifying the state as<br/>
follows:<br/>
Available = Available – Requesti<br/>
Allocationi = Allocationi + Requesti<br/>
Needi = Needi– Requesti<br/>

