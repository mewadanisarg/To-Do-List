exports.getDate = function() {

    const  today = new Date();
    const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
    };
    return day = today.toLocaleDateString("de-DE", options);
    
}
