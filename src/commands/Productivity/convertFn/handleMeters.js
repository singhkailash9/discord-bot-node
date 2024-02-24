const handleMeters = (to, value)=> {
    try {
        if (to == "kilometers"){
            return (value/1000);
        } else if (to == "miles"){
            return ((value/1000) * 0.621371);
        }
        return undefined;
    } catch (err) {
        console.error(`handleMeters error: ${err}`);
    }
}

export { handleMeters };