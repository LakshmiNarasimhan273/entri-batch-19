const jwt = require("jsonwebtoken");

// main function
const authMiddleware = (allowedRoles = []) => {
    return (req, res, next) => {
        const jwt_key = "EntriFullstackwebdevelopment";
        const authHeader = req.headers.authorization;

        // token validation
        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(400).json({message: "Unauthorized, No token found"});
        }

        const token = authHeader.split(" ")[1];

        // main functionality
        try{
            // token decode
            const decoded = jwt.verify(token, jwt_key);

            req.user = decoded;

            const userRole = decoded.role;

            if(userRole === "admin"){
                return next();
            }

            if(userRole === "user"){
                if(req.method === "GET"){
                    return next();
                }else{
                    return res.status(400).json({message: "Access denied. Users can only perform get method"});
                }
            }
            return res.status(400).json({message: "Access denied, Invalid token"});
        }catch(err){
            console.error(err);            
        }

    }
}

module.exports = authMiddleware;