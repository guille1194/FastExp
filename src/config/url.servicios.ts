export const URL_SERVICIOS = "http://18.144.58.236:3030/api/signIn";
//export const URL_IMAGENES = "http://localhost/rest/public/img/productos/";
export const API_GET_PATIENT = "http://18.144.58.236:3030/api/patient/";

export const MOCK_PATIENT = {
    "patients": [
        {
            "_id": "5b0203e3bfe73749674b24dd",
            "updatedAt": "2018-05-20T23:25:23.946Z",
            "isActive": true,
            "patientId": "PAT-9248659488765959",
            "__v": 0,
            "createdAt": "2018-05-20T23:25:23.946Z",
            "medical": {
                "bloodType": "O-",
                "disabilities": [
                    {
                        "name": "Guillermo Navarro Mancillas",
                        "_id": "5b0203e3bfe73749674b24e2",
                        "treatments": [
                            null
                        ]
                    }
                ],
                "allergies": [
                    {
                        "name": "Huevo",
                        "_id": "5b0203e3bfe73749674b24e1",
                        "treatments": [
                            "Vacunas"
                        ]
                    }
                ],
                "chronicDiseases": [
                    {
                        "name": "ninguno",
                        "_id": "5b0203e3bfe73749674b24e0",
                        "treatments": [
                            "ninguno"
                        ]
                    }
                ]
            },
            "personal": {
                "picture": null,
                "birthDate": "1994-11-01T00:00:00.000Z",
                "lastName": "Mancillas",
                "name": "Guillermo",
                "emergencyContacts": [
                    {
                        "name": "Rosario",
                        "lastName": "Mancillas",
                        "_id": "5b0203e3bfe73749674b24df",
                        "phoneNumbers": [
                            6643792995
                        ]
                    }
                ],
                "phoneNumbers": [
                    6643792995
                ],
                "addresses": [
                    {
                        "street": "5802 Bob Bullock Loop Ste C1, EB65810-B",
                        "locality": "Laredo",
                        "county": "Texas",
                        "state": "Texas",
                        "country": "Estados Unidos",
                        "zipCode": "78041",
                        "_id": "5b0203e3bfe73749674b24de"
                    }
                ]
            }
        }
    ]
}