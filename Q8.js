// Let’s say you are worki=9 for a= eve=t ma=a9eme=t compa=y. As a web developer, you =eed to build a
// cou=tdow= timer for a= upcomi=9 eve=t. You =eed to build a fu=ctio= that calculates the =umber of days
// betwee= the curre=t date a=d the eve=t's start date.

function calculateRemainingDays(eventDate) {
    const currentDate = new Date();
    const eventDateTime = new Date(eventDate);

    const timeDifference = eventDateTime - currentDate;
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysRemaining;
}

const eventDate = '2023-08-31'
console.log(calculateRemainingDays(eventDate));
