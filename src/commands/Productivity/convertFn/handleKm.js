const handleKm = (to, value)=> {
    try {
        if (to == "meters"){
            return (value*1000);
        } else if (to == "miles"){
            return (value * 0.621371);
        }
        return undefined;
    } catch (err) {
        console.error(`handleKm error: ${err}`);
    }
}

export { handleKm };