const messages = [
    {
        msgId: 1,
        msgFrom: 'Md Abdul Halim',
        senderImg: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.2.1203103457.1659020646&semt=sph',
        message: "Hi Ayesha, how are you? I am the guy from your front door"
    },
    {
        msgId: 2,
        msgFrom: 'Ayesha Takia',
        senderImg: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.2.1203103457.1659020646&semt=sph',
        message: "Oh hey Halim. Pleased to see you here."
    },
    {
        msgId: 3,
        msgFrom: 'Md Abdul Halim',
        senderImg: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.2.1203103457.1659020646&semt=sph',
        message: "Yeah, ADDA is a great site. What do you say?"
    },
    {
        msgId: 4,
        msgFrom: 'Ayesha Takia',
        senderImg: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.2.1203103457.1659020646&semt=sph',
        message: 'Exactly. Its really cool. The guy who made is this is a real genius.'
    },
    {
        msgId: 5,
        msgFrom: 'Md Abdul Halim',
        senderImg: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.2.1203103457.1659020646&semt=sph',
        message: "Hi Ayesha, how are you? I am the guy from your front door"
    },
    {
        msgId: 6,
        msgFrom: 'Ayesha Takia',
        senderImg: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.2.1203103457.1659020646&semt=sph',
        message: "Oh hey Halim. Pleased to see you here."
    },
    {
        msgId: 7,
        msgFrom: 'Md Abdul Halim',
        senderImg: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.2.1203103457.1659020646&semt=sph',
        message: "Yeah, ADDA is a great site. What do you say?"
    },
    {
        msgId: 8,
        msgFrom: 'Ayesha Takia',
        senderImg: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.2.1203103457.1659020646&semt=sph',
        message: 'Exactly. Its really cool. The guy who made is this is a real genius.'
    },
    {
        msgId: 9,
        msgFrom: 'Md Abdul Halim',
        senderImg: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.2.1203103457.1659020646&semt=sph',
        message: "Hi Ayesha, how are you? I am the guy from your front door"
    },
    {
        msgId: 10,
        msgFrom: 'Ayesha Takia',
        senderImg: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.2.1203103457.1659020646&semt=sph',
        message: "Oh hey Halim. Pleased to see you here."
    },
    {
        msgId: 11,
        msgFrom: 'Md Abdul Halim',
        senderImg: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.2.1203103457.1659020646&semt=sph',
        message: "Yeah, ADDA is a great site. What do you say?"
    },
    {
        msgId: 12,
        msgFrom: 'Ayesha Takia',
        senderImg: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.2.1203103457.1659020646&semt=sph',
        message: 'Exactly. Its really cool. The guy who made is this is a real genius.'
    },
    {
        msgId: 13,
        msgFrom: 'Md Abdul Halim',
        senderImg: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.2.1203103457.1659020646&semt=sph',
        message: "Hi Ayesha, how are you? I am the guy from your front door"
    },
    {
        msgId: 14,
        msgFrom: 'Ayesha Takia',
        senderImg: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.2.1203103457.1659020646&semt=sph',
        message: "Oh hey Halim. Pleased to see you here."
    },
    {
        msgId: 15,
        msgFrom: 'Md Abdul Halim',
        senderImg: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.2.1203103457.1659020646&semt=sph',
        message: "Yeah, ADDA is a great site. What do you say?"
    },
    {
        msgId: 16,
        msgFrom: 'Ayesha Takia',
        senderImg: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.2.1203103457.1659020646&semt=sph',
        message: 'Exactly. Its really cool. The guy who made is this is a real genius.'
    },
    {
        msgId: 17,
        msgFrom: 'Md Abdul Halim',
        senderImg: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.2.1203103457.1659020646&semt=sph',
        message: "Hi Ayesha, how are you? I am the guy from your front door"
    },
    {
        msgId: 18,
        msgFrom: 'Ayesha Takia',
        senderImg: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.2.1203103457.1659020646&semt=sph',
        message: "Oh hey Halim. Pleased to see you here."
    },
    {
        msgId: 19,
        msgFrom: 'Md Abdul Halim',
        senderImg: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.2.1203103457.1659020646&semt=sph',
        message: "Yeah, ADDA is a great site. What do you say?"
    },
    {
        msgId: 20,
        msgFrom: 'Ayesha Takia',
        senderImg: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.2.1203103457.1659020646&semt=sph',
        message: 'Exactly. Its really cool. The guy who made is this is a real genius.'
    },
    {
        msgId: 21,
        msgFrom: 'Md Abdul Halim',
        senderImg: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.2.1203103457.1659020646&semt=sph',
        message: "Hi Ayesha, how are you? I am the guy from your front door"
    },
    {
        msgId: 22,
        msgFrom: 'Ayesha Takia',
        senderImg: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.2.1203103457.1659020646&semt=sph',
        message: "Oh hey Halim. Pleased to see you here."
    },
    {
        msgId: 23,
        msgFrom: 'Md Abdul Halim',
        senderImg: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.2.1203103457.1659020646&semt=sph',
        message: "Yeah, ADDA is a great site. What do you say?"
    },
    {
        msgId: 24,
        msgFrom: 'Ayesha Takia',
        senderImg: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&uid=R77838462&ga=GA1.2.1203103457.1659020646&semt=sph',
        message: 'Exactly. Its really cool. The guy who made is this is a real genius.'
    }

]