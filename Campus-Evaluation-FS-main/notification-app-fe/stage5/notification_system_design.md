The current psuedocode iterates over all student ids and sends email, adds to db and implements push notifications seperately.
These create three separate processes taking more time and making this application slow.
All The Three processes are synchronous operations so due to huge amount of students to handle the email feature fails for 200 students.

To Overcome this problem we need to redesign this system.

Sending emails and adding to dp are similar processes it can be dome simultaneously. so instead of keeping them as separate processes its better to merge them into the backend server while adding to db and sending emails at the same time in backend.

so due to this design the security also increases by keeping email process in backend alone and at the same time boosting performance.

REDESIGN:

notify_students(){
    for(student in students){
        send_email_and_add_DB(student,notification);
        pushNotification(student,notification);
    }
}

for better design its better to integrate push notification in backend too making it execute after db process & email process.