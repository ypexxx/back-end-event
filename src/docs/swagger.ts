import swaggerAutogen from "swagger-autogen";

const doc = {
    info: {
        version: "v0.0.1",
        title: "Dokumentasi API EVENT",
        description: "Dokumentasi API EVENT",
    },

    servers: [
        {
            url: "http://localhost:3000/api",
            description: "Local Server",
        },
        {
            url: "https://back-end-event-five.vercel.app/api",
            description: "Deploy Server",
        },
    ],

    components: {
        securitySchemes : {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
            },
        },

        shemas: {
           LoginRequest: {
                identifier: "Yuafiq Alfin",
                password: "123456",
           },

           RegisterRequest: {
                fullName: "fullName",
                username: "username",
                email: "email",
                password: "password",
                confirmPassword: "confirmpassword",
           },

           ActivationRequest : {
                code: "abcdef",
           }
        },
    },
};

const outputFile = "./swagger_output.json";
const endpointFiles = ["../routes/api.ts"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointFiles, doc);