
![Logo](https://res.cloudinary.com/dpyhkumle/image/upload/v1737684672/423249788_854054440064776_370969774868051925_n_d75cbi.jpg)


# MANUFACTURING GATEWAY

An API Gateway for Manufacturing Management System

## -----------------------------------------------------------------------




## API Reference

#### ADMIN SERVICE
##### Get Accounts from Admin
```http
URL: https://gateway.jjm-manufacturing.com/admin/get-accounts
METHOD: GET
```

##### Get Announcement for HR 4
```http
URL: https://gateway.jjm-manufacturing.com/admin/hr4-announcement
METHOD: GET
```
##### -----------------------------------------------------------------------------------------------------------
#### FINANCE SERVICE
##### Budget Request
```http
URL: https://gateway.jjm-manufacturing.com/finance/budget-request
METHOD: POST
```

##### Order Information For Core 2
```http
URL: https://gateway.jjm-manufacturing.com/finance/order-information
METHOD: POST
```

##### Update Purchase Order Status
```http
URL: https://gateway.jjm-manufacturing.com/finance/update-purchase-order
METHOD: POST
```

##### Get Financial Reports
```http
URL: https://gateway.jjm-manufacturing.com/finance/get-financial-reports
METHOD: Get
```

##### -----------------------------------------------------------------------------------------------------------
#### HR 1 SERVICE
##### Get Employee Records
```http
URL: https://gateway.jjm-manufacturing.com/hr1/get-employee-records
METHOD: GET
```

##### Get Time Tracking
```http
URL: https://gateway.jjm-manufacturing.com/hr1/get-time-tracking
METHOD: GET
```

##### Get Approved Leaves
```http
URL: https://gateway.jjm-manufacturing.com/hr1/get-approved-leaves
METHOD: GET
```

##### -----------------------------------------------------------------------------------------------------------
#### HR 3 SERVICE
##### Get Documents
```http
URL: https://gateway.jjm-manufacturing.com/hr3/get-documents
METHOD: GET
```

##### Get Employee Violation
```http
URL: https://gateway.jjm-manufacturing.com/hr3/get-employee-violation
METHOD: GET
```

##### Update Purchase Order Status
```http
URL: https://gateway.jjm-manufacturing.com/hr3/update-status-purchase-order
METHOD: POST
```

##### Send Grievance for HR 4
```http
URL: https://gateway.jjm-manufacturing.com/hr3/receive-grievance
METHOD: POST
```

##### Get Employee Incentives for HR 2
```http
URL: https://gateway.jjm-manufacturing.com/hr3/get-incentive-employee
METHOD: GET
```

##### -----------------------------------------------------------------------------------------------------------
#### LOGISTIC 2 SERVICE
##### Update Purchase Order for Finance
```http
URL: https://gateway.jjm-manufacturing.com/logistic2/purchase-order-update
METHOD: POST
```

##### Send Inventory Records for Logistic 1
```http
URL: https://gateway.jjm-manufacturing.com/logistic2/receive-inventory-records
METHOD: POST
```

##### -----------------------------------------------------------------------------------------------------------
#### LOGISTIC 1 SERVICE
##### Request Raw Material
```http
URL: https://gateway.jjm-manufacturing.com/logistic1/request-raw-material
METHOD: POST
```

##### Update Budget Request Status
```http
URL: https://gateway.jjm-manufacturing.com/logistic1/update-budget-req-status
METHOD: POST
```

##### Quality Control From Logistic 2
```http
URL: https://gateway.jjm-manufacturing.com/logistic1/qc-inspection
METHOD: POST
```
