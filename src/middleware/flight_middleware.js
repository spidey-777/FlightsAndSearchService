

const validateCreateFlight = (req, res, next) => {
    if (
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.arrivalAirportId ||
        !req.body.departureAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ) {
        return res.status(400).json({
            data: {},
            err: "Mandatory details are missing",
            message: "Invalid request to create a flight"
        });
    }

    next();
};


module.exports ={ 
    validateCreateFlight
}