
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
#### HR 2 SERVICE
##### Get Employee Records for HR 1
```http
URL: https://gateway.jjm-manufacturing.com/hr2/api/employees
METHOD: GET
```

##### Get Employee Training Records for HR 4
```http
URL: https://gateway.jjm-manufacturing.com/hr2/api/employees
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

##### Send Descripancy Report for Core 2
```http
URL: https://gateway.jjm-manufacturing.com/logistic1/send-discrepancy-report
METHOD: POST
```

##### -----------------------------------------------------------------------------------------------------------
#### CORE 1 SERVICE
##### Get Work Orders
```http
URL: https://gateway.jjm-manufacturing.com/core1/api/workOrders
METHOD: GET
```
##### Send Order Information
```http
URL: https://gateway.jjm-manufacturing.com/core1/api/order
METHOD: POST
```
##### -----------------------------------------------------------------------------------------------------------
#### HR 4 SERVICE

##### Get Grievance to Complaint
```http
URL: https://gateway.jjm-manufacturing.com/hr4/EmComplaint
METHOD: GET
```

##### Update Status for Finance
```http
URL: https://gateway.jjm-manufacturing.com/hr4/api/budget-requests/updateStatusFinance
METHOD: POST
```

##### -----------------------------------------------------------------------------------------------------------
#### CORE 2 SERVICE
##### Send Raw Materials for Logistic 1
```http
URL: https://gateway.jjm-manufacturing.com/core2/send-raw-materials
METHOD: POST
```

##### Update Raw Materials
```http
URL: https://gateway.jjm-manufacturing.com/core2/update-raw-material-status
METHOD: POST
```
