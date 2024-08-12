---
title: 多线程 🍉
index: false
isOriginal: true
category: "面试宝典"
tag: "java"
date: 2024-08-12
---

## 一、线程和进程的区别？

进程和线程是操作系统中的两个重要概念，它们之间存在着明显的区别。以下是对进程和线程区别的详细阐述：

1、定义与基本单位

* **进程（Process）**：进程是计算机中的程序关于某数据集合上的一次运行活动，是系统进行资源分配和调度的基本单位，是操作系统结构的基础。它是程序的一次执行，可以包含多个线程。每个进程都有独立的代码和数据空间（程序上下文），程序之间的切换会有较大的开销。
* **线程（Thread）**：线程是操作系统能够进行运算调度的最小单位，它被包含在进程之中，是进程中的实际运作单位。线程是处理器（CPU）任务调度和执行的基本单位，同一类线程共享代码和数据空间，每个线程都有自己独立的运行栈和程序计数器（PC），线程之间切换的开销小。

2、独立性与资源共享

* **进程**：进程是相对独立的，每个进程都有自己的内存空间、文件描述符等资源，进程之间的通信需要通过显式的机制，如管道、消息队列和共享内存等来实现。进程切换开销较大，因为需要保存和恢复整个进程的上下文。
* **线程**：线程是进程的一部分，用于实现并发和并行操作。线程共享进程的地址空间和资源，包括文件描述符和内存。因此，线程之间的通信更加方便和快捷，可以直接读写进程共享的数据。线程切换的开销较小，因为只需要保存和恢复线程的上下文。

3、管理与调度

* **进程**：进程的管理相对复杂，需要操作系统的支持。进程的创建和销毁都需要操作系统进行资源分配和回收。进程的调度由操作系统根据一定的调度算法进行，以确保系统的公平性和效率。
* **线程**：线程的管理更为灵活，线程的创建和销毁相对简单，可以由应用程序自行控制。线程的调度也由操作系统进行，但由于线程共享进程的地址空间，因此线程的调度开销较小。

4、并发与并行

* **进程**：进程可以并发执行，即多个进程可以在同一时间段内交替执行，但每个进程在某一时刻只能占用一个CPU。进程之间的并发执行可以提高系统的资源利用率和吞吐量。
* **线程**：线程不仅可以并发执行，还可以并行执行。在多核或多CPU的计算机上，多个线程可以同时执行，从而提高程序的执行效率。此外，线程还可以用于实现任务的分解和并行处理，以进一步提高程序的性能。

5、健壮性

* **进程**：由于进程之间是相互独立的，一个进程的崩溃通常不会影响到其他进程的运行。因此，多进程系统通常比多线程系统更加健壮。
* **线程**：线程共享进程的地址空间和资源，因此一个线程的崩溃可能会导致整个进程的崩溃。这要求程序员在编写多线程程序时需要更加注意线程之间的同步和互斥问题，以确保程序的稳定性和可靠性。

综上所述，进程和线程在定义、独立性、资源共享、管理与调度、并发与并行以及健壮性等方面都存在明显的区别。了解这些区别对于编写高效、安全和可靠的程序至关重要。

## 二、什么是多线程切换？

多线程会共同使用一组计算机上的 CPU, 而线程数大于给程序分配的 CPU 数时，为了让各个线程都有执行的机会，就需要轮换使用 CPU，不同的线程切换使用 CPU 时发生的切换过程就是上下文切换。

## 三、死锁和活锁的区别，死锁和饥饿的区别？

1、死锁

是指两个或两个以上的进程（或线程）在执行过程中，因抢夺资源而造成的一种互相等待的现象，若无外力作用，它们都将无法推进下去。产生死锁的必要条件：
- 互斥条件：所谓互斥就是进程在某一段时间内独占资源。
- 请求和保持条件：一个进程因请求资源而阻塞时，对方获得的资源保持不放。
- 不剥夺条件：进程已获得资源，在未使用完之前，不能强行剥夺。
- 循环等待条件：若干进程之间形成一种头尾相接的循环等待资源关系。

2、活锁

任务或执行者没有被阻塞，由于某些条件没有满足，导致一直重复尝试，失败，尝试，失败。

活锁和死锁的区别在于，处于活锁的实体是在不断的改变状态，所谓的 `活`；处于死锁的实体表现为等待；活锁有可能自行解开，死锁不能。

3、饥饿

一个或者多个线程因为种种原因无法获得所需要的资源，导致一直无法执行的状态。Java 中导致饥饿的原因：
- 高于优先级线程吞噬所有的低优先级线程的 CPU 时间。
- 线程被永久堵塞在一个等待进入同步块的状态，因为其他线程总是能在它之前持续的对该同步块进行访问。
- 线程在等待一个本身也处于永久等待完成的对象（比如调用这个对象的 wait 方法）因为其他线程总是被持续的获得、唤醒。

## 四、为什么我们调用 start() 方法时会执行 run() 方法，为什么不能直接调用 run() 方法？

当调用 `run()` 方法时会创建新的线程，并且执行在 `run()` 方法里的代码。但是如果直接调用 `run()` 方法，它不会创建新的线程也不会执行调用线程的代码，只会把它当作一个普通方法来执行。 

## 五、线程的五种基本状态

1、新建状态（New）：当线程对象创建后，即进入了新建状态，如：`Thread t = new Thread()`。

2、就绪状态（Runnable）：当调用线程对象的 `start()` 方法，线程即进入就绪状态。处于就绪状态的线程，只是说明此线程已经做好准备，随时等待 CPU 调度执行，并不是说执行了 `start()` 方法此线程立即就会被执行。

3、运行状态（Running）: 当 CPU 开始调度处于就绪状态的线程时，此时线程才能得以真正的运行，即进入运行状态。注意，就绪状态时进入运行状态的唯一入口，也就是说，线程想要进入运行状态执行，必须处于就绪状态中。

4、阻塞状态（Blocked）：处于运行状态的线程由于某种原因，暂时放弃对 CPU 的使用权，停止执行。此时进入阻塞状态，直到其进入就绪状态才有机会再次被 CPU 调用进行运行状态。根据阻塞产生的不同原因，阻塞线程又可以分为三种状态：
- 等待阻塞：运行状态中的线程执行 `wait()` 方法，使本线程进入等待阻塞状态。
- 同步阻塞：线程在获取 `synchronized` 同步锁失败（因为锁被其他线程所占用），它就会进入同步阻塞状态。
- 其他阻塞：通过调用线程的 `sleep()` 或者 `join()` 或发出 `I/O` 请求时，线程就会进入到阻塞状态。当 `sleep()` 状态超时时、`join()` 等待线程终止或者超市、或者 `I/O` 处理完毕时，线程重新转入就绪状态。

5、死亡状态（Dead）： 线程执行完了或者因异常退出了 `run()` 方法，该线程结束生命周期。

## 六、synchronized 的作用？

在 JAVA 中 synchronized 关键字时用来控制线程同步的，就是在多线程环境下，控制 synchronized 代码段不被多个线程同时执行。synchronized 可以加在一段代码上，也可以加在方法上面。

## 七、线程池

Java 中的线程池是一个非常重要的概念，它用于管理一组工作线程，这些线程可以重复执行提交给它们的任务。使用线程池可以显著降低资源消耗、提高系统响应速度、增强系统稳定性，同时还可以有效地控制系统中并发线程的数量。

Java 中实现线程池主要通过 `java.util.concurrent` 包下的 `ExecutorService` 接口，`Executors` 类提供了几种静态工厂方法来创建不同类型的线程池。

### 常见的线程池类型

1、**FixedThreadPool（固定大小线程池）**
- 创建一个可重用固定线程数的线程池，以共享的无界队列方式来运行这些线程。
- 使用场景：适用于负载比较重的服务器，为了资源的合理利用，限制线程的数量。
- 示例代码：`ExecutorService executor = Executors.newFixedThreadPool(nThreads);`

2、**CachedThreadPool（可缓存线程池）**
- 创建一个可缓存线程池，如果线程池长度超过处理需要，可灵活回收空闲线程，若无可回收，则新建线程。
- 使用场景：适用于执行大量的短时间异步任务。
- 示例代码：`ExecutorService executor = Executors.newCachedThreadPool();`

3、**SingleThreadExecutor（单线程化的Executor）**
- 创建一个单线程的线程池，它用唯一的工作线程来执行任务，保证所有任务按照指定顺序（FIFO, LIFO, 优先级）执行。
- 使用场景：适用于需要顺序地执行各个任务并且不希望多个线程同时访问共享资源的情况。
- 示例代码：`ExecutorService executor = Executors.newSingleThreadExecutor();`

4、**ScheduledThreadPool（定时/周期任务执行的线程池）**
- 创建一个定长线程池，支持定时及周期性任务执行。
- 使用场景：需要按照指定时间间隔或延迟后执行任务的场景。
- 示例代码：`ScheduledExecutorService executor = Executors.newScheduledThreadPool(nThreads);`

### 线程池的使用

1、**提交任务**
- 通过 `execute(Runnable command)` 方法提交任务给线程池执行。
- 对于 `ScheduledThreadPool`，可以使用 `schedule(Runnable command, long delay, TimeUnit unit)` 或 `scheduleAtFixedRate(Runnable command, long initialDelay, long period, TimeUnit unit)` 等方法提交定时或周期任务。

2、**关闭线程池**
- 使用 `shutdown()` 方法来平滑地关闭ExecutorService，不再接受新任务，但是已经提交的任务会继续执行。
- 使用 `shutdownNow()` 方法尝试立即停止所有正在执行的任务，停止处理正在等待的任务，并返回等待执行的任务列表。

3、**等待任务完成**
- 调用 `awaitTermination(long timeout, TimeUnit unit)` 可以阻塞当前线程直到所有任务完成或被终止，或者直到超时期满，或者线程被中断，取决于哪个事件先发生。

### 注意事项

- 线程池中的线程数量应该根据任务的性质、执行时间、系统资源等因素进行合理设置。
- 线程池中的任务应该是相互独立的，避免共享数据导致线程安全问题。
- 线程池不应该被随意创建和销毁，以避免资源浪费。
- 合理使用线程池的状态和关闭方法，确保线程池资源得到正确释放。

在Java中，线程池的使用是一个从简单到复杂逐步深入的过程。下面我将通过一个从简单到复杂的示例来展示线程池的使用，并且会提供一个涉及对象处理的案例。

### 简单示例：使用`FixedThreadPool`

在这个简单的例子中，我们将使用`Executors.newFixedThreadPool(int nThreads)`来创建一个固定大小的线程池，并提交一些简单的任务。

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class SimpleThreadPoolExample {

    public static void main(String[] args) {
        // 创建一个固定大小为5的线程池
        ExecutorService executor = Executors.newFixedThreadPool(5);

        // 提交任务
        for (int i = 0; i < 10; i++) {
            int taskId = i;
            executor.execute(() -> {
                System.out.println(Thread.currentThread().getName() + " 正在执行任务 " + taskId);
            });
        }

        // 关闭线程池（不再接受新任务，但已提交的任务会继续执行）
        executor.shutdown();
    }
}
```

### 复杂示例：使用`ThreadPoolExecutor`处理对象

在这个例子中，我们将使用`ThreadPoolExecutor`直接构造一个线程池，并处理一些包含对象的任务。我们将创建一个简单的`Task`类，该类包含执行逻辑和与之关联的对象数据。

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

class Task implements Runnable {
    private String data;

    public Task(String data) {
        this.data = data;
    }

    @Override
    public void run() {
        System.out.println(Thread.currentThread().getName() + " 正在处理数据: " + data);
        // 模拟任务执行时间
        try {
            TimeUnit.SECONDS.sleep(1);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}

public class ComplexThreadPoolExample {

    public static void main(String[] args) {
        // 使用ThreadPoolExecutor直接创建线程池
        ExecutorService executor = new ThreadPoolExecutor(
                5, // 核心线程数
                10, // 最大线程数
                60L, TimeUnit.SECONDS, // 空闲线程存活时间
                new java.util.concurrent.ArrayBlockingQueue<>(100), // 等待队列
                Executors.defaultThreadFactory(), // 线程工厂
                new java.util.concurrent.ThreadPoolExecutor.DiscardOldestPolicy() // 拒绝策略
        );

        // 提交任务
        for (int i = 0; i < 20; i++) {
            executor.execute(new Task("任务" + i));
        }

        // 关闭线程池
        executor.shutdown();
        // 等待所有任务完成
        while (!executor.isTerminated()) {
            // 等待线程池中的任务完成
        }
        System.out.println("所有任务执行完成");
    }
}
```

在这个例子中，`Task`类是一个实现了`Runnable`接口的类，它接受一个字符串数据并在其`run`方法中处理这些数据。我们创建了一个`ThreadPoolExecutor`实例，它允许我们更细致地控制线程池的行为，包括核心线程数、最大线程数、空闲线程的存活时间、任务队列、线程工厂以及拒绝策略等。

通过提交多个`Task`实例给线程池，我们展示了如何在线程池中处理包含对象数据的任务。最后，我们等待所有任务完成并打印了一条消息。

这两个示例从简单到复杂地展示了如何在Java中使用线程池，并演示了如何处理包含对象数据的任务。