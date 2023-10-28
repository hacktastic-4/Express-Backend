This API provides endpoints for retrieving global data on solar installations, categorized by region, installation type, panel type, type of installation, installer name, cost, capacity, energy produced, maintenance frequency, warranty years, and annual savings.

# Endpoints
```bash
/api/global
```
This endpoint returns the total number of entries for each state.

Example request:
```bash
GET /api/global
```
Example response:

```JSON
{
  "status": true,
  "label": "Count -- Region",
  "response": [
    {
      "region": "Telangana",
      "regioncount": "520"
    },
    {
      "region": "Tamil Nadu",
      "regioncount": "491"
    },
  ]
}
```
Use code with caution. Learn more

/api/global/:category
This endpoint returns the total number of entries for a specific category. The category can be one of the following:

installationtype
paneltype
typeinstallation
installername
Example request:

GET /api/global/installationtype
Example response:

JSON
{
  "status": true,
  "response": [
    {
      "installationtype": "Residential",
      "categorycount": "1756"
    },
    {
      "installationtype": "Industrial",
      "categorycount": "1635"
    },
    {
      "installationtype": "Commercial",
      "categorycount": "1610"
    }
  ]
}
Use code with caution. Learn more

/api/global/:category/:numeric
This endpoint returns the average value of a specific numeric type for a specific category. The numeric type can be one of the following:

cost
capacity
energyproduced
maintainancefrequency
warrantyyears
annualsavings
Example request:

GET /api/global/installationtype/cost
Example response:

JSON
{
  "status": true,
  "response": [
    {
      "installationtype": "Residential",
      "average": "28978.395785876993"
    },
    {
      "installationtype": "Industrial",
      "average": "98838.955351681957"
    },
    {
      "installationtype": "Commercial",
      "average": "65492.826086956522"
    }
  ]
}
Use code with caution. Learn more

Usage
To use the API, simply send a GET request to the appropriate endpoint, with any required parameters. The API will return a JSON response with the requested data.

Example

To retrieve the total number of solar installations in Telangana, you would send the following GET request:

GET /api/global/Telangana
The API would return the following JSON response:

JSON
{
  "status": true,
  "label": "Count -- Region",
  "response": [
    {
      "region": "Telangana",
      "regioncount": "520"
    }
  ]
}
Use code with caution. Learn more

Authentication
The API is currently public and does not require authentication.

Support
If you have any questions or problems using the API, please contact us at [email protected]
