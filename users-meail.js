// Define the main object representing the Gmail application data
let appData = {
    // Primitive representing the name of the application
    name: 'Gmail',
    // Array representing the different mailboxes in the application
    mailboxes: [
        'inbox',
        'junk',
        'sent',
        'drafts',
        'spam',
        'trash'
    ],
    // Array of objects representing contacts, each contact has a name, email, and last message
    contacts: [
        {name: 'Erin', email: 'erin@example.com', lastMessage: "I won't be in class today"},
        {name: 'Matt', email: 'matt@example.com', lastMessage: "Today, we are going to rock it!"},
        {name: 'Julian', email: 'julian@example.com', lastMessage: "Can you send me the report?"}
    ],
    // Object containing arrays of email objects, categorized by mailbox type
    emails: {
        // Array of email objects in the inbox
        inbox: [
            {sender: 'john@example.com', recipient: 'me@example.com', subject: 'Meeting Reminder', body: 'Don\'t forget our meeting tomorrow.', date: '2024-06-30', status: 'unread', attachments: []},
            {sender: 'jane@example.com', recipient: 'me@example.com', subject: 'Project Update', body: 'The project is on track.', date: '2024-06-29', status: 'read', attachments: ['file1.pdf']}
        ],
        // Array of email objects in the sent mailbox
        sent: [
            {sender: 'me@example.com', recipient: 'team@example.com', subject: 'Weekly Report', body: 'Here is the weekly report.', date: '2024-06-28', status: 'sent', attachments: []}
        ],
        // Array of email objects in the drafts mailbox
        drafts: [
            {sender: 'me@example.com', recipient: 'boss@example.com', subject: 'Draft Email', body: 'This is a draft email.', date: '2024-06-27', status: 'draft', attachments: []}
        ]
    },
    // Array of strings representing labels that can be applied to emails
    labels: [
        'Work',
        'Personal',
        'Important'
    ]
};

// Retrieve and log the list of mailbox names
let mailboxNames = appData.mailboxes;
console.log(mailboxNames); // Output: ['inbox', 'junk', 'sent', 'drafts', 'spam', 'trash']

// Retrieve and log the list of emails in the inbox
let inboxEmails = appData.emails.inbox;
console.log(inboxEmails); // Output: Array of email objects in the inbox

// Retrieve and log the text of the second email in the inbox
let secondEmailText = appData.emails.inbox[1].body;
console.log(secondEmailText); // Output: 'The project is on track.'

// Mark the first draft email as sent
appData.emails.drafts[0].status = 'sent'; // Update the status of the draft email to 'sent'
// Move the email from drafts to sent mailbox
appData.emails.sent.push(appData.emails.drafts[0]);
// Remove the email from the drafts mailbox
appData.emails.drafts.splice(0, 1);
console.log(appData.emails); // Output: Updated emails object with the draft email moved to sent

// Add a new draft email to the drafts mailbox
appData.emails.drafts.push({
    sender: 'me@example.com',
    recipient: 'new@example.com',
    subject: 'New Draft Email',
    body: 'This is a new draft email.',
    date: '2024-07-01',
    status: 'draft',
    attachments: []
});
console.log(appData.emails.drafts); // Output: Array of draft email objects including the new draft email
