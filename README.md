This API provides endpoints for retrieving global data on solar installations, categorized by region, installation type, panel type, type of installation, installer name, cost, capacity, energy produced, maintenance frequency, warranty years, and annual savings.

# Endpoints
# 1)
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
# 2)
```bash
/api/global/:category
```
This endpoint returns the total number of entries for a specific category. The category can be one of the following:

- installationtype
- paneltype
- typeinstallation
- installername
Example request:
```bash
GET /api/global/installationtype
```
Example response:

```JSON
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
```

# 3)
```bash
/api/global/:category/:numeric
```
This endpoint returns the average value of a specific numeric type for a specific category. The numeric type can be one of the following:

- cost
- capacity
- energyproduced
- maintainancefrequency
- warrantyyears
- annualsavings
- Example request:
```bash
GET /api/global/installationtype/cost
```

Example response:

```JSON
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
```
# 4)
```bash
/api/:region/:category
```
This endpoint returns the total number of entries for a specific region and category. The category can be one of the following:

- installationtype
- paneltype
- typeinstallation
- installername
Example request:
```bash
GET /api/Karnataka/installationtype
```
Example response:

```JSON
{
  "status": true,
  "label": "Count by Region of respective category",
  "response": [
    {
      "installationtype": "Residential",
      "categorycount": "505"
    },
    {
      "installationtype": "Industrial",
      "categorycount": "89"
    },
    {
      "installationtype": "Commercial",
      "categorycount": "108"
    }
  ]
}
```

# 3)
```bash
/api/global/:category/:numeric
```
This endpoint returns the average value of a specific numeric type for a specific category. The numeric type can be one of the following:

- cost
- capacity
- energyproduced
- maintainancefrequency
- warrantyyears
- annualsavings
- Example request:
```bash
GET /api/global/installationtype/cost
```

Example response:

```JSON
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
```
