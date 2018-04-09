Disk Scheduling
Disk Scheduling is done by the operating systems to schedule IO requests arriving for disk.
The file system may reside entirely on a single disk, or it may spread out on a number of disks. Thus all processes that ask for disk IO services are competing for access to the same physical disk or set of physical disks. Any given disk can perform only one access at a time. Thus if there are several processes requesting for an access, the operating system must establish some order for the service of requests.

There are 6 types
1.	First In First Out (FIFO) 
2.	Shortest Seek Time First (SSTF) 
3.	SCAN 
4.	LOOK 
5.	Circular SCAN (C-SCAN) 
6.	Circular LOOK (C-LOOK)


Algorithms
FCFS
1.	Find the request to be served in the order they arrive in the queue. 
2.	Calculate the no of tracks to be moved from the current position.
3.	Change the current track position to the served request.
4.	 Repeat above steps until end of queue is reached. 
SSTF
1.	Find the request in the queue which is at minimum distance from the current track position.
2.	Calculate the no of tracks to be moved from the current position.
3.	Change the current track position to the served request.
4.	 Repeat above steps until all request in the queue are served. 

SCAN
1.	Find the request to be served in a particular direction. 
2.	Calculate the no of tracks to be moved from the current position.
3.	Change the current track position to the served request
4.	Repeat above steps until you reach the end of the cylinder
5.	Reverse the direction and start serving the remaining requests until all are served.

CSCAN
1.	Find the request to be served in a particular direction. 
2.	Calculate the no of tracks to be moved from the current position.
3.	Change the current track position to the served request.
4.	Repeat above steps until you reach end position of the cylinder.
5.	Jump to the other end of the disk.
6.	Start serving all the request from that end till all the remaining requests are served.

LOOK
1.	Find the request to be served in a particular direction. 
2.	Calculate the no of tracks to be moved from the current position.
3.	Change the current track position to the served request.
4.	Repeat above steps until you reach last request in that direction.
5.	Reverse the direction and start serving the remaining requests until all are served.

CLOOK
1.	Find the request to be served in a particular direction. 
2.	Calculate the no of tracks to be moved from the current position.
3.	Change the current track position to the served request.
4.	Repeat above steps until you reach last request in that direction.
5.	Jump to the end request in the other direction.
6.	Start serving all the request from that end till all the remaining requests are served.

