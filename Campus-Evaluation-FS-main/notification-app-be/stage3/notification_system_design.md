The database has grown very large and as discussed in stage 2 the performance has been affected by this.

The system has gotten slow because the number of records has been increased and the select queries start to take huge amount of time even for simple queries at worst case time complexity it can take O(N) time. Given N is over 5000000 this is a huge drawback.

The given advice:

Indexing every column - Indexing every column still creates multiple attributes to be dependent on. Indexing every column is not exactly the right idea because there are column that are not required to be indexed. So the necessary columns like notificationType and isRead is enough to improve the performance of the system

SQL qyery:

Select s.rollNo, s.name from students s JOIN notifications n on s.rollNo = n.studentId where n.notificationType = "Placement" && date.now-n.date <= 7; 