document.getElementById('send-btn').addEventListener('click', function() {
    let userInput = document.getElementById('user-input').value.trim();
    if (userInput) {
        addChatMessage('You: ' + userInput, 'user');
        processUserInput(userInput);
        document.getElementById('user-input').value = '';
    }
});

function addChatMessage(message, sender) {
    let chatOutput = document.getElementById('chat-output');
    let messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.classList.add(sender);
    chatOutput.appendChild(messageElement);
    chatOutput.scrollTop = chatOutput.scrollHeight;
}

function processUserInput(input) {
    let response;
    input = input.toLowerCase();

    switch (input) {
        case 'hi':
        case 'hello':
            response = 'SU Bot: Hello! How can I assist you today?';
            break;
        case 'mention your name':
            response = 'SU Bot: My name is Aishwarya C Halemani.';
            break;
        case 'please tell me about your bank':
            response = 'SU Bot: CH Bank offers a variety of financial services including savings accounts, current accounts, loans, and investment options.';
            break;
        case 'where are your branches located?':
            response = 'SU Bot: We have branches in major cities across the country. You can find the nearest branch on our website under "Branch Locations".';
            break;
        case 'what are the services provided by your bank?':
            response = 'SU Bot: Our services include personal banking, business banking, loans, credit cards, and wealth management.';
            break;
        case 'what is the procedure for account opening?':
            response = 'SU Bot: To open an account, please visit our nearest branch with valid ID proof and address proof. You can also apply online through our website.';
            break;
        case 'how to choose between a savings and a current account?':
            response = 'SU Bot: A savings account is ideal for personal savings with interest benefits, while a current account is best suited for businesses requiring frequent transactions.';
            break;
        case 'what are the different loan categories available in this bank?':
            response = 'SU Bot: We offer Personal Loans, Educational Loans, Business Loans, and Home Loans.';
            break;
        case 'what is the eligibility to apply for personal loan?':
            response = 'SU Bot: To be eligible for a personal loan, you must be a salaried individual or a self-employed professional with a minimum income of INR 25,000 per month.';
            break;
        case 'what are the requirements to apply for an educational loan?':
            response = 'SU Bot: To apply for an educational loan, you need to provide admission proof, co-applicant details, and collateral if the loan amount exceeds INR 7.5 lakh.';
            break;
        case 'am i eligible for a business loan?':
            response = 'SU Bot: Business loans are available for businesses with a minimum turnover of INR 50 lakh. Eligibility criteria also include a stable financial background and a positive credit score.';
            break;
        case 'thank you for your assistance.':
            response = 'SU Bot: You\'re welcome! Is there anything else I can assist you with?';
            break;
        case 'i give you 5 stars for your assistance.':
            response = 'SU Bot: Thank you for your feedback! We\'re glad to assist you.';
            break;
        default:
            response = 'SU Bot: I\'m sorry, I didn\'t understand that. Could you please rephrase?';
            break;
    }

    addChatMessage(response, 'bot');
}
