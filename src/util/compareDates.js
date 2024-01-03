function compareDates(stringDate1,stringDate2){
    const Date1=new Date(stringDate1);
    const Date2=new Date(stringDate2);

    return Date2>Date1;
}

module.exports={
    compareDates
}