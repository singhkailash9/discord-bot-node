const handleMiles = (to, value)=> {
    try {
        if (to == "kilometers"){
            return (value/0.621371);
        } else if (to == "meters"){
            return ((value/0.621371)*1000);
        }
        return undefined;
    } catch (err) {
        console.error(`handleMiles error: ${err}`);
    }
}

export { handleMiles };