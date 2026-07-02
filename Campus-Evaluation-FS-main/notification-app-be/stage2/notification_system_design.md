Database Structure:

MYSQL database suits this problem correctly. The DB structure looks like:

Table - Notifications

notificationId PRIMARY KEY
userId FOREIGN KEY
notificationMessage VARCHAR
time: VARCHAR
date: VARCHAR

Table - User

name VARCHAR
emailId VARCHAR
phoneNumber VARCHAR

When the volume of data increases the performance of the system will be affected each search query will take numerous amount of time to retrieve data. So finally the result will take so long to come.

So inorder to overcome this problem there are certain steps:

Indexing- using a B+ tree to sort the records and choose the records by skipping numerous unwanted data at that point.
Caching in backend - retrieve data once and update the cache wheneven updated. When the data is stored in cache there will be no need of retrieving data again so the task becomes simpler and the time taken is reduced.

Queries:

Add Notifications:

Insert into notifications values(1,2,"message","9:00 AM","12/07/2026");

Get Notifications:

Select * from notifications where userId = 2;