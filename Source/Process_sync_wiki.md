<b>Process Synchronization </b> <br/>

Process Synchronization means sharing system resources by processes in a such a way that, concurrent access to shared data is handled thereby minimizing the chance of inconsistent data. Maintaining data consistency demands mechanisms to ensure synchronized execution of cooperating processes.

Process Synchronization was introduced to handle problems that arose while multiple process executions.

<b>Algorithms: </b> <br/>

1. Reader-writer
2. Producer-consumer
3. Dining Philosopher
4. Sleeping Barber 


Data Structures used for Synchronization:<br/>

<b>Mutex Locks:</b> <br/>

In this approach, in the entry section of code, a LOCK is acquired over the critical resources modified and used inside critical section (block of code where the shared resources are being modified ), and in the exit section that LOCK is released.
As the resource is locked while a process executes its critical section hence no other process can access it

<b>Semaphores:</b> <br/>

Dijkstra proposed a new and very significant technique for managing concurrent processes by using the value of a simple integer variable to synchronize the progress of interacting processes. This integer variable is called semaphore. So it is basically a synchronizing tool and is accessed only through two low standard atomic operations, wait() and signal().


<b>Wait</b> : decrement the value of its argument S as soon as it would become non-negative.<br/>
<b>Signal</b> :increment the value of its argument, S as an individual operation.<br/>

1.<b>Reader-writer</b><br/>

   Problem parameters:

   One set of data is shared among a number of processes
   Once a writer is ready, it performs its write. Only one writer may write at a time
   If a process is writing, no other process can read it
   If at least one reader is reading, no other process can write
   Readers may not write and only read


   Solution when Reader has the Priority over Writer:

   Here priority means, no reader should wait if the share is currently opened for reading.
   
   Three variables are used: mutex, wrt, readcnt to implement solution

   semaphore mutex, wrt; // semaphore mutex is used to ensure mutual exclusion when readcnt is updated i.e. when any reader enters or exit from the critical section and semaphore wrt is used by both readers and writers
   int readcnt;  //    readcnt tells the number of processes performing read in the critical section, initially 0

   Functions for sempahore :

   wait() : decrements the semaphore value.

   signal() : increments the semaphore value.

   
   Writer process:

   Writer requests the entry to critical section.
   If allowed i.e. wait() gives a true value, it enters and performs the write. If not allowed, it keeps on waiting.
   It exits the critical section.
   

   Reader process:

   Reader requests the entry to critical section.
   If allowed:
   it increments the count of number of readers inside the critical section. If this reader is the first reader entering, it locks the wrt semaphore to restrict the entry of writers if any reader is inside.
   It then, signals mutex as any other reader is allowed to enter while others are already reading.
   After performing reading, it exits the critical section. When exiting, it checks if no more reader is inside, it signals the semaphore “wrt” as now, writer can enter the critical section.
   If not allowed, it keeps on waiting.

2.<b>Dining Philosopher</b><br/>
    
   The Dining Philosopher Problem :

   The Dining Philosopher Problem states that K philosophers seated around a circular table with one chopstick between each pair of philosophers. There is one chopstick between each philosopher. A philosopher may eat if he can pickup the two chopsticks adjacent to him. One chopstick may be picked up by any one of its adjacent followers but not both. 

   Solution:

   There are three states of philosopher : THINKING, HUNGRY and EATING. Here there are two semaphores : Mutex and a semaphore array for the philosophers. Mutex is used such that no two philosophers may access the pickup or putdown at the same time. The array is used to control the behavior of each philosopher.

3.<b>Producer Consumer </b><br/>  

Producer–consumer problem (also known as the bounded-buffer problem) is a classic example of a multi-process synchronization problem. The problem describes two processes, the producer and the consumer, which share a common, fixed-size buffer used as a queue.
	The producer’s job is to generate data, put it into the buffer, and start again.
	At the same time, the consumer is consuming the data (i.e. removing it from the buffer), one piece at a time.
	
	Producer-consumer problem:
	To make sure that the producer won’t try to add data into the buffer if it’s full and that the consumer won’t try to remove data from an empty buffer.
	
	Solution :
	The producer is to either go to sleep or discard data if the buffer is full. The next time the consumer removes an item from the buffer, it notifies the producer, who starts to fill the buffer again. In the same way, the consumer can go to sleep if it finds the buffer to be empty. The next time the producer puts data into the buffer, it wakes up the sleeping consumer.
	An inadequate solution could result in a deadlock where both processes are waiting to be awakened.
	
4.<b>Barber's Problem</b><br/>
	
	The sleeping barber problem is an inter-process communication and synchronization problem between multiple operating system processes. The problem is analogous to that of keeping a barber working when there are customers, resting when there are none, and doing so in an orderly manner.
	
	The analogy is based upon a hypothetical barber shop with one barber. The barber has one barber's chair in a cutting room and a waiting room containing a number of chairs in it. When the barber finishes cutting a customer's hair, he dismisses the customer and goes to the waiting room to see if there are others waiting. If there are, he brings one of them back to the chairs and cut their hair. If there are none, he returns to the chair and sleeps in it.
	
	Problem:
	The problem is to program the barber and the customers without getting into race conditions.This problem is similar to various queueing situations, such as a multiperson helpdeskwith a computerized call waiting system for holding a limited number of incoming calls
		
	Solution:
	This solution uses three semaphores, one for customers (counts waiting customers), one for the barber (idle - 0 or busy - 1) and a mutual exclusion semaphore, mutex. When the barber arrives for work, the barber procedure is executed blocking the barber on the customer semaphore until a customer arrives. When a customer arrives, the customer procedure is executed which begins by acquiring mutex to enter a critical region. Subsequent arriving customers have to wait until the first customer has released mutex. After acquiring mutex, a customer checks to see if the number of waiting customers is less than the number of chairs. If not, mutex is released and the customer leaves without a haircut. If there is an available chair, the waiting counter is incremented, the barber is awaken, the customer releases mutex, the barber grabs mutex, and begins the haircut. Once the customer's hair is cut, the customer leaves. The barber then checks to see if there is another customer. If not, the barber takes a nap.