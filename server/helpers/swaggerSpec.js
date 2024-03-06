import swaggerJsdoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'E-Commerce-App',
            version: '1.0.0',
        },
        components: {
            schemas: {
                User : {
                    type: Object,
                    properties: {
                        email: {
                            type: String,
                            description: "Email of the user",
                        },
                        password: {
                            type: String,
                            description: "Password of the user"
                        }
                    },
                }
            }
        }
    },
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options)

export default swaggerSpec;